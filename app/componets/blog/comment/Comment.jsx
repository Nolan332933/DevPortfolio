import { formatDistanceToNow } from "date-fns";
import { Avatar } from "flowbite-react";
import React from "react";

const Comment = ({ item }) => {
  const mongoDate = item?.createdAt ? new Date(item.createdAt) : null;
  let postedAt;
  if (mongoDate) {
    postedAt = formatDistanceToNow(mongoDate, {
      addSuffix: true,
    });
  }
  return (
    <div className="relative border border-slate-500 py-3 px-5 rounded-md my-2">
      {/* profile avatar  */}
      <div className="absolute top-[5px] left-[-20px]">
        <Avatar
          rounded
          placeholderInitials={item?.name.slice(0, 1).toUpperCase()}
          size="sm"
          bordered
          color="gray"
        />
      </div>
      {/* header  */}
      <div className="flex justify-between">
        <p className="text-sm text-slate-900 font-bold"> {item.name} </p>
        <small className="text-slate-600"> {postedAt} </small>
      </div>
      <small className="text-slate-700">{item.content}</small>
    </div>
  );
};

export default Comment;
