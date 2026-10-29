import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/salesforce-vs-hubspot",
        destination: "/hubspot-vs-salesforce",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
