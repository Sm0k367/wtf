// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.giphy.com',
      'images.unsplash.com',
      'cdn.example.com', // Add any future asset CDN here
    ],
  },
  env: {
    GROQ_API_BASE: process.env.GROQ_API_BASE,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  },
};

module.exports = nextConfig;
