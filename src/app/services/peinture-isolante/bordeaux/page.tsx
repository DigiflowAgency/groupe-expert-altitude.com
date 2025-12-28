import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bordeaux avec ses solutions de peinture isolante de dernière génération. Nos techniques inn',
  keywords: 'peinture isolante bordeaux, peinture thermique bordeaux, peinture isolante toiture bordeaux, thermo reflect bordeaux, peinture reflechissante bordeaux, cool roof bordeaux',
};

export default function PeintureIsolanteBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Bordeaux avec ses solutions de peinture isolante de dernière génération. Nos techniques innovantes permettent aux propriétaires bordelais de réduire significativement leurs dépenses énergétiques tout en améliorant le confort de leur habitat.</p>

        <h2>Nos services de peinture isolante thermique a Bordeaux</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et écologique pour protéger et optimiser votre patrimoine immobilier. Nous utilisons des technologies Thermo Reflect de pointe qui réfléchissent jusqu&apos;à 90% des rayonnements solaires, créant une barrière thermique efficace. Notre processus d&apos;application comprend un diagnostic précis, une préparation de surface méticuleuse et l&apos;utilisation de peintures réfléchissantes spécialement conçues pour les toitures et façades. Ces revêtements haute performance permettent de réduire jusqu&apos;à 30% des déperditions thermiques, offrant une solution durable et économique pour les propriétaires bordelais soucieux de leur consommation énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale à Bordeaux, techniciens certifiés, solutions 100% personnalisées. Nous garantissons une intervention rapide, un diagnostic précis et des techniques d&apos;application conformes aux dernières normes environnementales. Notre engagement qualité se traduit par des matériaux premium, une intervention sur-mesure et une efficacité énergétique immédiate.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, rapidement rentabilisé par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 15°C la température intérieure en été et limiter les déperditions thermiques de 25-30% en hiver. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de la peinture Thermo Reflect en 2 couches croisées avec un matériel professionnel. La préparation représente 70% de la réussite du projet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Bordeaux ?
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
