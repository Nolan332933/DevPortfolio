import { Avatar } from "flowbite-react";
import React from "react";

const CommentLoading = () => {
  return (
    <div className="border border-slate-700 rounded-md p-3 relative animate-pulse mt-3">
      <div className="absolute top-[5px] left-[-20px]">
        <Avatar rounded size="sm" bordered color="gray" />
      </div>
      {/* header  */}
      <div className="flex justify-between">
        <div className="h-2.5 ms-2 bg-gray-400 w-52 mt-2"></div>
        <div className="h-2.5 ms-2 bg-gray-400 w-32 mt-2"></div>
      </div>
      <div className="h-1.5 ms-2 bg-gray-400 w-full mt-2"></div>
      <div className="h-1.5 ms-2 bg-gray-400 w-full mt-2"></div>
      <div className="h-1.5 ms-2 bg-gray-400 w-32 mt-2"></div>
    </div>
  );
};

export default CommentLoading;
