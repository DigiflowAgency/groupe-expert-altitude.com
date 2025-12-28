import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Saint',
  keywords: 'peinture isolante saint-denis, peinture thermique saint-denis, peinture isolante toiture saint-denis, thermo reflect saint-denis, peinture reflechissante saint-denis, cool roof saint-denis',
};

export default function PeintureIsolanteSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Saint-Denis. Nous transformons vos bâtiments en véritables boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation urbaine. À Saint-Denis, nous utilisons des solutions innovantes comme le Thermo Reflect, une peinture réfléchissante qui peut réduire jusqu&apos;à 80% des gains thermiques sur les toitures et façades. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et une application professionnelle qui assure une protection durable. Nos techniques permettent de diminuer jusqu&apos;à 35% des coûts énergétiques, tout en améliorant significativement le confort intérieur de vos locaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts certifiés avec plus de 15 ans d&apos;expérience en isolation thermique. Nous garantissons une intervention rapide et précise sur Saint-Denis et ses environs. Utilisation exclusive de matériaux haute performance et écologiques. Devis personnalisé et gratuit, avec un engagement de résultat et de satisfaction.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;état initial et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace, avec des tests démontrant jusqu&apos;à 15°C d&apos;écart de température. Les technologies comme Thermo Reflect réfléchissent jusqu&apos;à 90% des rayons solaires, créant une barrière thermique réelle et mesurable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture requiert 4 étapes : nettoyage approfondi, réparation des éventuelles imperfections, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture réfléchissante avec des outils professionnels. Notre équipe garantit une pose parfaite et durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Saint-Denis ?
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
