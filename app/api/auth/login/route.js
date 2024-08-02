import User from "@/models/user";
import { connnectedToDB } from "@/utlis/db";
import { comparePassword } from "@/utlis/hassPassword";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import apiResponse from "@/utlis/apiResponse";

export async function POST(req) {
  try {
    await connnectedToDB();
    const response = await req.json();
    const { email, password } = response;

    if (!email || !password) {
      return new Response("All fields are required", {
        status: 200,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return new Response(apiResponse(false, "User not found"), {
        status: 200,
      });
    }

    const isMatch = await comparePassword(password, user.password);
    const validUser = { ...user._doc };
    delete validUser.password;

    if (isMatch) {
      const token = jwt.sign(validUser, process.env.SECRECT_KEY);
      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
      });
      cookies().set({
        name: "userInfo",
        value: JSON.stringify(validUser),
        httpOnly: true,
      });
    } else {
      return new Response(apiResponse(false, "Incorrect Password"), {
        status: 200,
      });
    }
    return new Response(apiResponse(true, "Login Successfully", validUser), {
      status: 200,
    });
  } catch (error) {
    return new Response(apiResponse(false, "Something Wrong", error.message), {
      status: 500,
    });
  }
}
