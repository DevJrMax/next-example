/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    API_HOST: process.env.API_HOST,
    API_PORT: process.env.API_PORT,
  },
};

module.exports = nextConfig;
