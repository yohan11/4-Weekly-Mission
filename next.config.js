/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['jasonwatmore.com', 'codeit-images.codeit.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bootcamp-api.codeit.kr',
        port: '',
        pathname: '/api/**', //**는 해당 경로 뒤에 모든 경로,

      }
    ]
  }
}

module.exports = nextConfig
