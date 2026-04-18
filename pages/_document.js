// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and theme */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0ff" />
        <meta name="description" content="EPIC TECH AI: Ultra-cinematic, next-gen AI homepage. Neon, 8K, and alive!" />
        <meta property="og:title" content="EPIC TECH AI – Ultra-Cinematic AI Homepage" />
        <meta property="og:description" content="Blow minds with an 8K, AI-powered, cinematic tech playground." />
        <meta property="og:image" content="/cinematic-poster.jpg" />
        <meta property="og:url" content="https://the-chat-2.vercel.app" />
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
