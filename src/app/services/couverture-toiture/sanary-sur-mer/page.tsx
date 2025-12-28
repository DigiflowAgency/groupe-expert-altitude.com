import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste de la rénovation et couverture à Sanary-sur-Mer. Nous protégeons votre habit',
  keywords: 'couverture toiture sanary-sur-mer, renovation toiture sanary-sur-mer, reparation toiture sanary-sur-mer, couvreur sanary-sur-mer, refection toiture sanary-sur-mer, entreprise couverture sanary-sur-mer',
};

export default function CouvertureToitureSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste de la rénovation et couverture à Sanary-sur-Mer. Nous protégeons votre habitat avec des solutions sur-mesure qui allient performance technique et esthétique irréprochable.</p>

        <h2>Nos services de couverture et rénovation toiture a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de la région varoise. Nous intervenons sur tous types de bâtiments, des villas traditionnelles aux propriétés contemporaines de Sanary-sur-Mer. Notre équipe de professionnels maîtrise parfaitement les techniques modernes de réfection, en utilisant des matériaux haute durabilité comme les tuiles terres cuites, ardoises et bacs aciers. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis, avec un devis détaillé garantissant transparence et qualité d&apos;intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 15 ans d&apos;expérience
- Interventions rapides sous 48h sur Sanary-sur-Mer
- Garantie décennale sur tous nos travaux
- Solutions techniques personnalisées
- Devis gratuit et sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et complexité. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€ TTC, incluant dépose, fourniture et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme infiltrations, tuiles cassées, déformations, mousses importantes ou après des événements climatiques majeurs. Un diagnostic précis permet d&apos;évaluer l&apos;urgence des travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec références vérifiables, assurances professionnelles, et proposant un diagnostic technique complet. Vérifiez ses certifications, demandez plusieurs devis comparatifs et contactez ses précédents clients si possible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Sanary-sur-Mer ?
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
