import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Villeurbanne et dans la métropole lyonnaise. Spécialist',
  keywords: 'etancheite toiture villeurbanne, etancheite toit terrasse villeurbanne, etancheite toiture terrasse villeurbanne, reparation etancheite villeurbanne, entreprise etancheite villeurbanne, fuite toiture terrasse villeurbanne',
};

export default function EtancheiteToitureVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Villeurbanne et dans la métropole lyonnaise. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques de l&apos;habitat urbain villeurbannais. Nous intervenons sur tous types de structures - résidentielles, commerciales et industrielles - en utilisant des membranes haute performance garantissant une protection totale contre l&apos;humidité. Notre processus commence par un diagnostic précis via des techniques de détection thermique et radar, permettant d&apos;identifier les zones fragiles avec une précision de 95%. Nous proposons ensuite des solutions personnalisées, qu&apos;il s&apos;agisse de rénovation complète ou de réparations ciblées, en privilégiant des matériaux écologiques et résistants aux conditions climatiques rhônalpines.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience moyenne. Nous garantissons une intervention sous 48h, un devis gratuit et détaillé, et proposons une garantie décennale sur tous nos travaux d&apos;étanchéité. Notre approche sur-mesure et notre engagement qualité font de nous le leader local de l&apos;étanchéité de toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, l&apos;état initial et les matériaux utilisés. Pour un appartement standard à Villeurbanne, comptez un budget moyen de 3500€ à 6000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez des signes comme des taches d&apos;humidité sur les plafonds, des moisissures, des déformations ou des écoulements anormaux. Nos experts utilisent des caméras thermiques et des tests d&apos;infiltrométrie pour localiser précisément les zones endommagées avec un taux de réussite de 98%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans. Nos solutions utilisent des membranes garanties 20 ans, avec un entretien annuel qui peut prolonger significativement cette durée de vie. Un diagnostic régulier tous les 3-5 ans est recommandé pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Villeurbanne ?
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
