import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Cenon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Cenon et ses environs. Spécialistes de la protection et de ',
  keywords: 'couverture toiture cenon, renovation toiture cenon, reparation toiture cenon, couvreur cenon, refection toiture cenon, entreprise couverture cenon',
};

export default function CouvertureToitureCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Cenon et ses environs. Spécialistes de la protection et de la réhabilitation de vos toitures, nous intervenons avec expertise et précision pour garantir la longévité et la performance de votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Cenon</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons un diagnostic complet de votre toiture, identifiant précisément les zones d&apos;usure et les potentiels points faibles. Notre équipe de professionnels qualifiés utilise uniquement des matériaux de haute qualité, adaptés à chaque type de bâtiment et de configuration architecturale. Nous proposons des solutions personnalisées, qu&apos;il s&apos;agisse de réparations ponctuelles, de réfection partielle ou de remplacement complet de toiture. Notre approche technique intègre les dernières innovations en matière d&apos;isolation thermique et d&apos;étanchéité, garantissant une protection optimale contre les intempéries et une amélioration significative des performances énergétiques de votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée possède plus de 15 ans d&apos;expérience sur Cenon et la région. Nous garantissons des interventions rapides, un devis transparent sans surprise, et un suivi personnalisé. Nos réalisations bénéficient d&apos;une garantie décennale, gage de notre engagement qualité. Nos techniciens sont formés en continu aux dernières techniques de couverture et rénovation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux choisis et la complexité du chantier. Pour une maison moyenne de 100m², comptez entre 8 000€ et 25 000€. Nos devis détaillés permettent une transparence totale des coûts, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture nécessite généralement une réfection tous les 30-40 ans. Les signes qui doivent vous alerter : tuiles cassées, infiltrations, mousses, déformations, isolation dégradée. Un diagnostic précis tous les 10 ans est recommandé pour anticiper les travaux et éviter des réparations plus coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours sa certification RGE, ses références clients, son assurance décennale et ses avis. Demandez plusieurs devis détaillés, comparez les propositions techniques, et n&apos;hésitez pas à demander des recommandations. Un professionnel sérieux proposera systématiquement un diagnostic préalable et un engagement écrit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Cenon ?
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
