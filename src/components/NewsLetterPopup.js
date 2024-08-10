// components/NewsletterPopup.js

import { useState, useEffect } from "react";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show the pop-up after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
          <div className="relative bg-[#0898AF]/90 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-lg w-full max-w-4xl mx-auto animate-slideUpAndFadeIn">
            {/* Background SVG */}
            <img
              src="mailicon.svg"
              alt="Background"
              className="absolute bottom-0 right-0 w-32 md:w-64 lg:w-[34rem] opacity-70 z-[-1] pointer-events-none"
            />
            <div className="flex flex-col md:flex-col items-start md:items-start justify-between">
              <div className="mb-4 md:mb-0 md:mr-6">
                <h2 className="text-4xl text-[rgb(255,255,255)] font-extrabold mb-4 w-[17rem]">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-sm md:text-base text-[rgba(255,255,255,0.79)] mb-6 md:w-[28rem]">
                  Receive notifications regarding blog entries, company events,
                  announcements, and materials from the founders.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="px-3 py-2 bg-[rgba(0,71,80,0.31)] text-[rgba(255,255,255,0.79)] rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-[#004750]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#004750] duration-150 text-white rounded-3xl text-sm hover:bg-[#004750d9] focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <button
              className="absolute top-2 right-2 md:top-3 md:right-5 text-2xl text-white/80 hover:text-white focus:outline-none"
              onClick={handleClose}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsletterPopup;
