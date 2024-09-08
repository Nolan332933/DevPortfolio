import Category from "@/models/category";
import apiResponse from "@/utils/apiResponse";
import { connnectedToDB } from "@/utils/db";

export async function GET() {
  await connnectedToDB();
  try {
    const categories = await Category.find();
    const data = {
      categories,
      totalPages: await Category.countDocuments(),
    };
    return new Response(apiResponse(true, "All categories", data));
  } catch (error) {
    return new Response(apiResponse(false, error.message, []));
  }
}

export async function POST(req) {
  const response = await req.json();
  const { name } = response;
  try {
    await connnectedToDB();
    const category = new Category({ name });
    await category.save();

    return new Response(
      apiResponse(true, "Category created successfully", category)
    );
  } catch (error) {
    console.log(error);
    return new Response(apiResponse(false, error.message, []));
  }
}
