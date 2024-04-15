"use client";
import Header from "@/components/Header";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

export default function Blog({ post }) {
  
  const originalDate = new Date(post.date);
  const options = { year: "numeric", month: "short", day: "numeric" };

  const formattedDate = originalDate.toLocaleDateString("en-US", options);
  const htmlContent = post.content;

  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="py-[12rem] pl-[17rem] ">
        <div>
          <div className="container  ">
            <div className="flex flex-col md:flex-row gap-x-10  max-w-[75rem] mx-auto">
              <div className=" max-w-[45rem] ">
                <Link
                  href={"/blog"}
                  className="inline-flex place-items-center gap-x-1 text-[15px] text-[#7A7A7A]"
                >
                  {" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 5.25C11.4142 5.25 11.75 5.58579 11.75 6C11.75 6.41421 11.4142 6.75 11 6.75L11 5.25ZM0.469669 6.53033C0.176777 6.23744 0.176777 5.76256 0.469669 5.46967L5.24264 0.696699C5.53553 0.403805 6.01041 0.403805 6.3033 0.696699C6.59619 0.989592 6.59619 1.46447 6.3033 1.75736L2.06066 6L6.3033 10.2426C6.59619 10.5355 6.59619 11.0104 6.3033 11.3033C6.01041 11.5962 5.53553 11.5962 5.24264 11.3033L0.469669 6.53033ZM11 6.75L1 6.75L1 5.25L11 5.25L11 6.75Z"
                      fill="#7B7B7B"
                    />
                  </svg>
                  Blog
                </Link>
                <div className="relative overflow-hidden w-full rounded-lg h-[18rem]  items-end mt-7">
                  <img
                    src={post.featuredImage.node.sourceUrl}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    alt="Blog Image"
                    style={{ zIndex: "-1" }} // Lower z-index to place the image behind the text
                  />
                  <div className="z-10 text-white text-3xl font-semibold absolute bottom-7 left-7 mb-4">
                    {post.title}
                  </div>
                  <div className="z-10 flex gap-x-2 text-[#624e20] text-sm absolute bottom-3 left-7 mb-2">
                    <p className="font-semibold text-sm">{formattedDate}</p>
                    <p className="">Startup guide</p>
                  </div>
                  <div className="absolute inset-0 gradient-blogpost opacity-90 rounded-lg"></div>
                </div>

                <div
                  id="blogcontent"
                  className="mt-14 text-sm text-[#4D747A] leading-loose"
                >
                  <style>
                    {`
          /* Define your CSS styles here */
          #blogcontent p {
         
            margin-bottom: 3%;
          }

          #blogcontent h2 {
            font-weight: bold;
         
            margin-top: 10%;
          }

          #blogcontent h3 {
            font-weight: bold;
            margin-top: 2%;
            
          }

          #blogcontent ul {
         
            list-style-type: disc;
            list-style-position: outside;
            padding-left: 3%;
            margin-bottom: 3%;
          }

          #blogcontent ol {
         
            list-style-type: number;
            list-style-position: outside;
            padding-left: 3%;
            margin-top: 3%;
            margin-bottom: 3%;
            
          }

          #blogcontent a {
         
            color: #607CCF;
            
          }
          
        `}
                  </style>
                  {ReactHtmlParser(htmlContent)}
                </div>
                <div className="mt-10">
                  <div className="flex gap-x-4 mb-2 text13 text-[#9C9C9C]">
                    <p>2 Aug, 2023</p>
                    <p>03:08 pm</p>
                    <p>No comments</p>
                  </div>
                  <div className=" mx-auto px-8 py-7  bg-[#F1F1F1] rounded-xl max-w-full">
                    <div className="flex justify-between"></div>
                    <h2 className="text-xl lg:text-2xl text-[#4A4C4D] font-bold mb-5 px-5">
                      Add a Comment
                    </h2>
                    <form className="text-[#BBBBBB]">
                      <div>
                        <textarea
                          className="py-2.5 px-5 w-full h-[12rem] resize-none  rounded-lg text-[0.8rem] mb-3"
                          placeholder="Your comment"
                          required
                        ></textarea>
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          className="w-full text-sm px-5 rounded-lg py-2.5 mb-3 text-[0.8rem]"
                          name=""
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="w-full text-sm px-5 rounded-lg py-2.5 mb-1 text-[0.8rem]"
                          required
                          placeholder="Email address"
                          name=""
                        />
                      </div>
                    </form>
                    <small className="px-5 text-xs text-[#BBBBBB] ">
                      Your email address{" "}
                      <span className="text-semibold">will not be</span>{" "}
                      published
                    </small>
                    <div className="flex gap-x-1 px-5 mt-2">
                      <input
                        className="text-[#1193A9]"
                        type="checkbox"
                        id="check"
                        name="blogcheckprompt"
                        value="yes"
                      />
                      <label htmlFor="check" className="text-xs text-[#1193A9]">
                        {" "}
                        Save my name and email in this browser for the next time
                        I comment.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" max-w-[13rem]  pt-[40%]">
                <h2 className="text-[13.5px] font-semibold">Page Content</h2>
                <div className="flex flex-col text-[13px] mt-3 text-[#737373] ">
                  <Link href={"/blog"} className="mb-2.5">
                    Introduction
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    Cap Table Components
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    Data collection to create a Cap table
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    How a Cap table should be structured and formatted
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    Cap table management platforms
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    Cap table best practices
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    Bottom line
                  </Link>
                  <Link href={"/blog"} className="mb-2.5">
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
