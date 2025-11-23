/** @type {import('next').NextConfig} */
const nextConfig = {
  // Target modern browsers to reduce polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-flow.fr',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    // Optimize image quality/size ratio
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
