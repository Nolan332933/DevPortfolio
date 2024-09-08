import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="my-10 animate-pulse">
      {/* title  */}
      <div className="flex justify-center">
        <div className="h-3.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-72"></div>
      </div>

      {/* projects  */}
      <div className="flex flex-wrap justify-between mt-10 mx-10 md:mx-20">
        {[...Array(9)].map((_, index) => (
          <div className="w-full md:w-1/3">
            <div className="me-3">
              <div className="h-[200px] bg-gray-200 rounded-md dark:bg-gray-600 w-full mt-2"></div>
            </div>
          </div>
        ))}
        {/* pagination */}
        <div className="flex justify-around mt-5">
          <div className="w-3/4">
            <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-52"></div>
          </div>
          <div className="w-1/4">
            <div className="flex">
              <div className="h-10 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-52 me-3"></div>
              <div className="h-10 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-52"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
