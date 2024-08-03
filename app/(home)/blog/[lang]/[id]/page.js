import BlogDetail from "@/app/componets/blog/BlogDetail";
import { sanitizeHtml } from "@/app/libs/sanitizedHtml";
import { CommentProvider } from "@/context/CommentContext";
import { PostProvider } from "@/context/PostContext";
import { Noto_Serif_Myanmar } from "next/font/google";
import parse from "html-react-parser";

// const myanmar = Noto_Serif_Myanmar({
//   weight: "400",
//   subsets: ["myanmar"],
// });

export async function generateMetadata({ params }) {
  const url = `${process.env.APP_URL}/api/post/${params.id}`;
  const res = await fetch(url);
  let post = null;
  if (res.ok) {
    const result = await res.json();
    post = result.data.currentPost;
  } else {
    post = null;
  }

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The post you are looking for does not exist.",
    };
  }

  const sanitizedBody = sanitizeHtml(post.body).slice(0, 200);
  const plainText = sanitizedBody.replace(/<[^>]+>/g, "");
  const postBody = plainText.slice(0, 200);

  return {
    title: post.title,
    description: postBody,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: postBody,
      url: `${process.env.APP_URL}/blog/${params.id}`,
      images: [
        {
          url: post.post_images[0], // Assuming the image URL is part of the API response
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: postBody,
      images: [post.post_images[0]], // Assuming the image URL is part of the API response
    },
  };
}

const page = () => {
  return (
    <PostProvider>
      <CommentProvider>
        <BlogDetail />
      </CommentProvider>
    </PostProvider>
  );
};

export default page;
