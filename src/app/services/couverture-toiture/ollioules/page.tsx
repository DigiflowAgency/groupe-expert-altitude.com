import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Ollioules | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Ollioules et dans tout le Var. Spécialistes depuis pl',
  keywords: 'couverture toiture ollioules, renovation toiture ollioules, reparation toiture ollioules, couvreur ollioules, refection toiture ollioules, entreprise couverture ollioules',
};

export default function CouvertureToitureOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Ollioules et dans tout le Var. Spécialistes depuis plus de 15 ans, nous garantissons des interventions sur mesure pour protéger durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus techniques comme aux besoins les plus spécifiques. À Ollioules, nous intervenons sur tous types de structures : tuiles, ardoises, bacs acier, avec une attention particulière à la qualité des matériaux et à l&apos;isolation thermique. Notre processus débute par un diagnostic précis, permettant d&apos;évaluer l&apos;état réel de votre toiture et de proposer des solutions personnalisées et économiques. Chaque intervention est réalisée avec des techniques modernes, en respectant les normes environnementales et de sécurité actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 professionnels certifiés avec plus de 150 chantiers réalisés par an
- Devis gratuit et détaillé sous 48h
- Matériaux haute performance avec garantie décennale
- Intervention rapide sur Ollioules et communes environnantes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour un pavillon standard de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis détaillés vous permettront d&apos;avoir une vision précise avant tout commencement de travaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations. À Ollioules, l&apos;exposition au soleil et aux intempéries peut accélérer la dégradation. Un diagnostic tous les 10 ans est fortement conseillé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son assurance décennale, ses références clients, ses avis en ligne. Demandez systématiquement un devis détaillé et comparez plusieurs professionnels. Chez Groupe Expert Altitude Com, nous mettons à votre disposition tous ces éléments pour une totale transparence.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Ollioules ?
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
