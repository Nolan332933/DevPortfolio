import { connnectedToDB } from "@/utlis/db";
import apiResponse from "@/utlis/apiResponse";
import Post from "@/models/post";
import { del, put } from "@vercel/blob";
import User from "@/models/user";
import Category from "@/models/category";
import { sanitizeHtml } from "@/app/libs/sanitizedHtml";

export async function GET(req, { params }) {
  const { id } = params;
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get("lang");

  try {
    await connnectedToDB();
    const currentPost = await Post.findOneAndUpdate(
      { _id: id },
      { $inc: { views: 1 } },
      { new: true }
    )
      .populate("author")
      .populate("category_id");

    if (!currentPost) {
      return new Response(apiResponse(false, "Post not found"), {
        status: 404,
      });
    }

    const [prevPost, nextPost] = await Promise.all([
      Post.findOne({
        createdAt: { $lt: currentPost.createdAt },
        category_id: currentPost.category_id,
        lang: lang,
      })
        .select("_id")
        .sort({ createdAt: -1 })
        .exec(),

      Post.findOne({
        createdAt: { $gt: currentPost.createdAt },
        category_id: currentPost.category_id,
        lang: lang,
      })
        .select("_id")
        .sort({ createdAt: 1 })
        .exec(),
    ]);

    return new Response(
      apiResponse(true, "Post detail", {
        currentPost: {
          ...currentPost.toObject(),
          body: sanitizeHtml(currentPost.body),
        },
        prevPost: prevPost ? prevPost._id : null,
        nextPost: nextPost ? nextPost._id : null,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message),
      {
        status: 500,
      }
    );
  }
}

// update post
export async function PUT(req, { params }) {
  try {
    await connnectedToDB();
    const form = await req.formData();
    const title = form.get("title");
    const currentImages = JSON.parse(form.get("currentImages"));
    const body = form.get("body");
    const category_id = form.get("categoryId");
    const lang = form.get("lang");
    const images = form.getAll("images");
    const tags = JSON.parse(form.get("tags"));
    const links = form.get("links");
    const id = params.id;
    console.log(currentImages);
    // upload images to vercel blob
    let post_images = [];
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
          console.log(error);
          return new Response(
            apiResponse(false, "Error Uploading File", [], error.message)
          );
        }
      }
    }

    try {
      // deleteImages
      if (currentImages.length > 0) {
        currentImages.map((file) =>
          del(file, {
            token: process.env.BLOB_READ_WRITE_TOKEN,
          })
        );
      }
    } catch (error) {
      return new Response(
        apiResponse(false, "Error Deleting Files", [], error.message)
      );
    }

    const post = await Post.findOneAndUpdate(
      { _id: id },
      {
        title,
        body,
        lang,
        post_images: post_images.length > 0 ? post_images : currentImages,
        category_id,
        tags,
      },
      { new: true }
    )
      .populate("author")
      .populate("category_id");
    await post.save();
    return new Response(apiResponse(true, "Post updated successfully", post));
  } catch (error) {
    console.log(error.message);
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message)
    );
  }
}

// delete post
export async function DELETE(req, { params }) {
  try {
    await connnectedToDB();
    const id = params.id;
    const post = await Post.findOneAndDelete({ _id: id });
    if (post.post_images.length > 0) {
      post.post_images.map((item) => {
        del(item, {
          token: process.env.BLOB_READ_WRITE_TOKEN,
        });
      });
    }
    return new Response(apiResponse(true, "Post deleted successfully", []));
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong", null, error.message)
    );
  }
}
