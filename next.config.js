/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photo-cdn2.icons8.com",
      },
    ],
  },
};

module.exports = nextConfig;
