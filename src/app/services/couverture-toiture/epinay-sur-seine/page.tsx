import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Épinay-sur-Seine et ses environs. Spécialistes depuis',
  keywords: 'couverture toiture épinay-sur-seine, renovation toiture épinay-sur-seine, reparation toiture épinay-sur-seine, couvreur épinay-sur-seine, refection toiture épinay-sur-seine, entreprise couverture épinay-sur-seine',
};

export default function CouvertureToitureEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Épinay-sur-Seine et ses environs. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures résidentielles et commerciales avec un engagement total de qualité et de professionnalisme.</p>

        <h2>Nos services de couverture et rénovation toiture a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de l&apos;habitat moderne. Nos équipes qualifiées réalisent un diagnostic précis avant toute intervention, évaluant l&apos;état structural et les besoins spécifiques de votre toiture. Nous utilisons uniquement des matériaux haute performance garantissant une étanchéité maximale et une durabilité supérieure à 25 ans. Notre processus comprend un audit technique complet, la préparation du support, le remplacement des éléments dégradés et une finition soignée qui protègera efficacement votre bâtiment contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 500 chantiers réalisés à Épinay-sur-Seine
• Devis gratuit et transparent sans surprise
• Équipe de couvreurs hautement qualifiés et formés en permanence
• Garantie décennale sur tous nos travaux de réfection</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux choisis et la complexité du chantier. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€ avec une moyenne de 15 000€ pour un projet standard à Épinay-sur-Seine.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans ou en cas de signes visibles de détérioration comme des fuites, tuiles cassées, infiltrations, mousses ou déformations importantes de la charpente.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son numéro SIRET, ses références clients, ses garanties décennales, ses avis en ligne et demandez plusieurs devis détaillés avant toute décision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Épinay-sur-Seine ?
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
