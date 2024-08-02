"use client";
import React, { useContext, useEffect } from "react";
import Blog from "./Blog";
import { PostContext } from "@/context/PostContext";
import BlogSkeleton from "../skeleton/BlogSkeleton";
import { useParams } from "next/navigation";
import NoPost from "./NoPost";
import { v4 as uuidv4 } from "uuid";

const Blogs = ({ lang }) => {
  const { state, getAllPosts } = useContext(PostContext);
  const params = useParams();

  useEffect(() => {
    getAllPosts({ lang: params.lang, featured: false, status: true });
  }, [params.lang]);

  return (
    <div className="bg-slate-200">
      <div className="py-10">
        <h1 className="text-2xl font-bold text-slate-800">
          {lang.blog.allPosts}
        </h1>
        <div className="flex flex-wrap my-10">
          {/* blog component  */}
          {state.loading ? (
            [...Array(6)].map(() => (
              <div className="md:w-1/3 w-full" key={uuidv4()}>
                <BlogSkeleton />
              </div>
            ))
          ) : state.posts.data.length > 0 ? (
            state.posts.data.slice(0, 6).map((item) => (
              <div className="md:w-1/3 w-full" key={item._id}>
                <Blog item={item} lang={lang} />
              </div>
            ))
          ) : (
            <NoPost text={lang.blog.noPost} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
