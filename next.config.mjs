/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "http",
        hostname: "localhost",
        port: "1337",
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
