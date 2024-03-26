import React from "react";

const AboutCard = ({ iconSrc, title, content }) => {
  return (
    <div className=" xl:w-[17rem] lg:w-auto mx-auto lg:mx-0 p-8  bg-[rgba(255,255,255,0.1)] rounded-xl">
      <div className="flex items-center gap-4">
        {iconSrc && <img src={iconSrc} alt="Icon" />}
        <h2 className="xl:w-32 leading-6 tracking-tight lg:leading-6 text-[1.25rem] lg:text-[1.3rem] font-bold gradient-text2">
          {title}
        </h2>
      </div>
      <hr className="mt-5  border-[rgba(255,255,255,0.1)]" />
      <div className="mt-5">
        <p className="xl:w-52 text-sm lg:text-sm lg:leading-5 text-[#ffffff]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
