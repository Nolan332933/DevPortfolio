"use client";
import { PostProvider } from "@/context/PostContext";
import PostDetail from "./PostDetail";

const page = () => {
  return (
    <PostProvider>
      <PostDetail />
    </PostProvider>
  );
};

export default page;
