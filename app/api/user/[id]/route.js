import User from "@/models/user";
import { connnectedToDB } from "@/utlis/db";

export async function GET(req, { params }) {
  const id = params.id;
  try {
    await connnectedToDB();
    const user = await User.find({
      _id: id,
    });

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (err) {
    return new Response(err.message, {
      status: 500,
    });
  }
}
