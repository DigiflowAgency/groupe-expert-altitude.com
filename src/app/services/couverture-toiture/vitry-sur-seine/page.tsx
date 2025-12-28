import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Vitry-sur-Seine, offre des solutions professionnelles pour ',
  keywords: 'couverture toiture vitry-sur-seine, renovation toiture vitry-sur-seine, reparation toiture vitry-sur-seine, couvreur vitry-sur-seine, refection toiture vitry-sur-seine, entreprise couverture vitry-sur-seine',
};

export default function CouvertureToitureVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Vitry-sur-Seine, offre des solutions professionnelles pour protéger et valoriser votre habitat. Nos experts interviennent sur tous types de toitures avec un savoir-faire reconnu dans le Val-de-Marne.</p>

        <h2>Nos services de couverture et rénovation toiture a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences techniques les plus strictes. Notre équipe qualifiée analyse précisément l&apos;état de votre toiture, diagnostique les désordres potentiels et propose des solutions sur-mesure adaptées à chaque configuration. Nous travaillons avec des matériaux haute qualité garantissant une étanchéité optimale et une durabilité jusqu&apos;à 30 ans. Notre processus inclut un audit complet, un devis détaillé transparent et une intervention methodique respectant les normes en vigueur. À Vitry-sur-Seine, nous intervenons aussi bien sur des pavillons individuels que des immeubles collectifs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en couverture dans le Val-de-Marne
✓ Équipe de 12 couvreurs certifiés et formés en permanence
✓ Garantie décennale et assurance professionnelle complète
✓ Devis gratuit et diagnostic technique précis
✓ Interventions rapides sur Vitry-sur-Seine et communes environnantes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 120€ et 250€ au m², selon les matériaux choisis et la complexité des travaux. Pour un pavillon standard de 100m², comptez un budget global entre 12 000€ et 25 000€. Ces tarifs incluent la dépose de l&apos;ancienne couverture, la préparation de la charpente et la pose de nouveaux matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations, isolation défectueuse. Un diagnostic tous les 10 ans permet d&apos;anticiper les réparations et éviter des dégâts structurels plus importants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez obligatoirement : la certification RGE, l&apos;immatriculation au registre du commerce, les références clients, les avis en ligne, la garantie décennale et l&apos;assurance professionnelle. Un professionnel sérieux proposera toujours un diagnostic préalable gratuit et détaillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Vitry-sur-Seine ?
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
