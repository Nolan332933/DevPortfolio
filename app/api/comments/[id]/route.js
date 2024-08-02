import Comment from "@/models/comment";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  try {
    let query = {};

    if (postId) {
      query.postId = postId;
    }
    await connnectedToDB();
    const comments = await Comment.find(query).sort({ _id: -1 });
    const data = {
      comments: comments,
      totalPages: await Comment.countDocuments(),
    };
    return new Response(apiResponse(true, "Comments", data));
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}

export async function POST(req) {
  const { name, content, postId } = await req.json();

  // validate for postId and comment
  if (!postId) {
    return new Response(apiResponse(false, "PostId Field is required", []), {
      status: 200,
    });
  }

  if (!content) {
    return new Response(apiResponse(false, "Comment Field is required", []), {
      status: 200,
    });
  }

  try {
    const comment = new Comment({ postId, name, content });
    await comment.save();

    return new Response(
      apiResponse(true, "Comment created successfully", comment)
    );
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}
