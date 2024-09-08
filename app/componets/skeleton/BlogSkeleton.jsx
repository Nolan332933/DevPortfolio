import React from "react";

const BlogSkeleton = () => {
  return (
    <React.Fragment>
      <div className="mx-0 md:mx-2 my-10 animate-pulse">
        {/* title  */}
        <div className="h-6 bg-gray-300"></div>

        {/* image  */}
        <div className="flex items-center justify-center w-full h-[200px] bg-gray-300 rounded dark:bg-gray-700 my-2">
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

        {/* author and date  */}
        <div className="h-2.5 bg-gray-300"></div>

        {/* body  */}
        <div className="h-3.5 bg-gray-300 mt-3"></div>
      </div>
    </React.Fragment>
  );
};

export default BlogSkeleton;
