import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Meyzieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Meyzieu et ses environs. Spécialis',
  keywords: 'couverture toiture meyzieu, renovation toiture meyzieu, reparation toiture meyzieu, couvreur meyzieu, refection toiture meyzieu, entreprise couverture meyzieu',
};

export default function CouvertureToitureMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Meyzieu et ses environs. Spécialistes depuis plus de 15 ans, nous garantissons des interventions de qualité qui protègent durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Meyzieu</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture couvre l&apos;ensemble des besoins résidentiels et professionnels sur Meyzieu. Nous intervenons sur tous types de toitures : tuiles, ardoises, zinc ou bac acier, avec une attention particulière à la rénovation énergétique. Notre processus démarre par un diagnostic précis, réalisé gratuitement, permettant d&apos;identifier les désordres et proposer une solution technique adaptée. Nos équipes utilisent uniquement des matériaux certifiés, posés selon les normes en vigueur, pour assurer une étanchéité et une isolation optimales. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux et d&apos;un contrôle qualité garantissant la pérennité de nos interventions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans qualifiés RGE avec plus de 15 ans d&apos;expérience
- Devis détaillé et transparent sous 48h
- Interventions rapides et sur-mesure
- Garantie décennale sur tous nos travaux
- Solutions innovantes en rénovation thermique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permettra d&apos;établir un budget personnalisé. Nous proposons des financements et aides adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes visibles de dégradation : fuites, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet de prévenir les désordres avant qu&apos;ils ne deviennent critiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur RGE, disposant de certifications officielles, d&apos;une assurance décennale, avec des références vérifiables. Demandez plusieurs devis détaillés, comparez les propositions techniques et vérifiez l&apos;expérience sur des chantiers similaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Meyzieu ?
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
