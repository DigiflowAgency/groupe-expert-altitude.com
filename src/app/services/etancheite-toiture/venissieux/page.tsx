import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Vénissieux | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Vénissieux, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et le',
  keywords: 'etancheite toiture vénissieux, etancheite toit terrasse vénissieux, etancheite toiture terrasse vénissieux, reparation etancheite vénissieux, entreprise etancheite vénissieux, fuite toiture terrasse vénissieux',
};

export default function EtancheiteToitureVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Vénissieux, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos solutions sur-mesure garantissent une protection durable et performante pour tous vos toits terrasses.</p>

        <h2>Nos services de étanchéité toiture terrasse a Vénissieux</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité de votre bâtiment. Notre équipe hautement qualifiée intervient sur l&apos;ensemble de la métropole lyonnaise, avec une expertise particulière à Vénissieux et ses environs. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et les zones potentiellement sensibles. Notre processus comprend un traitement complet : préparation de surface, application de membranes spécialisées, et finition technique garantissant une imperméabilité totale. Nos techniques innovantes permettent de traiter les toitures neuves comme les rénovations complexes, avec un taux de satisfaction de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service premium. Notre différence ? Une expertise de plus de 15 ans, des techniciens certifiés, un matériel de dernière génération et des solutions 100% personnalisées. Nous proposons des garanties décennales, un devis gratuit sous 48h et une intervention rapide sur Vénissieux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour un projet moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€ hors taxes.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations récurrentes, moisissures, décoloration des peintures ou matériaux. Un professionnel utilisera des tests d&apos;étanchéité spécifiques comme la méthode de la cuve ou la thermographie infrarouge pour localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie moyenne d&apos;une étanchéité de toiture terrasse bien réalisée est de 15 à 25 ans. Cette longévité dépend de plusieurs facteurs : qualité des matériaux, technique de pose, entretien régulier et exposition aux conditions climatiques. Un suivi annuel permet de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Vénissieux ?
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
