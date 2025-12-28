import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a La Garde | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation de toiture à La Garde et ses environs. Avec plus de 15 ans d&apos;ex',
  keywords: 'couverture toiture la garde, renovation toiture la garde, reparation toiture la garde, couvreur la garde, refection toiture la garde, entreprise couverture la garde',
};

export default function CouvertureToitureLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation de toiture à La Garde et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons votre habitat grâce à des solutions sur-mesure adaptées aux spécificités architecturales de la région.</p>

        <h2>Nos services de couverture et rénovation toiture a La Garde</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation de toiture répondent aux exigences les plus strictes en matière de qualité et de durabilité. Notre équipe de professionnels qualifiés intervient sur tous types de toitures : tuiles, ardoises, zinc ou bac acier. Nous réalisons un diagnostic précis avant chaque intervention, évaluant l&apos;état structural, les éventuelles infiltrations et les besoins spécifiques de votre bâtiment. Notre approche combine technicité et respect des normes environnementales, garantissant une rénovation qui préservera votre patrimoine immobilier pendant des décennies. Sur La Garde, nous intervenons aussi bien pour des particuliers que pour des professionnels, avec une attention constante à la performance énergétique et à l&apos;esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Artisans certifiés et formés en continu
✓ Devis gratuit et transparent sous 48h
✓ Interventions rapides et sur-mesure
✓ Garantie décennale sur tous nos travaux
✓ Solutions innovantes et éco-responsables
✓ Connaissance approfondie des normes locales de construction</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Nous proposons des solutions adaptées à tous les budgets et des financements personnalisés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : tuiles cassées, infiltrations, mousses, déformations structurelles. À La Garde, les conditions climatiques peuvent accélérer la détérioration, nécessitant une vigilance accrue et des inspections régulières.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son assurance décennale, ses références clients, ses avis en ligne. Demandez systématiquement un devis détaillé, comparez plusieurs professionnels et n&apos;hésitez pas à solliciter des recommandations locales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a La Garde ?
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
