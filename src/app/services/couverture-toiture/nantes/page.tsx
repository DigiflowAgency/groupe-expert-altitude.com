import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Nantes et ses environs. Avec plus ',
  keywords: 'couverture toiture nantes, renovation toiture nantes, reparation toiture nantes, couvreur nantes, refection toiture nantes, entreprise couverture nantes',
};

export default function CouvertureToitureNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Nantes et ses environs. Avec plus de 15 ans d&apos;expérience, nous garantissons des interventions professionnelles et durables pour protéger votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Nantes</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes du marché nantais. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc ou bacs acier - en proposant des solutions techniques sur-mesure. Notre équipe de couvreurs qualifiés réalise un diagnostic précis avant toute intervention, évaluant l&apos;état structural, l&apos;isolation et les potentiels points faibles. Nous utilisons uniquement des matériaux de haute qualité, certifiés et respectueux des normes environnementales actuelles, pour assurer une rénovation durable et performante.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique reconnue avec des artisans certifiés, 2) Un devis détaillé et transparent sans frais cachés, 3) Des délais d&apos;intervention courts et respectés, 4) Une garantie décennale sur tous nos travaux. Notre engagement qualité fait de nous le couvreur référent à Nantes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis nous permet de vous proposer un devis personnalisé et compétitif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes visibles de dégradation comme des fuites, des tuiles cassées, ou une isolation défectueuse. Un diagnostic annuel permet de prévenir les désordres majeurs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, ses références clients, son assurance décennale et demandez plusieurs devis détaillés. Un professionnel sérieux propose un diagnostic préalable et des solutions techniques adaptées à votre projet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Nantes ?
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
