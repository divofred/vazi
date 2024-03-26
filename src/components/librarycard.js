// components/Librarycard.js
import Link from "next/link";

const Librarycard = ({ title, stitle, slink }) => {
  // Replace newline character with <br> tag
  const formattedTitle = title.replace(/\n/g, "<br>");

  return (
    <Link href={`/${slink}`}>
      <div className="border border-[#D5E3E5]  flex gradient-card7 rounded-xl items-center gap-x-4 px-5 py-3.5 text-[#232B2D]  hover:text-[#ffffff] text-[rgba(142,142,142,0.4)] hover:text-[rgba(255,255,255,0.96)]">
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
        <div>
          {/* Render title with HTML */}
          <h2
            className="w-40 leading-tight font-semibold"
            dangerouslySetInnerHTML={{ __html: formattedTitle }}
          ></h2>
          <p className="text-[8px] mt-1 ">{stitle} Topics</p>
        </div>

        <svg
          width="9"
          height="9"
          className="ml-5"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.46967 7.54071C0.176777 7.83361 0.176777 8.30848 0.46967 8.60137C0.762563 8.89427 1.23744 8.89427 1.53033 8.60137L0.46967 7.54071ZM8.82107 0.999977C8.82107 0.585764 8.48528 0.249977 8.07107 0.249977L1.32107 0.249977C0.906854 0.249977 0.571068 0.585763 0.571068 0.999977C0.571068 1.41419 0.906854 1.74998 1.32107 1.74998H7.32107V7.74998C7.32107 8.16419 7.65685 8.49998 8.07107 8.49998C8.48528 8.49998 8.82107 8.16419 8.82107 7.74998L8.82107 0.999977ZM1.53033 8.60137L8.6014 1.53031L7.54074 0.469647L0.46967 7.54071L1.53033 8.60137Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Librarycard;
