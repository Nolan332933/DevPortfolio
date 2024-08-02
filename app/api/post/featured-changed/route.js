import Post from "@/models/post";
import apiResponse from "@/utlis/apiResponse";

export async function POST(req) {
  const { id, featured } = await req.json();
  console.log(id);

  try {
    const post = await Post.findOneAndUpdate(
      { _id: id },
      { featured: !featured },
      { new: true }
    );

    if (post) {
      return new Response(apiResponse(true, "Post updated successfully", post));
    }

    return new Response(apiResponse(false, "Post not found", []));
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}
