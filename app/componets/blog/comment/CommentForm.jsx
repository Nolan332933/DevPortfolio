import { Button, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import CommentModal from "./CommentModal";
import { PostContext } from "@/context/PostContext";
import { CommentContext } from "@/context/CommentContext";
import toast from "react-hot-toast";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("* comment is required");
  const [openModal, setOpenModal] = useState(false);
  const { state: postState } = useContext(PostContext);
  const {
    state: commentState,
    getPostComments,
    createComment,
  } = useContext(CommentContext);

  const handleSubmit = () => {
    createComment({
      content: comment,
      name,
      postId: postState.post.currentPost?._id,
    });
    if (commentState.success) {
      setOpenModal(false);
      setComment("");
      setName("");
      toast.success("Comment created successfully");
    }
  };

  const handleComment = () => {
    if (!comment) {
      setError("* comment is required");
      return;
    }
    setOpenModal(true);
    setError("");
  };

  const handleCommentChange = (e) => {
    if (comment.length < 0) {
      setError("* comment is required");
    } else {
      setError("");
    }
    setComment(e.target.value);
  };

  useEffect(() => {
    getPostComments(postState.post?._id);
  }, [postState.post?._id]);

  return (
    <React.Fragment>
      <CommentModal
        handleSubmit={handleSubmit}
        openModal={openModal}
        setOpenModal={setOpenModal}
        name={name}
        setName={setName}
      />
      {/* errors  */}
      {error && <small className="text-red-700 my-2"> {error} </small>}
      <div className="flex justify-between items-center my-3">
        <TextInput
          required={true}
          className="w-full me-2"
          placeholder="Your feedback here"
          type="text"
          value={comment}
          onChange={(e) => handleCommentChange(e)}
        />
        <Button type="button" onClick={handleComment} color="purple">
          <IoMdSend />
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CommentForm;
