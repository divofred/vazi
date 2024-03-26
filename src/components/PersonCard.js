// PersonCard.jsx

import React from "react";
import Link from "next/link";

const PersonCard = ({ person }) => {
  const { imageSrc, name, role, href } = person;

  // Use the name as the default href if href is not provided
  const defaultHref = `/people/${name.toLowerCase().replace(/\s+/g, "-")}`;

  const cardContent = (
    <div className="w-[20rem] lg:w-[16.5rem] mx-auto ">
      <div className=" gradient-card3 lg:h-[18.6rem] flex rounded-t-lg">
        <img
          src={imageSrc}
          className="self-end w-[11.5rem] pt-5 lg:pt-0 lg:w-[13.5rem] mx-auto"
          alt={name}
        />
      </div>
      <div className="px-3 border border-gray-200 bg-white rounded-b-lg py-3.5">
        <h2 className="text-[#06AFCD] text-xl font-semibold">{name}</h2>
        <p className="text-[0.95rem] text-[#B7B7B7]">{role}</p>
      </div>
    </div>
  );

  return <Link href={href || defaultHref}>{cardContent} </Link>;
};

export default PersonCard;
