import mongoose, { Schema, model, models } from "mongoose";

const CommentSchema = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    name: {
      type: String,
      require: [true, "User Name is required"],
    },
    content: {
      type: String,
      require: [true, "Content is required"],
    },
  },
  { timestamps: true }
);

const Comment = models.Comment || model("Comment", CommentSchema);
export default Comment;
