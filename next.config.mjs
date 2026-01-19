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

  // Redirections 301 pour préserver le SEO des anciennes URLs
  async redirects() {
    return [
      // Patterns dynamiques pour anciennes URLs par ville
      { source: '/peinture-reflective-:ville', destination: '/professionnels/services/cool-roof/:ville', permanent: true },
      { source: '/cool-roof-:ville', destination: '/professionnels/services/cool-roof/:ville', permanent: true },
      { source: '/film-solaire-vitrage-:ville', destination: '/professionnels/services/cool-roof/:ville', permanent: true },
      { source: '/vernis-reflectif-vitrage-:ville', destination: '/professionnels/services/cool-roof/:ville', permanent: true },
      { source: '/nettoyage-vitrage-hauteur-:ville', destination: '/professionnels/services/cordiste/:ville', permanent: true },
      { source: '/descente-eaux-pluviales-:ville', destination: '/professionnels/services/gouttiere/:ville', permanent: true },
      { source: '/colonne-assainissement-:ville', destination: '/professionnels/services/gouttiere/:ville', permanent: true },
      { source: '/maintenance-batiment-:ville', destination: '/professionnels/services/cordiste/:ville', permanent: true },
      { source: '/terrasse-sur-plots-:ville', destination: '/particuliers/services/terrasse-bois/:ville', permanent: true },
      { source: '/gouttiere-:ville', destination: '/professionnels/services/gouttiere/:ville', permanent: true },
      // Anciennes pages de catégories/services
      { source: '/categories/traitements-thermiques', destination: '/professionnels/services/peintures-isolantes', permanent: true },
      { source: '/services/colonnes-assainissement', destination: '/professionnels/services/eaux-pluviales', permanent: true },
      { source: '/services/etudes-techniques-securisation-photovoltaique', destination: '/professionnels/services/photovoltaique', permanent: true },
      { source: '/services/reseaux-assainissement', destination: '/professionnels/services/eaux-pluviales', permanent: true },
    ];
  },
};

export default nextConfig;
