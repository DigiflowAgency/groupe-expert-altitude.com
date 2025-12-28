import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Lyon | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la déperdition énergétique avec le Groupe Expert Altitude Com, spécialiste de la peinture isolante thermique à Lyon. No',
  keywords: 'peinture isolante lyon, peinture thermique lyon, peinture isolante toiture lyon, thermo reflect lyon, peinture reflechissante lyon, cool roof lyon',
};

export default function PeintureIsolanteLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la déperdition énergétique avec le Groupe Expert Altitude Com, spécialiste de la peinture isolante thermique à Lyon. Nos technologies innovantes transforment vos bâtiments en boucliers thermiques, garantissant un confort optimal et des économies substantielles.</p>

        <h2>Nos services de peinture isolante thermique a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique révolutionne l&apos;isolation de vos espaces à Lyon et ses environs. Utilisant des technologies de pointe comme Thermo Reflect, nous appliquons des revêtements haute performance qui réfléchissent jusqu&apos;à 85% des rayons solaires. Cette solution unique permet de réduire jusqu&apos;à 30% des coûts énergétiques, en régulant efficacement la température intérieure des toitures, façades et murs. Notre processus comprend un diagnostic précis, une préparation de surface méticuleuse et une application professionnelle par nos techniciens certifiés, qui garantissent une protection durable et une efficacité énergétique maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence lyonnaise en isolation thermique. Notre expertise de plus de 15 ans, nos certifications RGE, notre utilisation exclusive de produits écologiques et notre engagement qualité font de nous le partenaire idéal. Nous proposons un service sur-mesure, des devis transparents et une intervention rapide sur toute la métropole lyonnaise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 30€ et 80€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 3000€ et 6000€, rapidement amorti par les économies énergétiques générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 15°C la température intérieure en été et améliorer l&apos;isolation en hiver. Sa technologie de réflexion solaire et ses propriétés isolantes en font une solution concrète et performante.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire adapté, puis pose de 2 couches de peinture réfléchissante avec des outils professionnels. Un séchage de 24h est recommandé entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Lyon ?
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
