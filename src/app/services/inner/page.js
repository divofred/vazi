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
      <section className="px-5 pt-32 pb-20">
        <div className="container">
          <div className="">
            <div className="max-w-[53.8rem] border mx-auto rounded-xl px-12 gradient-card2 py-8">
              <Link
                href={"/services"}
                className="text-xs inline-flex gap-1 text-[#6F898C] items-center "
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3.5C9.27614 3.5 9.5 3.72386 9.5 4C9.5 4.27614 9.27614 4.5 9 4.5L9 3.5ZM0.646446 4.35355C0.451184 4.15829 0.451184 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269203 4.34027 0.269203 4.53553 0.464466C4.7308 0.659728 4.7308 0.97631 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM9 4.5L1 4.5L1 3.5L9 3.5L9 4.5Z"
                    fill="#6B959C"
                  />
                </svg>
                Services
              </Link>
              <div className="flex mt-6 justify-between">
                <div className=" max-w-md">
                  <h2 className="text-[1.65rem] lg:text-4xl font-bold gradient-text">
                    Startup Advisory
                  </h2>
                  <p className="mt-4 text-sm lg:text-base text-[#6F898C]">
                    At Vazi, we are the go-to legal advisory for global
                    startups, specialising in early-stage and growth-oriented
                    companies to drive operational and legal excellence. With
                    our seasoned team&apos;s wealth of experience and deep
                    understanding of the entrepreneurial landscape, we&apos;re
                    committed to your venture&apos;s success.
                  </p>
                </div>
                <div className="hidden lg:block self-center">
                  <img src="/icons/startupgr.svg" className="w-[14rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-5">
        <div className="container">
          <div className="">
            <div className="flex flex-col lg:flex-row max-w-[53.8rem] mx-auto px-5  justify-between">
              <h2 className=" w-72 font-bold leading-5 gradient-text">
                How We Navigate the Complex Legal Landscape of Startup Advisory
              </h2>
              <div className=" max-w-[31rem]">
                <ul className="list-disc text-sm lg:text-base leading-6 text-cgray">
                  <li>
                    Mastering the intricacies of complex capital structures,
                    investment terms, and equity arrangements joint in
                    early-stage ventures
                  </li>
                  <li>
                    Tailored advice on regulatory compliance ensures your
                    startup operates within the legal frameworks of your
                  </li>
                  <li>
                    We utilize innovative legal strategies to safeguard your
                    intellectual property, manage risks, and foster a conducive
                    environment for growth.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row max-w-[53.8rem] mx-auto mt-12 px-5 justify-between">
              <h2 className=" w-72 font-bold  gradient-text3 mb-1">
                Why Choose Vazi?
              </h2>
              <div className=" max-w-[31rem]">
                <ul className="list-disc text-sm lg:text-base leading-6 text-cgray">
                  <li>
                    Unrivaled expertise in the African startup scene, grounded
                    in local insights and a global perspective.
                  </li>
                  <li>
                    A robust network of investors, industry experts, and startup
                    ecosystems enables us to offer holistic advisory services.
                  </li>
                  <li>
                    Our long-term partnership approach, underscored by proactive
                    service and competitive pricing, aims to be part of your
                    success story.
                  </li>
                  <li>
                    Our flexible fee structure is designed with the startup
                    ecosystem in mind, ensuring our premier legal services are
                    accessible to emerging growth companies.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row max-w-[53.8rem] mx-auto mt-12 px-5 justify-between ">
              <h2 className=" w-72 font-bold leading-5 gradient-text3 mb-1">
                Key services
              </h2>
              <div className=" max-w-[31rem] ">
                <ul className="list-disc leading-6 text-cgray">
                  <li>
                    <strong>Legal Structuring and Compliance:</strong> Crafting
                    the legal frameworks that underpin your startup’s operations
                    and investor relations.
                  </li>
                  <li>
                    <strong> Intellectual Property Advisory:</strong>
                    Safeguarding and monetizing your startup’s intellectual
                    assets, including patents, trade secrets, and data.
                  </li>
                  <li>
                    <strong> Investment and Fundraising Support:</strong> From
                    due diligence to deal structuring, we ensure your startup is
                    investor-ready and positioned for financial growth.
                  </li>
                  <li>
                    <strong>Regulatory Advisory:</strong> Navigating the
                    regulatory hurdles that come with innovation, ensuring your
                    startup remains compliant while scaling in size. 
                  </li>
                </ul>
                <div className="mt-5">
                  <Link
                    href={"/"}
                    className=" text-left border-[#e9ca871f] bg-gradient-to-r from-[#FDDE99] to-[#FEB101] hover:from-[#0037402d] hover:to-[#5bcedf5b] px-5 py-2.5 rounded-md text-xs text-white font-semibold"
                  >
                    Talk to our Startup Advisory Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-5">
        <div className="container">
          <div className="">
            <div className=" mt-10  max-w-[53.8rem]  mx-auto  items-center ">
              <div className="flex gap-6 items-center mb-5">
                <h2 className="font-bold w-[35rem] lg:w-auto text-[#0a6170af] ">
                  Other practice areas
                </h2>
                <svg
                  width="667"
                  height="2"
                  viewBox="0 0 667 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1H667"
                    stroke="url(#paint0_linear_317_2697)"
                    strokeOpacity="0.3"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_317_2697"
                      x1="0"
                      y1="1"
                      x2="676.014"
                      y2="0.999893"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#37A9BD" />
                      <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <CardCarousel cards={cards} slidesToShow={4} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
