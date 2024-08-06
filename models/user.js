import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "user name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    profile_image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);
export default User;
