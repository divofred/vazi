// components/Content.js

const Content = ({
  title,
  stitle,
  subtitle1,
  subtitle2,
  content1,
  content2,
  titleWidth,
  textsize,
}) => {
  return (
    <div className="container px-6">
      <div className=" items-center justify-center  ">
        <h2
          className={`${textsize}  ${titleWidth}  mx-auto text-basic leading-tight font-bold font-inter mb-6 lg:mb-12`}
        >
          {title}
          <span className="text-secondary"> {stitle} </span>
        </h2>
      </div>

      <div className=" px-7 max-w-[24rem] xl:max-w-[45rem] lg:h-fit place-content-center items-center flex mx-auto bg-gradient-to-br from-slate-50 to-slate-200 rounded-lg border border-gray-200">
        <div className="my-10 lg:my-20 text-center text-[.8rem] lg:text-[1.3rem] mx-2 lg:mx-[4.5rem] leading-tight">
          <p className="text-gray-500    font-semibold mb-4">
            {subtitle1}{" "}
            <span className="gradient-text font-bold">{content1}</span>
          </p>

          <p className="text-gray-500 font-medium   leading-tight">
            {subtitle2} <span className="font-bold">{content2}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
