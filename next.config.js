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
    // Place your GROQ_API_KEY (or other secrets) inside Vercel's dashboard, not here!
    // This is just for clarity if loading env vars locally.
    GROQ_API_BASE: process.env.GROQ_API_BASE,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  },
};

module.exports = nextConfig;
