import React from "react";
import Link from "next/link";

const ServicesCard = ({ title, description, linkText, linkHref, iconSrc }) => {
  return (
    <div className=" flex flex-col border border-[rgba(187,216,214,0.2)]  rounded-xl gradient-card2 text-left w-[16.5rem] h-[25rem] pl-3 pr-3 pb-3">
      <div className="flex mt-4 items-center gap-4">
        <img src={iconSrc} alt="Card Icon" className="w-10" />
        <h2 className="w-[9.25rem] leading-6 tracking-tight lg:leading-5 text-[1.25rem] lg:text-[1.15rem] font-extrabold gradient-text">
          {title}
        </h2>
      </div>
      <hr className="border border-[rgba(0,51,59,0.05)] mt-3" />
      <div className="mt-4">
        <p className="text-sm lg:text-[0.9rem] lg:leading-5 text-[#6F898C]">
          {description}
        </p>
      </div>
      <div className=" mt-auto">
        <Link
          href={linkHref || "/"}
          className=" text-left border-[#e9ca871f] bg-gradient-to-r from-[#FEB101] to-[rgba(255,179,0,0.2)] hover:from-[#0037402d] hover:to-[#5bcedf5b] px-4 block py-3.5 rounded-md text-xs text-white font-base"
        >
          {linkText || "More"}
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
