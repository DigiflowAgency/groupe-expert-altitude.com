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
      // Peinture réflective → Cool Roof
      {
        source: '/peinture-reflective-strasbourg',
        destination: '/professionnels/services/cool-roof/strasbourg',
        permanent: true,
      },
      {
        source: '/peinture-reflective-bordeaux',
        destination: '/professionnels/services/cool-roof/bordeaux',
        permanent: true,
      },
      {
        source: '/peinture-reflective-paris',
        destination: '/professionnels/services/cool-roof/paris',
        permanent: true,
      },
      // Cool Roof
      {
        source: '/cool-roof-lyon',
        destination: '/professionnels/services/cool-roof/lyon',
        permanent: true,
      },
      {
        source: '/cool-roof-nice',
        destination: '/professionnels/services/cool-roof/nice',
        permanent: true,
      },
      {
        source: '/cool-roof-lille',
        destination: '/professionnels/services/cool-roof/lille',
        permanent: true,
      },
      {
        source: '/cool-roof-bordeaux',
        destination: '/professionnels/services/cool-roof/bordeaux',
        permanent: true,
      },
      // Film solaire vitrage → Cool Roof
      {
        source: '/film-solaire-vitrage-marseille',
        destination: '/professionnels/services/cool-roof/marseille',
        permanent: true,
      },
      {
        source: '/film-solaire-vitrage-strasbourg',
        destination: '/professionnels/services/cool-roof/strasbourg',
        permanent: true,
      },
      {
        source: '/film-solaire-vitrage-nice',
        destination: '/professionnels/services/cool-roof/nice',
        permanent: true,
      },
      {
        source: '/film-solaire-vitrage-bordeaux',
        destination: '/professionnels/services/cool-roof/bordeaux',
        permanent: true,
      },
      // Vernis réflectif vitrage → Cool Roof
      {
        source: '/vernis-reflectif-vitrage-lille',
        destination: '/professionnels/services/cool-roof/lille',
        permanent: true,
      },
      {
        source: '/vernis-reflectif-vitrage-rennes',
        destination: '/professionnels/services/cool-roof/rennes',
        permanent: true,
      },
      // Nettoyage vitrage hauteur → Cordiste
      {
        source: '/nettoyage-vitrage-hauteur-nantes',
        destination: '/professionnels/services/cordiste/nantes',
        permanent: true,
      },
      // Descente eaux pluviales → Gouttière
      {
        source: '/descente-eaux-pluviales-lille',
        destination: '/professionnels/services/gouttiere/lille',
        permanent: true,
      },
      {
        source: '/descente-eaux-pluviales-rennes',
        destination: '/professionnels/services/gouttiere/rennes',
        permanent: true,
      },
      {
        source: '/descente-eaux-pluviales-saint-etienne',
        destination: '/professionnels/services/gouttiere/saint-etienne',
        permanent: true,
      },
      {
        source: '/descente-eaux-pluviales-toulouse',
        destination: '/professionnels/services/gouttiere/toulouse',
        permanent: true,
      },
      // Colonne assainissement → Gouttière
      {
        source: '/colonne-assainissement-toulouse',
        destination: '/professionnels/services/gouttiere/toulouse',
        permanent: true,
      },
      {
        source: '/colonne-assainissement-nice',
        destination: '/professionnels/services/gouttiere/nice',
        permanent: true,
      },
      {
        source: '/colonne-assainissement-saint-etienne',
        destination: '/professionnels/services/gouttiere/saint-etienne',
        permanent: true,
      },
      {
        source: '/colonne-assainissement-marseille',
        destination: '/professionnels/services/gouttiere/marseille',
        permanent: true,
      },
      {
        source: '/colonne-assainissement-paris',
        destination: '/professionnels/services/gouttiere/paris',
        permanent: true,
      },
      // Maintenance bâtiment → Cordiste
      {
        source: '/maintenance-batiment-nice',
        destination: '/professionnels/services/cordiste/nice',
        permanent: true,
      },
      {
        source: '/maintenance-batiment-montpellier',
        destination: '/professionnels/services/cordiste/montpellier',
        permanent: true,
      },
      {
        source: '/maintenance-batiment-saint-etienne',
        destination: '/professionnels/services/cordiste/saint-etienne',
        permanent: true,
      },
      {
        source: '/maintenance-batiment-lille',
        destination: '/professionnels/services/cordiste/lille',
        permanent: true,
      },
      // Terrasse sur plots → Terrasse bois (particuliers)
      {
        source: '/terrasse-sur-plots-nice',
        destination: '/particuliers/services/terrasse-bois/nice',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
