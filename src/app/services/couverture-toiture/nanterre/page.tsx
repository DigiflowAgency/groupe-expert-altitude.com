import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en couverture et rénovation toiture à Nanterre et dans toute la région parisienne. Avec plus d',
  keywords: 'couverture toiture nanterre, renovation toiture nanterre, reparation toiture nanterre, couvreur nanterre, refection toiture nanterre, entreprise couverture nanterre',
};

export default function CouvertureToitureNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en couverture et rénovation toiture à Nanterre et dans toute la région parisienne. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons vos toitures avec un savoir-faire artisanal et des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Nanterre</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en proposant un diagnostic précis et personnalisé. Notre équipe de professionnels qualifiés réalise un état des lieux complet, identifiant chaque désordre potentiel : infiltrations, tuiles cassées, problèmes d&apos;étanchéité. Nous utilisons uniquement des matériaux de haute qualité, garantissant une rénovation qui protègera durablement votre patrimoine immobilier. Notre process inclut une évaluation technique, un devis détaillé et une intervention methodique respectant les normes en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale reconnue à Nanterre, 2) Des techniciens certifiés et formés en permanence, 3) Des interventions rapides et sur-mesure, 4) Une garantie décennale sur nos travaux. Nous mettons notre savoir-faire technique au service de votre tranquillité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Nanterre coûte entre 150€ et 350€ au m², selon les matériaux et la complexité des travaux. Pour un pavillon standard de 100m², comptez un budget global entre 15 000€ et 35 000€. Nous proposons des devis détaillés et transparents sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou avant si signes de détérioration : infiltrations récurrentes, tuiles déformées, mousses importantes, charpente fragilisée. Un diagnostic précis tous les 10 ans est recommandé pour anticiper les travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : certification RGE, références clients, assurances professionnelles, garantie décennale, devis détaillé, avis en ligne. Chez Groupe Expert Altitude Com, nous fournissons systématiquement ces éléments pour votre tranquillité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Nanterre ?
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
