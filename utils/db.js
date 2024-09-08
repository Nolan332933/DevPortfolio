import mongoose from "mongoose";

export const connnectedToDB = async () => {
  const isConnected = false;
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Db already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};
