import User from "@/models/user";
import Category from "@/models/category";
import Post from "@/models/post";
import apiResponse from "@/utils/apiResponse";
import { connnectedToDB } from "@/utils/db";
import { getUserInfo } from "@/utils/getUserInfo";
import { put } from "@vercel/blob";
import { sanitizeHtml } from "@/app/libs/sanitizedHtml";

// get all posts
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const perpage = searchParams.get("perpage") || 10;
  const title = searchParams.get("title");
  const tag = searchParams.get("tag");
  const categoryId = searchParams.get("categoryId");
  const createdAt = searchParams.get("createdAt");
  const offset = (page - 1) * perpage;
  const lang = searchParams.get("lang");
  const status = searchParams.get("status");
  const featured = searchParams.get("featured");
  const currentPostId = searchParams.get("currentPostId");

  const query = {};

  if (status) {
    query.status = status;
  }

  if (currentPostId) {
    query._id = { $ne: currentPostId };
  }

  if (lang) {
    query.lang = lang;
  }

  if (featured) {
    query.featured = featured;
  }

  if (title) {
    query.title = { $regex: title, $options: "i" };
  }

  if (createdAt) {
    const isoDateString = `${createdAt}T00:00:00.000Z`;
    query.createdAt = {
      $gte: isoDateString,
      $lt: new Date(
        new Date(isoDateString).getTime() + 24 * 60 * 60 * 1000
      ).toISOString(),
    };
  }

  if (tag) {
    const tagsRegex = new RegExp(tag, "i");
    query.tags = tagsRegex;
  }

  if (categoryId) {
    query.category_id = categoryId;
  }

  try {
    await connnectedToDB();
    const posts = await Post.find(query)
      .populate("author")
      .populate("category_id")
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(perpage);

    const transformedPosts = posts.map((post) => {
      const plainPost = post.toObject();
      plainPost.body = sanitizeHtml(plainPost.body);
      return plainPost;
    });

    const data = {
      posts: transformedPosts,
      totalPages: await Post.countDocuments(),
    };
    return new Response(apiResponse(true, "Post all", data));
  } catch (err) {
    return new Response(
      apiResponse(false, "Something Wrong", null, err.message)
    );
  }
}

// create post
export async function POST(req) {
  try {
    await connnectedToDB();
    const form = await req.formData();
    const title = form.get("title");
    const body = form.get("body");
    const category_id = form.get("category_id");
    const lang = form.get("lang");
    const images = form.getAll("images");
    const tags = JSON.parse(form.get("tags"));
    const links = form.get("links");

    if (!title || !body || !category_id) {
      return new Response(apiResponse(false, "All fields are required"));
    }

    // store post images into vercel blog
    let post_images = [links];
    if (images) {
      for (const file of images) {
        try {
          const fileBuffer = Buffer.from(await file.arrayBuffer());
          const blob = await put(file.name, fileBuffer, {
            access: "public",
            token: process.env.BLOB_READ_WRITE_TOKEN,
          });
          post_images.push(blob.url);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    }

    // store in database
    const post = new Post({
      title,
      body,
      category_id,
      author: getUserInfo("_id"),
      tags,
      post_images,
      lang,
    });
    await post.save();
    return new Response(apiResponse(true, "Post created successfully", post), {
      status: 200,
    });
  } catch (error) {
    console.log(error.message);
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message)
    );
  }
}
