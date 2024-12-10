import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "github-readme-stats.vercel.app",
            },
            {
                protocol: "https",
                hostname: "zurke-innovation.s3.us-east-1.amazonaws.com",
            },
        ],
    },
};

export default nextConfig;
