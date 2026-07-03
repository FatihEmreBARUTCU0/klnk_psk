/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

/** Ortak güvenlik header'ları (tüm route'lar) */
const commonSecurityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

/**
 * Kamuya açık site (/, /blog, vb.)
 * Dış kaynaklar: cdn.sanity.io (görseller), images.unsplash.com (placeholder),
 * data: (globals.css noise texture). Google Fonts next/font ile self-host edilir.
 * Sanity API çağrıları sunucu tarafında yapılır; tarayıcı connect-src gerekmez.
 */
const publicCsp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

/**
 * /studio — gömülü Sanity Studio (next-sanity/studio)
 * Studio'nun çalışması için sanity.io / sanity.build domain'leri gerekir.
 */
const studioCsp = [
  "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.sanity.io https://*.sanity.build data: blob:",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.sanity.io https://*.sanity.build",
  "style-src 'self' 'unsafe-inline' https://*.sanity.io",
  "img-src 'self' data: blob: https://cdn.sanity.io https://*.sanity.io",
  "font-src 'self' data: https://*.sanity.io",
  "connect-src 'self' https://*.sanity.io https://*.sanity.build wss://*.sanity.io",
  "frame-src 'self' https://*.sanity.io",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

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
  async headers() {
    return [
      {
        source: "/studio/:path*",
        headers: [
          ...commonSecurityHeaders,
          { key: "Content-Security-Policy", value: studioCsp },
        ],
      },
      {
        source: "/((?!studio).*)",
        headers: [
          ...commonSecurityHeaders,
          { key: "Content-Security-Policy", value: publicCsp },
        ],
      },
    ];
  },
};

export default nextConfig;
