import "./globals.css";

import Footer from "../components/Footer";

export const metadata = {
  title: "VaziLegal ",
  description: "VaziLegal Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white font-inter ">
        {children}

        <Footer />
      </body>
    </html>
  );
}
