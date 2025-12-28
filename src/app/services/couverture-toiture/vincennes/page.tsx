import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Vincennes | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Vincennes, spécialiste des solutions durables et sur mesure ',
  keywords: 'couverture toiture vincennes, renovation toiture vincennes, reparation toiture vincennes, couvreur vincennes, refection toiture vincennes, entreprise couverture vincennes',
};

export default function CouvertureToitureVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Vincennes, spécialiste des solutions durables et sur mesure pour protéger votre patrimoine immobilier. Nous intervenons sur l&apos;ensemble des projets de toiture avec une expertise technique et un engagement de qualité.</p>

        <h2>Nos services de couverture et rénovation toiture a Vincennes</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux besoins spécifiques de chaque habitat à Vincennes, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;un immeuble collectif. Nos équipes qualifiées utilisent des techniques modernes et des matériaux haute performance pour garantir l&apos;étanchéité et la longévité de votre toiture. Nous réalisons un diagnostic précis avant toute intervention, permettant d&apos;identifier les points faibles et de proposer des solutions techniques adaptées. Notre approche intègre systématiquement des critères de performance énergétique et de durabilité, avec des solutions innovantes qui préservent l&apos;esthétique et la valeur de votre bien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans la rénovation de toiture, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un devis détaillé et transparent sans frais cachés, 4) Une intervention rapide et professionnelle sur Vincennes et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis personnalisés incluent toujours une évaluation précise et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : fuites récurrentes, tuiles cassées, infiltrations, déformation de la charpente. Un diagnostic annuel permet de prévenir les dégradations et d&apos;anticiper les travaux nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son assurance décennale, ses références clients, ses avis en ligne. Demandez plusieurs devis détaillés, comparez les propositions techniques et rencontrez le professionnel pour évaluer sa communication et son expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Vincennes ?
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
