/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    // Bozuk .next/cache/webpack pack dosyalarını önler
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
