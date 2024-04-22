// PersonCard.jsx

import React from "react";

const PersonCard = ({ person, href }) => {
  const imageSrc = person.featuredImage.node.sourceUrl;
  const name = person.title;
  console.log(person.content);

  const content = person.content;

  const positionRegex = /<p id=\"position\">(.*?)<\/p>/i;

  const positionMatch = content.match(positionRegex);

  const idRegex = /<span id=\"order-(\d+)\">/i;

  const idMatch = content.match(idRegex);

  // Extracted number
  const orderNumber = idMatch ? parseInt(idMatch[1]) : null;

  console.log(orderNumber);
  // Extracted texts
  const role = positionMatch ? positionMatch[1].trim() : "";

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

  return <a href={href}>{cardContent} </a>;
};

export default PersonCard;
