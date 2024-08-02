"use client";
import { Badge, Breadcrumb } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import RelatedPost from "./RelatedPost";
import Link from "next/link";
import ReactAction from "./Reaction";
import { PostContext } from "@/context/PostContext";
import { useParams } from "next/navigation";
import Comments from "./comment/Comments";
import PostDetailSkeleton from "../skeleton/BlogDetailSkeleton";
import parse from "html-react-parser";
import SocialShare from "./SocialShare";
import { differForHumans, getLanguageData } from "@/app/helper/helper";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

const BlogDetail = () => {
  const { id, lang } = useParams();
  const language = getLanguageData(lang);
  const { state, getOnePost, reactionAdded } = useContext(PostContext);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  // date
  const postedAt = differForHumans(state.post.currentPost?.createdAt);

  // body
  const textBody = state.post.currentPost?.body;

  const handleLikeClick = () => {
    if (isLiked) return;
    reactionAdded(state.post.currentPost._id);
    if (state.success) {
      // do something
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  useEffect(() => {
    if (state.post.currentPost && state.post.currentPost.likes !== undefined) {
      setLikesCount(state.post.currentPost.likes);
    }
  }, [state.post.currentPost]);

  useEffect(() => {
    getOnePost(id, lang);
  }, [id]);

  return (
    <div>
      <Toaster />
      {/* breadcumb  */}
      <div className="fixed top-0 w-full z-10">
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
        >
          <Breadcrumb.Item icon={HiHome}>
            <Link href="/"> {language.blog.navbar.home} </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item as="div">
            <Link href={`/blog/${lang}`}>
              {language.blog.text} ({language.name})
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            {state.post.currentPost?.category_id?.name ??
              language.blog.category}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* blog details  */}
      <div className="flex justify-center items-center mt-10 mb-5">
        <div className="w-full md:w-[600px] mx-10 md:mx-0">
          {JSON.stringify(state.post) !== "{}" ? (
            <>
              <div className="my-10">
                <h1 className="text-slate-800 text-3xl font-bold leading-normal">
                  {state.post.currentPost?.title}
                </h1>
                <div className="flex items-center mt-5">
                  {/* author  */}
                  <small className="text-slate-500 me-5">
                    By
                    <span className="text-violet-700 ms-2">
                      <Link href="/about">
                        {state.post.currentPost?.author?.name}
                      </Link>
                    </span>
                    . <span> {postedAt} || </span>
                  </small>
                  {/* tags  */}
                  <div className="me-3">
                    {state.post.currentPost?.tags?.map((item) => (
                      <Badge color="purple" className="inline me-2" key={item}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* views and likes  */}
                <ReactAction
                  handleLikeClick={handleLikeClick}
                  isLiked={isLiked}
                  likesCount={likesCount}
                  views={state.post.currentPost?.views}
                />
                {/* post image  */}
                {state.post.currentPost?.post_images &&
                state.post.currentPost?.post_images.length > 0 ? (
                  <Image
                    src={
                      state.post.currentPost?.post_images
                        ? state.post.currentPost?.post_images[0]
                        : "https://placehold.co/600x400?font=roboto"
                    }
                    alt="post-detail-image"
                    placeholder="blur"
                    width={700} // Define the aspect ratio (example: 700 / 475)
                    height={475}
                    className="my-3"
                    blurDataURL="https://placehold.co/600x400?font=roboto"
                  />
                ) : (
                  <Image
                    src="https://placehold.co/600x400?font=roboto"
                    alt="post-detail-image"
                    width={700} // Define the aspect ratio (example: 700 / 475)
                    height={475}
                    className="my-3"
                  />
                )}

                {/* post body  */}
                <section className="my-5 text-slate-500 leading-10">
                  {parse(textBody)}
                </section>
              </div>

              {/* Socail Share  */}
              <SocialShare />

              {/* next and previous button  */}
              <div className="flex justify-between mb-5">
                <Link
                  href={
                    state.post.prevPost !== null
                      ? `/blog/${state.post?.prevPost}`
                      : "#"
                  }
                  className="text-violet-700"
                >
                  {language.previous}
                </Link>
                <Link
                  href={
                    state.post.nextPost !== null
                      ? `/blog/${state.post?.nextPost}`
                      : "#"
                  }
                  className="text-violet-700"
                >
                  {language.next}
                </Link>
              </div>

              {/* comments  */}
              <Comments postId={state.post.currentPost?._id} lang={language} />

              {/* related post  */}
              <RelatedPost
                category={state.post.currentPost?.category_id}
                currentPostId={state.post.currentPost?._id}
                lang={language}
              />
            </>
          ) : (
            <PostDetailSkeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
