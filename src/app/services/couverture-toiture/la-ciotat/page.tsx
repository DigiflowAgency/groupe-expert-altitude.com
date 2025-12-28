import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a La Ciotat | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à La Ciotat. Spécialistes des travaux de toiture depuis',
  keywords: 'couverture toiture la ciotat, renovation toiture la ciotat, reparation toiture la ciotat, couvreur la ciotat, refection toiture la ciotat, entreprise couverture la ciotat',
};

export default function CouvertureToitureLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à La Ciotat. Spécialistes des travaux de toiture depuis plus de 15 ans, nous protégeons et embelissons votre habitat avec un savoir-faire artisanal et des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a La Ciotat</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture couvre l&apos;intégralité des interventions, depuis les réparations ponctuelles jusqu&apos;à la rénovation complète de toiture. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles, locaux professionnels - en utilisant des matériaux de haute qualité parfaitement adaptés au climat méditerranéen de La Ciotat. Notre approche technique privilégie la durabilité, l&apos;isolation thermique et l&apos;esthétique, avec des solutions garantissant une protection optimale contre les intempéries. Chaque chantier fait l&apos;objet d&apos;un diagnostic précis, d&apos;un devis détaillé et d&apos;une intervention methodologique par nos couvreurs certifiés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de 12 couvreurs expérimentés
✓ Interventions rapides sous 48h
✓ Garantie décennale et assurance professionnelle
✓ Devis gratuit et personnalisé
✓ Techniques respectueuses de l&apos;environnement
✓ Connaissance approfondie des normes techniques locales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à La Ciotat varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permettra d&apos;établir un budget exact, avec possibilité de financements et aides.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes comme infiltrations, tuiles cassées, mousses, déformations ou isolation défectueuse. Un expert peut réaliser un diagnostic complet pour évaluer l&apos;état réel de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié, disposant de la qualification RGE, d&apos;une assurance décennale, avec des références vérifiables. Demandez plusieurs devis détaillés, comparez les prestations et vérifiez l&apos;expérience locale du professionnel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a La Ciotat ?
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
