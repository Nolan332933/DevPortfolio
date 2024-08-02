import React from "react";

const DashboardLoading = () => {
  return (
    <div className="flex justify-between mt-5 gap-2">
      {Array.from({ length: 4 }, (_, index) => (
        <div className="p-3 h-32 shadow-md shadow-slate-500 w-1/4" key={index}>
          <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
      ))}
    </div>
  );
};

export default DashboardLoading;
