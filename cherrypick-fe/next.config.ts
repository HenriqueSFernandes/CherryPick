import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "covers.openlibrary.org",
      //   port: "",
      //   pathname: "/b/id/**",
      // },
      // This is a wildcard pattern that allows any subdomain and path
      // for demonstration purposes.
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
