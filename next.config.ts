import type { NextConfig } from "next";
import webpack from "webpack"; // ✅ Correct import

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.testrigtechnologies.com",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /Application Data/, // ✅ Ignores that specific path
      })
    );
    return config;
  },
};

export default nextConfig;
