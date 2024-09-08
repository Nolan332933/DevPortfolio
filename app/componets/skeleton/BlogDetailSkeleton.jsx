import React from "react";
import BlogSkeleton from "./BlogSkeleton";
import { v4 as uuidv4 } from "uuid";

const BlogDetailSkeleton = () => {
  return (
    <div className="mx-0 md:mx-2 my-10 animate-pulse" style={{ zIndex: -1 }}>
      {/* title  */}
      <div className="h-6 bg-gray-300 w-full"></div>
      {/* author, date and tags  */}
      <div className="flex my-2">
        <div className="h-6 bg-gray-300 w-32 me-2"></div>
        <div className="h-6 bg-gray-300 w-12 me-2"> </div>
        <div className="h-6 bg-gray-300 w-16 me-2"> </div>
        <div className="h-6 bg-gray-300 w-12 me-2"> </div>
      </div>
      {/* likes and views  */}
      <div className="my-2">
        <div className="w-full h-[1px] bg-slate-300"> </div>
        <div className="flex">
          <div className="h-6 bg-gray-300 w-32 me-2 my-2"> </div>
          <div className="h-6 bg-gray-300 w-32 me-2 my-2"> </div>
        </div>
        <div className="w-full h-[1px] bg-slate-300"> </div>
      </div>
      {/* post image  */}
      <div className="flex items-center justify-center w-full h-[400px] bg-gray-300 rounded dark:bg-gray-700 my-2">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      {/* post body  */}
      <div className="my-2">
        {[...Array(20)].map(() => (
          <div
            className="h-2.5 bg-gray-300 w-full me-2 my-2"
            key={uuidv4()}
          ></div>
        ))}
        <div className="h-2.5 bg-gray-300 w-72 me-2 my-2"> </div>
      </div>
      {/* next and previous button  */}
      <div className="flex justify-between my-5">
        <div className="h-8 bg-gray-300 w-32"> </div>
        <div className="h-8 bg-gray-300 w-32"> </div>
      </div>
      {/* comments  */}
      <div className="my-3">
        <div className="h-4 bg-gray-300 w-32"> </div>
      </div>
      {/* related posts  */}

      <div className="my-3">
        <div className="h-6 bg-gray-300 w-52"> </div>
        <div className="flex flex-wrap">
          {[...Array(4)].map(() => (
            <div className="md:w-1/2 w-full" key={uuidv4()}>
              <BlogSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;
