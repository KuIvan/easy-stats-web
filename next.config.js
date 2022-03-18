/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_SERVER_URL: process.env.API_SERVER_URL
  }
}

module.exports = nextConfig
