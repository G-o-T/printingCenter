/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.unsplash.com",
                port: '',
                pathname: '/photos/**',
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: '',
                pathname: '**',
            },
        ],
    },
    reactStrictMode: true,
    swcMinify: false
};

export default nextConfig;
