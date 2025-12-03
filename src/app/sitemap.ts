import { MetadataRoute } from 'next';
import servicesData from '@/data/services.json';
import citiesData from '@/data/cities.json';
import serviceKeywordsData from '@/data/service-keywords.json';
import { getAllBlogPosts } from '@/lib/googleSheets/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://groupe-expert-altitude.fr';
  const currentDate = new Date();

  // Pages statiques
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
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
    {
      url: `${baseUrl}/panneaux-photovoltaiques/particuliers`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/panneaux-photovoltaiques/professionnels`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Pages services - extraire tous les services de toutes les catégories
  const allServices = servicesData.flatMap((category) => category.services);
  const servicePages = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Pages villes SEO
  const cityPages = citiesData.map((city) => ({
    url: `${baseUrl}/gea-${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pages blog
  const blogPosts = await getAllBlogPosts();
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Pages SEO service + ville (1100 pages)
  const serviceVillePages: MetadataRoute.Sitemap = [];
  for (const service of serviceKeywordsData.services) {
    for (const city of citiesData) {
      serviceVillePages.push({
        url: `${baseUrl}/${service.slug}-${city.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages, ...serviceVillePages];
}
