import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
    reactStrictMode: true,
    
    // Experimental features para melhor performance
    experimental: {
        optimizePackageImports: [
            '@mui/material',
            '@mui/icons-material',
            'framer-motion',
            'styled-components'
        ],
    },

    compiler: {
        styledComponents: true,
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Configuração de imagens otimizada
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 dias
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

    // Headers de performance
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin'
                    }
                ]
            }
        ];
    },
};

export default withBundleAnalyzer(nextConfig);
