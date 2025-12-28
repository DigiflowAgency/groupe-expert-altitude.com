import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Cugnaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Cugnaux et ses environs. Spécialis',
  keywords: 'couverture toiture cugnaux, renovation toiture cugnaux, reparation toiture cugnaux, couvreur cugnaux, refection toiture cugnaux, entreprise couverture cugnaux',
};

export default function CouvertureToitureCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Cugnaux et ses environs. Spécialistes de la protection de votre habitat, nous intervenons avec précision et expertise pour garantir la longévité et la performance de votre toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons un diagnostic complet de votre toiture, identifiant chaque point faible et proposant des solutions techniques adaptées. Notre équipe de professionnels qualifiés maîtrise tous les types de matériaux - tuiles, ardoises, zinc - et intervient aussi bien sur les maisons individuelles que sur les bâtiments collectifs. Nous utilisons des techniques modernes et des matériaux haute performance qui améliorent l&apos;isolation thermique et protègent durablement votre patrimoine contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Cugnaux, 2) Des artisans certifiés et formés en permanence, 3) Un devis gratuit et détaillé sous 48h, 4) Une intervention rapide et professionnelle garantissant une rénovation sans défaut.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis personnalisés incluent toujours une analyse précise pour optimiser votre investissement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou avant si vous observez des signes comme des infiltrations, des tuiles cassées, de la mousse, ou des déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et prolonger la durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : 1) Les certifications professionnelles, 2) Les références clients, 3) L&apos;assurance décennale, 4) Les avis en ligne, 5) La capacité à fournir un devis détaillé. Chez Groupe Expert Altitude Com, nous répondons à tous ces critères de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Cugnaux ?
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
