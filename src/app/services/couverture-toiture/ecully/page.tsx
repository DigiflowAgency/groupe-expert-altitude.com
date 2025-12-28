import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Écully | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en couverture et rénovation toiture à Écully, intervient avec précision et expertise pour protége',
  keywords: 'couverture toiture écully, renovation toiture écully, reparation toiture écully, couvreur écully, refection toiture écully, entreprise couverture écully',
};

export default function CouvertureToitureEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en couverture et rénovation toiture à Écully, intervient avec précision et expertise pour protéger et valoriser votre patrimoine immobilier. Depuis plus de 15 ans, nous transformons et sécurisent les toitures des habitations et professionnels de la région lyonnaise.</p>

        <h2>Nos services de couverture et rénovation toiture a Écully</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic précis de votre toiture, identifiant chaque désordre potentiel avec une expertise millimétrique. Notre approche sur-mesure intègre les dernières technologies d&apos;isolation et de protection, garantissant une intervention durable et performante. Nos équipes qualifiées maîtrisent tous les matériaux - tuiles, ardoises, zinc - et s&apos;adaptent à chaque configuration architecturale, qu&apos;il s&apos;agisse d&apos;une rénovation complète ou de réparations ciblées sur Écully et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos couvreurs sont certifiés RGE, notre entreprise dispose d&apos;une assurance décennale complète, et nous proposons des devis transparents sans surprise. Nos interventions respectent scrupuleusement les normes environnementales et énergétiques actuelles, vous assurant une prestation de haute qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis nous permet de vous proposer un devis détaillé et personnalisé, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes manifestes de dégradation : fuites récurrentes, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet de prévenir les désordres avant qu&apos;ils ne deviennent critiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit impérativement posséder : une certification RGE, une assurance décennale, des références vérifiables, des avis clients positifs, et maîtriser les techniques actuelles d&apos;isolation et de pose. Vérifiez toujours ses certifications et demandez plusieurs devis comparatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Écully ?
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
