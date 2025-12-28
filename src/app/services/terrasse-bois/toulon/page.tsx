import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Toulon | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime pour transformer votre extérieur à Toulon : une terrasse bois sur plot qui allie élégance et fonctionnalité. Notre expertise G',
  keywords: 'terrasse bois toulon, terrasse sur plot toulon, terrasse bois sur plot toulon, pose terrasse bois toulon, terrasse composite toulon, terrasse bois piscine toulon',
};

export default function TerrasseBoisToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime pour transformer votre extérieur à Toulon : une terrasse bois sur plot qui allie élégance et fonctionnalité. Notre expertise Groupe Expert Altitude Com vous garantit une réalisation sur-mesure qui sublimera votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Toulon</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement. Cette technique innovante permet de créer un espace de vie harmonieux et durable, parfaitement adapté au climat méditerranéen de Toulon. Nos professionnels maîtrisent l&apos;art de la pose sur plots, technique qui offre une isolation thermique optimale et une parfaite gestion des eaux de ruissellement. Chaque projet est étudié méticuleusement pour s&apos;adapter à la configuration unique de votre terrain, qu&apos;il s&apos;agisse d&apos;une surface plane ou en légère pente. Nous utilisons exclusivement des matériaux de haute qualité, bois composite ou bois exotique, garantissant une résistance aux intempéries et une durabilité exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos 15 ans d&apos;expérience à Toulon nous permettent de maîtriser parfaitement les techniques de pose de terrasse bois. Notre équipe certifiée intervient avec un outillage professionnel, offrant un travail précis à 100%. Nous proposons un devis gratuit sous 48h et garantissons une installation sans défaut pendant 5 ans.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un bois composite haut de gamme sera plus onéreux qu&apos;un pin traité, mais offrira une durabilité supérieure. Notre tarification transparente inclut la fourniture des matériaux et la pose complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais comptez en moyenne 2 à 5 jours pour un chantier de 30 à 50 m². Notre équipe optimise chaque intervention pour limiter la gêne et garantir une réalisation rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Toulon, nous recommandons le bois composite ou l&apos;ipé, particulièrement résistants au soleil et à l&apos;humidité. Le composite offre un entretien minimal, tandis que l&apos;ipé apporte un rendu esthétique naturel. Le choix dépendra de votre budget et de vos préférences esthétiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Toulon ?
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
