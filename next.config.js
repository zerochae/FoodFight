/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com", "images.unsplash.com"],
  },
  webpack(config) {
    config.resolve.modules.push(__dirname); // 추가
    return config;
  },
  pageExtensions: ["page.tsx", "page.ts"],
};

module.exports = nextConfig;
