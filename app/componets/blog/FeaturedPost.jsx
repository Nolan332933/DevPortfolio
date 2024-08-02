"use client";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";
import { useParams } from "next/navigation";
import NoPost from "./NoPost";
import { v4 as uuidv4 } from "uuid";

const FeaturedPost = ({ lang }) => {
  const { state, getFeaturedPosts } = useContext(PostContext);
  const params = useParams();

  useEffect(() => {
    getFeaturedPosts(params.lang);
  }, [params.lang]);

  return (
    <div className="mb-10">
      <h1 className="text-2xl font-bold text-slate-800">
        {lang.blog.featuredPosts}
      </h1>
      <div className="flex my-10">
        {state.featuredLoading ? (
          [...Array(3)].map(() => (
            <div className="md:w-1/3 w-full" key={uuidv4()}>
              <BlogSkeleton />
            </div>
          ))
        ) : state.featuredPosts.length > 0 ? (
          state.featuredPosts.map((item) => (
            <div className="md:w-1/3 w-full" key={item?._id}>
              <Blog item={item} />
            </div>
          ))
        ) : (
          <NoPost text={lang.blog.noPost} />
        )}
      </div>
    </div>
  );
};

export default FeaturedPost;
