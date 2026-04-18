/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.giphy.com',
      'images.unsplash.com',
      'cdn.example.com',
    ],
  },
  // It's safe to keep the env block, as Next will inject at build time,
  // but don't directly access env vars outside this block during build.
  env: {
    GROQ_API_BASE: process.env.GROQ_API_BASE || 'https://api.groq.com',
    GROQ_API_KEY: process.env.GROQ_API_KEY || '', // Leave blank if not set
  },
};

module.exports = nextConfig;
