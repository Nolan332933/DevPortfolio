import Post from "@/models/post";
import apiResponse from "@/utlis/apiResponse";

export async function POST(req) {
  const { id, status } = await req.json();
  try {
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );
    return new Response(apiResponse(true, "Status Changed Successfully", post));
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}
