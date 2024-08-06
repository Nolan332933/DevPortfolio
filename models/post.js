import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    body: {
      type: String,
      require: [true, "body is required"],
    },
    lang: {
      type: String,
      default: "my",
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    post_images: {
      type: [String],
    },
    tags: {
      type: [String],
    },
    status: {
      type: Boolean,
      default: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Post = models.Post || model("Post", PostSchema);
export default Post;
