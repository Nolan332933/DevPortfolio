import User from "@/models/user";
import { connnectedToDB } from "@/utlis/db";
import { hashPassword } from "@/utlis/hassPassword";

export async function GET() {
  await connnectedToDB();
  try {
    const users = await User.find();
    return Response.json(users);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req) {
  try {
    await connnectedToDB();
    const response = await req.json();
    const { name, email, password } = response;
    if (name == "" || email == "" || password == "") {
      return new Response("All fields are required", {
        status: 200,
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new User({
      name,
      email,
      password: hashedPassword,
      profile_image: null,
    });
    await user.save();
    return new Response(
      JSON.stringify({
        name,
        email,
        password: hashedPassword,
        profile_image: null,
      }),
      {
        status: 201,
      }
    );
  } catch (err) {
    return new Response(err.message, {
      status: 500,
    });
  }
}
