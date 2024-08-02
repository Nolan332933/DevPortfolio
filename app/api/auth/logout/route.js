import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("token");
  cookies().delete("userInfo");
  return new Response(
    JSON.stringify({
      success: true,
      message: "Logout Successfully",
      error: null,
    }),
    {
      status: 200,
    }
  );
}
