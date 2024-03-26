import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";

async function getData() {
  const res = await fetch("https://vazilegal.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
    body: JSON.stringify({
      query: `
         query HomePageQuery {
       posts(first: 8) {
       nodes {
        id
        slug
        title
        content
        commentCount
        date
         comments{
          nodes{
            content
          }
        }
        featuredImage{
          node{
            sourceUrl
          }
        }
			}
  	}
	}
          `,
    }),
  });

  const json = await res.json();

  console.log(json.data.posts.nodes);
  return json.data.posts.nodes;
}

export default async function blog() {
  return (
    <main className="bg-wave">
      <div className="">
        <Header />
      </div>
      <section className=" pt-36 pb-20">
        <div className="container">
          <div className="px-7">
            <div className="max-w-[58.8rem]  mx-auto mb-4 flex   lg:hidden justify-end">
              <Link
                href={"/"}
                className="flex items-center gap-x-2 textglink font-semibold"
              >
                {" "}
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.2 15.2C1.88 15.2 1.6 15.08 1.36 14.84C1.12 14.6 1 14.32 1 14V3.6C1 3.28 1.12 3 1.36 2.76C1.6 2.52 1.88 2.4 2.2 2.4H10.88C10.84 2.6 10.8133 2.8 10.8 3C10.7867 3.2 10.7933 3.4 10.82 3.6H2.3L9 7.96L12.02 6C12.1533 6.12 12.2933 6.23115 12.44 6.33346C12.5867 6.43577 12.74 6.52461 12.9 6.6L9 9.16L2.2 4.7V14H15.8V6.8C16.0239 6.73623 16.2332 6.64695 16.4279 6.53218C16.6226 6.41739 16.8133 6.28667 17 6.14V14C17 14.32 16.88 14.6 16.64 14.84C16.4 15.08 16.12 15.2 15.8 15.2H2.2ZM14.5976 5.4C13.9859 5.4 13.4667 5.18588 13.04 4.75764C12.6133 4.32941 12.4 3.80941 12.4 3.19764C12.4 2.58588 12.6141 2.06667 13.0424 1.64C13.4706 1.21333 13.9906 1 14.6024 1C15.2141 1 15.7333 1.21412 16.16 1.64236C16.5867 2.07059 16.8 2.59059 16.8 3.20236C16.8 3.81412 16.5859 4.33333 16.1576 4.76C15.7294 5.18667 15.2094 5.4 14.5976 5.4Z"
                    fill="#1193A9"
                  />
                  <path
                    d="M2.2 14V4.7L9 9.16L12.9 6.6C12.74 6.52461 12.5867 6.43577 12.44 6.33346C12.2933 6.23115 12.1533 6.12 12.02 6L9 7.96L2.3 3.6H10.82C10.7933 3.4 10.7867 3.2 10.8 3C10.8133 2.8 10.84 2.6 10.88 2.4H2.2C1.88 2.4 1.6 2.52 1.36 2.76C1.12 3 1 3.28 1 3.6V14C1 14.32 1.12 14.6 1.36 14.84C1.6 15.08 1.88 15.2 2.2 15.2H15.8C16.12 15.2 16.4 15.08 16.64 14.84C16.88 14.6 17 14.32 17 14V6.14C16.8133 6.28667 16.6226 6.41739 16.4279 6.53218C16.2332 6.64695 16.0239 6.73623 15.8 6.8V14H2.2ZM2.2 14V3.6M14.5976 5.4C13.9859 5.4 13.4667 5.18588 13.04 4.75764C12.6133 4.32941 12.4 3.80941 12.4 3.19764C12.4 2.58588 12.6141 2.06667 13.0424 1.64C13.4706 1.21333 13.9906 1 14.6024 1C15.2141 1 15.7333 1.21412 16.16 1.64236C16.5867 2.07059 16.8 2.59059 16.8 3.20236C16.8 3.81412 16.5859 4.33333 16.1576 4.76C15.7294 5.18667 15.2094 5.4 14.5976 5.4Z"
                    stroke="#1193A9"
                    strokeWidth="0.6"
                  />
                </svg>
                Receive free letters from Vazi{" "}
              </Link>
            </div>
            <div className=" mx-auto px-8 py-7  bg-[#EEF7F9] rounded-xl max-w-[58.8rem]">
              <div className="flex justify-between">
                <div className="flex gap-x-4 mb-8 text13">
                  <p>2 Aug, 2023</p>
                  <p>Admin</p>
                  <p>Startup Guide</p>
                </div>
                <div className="hidden lg:block">
                  <Link
                    href={"/"}
                    className=" text-xs lg:text-base flex items-center gap-x-2 textglink font-semibold"
                  >
                    {" "}
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.2 15.2C1.88 15.2 1.6 15.08 1.36 14.84C1.12 14.6 1 14.32 1 14V3.6C1 3.28 1.12 3 1.36 2.76C1.6 2.52 1.88 2.4 2.2 2.4H10.88C10.84 2.6 10.8133 2.8 10.8 3C10.7867 3.2 10.7933 3.4 10.82 3.6H2.3L9 7.96L12.02 6C12.1533 6.12 12.2933 6.23115 12.44 6.33346C12.5867 6.43577 12.74 6.52461 12.9 6.6L9 9.16L2.2 4.7V14H15.8V6.8C16.0239 6.73623 16.2332 6.64695 16.4279 6.53218C16.6226 6.41739 16.8133 6.28667 17 6.14V14C17 14.32 16.88 14.6 16.64 14.84C16.4 15.08 16.12 15.2 15.8 15.2H2.2ZM14.5976 5.4C13.9859 5.4 13.4667 5.18588 13.04 4.75764C12.6133 4.32941 12.4 3.80941 12.4 3.19764C12.4 2.58588 12.6141 2.06667 13.0424 1.64C13.4706 1.21333 13.9906 1 14.6024 1C15.2141 1 15.7333 1.21412 16.16 1.64236C16.5867 2.07059 16.8 2.59059 16.8 3.20236C16.8 3.81412 16.5859 4.33333 16.1576 4.76C15.7294 5.18667 15.2094 5.4 14.5976 5.4Z"
                        fill="#1193A9"
                      />
                      <path
                        d="M2.2 14V4.7L9 9.16L12.9 6.6C12.74 6.52461 12.5867 6.43577 12.44 6.33346C12.2933 6.23115 12.1533 6.12 12.02 6L9 7.96L2.3 3.6H10.82C10.7933 3.4 10.7867 3.2 10.8 3C10.8133 2.8 10.84 2.6 10.88 2.4H2.2C1.88 2.4 1.6 2.52 1.36 2.76C1.12 3 1 3.28 1 3.6V14C1 14.32 1.12 14.6 1.36 14.84C1.6 15.08 1.88 15.2 2.2 15.2H15.8C16.12 15.2 16.4 15.08 16.64 14.84C16.88 14.6 17 14.32 17 14V6.14C16.8133 6.28667 16.6226 6.41739 16.4279 6.53218C16.2332 6.64695 16.0239 6.73623 15.8 6.8V14H2.2ZM2.2 14V3.6M14.5976 5.4C13.9859 5.4 13.4667 5.18588 13.04 4.75764C12.6133 4.32941 12.4 3.80941 12.4 3.19764C12.4 2.58588 12.6141 2.06667 13.0424 1.64C13.4706 1.21333 13.9906 1 14.6024 1C15.2141 1 15.7333 1.21412 16.16 1.64236C16.5867 2.07059 16.8 2.59059 16.8 3.20236C16.8 3.81412 16.5859 4.33333 16.1576 4.76C15.7294 5.18667 15.2094 5.4 14.5976 5.4Z"
                        stroke="#1193A9"
                        strokeWidth="0.6"
                      />
                    </svg>
                    Receive free letters from Vazi{" "}
                  </Link>
                </div>
              </div>
              <h2 className="text-xl lg:text-3xl text-[#027889] font-bold mb-5">
                The Nigerian Startup Ecosystem{" "}
              </h2>
              <p className="max-w-[18rem] lg:max-w-[41rem] text-sm lg:text-base mb-8">
                Seated by the west coastlines of Africa is a vibrant and dynamic
                landscape where innovations are birthed, dreams take flight, and
                entrepreneurship thrives – the Nigerian startup ecosystem...
              </p>

              <Link
                href={"/"}
                className="text-sm lg:text-base flex items-center gap-2 text-[#1193A9]"
              >
                See full article{" "}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75L1 5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403805 5.98959 0.403805 5.6967 0.696699C5.40381 0.989592 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6.75L11 6.75L11 5.25L1 5.25L1 6.75Z"
                    fill="#1193A9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 px-7 ">
        <div className="container ">
          <div className="max-w-[58.8rem] mx-auto mb-20">
            <h3 className="hidden lg:block text-[0.65rem] tracking-[0.2rem] mb-1 text-[#93B6BC]">
              CATEGORIES
            </h3>
            <div className="flex flex-col lg:flex-row gap-y-4 justify-between lg:items-center">
              <div>
                <div className="flex gap-x-4 text-xs lg:text-sm text-[#8EB3B9]">
                  <Link href={"/"} className="hover:text-[#334B4F]">
                    Startup Guide
                  </Link>
                  <Link href={"/"} className="hover:text-[#334B4F]">
                    Compliance
                  </Link>
                  <Link href={"/"} className="hover:text-[#334B4F]">
                    Agreements
                  </Link>
                </div>
              </div>
              <div>
                <div className="relative flex justify-between items-center w-[21rem] lg:w-[23rem]">
                  <div className="absolute left-0 p-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className=" pl-10 py-2 border border-gray-300 rounded-full focus:outline-none text-xs flex-1"
                  />
                  <button className=" text-white pr-4 absolute right-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403805 5.98959 0.403805 5.6967 0.696699C5.40381 0.989592 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6.75L11 6.75L11 5.25L1 5.25L1 6.75Z"
                        fill="#1E1E1E"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[56.8rem] mx-auto  gap-y-5">
            <BlogPost posts={await getData()} />
          </div>
        </div>
      </section>
    </main>
  );
}
