/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: [
    //   "jasonwatmore.com",
    //   "codeit-images.codeit.com",
    //   "codeit-frontend.codeit.com",
    //   "reactjs.org",
    //   "assets.vercel.com",
    //   "tanstack.com",
    //   "storybook.js.org",
    //   "testing-library.com",
    //   "*.*",
    //   "static.cdninstagram.com",
    //   "s.pstatic.net",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
