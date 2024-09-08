import React from "react";

const ProjectDetailSkeleton = () => {
  return (
    <div className="py-10">
      <div role="status" className="animate-pulse mx-10">
        {/* project detail header  */}
        <div className="h-[200px] bg-gray-200 rounded-md dark:bg-gray-700 w-full flex flex-col items-center justify-center">
          <div className="h-20 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-[300px]"></div>
          <div className="h-2.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-52 mt-2"></div>
        </div>
        <div className="flex flex-wrap mt-20 mx-3 md:mx-10">
          <div className="w-full lg:w-2/3">
            <div className="me-5">
              {/* project main image  */}
              <div className="h-[300px] bg-gray-200 rounded-md dark:bg-gray-700 w-full md:w-[603px]"></div>
              {/* project info */}
              <div className="h-3.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-52 mt-2"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-2/3 mt-2"></div>

              {/* challenge of projects */}
              <div className="mt-10">
                <div className="h-3.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-52 mt-2"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-2/3 mt-2"></div>
              </div>
            </div>
            {/* project images  */}
            <div className="flex mt-10">
              <div className="w-1/3">
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-72 dark:bg-gray-700">
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
              </div>
              <div className="w-1/5"></div>
              <div className="w-1/3">
                <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-72 dark:bg-gray-700">
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
              </div>
            </div>

            {/* project description */}
            <div className="mt-10">
              {[...Array(5)].map((_, index) => (
                <div class="h-2.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-full mt-2"></div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-5 md:mt-0">
            {/* project information  */}
            <div className="h-[400px] bg-gray-200 rounded-md dark:bg-gray-700 p-5">
              {/* header  */}
              <div className="h-3.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-52 mt-2"></div>
              {/* info  */}
              {[...Array(5)].map((_, index) => (
                <div className="mt-3 flex items-center justify-center">
                  <div className="w-1/3">
                    <div className="h-10 ms-2 bg-gray-200 rounded-full dark:bg-gray-600 w-10 mt-2"></div>
                  </div>
                  <div className="w-2/3">
                    <div className="h-3.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-50 mt-2"></div>
                    <div className="h-2.5 ms-2 bg-gray-200 rounded-md dark:bg-gray-600 w-50 mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSkeleton;
