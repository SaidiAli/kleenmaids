import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/r2Loader.ts',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "site-contents.aptusagency.com",
        port: "",
        pathname: "/kleen/**",
      },
    ],
  },
};

export default nextConfig;
