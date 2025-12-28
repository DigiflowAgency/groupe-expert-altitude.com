import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Saint-Nazaire et sa région. Spécialistes depuis plus de ',
  keywords: 'etancheite toiture saint-nazaire, etancheite toit terrasse saint-nazaire, etancheite toiture terrasse saint-nazaire, reparation etancheite saint-nazaire, entreprise etancheite saint-nazaire, fuite toiture terrasse saint-nazaire',
};

export default function EtancheiteToitureSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Saint-Nazaire et sa région. Spécialistes depuis plus de 15 ans, nous protégeons vos bâtiments contre les infiltrations avec une expertise technique irréprochable.</p>

        <h2>Nos services de étanchéité toiture terrasse a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des constructions locales de Saint-Nazaire. Nous intervenons sur tous types de surfaces - résidentielles, commerciales et industrielles - en utilisant les techniques les plus récentes. Notre processus commence par un diagnostic précis grâce à des technologies d&apos;imagerie thermique permettant de détecter les moindres faiblesses d&apos;étanchéité. Nous proposons ensuite des solutions sur-mesure, qu&apos;il s&apos;agisse de réparations ponctuelles ou d&apos;une réfection complète, en garantissant une imperméabilité totale et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Saint-Nazaire
• Techniciens certifiés et formés aux dernières normes
• Diagnostic gratuit et devis détaillé sous 48h
• Matériaux haute performance avec garantie décennale
• Intervention rapide et adaptée à chaque configuration de toit</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la superficie, l&apos;état actuel et les matériaux choisis. Pour une surface moyenne de 50m², comptez un budget entre 2500€ et 7500€ avec une intervention complète et professionnelle.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures, des déformations ou des zones de stagnation d&apos;eau. Un professionnel utilisera des tests d&apos;étanchéité spécifiques comme l&apos;imagerie thermique ou le test à l&apos;eau pour identifier précisément l&apos;origine des désordres.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. Les matériaux modernes comme les membranes synthétiques ou les résines spéciales offrent une durabilité et une résistance supérieures aux anciennes techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Saint-Nazaire ?
          Demandez votre devis gratuit.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Demander un devis gratuit
        </a>
      </section>
    </main>
  );
}
