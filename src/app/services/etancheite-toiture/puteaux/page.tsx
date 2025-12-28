import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Puteaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Puteaux et dans toute la région parisienne. Spécialist',
  keywords: 'etancheite toiture puteaux, etancheite toit terrasse puteaux, etancheite toiture terrasse puteaux, reparation etancheite puteaux, entreprise etancheite puteaux, fuite toiture terrasse puteaux',
};

export default function EtancheiteToiturePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Puteaux et dans toute la région parisienne. Spécialistes des solutions durables, nous protégeons vos bâtiments contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Puteaux</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous intervenons sur tous types de surfaces - résidentielles, commerciales et industrielles - en utilisant des membranes haute performance garantissant une protection optimale. Notre processus débute par un diagnostic précis, réalisé par nos techniciens experts qui identifient chaque point faible potentiel. Nous proposons ensuite une solution sur-mesure, adaptée à la structure spécifique de votre toiture terrasse, en privilégiant des matériaux innovants résistant aux variations climatiques de la région parisienne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe certifiée intervient rapidement à Puteaux, nos interventions bénéficient de 10 ans de garantie décennale, nous utilisons uniquement des matériaux écologiques et nos devis sont transparents sans frais cachés. Plus de 95% de nos clients recommandent nos services.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, la complexité technique et les matériaux choisis. Pour un appartement standard à Puteaux, comptez un budget moyen de 3 500€ à 6 000€ pour une rénovation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou matériaux gondolés. Un professionnel utilisera des tests d&apos;étanchéité précis comme la méthode de la boîte à eau ou la thermographie infrarouge.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans. Notre garantie décennale et l&apos;utilisation de membranes haute technologie assurent une protection prolongée contre les agressions climatiques et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Puteaux ?
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
