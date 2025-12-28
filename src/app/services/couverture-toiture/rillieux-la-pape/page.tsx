import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Rillieux-la-Pape et ses environs. Spécialistes depuis pl',
  keywords: 'couverture toiture rillieux-la-pape, renovation toiture rillieux-la-pape, reparation toiture rillieux-la-pape, couvreur rillieux-la-pape, refection toiture rillieux-la-pape, entreprise couverture rillieux-la-pape',
};

export default function CouvertureToitureRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Rillieux-la-Pape et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre habitat avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes de performance et de durabilité. Nous intervenons sur tous types de bâtiments, qu&apos;il s&apos;agisse d&apos;une rénovation partielle ou d&apos;un remplacement complet de voiture. Notre équipe de couvreurs hautement qualifiés analyse précisément l&apos;état de votre toiture, diagnostic technique à l&apos;appui, pour proposer la solution la plus adaptée. Nous travaillons avec des matériaux de haute qualité garantissant une étanchéité parfaite et une résistance maximale aux intempéries. Chaque intervention est personnalisée, en respectant l&apos;architecture et les spécificités de votre propriété à Rillieux-la-Pape.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 15 ans d&apos;expérience
• Diagnostic précis et devis transparent sans engagement
• Équipe de professionnels formés aux dernières normes techniques
• Matériaux sélectionnés pour leur durabilité et performances énergétiques
• Intervention rapide sur Rillieux-la-Pape et le département du Rhône</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 80€ et 250€ au m², selon les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m², le budget total varie entre 8 000€ et 25 000€. Nous proposons des financements et des aides adaptés pour optimiser votre investissement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou avant si vous observez des signes de dégradation : fuites, tuiles cassées, mousses, déformations. Les toitures exposées aux intempéries ou mal entretenues peuvent nécessiter une réfection plus précoce. Un diagnostic annuel permet de prévenir les dommages structurels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son immatriculation au registre du commerce, ses assurances professionnelles, ses avis clients et références. Exigez un devis détaillé, demandez plusieurs propositions et comparez les prestations. Un professionnel sérieux propose toujours un diagnostic technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Rillieux-la-Pape ?
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
