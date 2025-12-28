import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Marignane | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référence en étanchéité de toiture terrasse à Marignane et dans toute la région Provence-Alpes-Côte d&apos;Az',
  keywords: 'etancheite toiture marignane, etancheite toit terrasse marignane, etancheite toiture terrasse marignane, reparation etancheite marignane, entreprise etancheite marignane, fuite toiture terrasse marignane',
};

export default function EtancheiteToitureMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référence en étanchéité de toiture terrasse à Marignane et dans toute la région Provence-Alpes-Côte d&apos;Azur. Spécialistes des solutions techniques depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau.</p>

        <h2>Nos services de étanchéité toiture terrasse a Marignane</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des constructions locales, en utilisant des techniques et matériaux adaptés au climat méditerranéen. Nous intervenons sur tous types de surfaces : immeubles, pavillons, locaux commerciaux et industriels à Marignane. Notre processus débute par un diagnostic précis grâce à des techniques de détection infrarouge et d&apos;imagerie thermique, permettant de localiser avec une précision de 95% les zones potentiellement fragiles. Nos équipes utilisent uniquement des membranes d&apos;étanchéité haute performance, garantissant une protection durable contre les infiltrations et les variations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 250 chantiers réalisés à Marignane
- Techniciens certifiés et formés aux dernières normes d&apos;étanchéité
- Devis gratuit et diagnostic complet sous 48h
- Garantie décennale et assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état initial et les matériaux choisis. Pour une terrasse moyenne de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic préalable permet de préciser le devis exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration ou boursouflement des peintures, présence de moisissures. Un professionnel utilisera des caméras thermiques et des tests d&apos;étanchéité pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans avec un entretien régulier. Les membranes synthétiques modernes offrent une durabilité supérieure, résistant aux UV, aux variations de température et aux agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Marignane ?
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
