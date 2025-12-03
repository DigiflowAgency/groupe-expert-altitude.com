import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import Breadcrumb from '@/components/ui/Breadcrumb';
import servicesData from '@/data/services.json';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';
import { Metadata } from 'next';

// Helper pour extraire tous les services de toutes les catégories
const getAllServices = () => {
  return servicesData.flatMap((category) =>
    category.services.map(service => ({
      ...service,
      categorySlug: category.slug,
      categoryName: category.category,
    }))
  );
};

export async function generateStaticParams() {
  const allServices = getAllServices();
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const allServices = getAllServices();
  const service = allServices.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service non trouvé',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const allServices = getAllServices();
  const service = allServices.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = allServices.filter((s) =>
    service.relatedServices?.includes(s.slug)
  );

  const breadcrumbItems = [
    { label: 'Services', href: '/services' },
    { label: service.categoryName, href: '/services' },
    { label: service.title, href: `/services/${service.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.description,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Breadcrumb items={breadcrumbItems} />

      <Hero
        title={service.title}
        subtitle={service.categoryName}
        description={service.excerpt}
        ctaPrimary={{
          text: 'Demander un devis',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'Nous appeler',
          href: 'tel:0972143065',
        }}
        backgroundImage={service.image}
        height="medium"
      />

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Image principale */}
            <div className="sticky top-24">
              <div className="h-96 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gea-black mb-6">
                {service.title} professionnel
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>

                <h3 className="text-2xl font-bold text-gea-black mt-8 mb-4">
                  Nos prestations
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-gea-blue mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéos de présentation */}
      {service.videoUrls && service.videoUrls.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gea-blue/5 to-gea-blue/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gea-black text-center mb-4">
              Découvrez notre solution en vidéo
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Visualisez les résultats et l&apos;efficacité de nos traitements
            </p>

            <div className={`grid gap-8 max-w-5xl mx-auto ${service.videoUrls.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-3xl'}`}>
              {service.videoUrls.map((videoUrl: string, index: number) => {
                const videoId = videoUrl.split('v=')[1]?.split('&')[0];
                return (
                  <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`Vidéo ${service.title} ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Avantages */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gea-black text-center mb-12">
              Les avantages de nos services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-gea-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gea-black text-center mb-12">
            Pourquoi choisir Groupe Expert Altitude ?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gea-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">
                Sécurité garantie
              </h3>
              <p className="text-gray-700">
                Respect strict des normes de sécurité. Cordistes certifiés et équipements conformes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gea-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">
                Intervention rapide
              </h3>
              <p className="text-gray-700">
                Disponibilité 7j/7 pour urgences. Équipes réactives et mobiles sur toute l&apos;Île-de-France.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gea-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">
                Expertise technique
              </h3>
              <p className="text-gray-700">
                Plus de 15 ans d&apos;expérience. Solutions adaptées aux problématiques complexes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-gea-blue/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-gea-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gea-black mb-2">
                Équipe professionnelle
              </h3>
              <p className="text-gray-700">
                Personnel qualifié et formé. Approche personnalisée pour chaque projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Détails technique */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gea-black mb-8">
              En détail : {service.title}
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Chez <strong>Groupe Expert Altitude</strong>, notre service de <strong>{service.title}</strong> est conçu pour répondre aux exigences des professionnels les plus exigeants. Avec plus de 15 ans d&apos;expérience, nous maîtrisons parfaitement les techniques et les normes de notre secteur.
              </p>

              <p>
                Que vous gériez des entrepôts, des dépôts, des bâtiments industriels ou des immeubles, nos équipes interviennent rapidement partout en France. Nous proposons des solutions adaptées à chaque contexte, en minimisant l&apos;impact sur votre activité tout en garantissant des résultats durables.
              </p>

              <p>
                La qualité et la sécurité sont au cœur de notre approche. Tous nos intervenants sont certifiés et formés aux dernières techniques. Nous utilisons des équipements conformes aux normes en vigueur et assurons un suivi rigoureux de chaque intervention.
              </p>

              <div className="bg-gea-blue/10 p-6 rounded-xl my-8">
                <h3 className="text-xl font-bold text-gea-black mb-4">
                  Besoin d&apos;un devis pour {service.title} ?
                </h3>
                <p className="mb-4">
                  Contactez-nous dès maintenant pour une évaluation gratuite de vos besoins. Notre équipe se déplace sur site pour établir un diagnostic complet et vous proposer une solution adaptée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-gea-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-blue/90 transition-all text-center"
                  >
                    Demander un devis gratuit
                  </Link>
                  <a
                    href="tel:0972143065"
                    className="inline-block bg-gea-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gea-black/90 transition-all text-center"
                  >
                    Appeler le 09 72 14 30 65
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gea-black mt-8">
                Zones d&apos;intervention
              </h3>
              <p>
                Nous intervenons principalement en{' '}
                <Link href="/gea-ile-de-france" className="text-gea-blue hover:underline">
                  Île-de-France
                </Link>
                , notamment à{' '}
                <Link href="/gea-paris" className="text-gea-blue hover:underline">
                  Paris
                </Link>{' '}
                et dans toute la région parisienne. Nous pouvons également nous déplacer dans d&apos;autres régions pour des projets d&apos;envergure à{' '}
                <Link href="/gea-lyon" className="text-gea-blue hover:underline">
                  Lyon
                </Link>
                ,{' '}
                <Link href="/gea-marseille" className="text-gea-blue hover:underline">
                  Marseille
                </Link>
                ,{' '}
                <Link href="/gea-toulouse" className="text-gea-blue hover:underline">
                  Toulouse
                </Link>{' '}
                et dans toute la France.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services connexes */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gea-black text-center mb-12">
              Services complémentaires
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <div
                  key={relatedService.slug}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="h-48 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={relatedService.image}
                      alt={relatedService.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gea-black mb-3 group-hover:text-gea-blue transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {relatedService.excerpt}
                  </p>
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="text-gea-blue hover:text-gea-blue/80 font-semibold inline-flex items-center gap-2"
                  >
                    En savoir plus
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-gea-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins en {service.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gea-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gea-blue/90 transition-all hover:scale-105"
            >
              Demander un devis gratuit
            </Link>
            <a
              href="tel:0972143065"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
