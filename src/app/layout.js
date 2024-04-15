import './globals.css';

import Footer from '../components/Footer';

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
