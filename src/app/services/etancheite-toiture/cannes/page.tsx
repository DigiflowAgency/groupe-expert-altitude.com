import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Cannes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire référence en étanchéité de toiture terrasse sur Cannes et la Côte d&apos;Azur. Spécialistes reconnus, nous proté',
  keywords: 'etancheite toiture cannes, etancheite toit terrasse cannes, etancheite toiture terrasse cannes, reparation etancheite cannes, entreprise etancheite cannes, fuite toiture terrasse cannes',
};

export default function EtancheiteToitureCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire référence en étanchéité de toiture terrasse sur Cannes et la Côte d&apos;Azur. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec une expertise technique irréprochable et des solutions durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection immobilière. Nous intervenons sur tous types de surfaces - résidentielles, commerciales et industrielles - en utilisant des techniques de pointe et des matériaux haute performance. Notre processus commence par un diagnostic précis où nos techniciens identifient chaque point faible potentiel. Nous réalisons ensuite un traitement complet qui garantit une imperméabilité totale, en utilisant des membranes synthétiques dernière génération ou des résines spécialisées adaptées à chaque configuration. Notre approche sur mesure permet de traiter efficacement les zones sensibles comme les jonctions, les relevés et les points de pénétration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise sur Cannes et sa région
✓ Équipe certifiée et formée aux techniques d&apos;étanchéité les plus récentes
✓ Diagnostic gratuit et devis détaillé sous 48h
✓ Interventions rapides et solutions garanties 10 ans
✓ Respect des normes RT2012 et certifications professionnelles</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ par m², selon la complexité du chantier, l&apos;état initial et les matériaux utilisés. Pour une surface moyenne de 50m², comptez un budget global entre 2 500€ et 7 500€. Nous proposons des devis personnalisés après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur plafonds, infiltrations lors de pluies, décoloration des peintures, moisissures, ou zones de stagnation d&apos;eau. Notre équipe utilise des techniques professionnelles comme la thermographie infrarouge et des tests d&apos;étanchéité pour identifier précisément l&apos;origine des désordres.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. Notre garantie décennale couvre les travaux, et nos solutions utilisent des matériaux haute résistance qui préservent durablement votre toiture terrasse contre les agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Cannes ?
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
