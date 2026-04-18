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
  // No .env or process.env here – Vercel will expose env vars to your frontend as NEXT_PUBLIC_* automatically if you want (see note below)
};

module.exports = nextConfig;
