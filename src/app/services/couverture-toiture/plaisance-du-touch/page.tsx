import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Plaisance-du-Touch et ses environs. Nos experts interv',
  keywords: 'couverture toiture plaisance-du-touch, renovation toiture plaisance-du-touch, reparation toiture plaisance-du-touch, couvreur plaisance-du-touch, refection toiture plaisance-du-touch, entreprise couverture plaisance-du-touch',
};

export default function CouvertureToiturePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Plaisance-du-Touch et ses environs. Nos experts interviennent rapidement pour protéger et valoriser votre patrimoine immobilier avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de qualité et de durabilité. Notre équipe de professionnels hautement qualifiés analyse précisément l&apos;état de votre toiture pour proposer des solutions adaptées. Nous travaillons avec des matériaux premium garantissant une étanchéité optimale et une résistance aux intempéries. Notre processus inclut un diagnostic complet, un devis détaillé et une intervention méthodique respectant les normes techniques actuelles. Chaque chantier à Plaisance-du-Touch bénéficie d&apos;une approche personnalisée et d&apos;une attention aux moindres détails.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• 15 ans d&apos;expertise en couverture sur le territoire toulousain
• Équipe de 12 couvreurs certifiés et formés en permanence
• Matériaux de haute qualité avec garantie décennale
• Interventions rapides et transparentes, devis gratuit sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Notre expertise permet d&apos;optimiser chaque investissement avec des solutions durables et économiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes de vétusté comme des infiltrations, tuiles cassées, ou déformations structurelles. Un diagnostic précis permet de déterminer le moment opportun.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications professionnelles, une assurance décennale, des références vérifiables et une expertise technique prouvée. Vérifiez toujours ses diplômes et avis clients avant tout engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Plaisance-du-Touch ?
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
