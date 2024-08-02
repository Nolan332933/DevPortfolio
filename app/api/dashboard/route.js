import Category from "@/models/category";
import Comment from "@/models/comment";
import Post from "@/models/post";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";

export async function GET() {
  try {
    await connnectedToDB();
    const postCount = await Post.countDocuments();
    const categoryCount = await Category.countDocuments();
    const commentCount = await Comment.countDocuments();
    const data = {
      postCount,
      categoryCount,
      commentCount,
    };
    return new Response(apiResponse(true, "Dashboard Data", data));
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong! Server Error", null, error.message)
    );
  }
}
