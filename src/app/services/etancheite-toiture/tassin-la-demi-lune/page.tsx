import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Tassin-la-Demi-Lune, protège efficacement votre patrimoine immobilier con',
  keywords: 'etancheite toiture tassin-la-demi-lune, etancheite toit terrasse tassin-la-demi-lune, etancheite toiture terrasse tassin-la-demi-lune, reparation etancheite tassin-la-demi-lune, entreprise etancheite tassin-la-demi-lune, fuite toiture terrasse tassin-la-demi-lune',
};

export default function EtancheiteToitureTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en étanchéité de toiture terrasse à Tassin-la-Demi-Lune, protège efficacement votre patrimoine immobilier contre les infiltrations. Nous intervenons sur l&apos;ensemble des toitures terrasses avec une expertise technique garantissant une protection durable et performante.</p>

        <h2>Nos services de étanchéité toiture terrasse a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic précis avant toute intervention, identifiant les zones fragiles et les potentielles sources d&apos;infiltration. Notre méthode comprend un traitement multicouche utilisant des membranes synthétiques haute résistance, adaptées aux contraintes climatiques de la région lyonnaise. Chaque chantier à Tassin-la-Demi-Lune bénéficie d&apos;un traitement personnalisé, avec une attention particulière à l&apos;isolation thermique et à l&apos;étanchéité parfaite. Nos techniciens qualifiés garantissent une intervention propre, rapide et efficace, minimisant les nuisances pour nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans l&apos;étanchéité de toiture
- Intervention rapide sous 48h sur Tassin-la-Demi-Lune et ses environs
- Matériaux de haute qualité avec garantie décennale
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Pour une surface moyenne de 30m², comptez un investissement global entre 2 400€ et 7 500€. Un diagnostic précalable permet un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Un professionnel utilisera des tests d&apos;étanchéité avec caméra thermique et méthode d&apos;infiltrométrie pour localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée a une durée de vie moyenne de 15 à 25 ans. La longévité dépend de la qualité des matériaux, de l&apos;installation et de l&apos;entretien régulier. Un contrôle annuel et des réparations ponctuelles peuvent significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Tassin-la-Demi-Lune ?
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
