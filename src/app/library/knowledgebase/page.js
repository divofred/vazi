"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { cards } from "@/components/CardData.js";
import CardCarousel from "@/components/CardCarousel";

export default function Inner() {
  return (
    <main className="bg-wave bg-opacity-5 font-inter">
      <div>
        <Header />
      </div>
      <section className="px-5 pt-32 pb-10 ">
        <div className="container">
          <div className="max-w-4xl mx-auto border border-[#D5E3E5]  flex gradient-card8 rounded-xl items-center gap-x-4 px-16 pb-8 pt-5 text-[#232B2D]  hover:text-[#ffffff] text-[rgba(142,142,142,0.4)] hover:text-[rgba(255,255,255,0.96)]">
            <svg
              className="w-5 fill-current "
              viewBox="0 0 30 24"
              fill="currentColor"
              fillRule="evenodd"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V6C30 4.35 28.65 3 27 3H15L12 0Z"
                fill="currentColor"
                fillOpacity="0.4"
              />
            </svg>
            <span className="py-[0.35rem] px-[0.7rem] rounded-full text-xs bg-[#00A9C6] text-white">
              1
            </span>
            <div className="pt-4">
              <h2 className="text-sm leading-tight font-semibold">
                Startup Formation and Incorporation
              </h2>
              <div className="flex space-x-3">
                <p className="text-xs mt-1 text-[#A0CBD2] "> Articles</p>
                <p className="text-xs mt-1 text-[#DDECEE]"> 13,956 Views</p>
              </div>
            </div>

            <div className="flex space-x-2 ml-auto">
              <div></div>

              <button className="py-2.5 px-3 rounded-full text-xs bg-[rgba(206,233,238,0.5)] text-white">
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 13.5674L2.00054 7.59917L7.96875 1.63095"
                    stroke="#027889"
                    stroke-width="2.12203"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button className="py-2.5 px-3 rounded-full text-xs bg-[#DFEEF0] text-white">
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.63086L7.96822 7.59907L2 13.5673"
                    stroke="#0093AC"
                    stroke-width="2.12203"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container max-w-5xl mx-auto  py-8">
          <div class="flex flex-wrap gap-x-[5rem] justify-center ">
            <div class="w-[60%] ">
              <div className=" ml-10 justify-between">
                <div className=" mb-5">
                  <h2 className="font-bold leading-5 text-[#027889]">
                    How To Decide How Many Shares To Give Your Co-Founder
                  </h2>
                  <div className="flex border-b pb-4 items-center justify-between text-[10px]">
                    <div className="flex space-x-2 items-center mt-5">
                      <img src="/library/profile.svg" />
                      <div>
                        <p className="font-medium">Vazilegal librarian</p>
                        <p className="">Aug 23, 2022</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center gap-x-0.5">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 0C3 0 0.865 1.555 0 3.75C0.865 5.945 3 7.5 5.5 7.5C8 7.5 10.135 5.945 11 3.75C10.135 1.555 8 0 5.5 0ZM5.5 6.25C4.12 6.25 3 5.13 3 3.75C3 2.37 4.12 1.25 5.5 1.25C6.88 1.25 8 2.37 8 3.75C8 5.13 6.88 6.25 5.5 6.25ZM5.5 2.25C4.67 2.25 4 2.92 4 3.75C4 4.58 4.67 5.25 5.5 5.25C6.33 5.25 7 4.58 7 3.75C7 2.92 6.33 2.25 5.5 2.25Z"
                            fill="#646464"
                          />
                        </svg>{" "}
                        345 views
                      </span>

                      <span className="flex items-center gap-x-0.5">
                        <svg
                          width="7"
                          height="9"
                          viewBox="0 0 7 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 3.5C7 3.17917 6.7375 2.91667 6.41667 2.91667H3.395L3.78 1.06167L3.79167 0.9275C3.79167 0.746667 3.71583 0.583333 3.59917 0.460833L3.13833 0L0.256667 2.88167C0.0991667 3.03917 0 3.26083 0 3.5V7.29167C0 7.77583 0.390833 8.16667 0.875 8.16667H4.8125C5.17417 8.16667 5.48333 7.945 5.6175 7.63583L6.93583 4.55C6.97667 4.45083 7 4.34 7 4.22917V3.5Z"
                            fill="#646464"
                          />
                        </svg>
                        11
                      </span>

                      <button className="flex items-center gap-x-0.5">
                        <svg
                          width="11"
                          height="8"
                          viewBox="0 0 11 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.5 0C3 0 0.865 1.555 0 3.75C0.865 5.945 3 7.5 5.5 7.5C8 7.5 10.135 5.945 11 3.75C10.135 1.555 8 0 5.5 0ZM5.5 6.25C4.12 6.25 3 5.13 3 3.75C3 2.37 4.12 1.25 5.5 1.25C6.88 1.25 8 2.37 8 3.75C8 5.13 6.88 6.25 5.5 6.25ZM5.5 2.25C4.67 2.25 4 2.92 4 3.75C4 4.58 4.67 5.25 5.5 5.25C6.33 5.25 7 4.58 7 3.75C7 2.92 6.33 2.25 5.5 2.25Z"
                            fill="#646464"
                          />
                        </svg>{" "}
                        345 views
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b pb-8">
                  <p className="text-[13px] leading-6">
                    When founding your start-up, you need to consider whether or
                    not there will be co-founders. If so, how many shares will
                    be given to each co-founder? The number of shares each
                    founder gets says how much of the company they will own.
                    Unfortunately, deciding how to allocate shares at the
                    beginning of a start-up can be pretty tricky. The difficulty
                    is that it is incalculable to tell just how valuable the
                    company will be in the future and how committed the
                    co-founders will be in terms of their contribution to the
                    future value of the start-up. Hence, co-founders get equity
                    based on what they bring to the table, such as expertise,
                    knowledge, or even network connections to the business.
                  </p>
                </div>
                <div className="flex">
                  <p>Was this helpful?</p>
                  <button className="flex items-center space-x-1 text-[12px]">
                    {" "}
                    <svg
                      width="7"
                      height="9"
                      viewBox="0 0 7 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 3.5C7 3.17917 6.7375 2.91667 6.41667 2.91667H3.395L3.78 1.06167L3.79167 0.9275C3.79167 0.746667 3.71583 0.583333 3.59917 0.460833L3.13833 0L0.256667 2.88167C0.0991667 3.03917 0 3.26083 0 3.5V7.29167C0 7.77583 0.390833 8.16667 0.875 8.16667H4.8125C5.17417 8.16667 5.48333 7.945 5.6175 7.63583L6.93583 4.55C6.97667 4.45083 7 4.34 7 4.22917V3.5Z"
                        fill="white"
                      />
                    </svg>
                    yes
                  </button>
                </div>
              </div>
            </div>
            <div class="w-[15rem] ">
              <div class="">
                <div>
                  <div className="relative flex justify-between items-center w-[21rem] lg:w-full">
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
                <div className="flex gap-x-1.5 mt-5 mb-8">
                  <Link className=" p-2 rounded-sm bg-[#D8E8EC]" href={""}>
                    <img src="/library/facebook.svg" className="w-4"></img>
                  </Link>

                  <Link className=" p-2 rounded-sm bg-[#D8E8EC]" href={""}>
                    <img src="/library/twitter.svg" className="w-4"></img>
                  </Link>

                  <Link className=" p-2 rounded-sm bg-[#D8E8EC]" href={""}>
                    <img src="/library/linkedIn.svg" className="w-4"></img>
                  </Link>
                </div>
                <p className="text-xs font-semibold">Page Content</p>

                <div className="mt-10">
                  <p className="text-xs font-semibold">
                    Startup Formation & Incorporation
                  </p>

                  <ul className="text-xs mt-3 list-disc ">
                    <li className="mb-5">
                      <Link href={""}>
                        How To Decide How Many Shares To Give Your Co-Founder
                      </Link>
                    </li>

                    <li className="mb-5">
                      <Link href={""}>
                        How To Decide How Many Shares To Give Your Co-Founder
                      </Link>
                    </li>

                    <li className="mb-5">
                      <Link href={""}>
                        How To Decide How Many Shares To Give Your Co-Founder
                      </Link>
                    </li>
                    <li className="mb-5">
                      <Link href={""}>
                        How To Decide How Many Shares To Give Your Co-Founder
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
