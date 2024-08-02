import React from "react";
import { FiEye } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";

const Reaction = ({ handleLikeClick, likesCount, isLiked, views }) => {
  return (
    <React.Fragment>
      <div className="my-2">
        <div className="w-full h-[1px] bg-slate-300"> </div>
        <div className="flex py-3 items-center">
          {/* views  */}
          <div>
            <span>
              <FiEye size={20} className="text-violet-700 inline" />
            </span>
            <span className="text-slate-700"> {views ?? 0} </span>
          </div>
          {/* likes  */}
          <div className="ms-3">
            {!isLiked ? (
              <span onClick={handleLikeClick}>
                <CiHeart
                  size={20}
                  className="text-violet-700 inline cursor-pointer"
                />
              </span>
            ) : (
              <span onClick={handleLikeClick}>
                <GoHeartFill
                  size={20}
                  className="text-violet-700 inline cursor-pointer"
                />
              </span>
            )}
            <span className="text-slate-700"> {likesCount ?? 0} </span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-300"> </div>
      </div>
    </React.Fragment>
  );
};

export default Reaction;
