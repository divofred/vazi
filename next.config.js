/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async redirects() {
    return [
      {
        source: "/library/:path*",
        destination: "https://library.vazilegal.com/:path*",
        permanent: true,
      },
    ];
  },
};
