export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
}

export interface City {
  slug: string;
  name: string;
  region: string;
  department: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image?: string;
  publishedAt: string;
  author: string;
  category: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
}
