import { PostProvider } from "@/context/PostContext";
import React from "react";
import PostAll from "./PostAll";
import { CategoryProvider } from "@/context/CategoryContext";

const page = () => {
  return (
    <PostProvider>
      <CategoryProvider>
        <PostAll />
      </CategoryProvider>
    </PostProvider>
  );
};

export default page;
