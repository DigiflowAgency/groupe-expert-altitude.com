import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Clichy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Clichy et ses environs. Avec plus ',
  keywords: 'couverture toiture clichy, renovation toiture clichy, reparation toiture clichy, couvreur clichy, refection toiture clichy, entreprise couverture clichy',
};

export default function CouvertureToitureClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Clichy et ses environs. Avec plus de 15 ans d&apos;expertise, nous garantissons des interventions de qualité qui protègent durablement votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Clichy</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de performance et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en proposant des solutions techniques sur-mesure adaptées à chaque bâtiment. Notre équipe de couvreurs hautement qualifiés réalise un diagnostic précis avant toute intervention, identifiant les points faibles et proposant des solutions techniques optimales. Nous utilisons uniquement des matériaux de haute qualité, garantissant une étanchéité parfaite et une résistance maximale aux intempéries. Chaque chantier à Clichy est traité avec une attention méticuleuse, en respectant les normes environnementales et de sécurité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Clichy
- Équipe de 12 couvreurs certifiés
- Devis gratuit et détaillé sous 48h
- Garantie décennale sur tous nos travaux
- Matériaux sélectionnés auprès de fournisseurs français</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Clichy coûte entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permet d&apos;établir un devis personnalisé prenant en compte vos spécificités.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes visibles de dégradation : fuites, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet de prévenir les dommages structurels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié, disposant de références vérifiables, d&apos;une assurance décennale, et proposant un devis détaillé. Vérifiez ses qualifications, son expérience locale à Clichy, et demandez plusieurs avis clients avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Clichy ?
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
