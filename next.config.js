/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SERVER_URL: process.env.API_SERVER_URL
  },
  images: {
    domains: ['127.0.0.1'],
  },
}

module.exports = nextConfig
