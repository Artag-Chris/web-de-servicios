import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: [
            'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            'img.youtube.com',
            'res.cloudinary.com',
            'images.unsplash.com'
        ],
    },
};

export default nextConfig;