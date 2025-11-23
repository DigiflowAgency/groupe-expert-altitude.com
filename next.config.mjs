/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-flow.fr',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
