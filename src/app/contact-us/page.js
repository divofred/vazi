import Link from "next/link";
import Header from "@/components/Header";
import CheckboxComponent from "@/components/CheckboxComponent";
import { checkboxesData } from "@/components/data/checkboxesData";
import { checkboxesData2 } from "@/components/data/checkboxesData2";

export default function contactUs() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="pt-[7rem] md:pt-[8rem] pb-12">
        <div className="container">
          <div className="flex flex-col md:flex-row  max-w-[54.8rem] gap-x-4 items-start  mx-auto px-5 md:px-0">
            <div className="hidden md:block md:max-w-[16rem] px-6 pt-6 pb-10 rounded-xl bg-[#E8F3F4]">
              <h2 className="text-2xl font-bold w-[12rem]">
                We&apos;d love to help you!
              </h2>
              <p className="text-xs mt-[250px]">
                Let us know the needs of your business, and we will pinpoint the
                best-suited solution to fulfill them.
              </p>
              <div className=" inline-flex gap-1.5 items-center mt-3">
                <a href="" className=" p-1 rounded-sm bg-[#D8E8EC]">
                  <img src="social/fb-black.svg" className="w-5" />
                </a>
                <a href="" className=" p-1 rounded-sm bg-[#D8E8EC]">
                  <img src="social/twitter-black.svg" className="w-5" />
                </a>
                <a href="" className=" p-1 rounded-sm bg-[#D8E8EC]">
                  <img src="social/linkedin-black.svg" className="w-5" />
                </a>
              </div>
            </div>

            <div className=" w-full px-6 pt-6 pb-10 rounded-xl mt-5 md:mt-0 bg-[#E8F3F4]">
              <form>
                <div>
                  <label className="text-xs px-4">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="border w-full text-sm px-4 rounded-lg py-2.5 mb-3 text-[0.8rem] mt-1"
                    name=""
                  />
                </div>

                <div>
                  <label className="text-xs px-4">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="border w-full text-sm px-4 rounded-lg py-2.5 mb-3 text-[0.8rem] mt-1"
                    name=""
                  />
                </div>
                <div>
                  <p className="text-xs px-4">Services</p>
                </div>
                <div>
                  {checkboxesData.map((checkbox) => (
                    <CheckboxComponent key={checkbox.id} {...checkbox} />
                  ))}{" "}
                </div>

                <div className="mt-3">
                  <label className="text-xs px-4">
                    How did you hear about us?
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="border w-full text-sm px-4 rounded-lg py-2.5 mb-3 text-[0.8rem] mt-1"
                    name=""
                  />
                </div>

                <div className="mt-3">
                  <label className="text-xs px-4">
                    Are we the first attorneys you have contacted?
                  </label>
                  <div>
                    {checkboxesData2.map((checkbox) => (
                      <CheckboxComponent key={checkbox.id} {...checkbox} />
                    ))}{" "}
                  </div>
                </div>

                <div className="mt-10">
                  <button className=" duration-300 bg-[#0898AF] hover:bg-[#1b4045] w-full  px-[6.5rem] lg:px-[13rem] py-3 rounded-full text-sm text-white font-medium">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
