import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    compiler: {
        styledComponents: true,
    },

    images: {
        domains: ["avatars.githubusercontent.com", "github-readme-stats.vercel.app", "https://zurke-innovation.s3.us-east-1.amazonaws.com"], // Adicione o domínio desejado
    },
};

export default nextConfig;
