import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      /*{
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/id/**",
      },*/
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
