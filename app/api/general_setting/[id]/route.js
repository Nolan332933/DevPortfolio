import GeneralSetting from "@/models/general-setting";
import apiResponse from "@/utlis/apiResponse";
import { connnectedToDB } from "@/utlis/db";
import { put } from "@vercel/blob";

export async function GET(req) {
  const res = await req.json();
  try {
    await connnectedToDB();
    const gs = await GeneralSetting.find({ name: res.name });
    if (!gs) {
      return new Response(apiResponse(false, "General Setting Not found"));
    }

    return new Response(apiResponse(true, "General Setting", gs));
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong! Server Error", null, error.message)
    );
  }
}

export async function PUT(req, { params }) {
  const form = await req.formData();
  const type = form.get("type");
  const value = form.get("value");
  const id = params.id;
  try {
    await connnectedToDB();
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

    const gs = await GeneralSetting.findByIdAndUpdate(
      { _id: id },
      {
        value: filename != "" ? filename : value,
      },
      { new: true }
    );

    if (!gs) {
      return new Response(apiResponse(false, "General Setting Not Found"));
    }

    await gs.save();

    return new Response(
      apiResponse(true, "General Setting Updated Successfully", gs)
    );
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong! Server Error", null, error.message)
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    await connnectedToDB();
    const id = params.id;
    const gs = await GeneralSetting.findByIdAndDelete(id);

    if (!gs) {
      return new Response(apiResponse(false, "General Setting Not Found"));
    }
    return new Response(
      apiResponse(true, "General Setting Deleted Successfully")
    );
  } catch (error) {
    return new Response(
      apiResponse(false, "Something Wrong! Server Error", null, error.message)
    );
  }
}
