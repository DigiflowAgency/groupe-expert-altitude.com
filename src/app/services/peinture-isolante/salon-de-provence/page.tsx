import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Salon-d',
  keywords: 'peinture isolante salon-de-provence, peinture thermique salon-de-provence, peinture isolante toiture salon-de-provence, thermo reflect salon-de-provence, peinture reflechissante salon-de-provence, cool roof salon-de-provence',
};

export default function PeintureIsolanteSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions thermiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Salon-de-Provence. Nous transformons vos toitures et murs en boucliers thermiques performants, garantissant confort et économies d&apos;énergie.</p>

        <h2>Nos services de peinture isolante thermique a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation. Spécialisés dans les solutions Thermo Reflect, nous appliquons des revêtements haute performance qui réfléchissent jusqu&apos;à 90% des rayons solaires. Pour les habitants de Salon-de-Provence, nous proposons une intervention sur mesure, adaptée à chaque type de surface - toitures, façades, murs extérieurs. Notre processus démarre par un diagnostic précis, suivi d&apos;une préparation minutieuse des surfaces, puis de l&apos;application de peintures certifiées qui réduisent jusqu&apos;à 30% des coûts de climatisation et de chauffage. Nos techniciens maîtrisent les techniques de Cool Roof et utilisent exclusivement des produits écologiques et durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : une expertise de plus de 15 ans, des certifications professionnelles, un diagnostic thermique offert, des produits garantis 10 ans, et une intervention rapide sur Salon-de-Provence et ses environs. Nous sommes votre partenaire performance énergétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la complexité de la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C, diminuer les déperditions thermiques de 30% et prolonger la durée de vie des supports traités. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture Thermo Reflect avec un rouleau ou un pistolet spécifique. La température et l&apos;humidité doivent être contrôlées pendant l&apos;application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Salon-de-Provence ?
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
