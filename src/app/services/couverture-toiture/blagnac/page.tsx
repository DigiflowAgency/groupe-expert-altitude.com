import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Blagnac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Blagnac et ses environs. Nos experts interviennent ra',
  keywords: 'couverture toiture blagnac, renovation toiture blagnac, reparation toiture blagnac, couvreur blagnac, refection toiture blagnac, entreprise couverture blagnac',
};

export default function CouvertureToitureBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Blagnac et ses environs. Nos experts interviennent rapidement pour protéger et valoriser votre patrimoine immobilier avec des solutions sur-mesure adaptées à chaque type de toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences techniques les plus strictes. Nos professionnels maîtrisent tous les types de matériaux - tuiles, ardoises, zinc - et proposent des interventions complètes allant du diagnostic précis à la réfection totale. Nous utilisons uniquement des matériaux haute qualité garantissant une durabilité minimale de 25 ans. Notre process inclut systématiquement un audit technique gratuit, un devis détaillé et une intervention programmée avec une équipe certifiée. Sur Blagnac, nous comprenons les spécificités climatiques locales qui impactent directement la longévité des toitures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• 15 ans d&apos;expérience en couverture sur la région toulousaine
• Équipe de 12 couvreurs certifiés et formés aux dernières normes
• Garantie décennale sur tous nos travaux
• Interventions rapides sous 48h en cas d&apos;urgence</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Notre expertise permet de vous proposer des solutions financièrement optimisées avec des options de financement adaptées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans ou en cas de signes visibles de dégradation : fuites, tuiles cassées, infiltrations, mousses importantes. Un diagnostic précis tous les 10 ans est fortement conseillé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : la certification RGE, l&apos;existence d&apos;une garantie décennale, les avis clients, et demandez systématiquement un devis détaillé avec descriptif technique précis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Blagnac ?
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
