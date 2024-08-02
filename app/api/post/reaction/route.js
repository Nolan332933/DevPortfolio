import { sanitizeHtml } from "@/app/libs/sanitizedHtml";
import Post from "@/models/post";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";

export async function GET() {}

export async function POST(req) {
  const { id } = await req.json();

  try {
    await connnectedToDB();
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { $inc: { likes: 1 } },
      {
        new: true,
      }
    )
      .populate("author")
      .populate("category_id");
    const postBody = sanitizeHtml(post.body);

    return new Response(
      apiResponse(true, "Reaction added successfully", {
        ...post.toObject(),
        body: postBody,
      })
    );
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}
