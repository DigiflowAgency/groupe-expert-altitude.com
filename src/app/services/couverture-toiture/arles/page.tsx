import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Arles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Arles et ses environs. Spécialistes des travaux de to',
  keywords: 'couverture toiture arles, renovation toiture arles, reparation toiture arles, couvreur arles, refection toiture arles, entreprise couverture arles',
};

export default function CouvertureToitureArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Arles et ses environs. Spécialistes des travaux de toiture depuis plus de 15 ans, nous intervenons sur tous types de bâtiments avec une expertise technique et un engagement de qualité.</p>

        <h2>Nos services de couverture et rénovation toiture a Arles</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation de toiture répond aux exigences les plus strictes de performance et de durabilité. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale, en utilisant des matériaux haut de gamme adaptés au climat méditerranéen. Chaque chantier à Arles fait l&apos;objet d&apos;une étude technique personnalisée, garantissant une isolation thermique optimale et une protection contre les intempéries. Notre équipe de professionnels qualifiés maîtrise parfaitement les techniques traditionnelles et innovantes, permettant des rénovations qui préservent le patrimoine architectural tout en apportant des solutions techniques modernes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre réactivité et notre engagement qualité. Nos couvreurs sont certifiés RGE, nos devis sont transparents sans frais cachés, et nous proposons une garantie décennale sur tous nos travaux. 95% de nos clients nous recommandent, preuve de notre professionnalisme et de notre satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Arles coûte entre 120€ et 250€ au m², selon la complexité des travaux, les matériaux choisis et l&apos;état initial de la toiture. Pour une maison moyenne de 100m², comptez un budget global entre 12 000€ et 25 000€. Nous proposons des financements et des aides adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs comme des infiltrations récurrentes, des tuiles cassées, une isolation défectueuse ou des déformations structurelles. Un diagnostic précis permet de déterminer le moment optimal des travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours ses certifications RGE, son assurance décennale, ses références clients et demandez plusieurs devis détaillés. Un professionnel sérieux propose un diagnostic technique complet, des délais précis et une transparence totale sur les coûts et les techniques utilisées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Arles ?
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
