import { MetadataRoute } from 'next';
import { villes, servicesPro, servicesParticuliers } from '@/data/seo-locations';
import { getAllBlogPosts } from '@/lib/googleSheets/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://groupe-expert-altitude.fr';
  const currentDate = new Date();

  // Pages statiques principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/professionnels`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/particuliers`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Pages services Professionnels (statiques)
  const servicesProStatiques = [
    {
      url: `${baseUrl}/professionnels/services/photovoltaique`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/professionnels/services/travaux-en-hauteur`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/professionnels/services/peintures-isolantes`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/professionnels/services/eaux-pluviales`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Pages services Particuliers (statiques)
  const servicesParticuliersStatiques = [
    {
      url: `${baseUrl}/particuliers/services/photovoltaique`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/particuliers/services/eaux-pluviales`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/particuliers/services/terrasses`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/particuliers/services/peintures-isolantes`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/particuliers/services/recherche-fuites`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/particuliers/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Pages blog
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogPosts = await getAllBlogPosts();
    blogPages = blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error);
  }

  // Pages SEO Pro: service + ville (9 services x 34 villes = 306 pages)
  const seoProPages: MetadataRoute.Sitemap = [];
  for (const service of servicesPro) {
    for (const ville of villes) {
      seoProPages.push({
        url: `${baseUrl}/professionnels/services/${service.slug}/${ville.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      });
    }
  }

  // Pages SEO Particuliers: service + ville (5 services x 34 villes = 170 pages)
  const seoParticuliersPages: MetadataRoute.Sitemap = [];
  for (const service of servicesParticuliers) {
    for (const ville of villes) {
      seoParticuliersPages.push({
        url: `${baseUrl}/particuliers/services/${service.slug}/${ville.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
      });
    }
  }

  return [
    ...staticPages,
    ...servicesProStatiques,
    ...servicesParticuliersStatiques,
    ...blogPages,
    ...seoProPages,
    ...seoParticuliersPages,
  ];
}
