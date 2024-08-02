"use client";
import React, { useContext, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { CommentContext } from "@/context/CommentContext";
import CommentLoading from "../../skeleton/CommentLoading";
import { v4 as uuidv4 } from "uuid";

const Comments = ({ postId, lang }) => {
  const [openComments, setOpenComments] = useState(false);
  const [text, setText] = useState(lang.seeAllComments);
  const { state, getPostComments } = useContext(CommentContext);

  const handleTextChange = () => {
    setOpenComments(!openComments);
    if (!openComments) {
      setText(lang.hideComments);
    } else {
      setText(lang.seeAllComments);
    }
  };

  useEffect(() => {
    getPostComments(postId);
  }, [postId]);

  return (
    <React.Fragment>
      <h2 className="cursor-pointer text-blue-800" onClick={handleTextChange}>
        {text}
      </h2>
      {openComments && (
        <div className="rounded-md border border-violet-700 px-10 py-3 my-5">
          {/* total comments  */}
          <h3 className="text-slate-700">
            <span className="text-xl text-violet-700 font-bold me-2">
              {state.postComments.length ?? 0}
            </span>
            {lang.comments}
          </h3>

          {/* comment form  */}
          <CommentForm />

          {/* Comments  */}
          {!state.loading
            ? state.postComments.length > 0 &&
              state.postComments.map((item) => (
                <Comment key={item._id} item={item} />
              ))
            : [...Array(3)].map((_, index) => (
                <CommentLoading key={uuidv4()} />
              ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Comments;
