/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/apple/:path*.mobileconfig",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename=":path*.mobileconfig"',
          },
          {
            key: "Content-Type",
            value: "application/x-apple-aspen-config",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
