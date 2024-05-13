"use client";

import Header from "@/components/Header";
import CheckboxComponent from "@/components/CheckboxComponent";
import { checkboxesData } from "@/components/data/checkboxesData";
import { checkboxesData2 } from "@/components/data/checkboxesData2";

import { Helmet } from "mys-react-helmet";
import parse from "html-react-parser";
import Swal from "sweetalert2";

import { useState } from "react";

export default function ContactUsPage({ head }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [howDidYouHearAboutUs, setHowDidYouHearAboutUs] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        services: selectedValues,
        firstAttorney: selectedValue,
        howDidYouHearAboutUs,
      }),
    });
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully",
      icon: "success",
      confirmButtonText: "Ok",
    }).then(() => {
      window.location = "/";
    });
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleHowDidYouHearAboutUsChange = (e) => {
    setHowDidYouHearAboutUs(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (selectedValues.includes(name)) {
      // If the value is already in the array, remove it
      setSelectedValues(selectedValues.filter((value) => value !== name));
    } else {
      // If the value is not in the array, add it
      setSelectedValues([...selectedValues, name]);
    }
  };

  const handleYesOrNOChange = (event) => {
    const { name } = event.target;
    setSelectedValue(name);
  };

  return (
    <>
      <Helmet>{parse(head)}</Helmet>

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
                  Let us know the needs of your business, and we will pinpoint
                  the best-suited solution to fulfill them.
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
                {/* <form onSubmit={handleSubmit}>
                  <div>
                    <label className="text-xs px-4">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="border w-full text-sm px-4 rounded-lg py-2.5 mb-3 text-[0.8rem] mt-1"
                      name=""
                      value={fullName}
                      onChange={handleFullNameChange}
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
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div>
                    <p className="text-xs px-4">Services</p>
                  </div>
                  <div>
                    {checkboxesData.map(({ id, name, label }) => (
                      <div
                        className="flex mt-2 gap-x-3 text-xs px-4"
                        key={Math.random()}
                      >
                        <input
                          type="checkbox"
                          id={id}
                          name={name}
                          className="border-gray-300"
                          checked={selectedValues.includes(name)}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={id} className="text-[#334B4F]">
                          {label}
                        </label>
                      </div>
                    ))}{" "}
                  </div>

                  <div className="mt-3">
                    <label className="text-xs px-4">
                      How did you hear about us?
                    </label>
                    <input
                      type="text"
                      required
                      placeholder=""
                      className="border w-full text-sm px-4 rounded-lg py-2.5 mb-3 text-[0.8rem] mt-1"
                      onChange={handleHowDidYouHearAboutUsChange}
                      value={howDidYouHearAboutUs}
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-xs px-4">
                      Are we the first attorneys you have contacted?
                    </label>
                    <div>
                      {checkboxesData2.map(({ id, name, label }) => (
                        <div
                          className="flex mt-2 gap-x-3 text-xs px-4"
                          key={Math.random()}
                        >
                          <input
                            type="checkbox"
                            id={id}
                            name={name}
                            className="border-gray-300"
                            checked={selectedValue === name}
                            onChange={handleYesOrNOChange}
                          />
                          <label htmlFor={id} className="text-[#334B4F]">
                            {label}
                          </label>
                        </div>
                      ))}{" "}
                    </div>
                  </div>

                  <div className="mt-10">
                    <button className=" duration-300 bg-[#0898AF] hover:bg-[#1b4045] w-full  px-[6.5rem] lg:px-[13rem] py-3 rounded-full text-sm text-white font-medium">
                      Submit
                    </button>
                  </div>
                </form> */}
                <iframe
                  title="Airtable Embed"
                  className="airtable-embed"
                  src="https://airtable.com/embed/appGWQafX9c1hZULp/shr1g8Hp918O9iD9F?backgroundColor=yellow"
                  frameBorder="0"
                  width="100%"
                  height="533"
                  style={{
                    background: "transparent",
                    border: "1px solid #ccc",
                  }}
                  sandbox="allow-same-origin allow-scripts allow-popups"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
