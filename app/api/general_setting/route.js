import GeneralSetting from "@/models/general-setting";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";
import { put } from "@vercel/blob";

export async function GET() {
  try {
    await connnectedToDB();
    const gs = await GeneralSetting.find();
    return new Response(apiResponse(true, "General Settings", gs));
  } catch (error) {
    return new Response(
      apiResponse(false, "Server Error! Something Wrong", null, error.message)
    );
  }
}

export async function POST(req) {
  try {
    const form = await req.formData();
    const type = form.get("type");
    const name = form.get("name");
    const value = form.get("value");

    if (!type || !name) {
      return new Response(apiResponse(false, "All fields are required"));
    }

    let filename = "";
    if (type == "file") {
      const file = form.get("file");
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      const blob = await put(file.name, fileBuffer, {
        access: "public",
        token: process.env.BLOB_READ_WRITE_TOKEN,
      });
      filename = blob.url;
    }

    const gs = new GeneralSetting({
      name: name,
      value: filename != "" ? filename : value,
      type: type,
    });
    await gs.save();
    return new Response(
      apiResponse(true, "General Setting Created Successfully", gs)
    );
  } catch (error) {
    return new Response(
      apiResponse(false, "Server Error! Something Wrong", null, error.message)
    );
  }
}
