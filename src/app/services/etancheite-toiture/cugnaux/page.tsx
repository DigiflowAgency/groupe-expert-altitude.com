import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Cugnaux | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Cugnaux, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations depuis p',
  keywords: 'etancheite toiture cugnaux, etancheite toit terrasse cugnaux, etancheite toiture terrasse cugnaux, reparation etancheite cugnaux, entreprise etancheite cugnaux, fuite toiture terrasse cugnaux',
};

export default function EtancheiteToitureCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Cugnaux, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations depuis plus de 15 ans. Nos solutions sur mesure garantissent une protection durable pour les toitures de l&apos;agglomération toulousaine.</p>

        <h2>Nos services de étanchéité toiture terrasse a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux problématiques spécifiques des bâtiments résidentiels et professionnels de Cugnaux et ses environs. Notre approche technique commence par un diagnostic précis, utilisant des technologies de détection infrarouge pour identifier les moindres points faibles. Nous intervenons sur tous types de supports : béton, membrane synthétique, multicouche bitumineuse, avec des techniques adaptées à chaque configuration. Notre processus inclut un nettoyage approfondi, la préparation des surfaces, l&apos;application de résines spécialisées et un contrôle qualité rigoureux garantissant une étanchéité optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts différenciants : une expertise locale de proximité, des techniciens certifiés avec plus de 500 chantiers réalisés, des matériaux haute performance garantis 10 ans, un devis sous 48h et une intervention rapide. Nous sommes le partenaire de confiance pour protéger votre toiture terrasse contre tous les risques d&apos;infiltration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un appartement standard à Cugnaux, comptez un budget moyen de 3 000€ à 6 000€. Un diagnostic précis permettra d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite sur une toiture terrasse incluent des traces d&apos;humidité sur les plafonds, des auréoles jaunâtres, des décollements de peinture, des moisissures ou des infiltrations lors de fortes pluies. Notre diagnostic thermique permet de localiser précisément les zones de faiblesse avec une précision de 95%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. Nos solutions utilisent des membranes garanties 10 ans, avec un entretien annuel qui peut prolonger significativement cette durée. Un contrôle régulier tous les 2-3 ans est recommandé pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Cugnaux ?
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
