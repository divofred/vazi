// components/BlogPost.js
'use client';
import Link from 'next/link';
import { convert } from 'html-to-text';

const BlogPost = ({ posts }) => {
  if (!posts.length) {
    return (
      <main>
        <section className="py-[12rem] pl-[17rem]">
          <div className="text-center mx-auto ">
            <div role="status">
              <svg
                aria-hidden="true"
                className=" inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </section>
      </main>
    );
  }
  return (
    <>
      {posts?.map(({ node: post }) => {
        const originalDate = new Date(post.date);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        const formattedDate = originalDate.toLocaleDateString('en-US', options);
        const truncatedText = post.content.slice(0, 122);
        const options1 = {
          wordwrap: 130
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
              <h2 className=" lg:text-xl font-bold mt-7 textgreen ">
                {post.title}
              </h2>
              <p className=" text-xs lg:text-sm w-[17rem] lg:w-[21rem] mt-4 textgray">
                {text + '...'}
              </p>
              <a
                href={href}
                className="flex gap-2 items-center text13 mt-10 textglink"
              >
                Read more{' '}
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
              </a>
            </div>
            <div className="relative rounded-lg overflow-hidden mx-3 mt-8 ">
              <img
                src={post.featuredImage?.node.sourceUrl}
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
