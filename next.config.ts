import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
