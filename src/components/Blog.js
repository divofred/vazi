"use client";
import Header from "@/components/Header";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

export default function Blog({ post }) {
  console.log(post.featuredImage.node.sourceUrl);
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
          <div className="container flex  gap-x-8">
            <div className=" max-w-[45rem] ">
              <Link
                href={"/blog"}
                className="inline-flex place-items-center gap-x-1"
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

              <div className="w-full rounded-lg h-[18rem] border mt-7 flex items-end px-9 py-8">
                <div>
                  <img src={post.featuredImage.node.sourceUrl} />
                  <h2 className="text-3xl font-semibold">{post.title}</h2>
                  <div className="flex gap-x-2 text-sm mt-1.5">
                    <p className="font-semibold">{formattedDate}</p>
                    <p className="text-cgray">Startup guide</p>
                  </div>
                </div>
              </div>
              <div className="mt-14 text-sm text-[#4D747A] leading-loose">
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
                    <span className="text-semibold">will not be</span> published
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
                      Save my name and email in this browser for the next time I
                      comment.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
