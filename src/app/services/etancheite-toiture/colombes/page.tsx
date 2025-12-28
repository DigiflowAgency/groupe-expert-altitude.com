import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Colombes | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Colombes, Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dég',
  keywords: 'etancheite toiture colombes, etancheite toit terrasse colombes, etancheite toiture terrasse colombes, reparation etancheite colombes, entreprise etancheite colombes, fuite toiture terrasse colombes',
};

export default function EtancheiteToitureColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Colombes, Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos solutions sur mesure garantissent une protection durable et performante pour tous vos espaces extérieurs.</p>

        <h2>Nos services de étanchéité toiture terrasse a Colombes</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des bâtiments résidentiels et professionnels de Colombes et ses environs. Nous intervenons avec des techniques professionnelles utilisant des membranes synthétiques haute résistance, appliquées selon les normes techniques les plus exigeantes. Notre processus comprend un diagnostic précis, un traitement adapté à chaque configuration et une mise en œuvre rigoureuse qui assure une protection contre l&apos;eau, les UV et les variations climatiques. Nos équipes maîtrisent les techniques modernes d&apos;étanchéification, permettant de transformer une toiture vulnérable en surface parfaitement sécurisée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale confirmée à Colombes depuis 15 ans
• Techniciens certifiés et formés aux dernières technologies
• Devis gratuit et personnalisé sous 48h
• Garantie décennale sur tous nos travaux d&apos;étanchéité
• Solutions écologiques et économiques
• Intervention rapide sur tout le département des Hauts-de-Seine</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, les matériaux et la complexité technique. Pour une terrasse moyenne de 30m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic précis permettra de définir un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Des zones de stagnation d&apos;eau, des fissures visibles ou des déformations suspectes nécessitent une expertise professionnelle immédiate.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. Les matériaux modernes comme les membranes synthétiques offrent une durabilité supérieure. Un contrôle annuel et des réparations ponctuelles permettent de prolonger significativement cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Colombes ?
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
