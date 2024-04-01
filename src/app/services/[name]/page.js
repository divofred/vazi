"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
// import { cards } from '@/components/CardData.js';
import CardCarousel from "@/components/CardCarousel";
import { usePathname } from "next/navigation";
import { getData } from "../page";

export default async function Inner() {
  const name = usePathname();

  const data = await getData();
  const service = data.find(
    (service) => service.slug === name.replace("/services/", "")
  );

  const serviceTitleMatch = service.content.match(
    /<p id="service-card">(.*?)<\/p>/
  );
  const serviceTitle = serviceTitleMatch ? serviceTitleMatch[1] : "";

  const heading1Match = service.content.match(/<h3 id="heading1">(.*?)<\/h3>/);
  const heading1 = heading1Match ? heading1Match[1] : "";

  const list1Match = service.content.match(/<ul id="list1">(.*?)<\/ul>/s);
  const list1 = list1Match ? list1Match[1] : "";

  const heading2Match = service.content.match(/<h3 id="heading2">(.*?)<\/h3>/);
  const heading2 = heading2Match ? heading2Match[1] : "";

  const list2Match = service.content.match(/<ul id="list2">(.*?)<\/ul>/s);
  const list2 = list2Match ? list2Match[1] : "";

  const heading3Match = service.content.match(/<h3 id="heading3">(.*?)<\/h3>/);
  const heading3 = heading3Match ? heading3Match[1] : "";

  const list3Match = service.content.match(/<ul id="list3">(.*?)<\/ul>/s);
  const list3 = list3Match ? list3Match[1] : "";

  const sideImgRegex = /<img.*?id=\"sideimg\".*?src=\"(.*?)\".*?>/i;
  const sideImgMatch = service.content.match(sideImgRegex);
  const sideImgSrc = sideImgMatch ? sideImgMatch[1] : "";
  const cards = data.map((service) => {
    return {
      title: service.title,
      imageUrl: service.featuredImage.node.sourceUrl,
      link: `${service.slug}`,
    };
  });

  return (
    <main className="bg-wave bg-opacity-5 font-inter ">
      <div>
        <Header />
      </div>
      <section className="px-5 pt-32 pb-20">
        <div className="container">
          <div className="">
            <div className="max-w-[53.8rem] border mx-auto rounded-xl px-6 md:px-12 gradient-card2 py-8">
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
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm lg:text-base text-[#6F898C]">
                    {serviceTitle.replace(/&#8217;/g, "'")}
                  </p>
                </div>
                <div className="hidden lg:block self-center">
                  <img src={sideImgSrc} className="w-[14rem]" />
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
              <h2 className=" w-72 font-bold gradient-text">{heading1}</h2>
              <div className=" max-w-[31rem]">
                <ul
                  className="list-disc text-sm lg:text-base leading-6 text-cgray"
                  dangerouslySetInnerHTML={{ __html: list1 }}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row max-w-[53.8rem] mx-auto mt-12 px-5 justify-between">
              <h2 className=" w-72 font-bold  gradient-text3 mb-3">
                {heading2}
              </h2>
              <div className=" max-w-[31rem]">
                <ul
                  className="list-disc text-sm lg:text-base leading-6 text-cgray"
                  dangerouslySetInnerHTML={{ __html: list2 }}
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row max-w-[53.8rem] mx-auto mt-12 px-5 justify-between ">
              <h2 className=" w-72 font-bold leading-5 gradient-text3 mb-3">
                {heading3}
              </h2>
              <div className=" max-w-[31rem] ">
                <ul
                  className="list-disc leading-6 text-cgray"
                  dangerouslySetInnerHTML={{ __html: list3 }}
                />
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
