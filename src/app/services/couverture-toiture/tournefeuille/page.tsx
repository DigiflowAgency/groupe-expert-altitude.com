import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Tournefeuille et ses environs. Spécialistes depuis ',
  keywords: 'couverture toiture tournefeuille, renovation toiture tournefeuille, reparation toiture tournefeuille, couvreur tournefeuille, refection toiture tournefeuille, entreprise couverture tournefeuille',
};

export default function CouvertureToitureTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Tournefeuille et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre habitat avec des solutions techniques sur-mesure et une expertise reconnue.</p>

        <h2>Nos services de couverture et rénovation toiture a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en proposant un diagnostic précis et personnalisé. Notre équipe de professionnels qualifiés réalise un état des lieux complet, identifiant chaque désordre potentiel : infiltrations, tuiles cassées, problèmes d&apos;étanchéité. Nous utilisons uniquement des matériaux certifiés et proposons des solutions techniques innovantes qui garantissent une protection optimale contre les intempéries et améliorent la performance énergétique de votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de couvreurs certifiés et expérimentés
- Diagnostic technique gratuit et précis
- Devis détaillé sous 48h
- Interventions rapides sur Tournefeuille
- Matériaux de haute qualité
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité des travaux. Pour une maison moyenne de 120m², le budget total varie entre 9 600€ et 30 000€. Nous proposons des financements adaptés et des solutions sur-mesure.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et optimiser la longévité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : certification professionnelle, assurance décennale, avis clients, expérience locale, devis détaillé. Chez Groupe Expert Altitude Com, nous garantissons transparence, expertise technique et satisfaction client.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Tournefeuille ?
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
