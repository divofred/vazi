// components/BlogPost.js
"use client";
import Link from "next/link";
import { convert } from "html-to-text";

const BlogPost = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        const originalDate = new Date(post.date);
        const options = { year: "numeric", month: "short", day: "numeric" };

        const formattedDate = originalDate.toLocaleDateString("en-US", options);
        const truncatedText = post.content.slice(0, 122);
        const options1 = {
          wordwrap: 130,
          // ...
        };
        const text = convert(truncatedText, options1);
        let count = 0;
        if (post.commentCount) {
          count = post.commentCount;
        }
        const href = `${post.slug}/`;

        return (
          <div
            key={post.slug}
            className="w-[21rem] lg:w-[27rem] bg-[#FBFBFB] border rounded-xl pt-8 pb-3 "
          >
            <div className="px-6">
              <div className="flex gap-4 text-xs lg:text13">
                <p>{formattedDate}</p>
                <p>Category</p>
                <p>{count} Comments</p>
              </div>
              <h2 className=" lg:text-xl font-bold mt-7 textgreen lg:h-[2rem]">
                {post.title}
              </h2>
              <p className="text-xs lg:text-sm w-[17rem] lg:w-[21rem] mt-8 textgray">
                {text + "..."}
              </p>
              <Link
                href={href}
                className="flex gap-2 items-center text13 mt-10 textglink"
              >
                Read more{" "}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403805 5.98959 0.403805 5.6967 0.696699C5.40381 0.989592 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6.75L11 6.75L11 5.25L1 5.25L1 6.75Z"
                    fill="#1193A9"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden mx-3 mt-8 ">
              <img
                src={post.featuredImage.node.sourceUrl}
                className="mx-auto w-full h-[10rem] lg:h-[12rem]"
                alt="Blog Image"
              />
              <div className="absolute inset-0 gradient-blogpost opacity-50 rounded-lg"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogPost;
