import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Hero from '@/components/sections/Hero';

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return servicesData.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const category = servicesData.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: 'Catégorie non trouvée',
    };
  }

  return {
    title: `${category.category} | Groupe Expert Altitude`,
    description: category.description,
    openGraph: {
      title: `${category.category} | Groupe Expert Altitude`,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: { params: Params }) {
  const category = servicesData.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: category.category, href: `/categories/${category.slug}` },
  ];

  return (
    <>
      <Hero
        title={category.category}
        subtitle={category.icon}
        description={category.description}
        ctaPrimary={{
          text: 'Demander un devis',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Tous nos services',
          href: '/services',
        }}
        backgroundImage={category.backgroundImage}
        height="medium"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Info */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 bg-gea-blue/10 rounded-full">
                <span className="text-4xl">{category.icon}</span>
                <span className="text-gea-blue font-semibold text-sm uppercase tracking-wide">
                  {category.services.length} services disponibles
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gea-black mb-6">
                Nos services en {category.category}
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <article
                  key={service.slug}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gea-blue/30 group"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-gea-blue to-gea-blue/80 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {service.excerpt}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gea-black mb-3">
                          Caractéristiques :
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                              <svg
                                className="w-5 h-5 text-gea-blue flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="block w-full text-center bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-all group-hover:scale-105"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center bg-gradient-to-br from-gea-blue/10 to-gea-blue/5 rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-gea-black mb-4">
                Besoin d'un devis personnalisé ?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Nos experts sont à votre disposition pour étudier votre projet et vous proposer une solution adaptée à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105 shadow-lg shadow-gea-blue/30"
                >
                  Demander un devis gratuit
                </Link>
                <a
                  href="tel:0972143065"
                  className="bg-white text-gea-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all border-2 border-gea-blue flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  09 72 14 30 65
                </a>
              </div>
            </div>

            {/* Related Categories */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gea-black mb-8 text-center">
                Découvrez nos autres catégories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {servicesData
                  .filter((cat) => cat.slug !== category.slug)
                  .map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-gea-blue hover:shadow-lg transition-all group"
                    >
                      <span className="text-4xl group-hover:scale-110 transition-transform">
                        {cat.icon}
                      </span>
                      <span className="text-sm font-semibold text-gea-black text-center group-hover:text-gea-blue transition-colors">
                        {cat.category}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
