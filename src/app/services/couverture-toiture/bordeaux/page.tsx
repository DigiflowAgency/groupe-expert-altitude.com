import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Bordeaux et dans toute la région Nouvelle-Aquitaine. Spécia',
  keywords: 'couverture toiture bordeaux, renovation toiture bordeaux, reparation toiture bordeaux, couvreur bordeaux, refection toiture bordeaux, entreprise couverture bordeaux',
};

export default function CouvertureToitureBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Bordeaux et dans toute la région Nouvelle-Aquitaine. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre habitat avec des solutions sur-mesure adaptées aux spécificités architecturales bordelaises.</p>

        <h2>Nos services de couverture et rénovation toiture a Bordeaux</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus techniques et esthétiques. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles, bâtiments historiques - en utilisant des matériaux de haute qualité garantissant durabilité et performance énergétique. Notre processus débute par un diagnostic précis, réalisé par nos experts, qui évaluent l&apos;état structural de votre toiture et proposent des solutions personnalisées. Nous privilégions des techniques innovantes minimisant les interventions et maximisant la longévité de vos travaux, avec une attention particulière portée à l&apos;isolation thermique et à la conformité réglementaire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts différenciants : une équipe de 12 couvreurs certifiés, un taux de satisfaction client de 98%, des devis transparents sous 48h, une intervention rapide en urgence, et des garanties décennales. Nous sommes également engagés dans une démarche éco-responsable, proposant des solutions de rénovation respectueuses de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Bordeaux varie entre 5 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Notre approche transparente inclut un devis détaillé sans frais cachés, avec possibilité de financements et d&apos;aides.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et optimiser votre investissement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez ses certifications RGE, son assurance décennale, ses références clients, et demandez plusieurs devis comparatifs. Chez Groupe Expert Altitude Com, nous mettons à votre disposition nos attestations et recommandations pour garantir votre confiance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Bordeaux ?
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
