/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "jasonwatmore.com",
      "codeit-images.codeit.com",
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "tanstack.com",
      "storybook.js.org",
      "testing-library.com",
      "*.*",
      "static.cdninstagram.com",
      "s.pstatic.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bootcamp-api.codeit.kr",
        port: "",
        pathname: "/api/**", //**는 해당 경로 뒤에 모든 경로,
      },
    ],
  },
};

module.exports = nextConfig;
