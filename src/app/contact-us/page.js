import Link from "next/link";
import Header from "@/components/Header";
import CheckboxComponent from "@/components/CheckboxComponent";
import { checkboxesData } from "@/components/data/checkboxesData";

export default function contactUs() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <section className="pt-36 pb-12">
        <div className="container">
          <div className="flex border max-w-[54.8rem] gap-x-4 items-start  mx-auto">
            <div className="border max-w-[16rem] px-6 pt-6 pb-10 rounded-xl">
              <h2 className="text-2xl font-bold w-[12rem]">
                We&apos;d love to help you!
              </h2>
              <p className="text-xs mt-[250px]">
                Let us know the needs of your business, and we will pinpoint the
                best-suited solution to fulfill them.
              </p>
              <div className=" inline-flex gap-3 items-center mt-3">
                <a href="">
                  <img src="/linkedin.svg" className="w-3 lg:w-5" />
                </a>
                <a href="">
                  <img src="/twitter.svg" className="w-3 lg:w-5" />
                </a>
                <a href="">
                  <img src="/facebook.svg" className="w-3 lg:w-5" />
                </a>
              </div>
            </div>

            <div className="border w-full px-6 pt-6 pb-10 rounded-xl ">
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

                {checkboxesData.map((checkbox) => (
                  <CheckboxComponent key={checkbox.id} {...checkbox} />
                ))}
              </form>

              <div className=" inline-flex gap-3 items-center mt-3">
                <a href="">
                  <img src="/linkedin.svg" className="w-3 lg:w-5" />
                </a>
                <a href="">
                  <img src="/twitter.svg" className="w-3 lg:w-5" />
                </a>
                <a href="">
                  <img src="/facebook.svg" className="w-3 lg:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
