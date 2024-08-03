import { PostProvider } from "@/context/PostContext";
import Index from "@/app/componets/blog/Index";
import React from "react";
import { CategoryProvider } from "@/context/CategoryContext";

const page = () => {
  return (
    <React.Fragment>
      <PostProvider>
        <CategoryProvider>
          <Index />
        </CategoryProvider>
      </PostProvider>
    </React.Fragment>
  );
};

export default page;
