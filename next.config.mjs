/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        // protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "admin.associationabaa.org",
        // port: "80",
      },
      {
        // protocol: "http",
        hostname: "146.59.225.149",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
