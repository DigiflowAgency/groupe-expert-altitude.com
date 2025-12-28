import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Balma | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Balma et ses environs. Avec plu',
  keywords: 'couverture toiture balma, renovation toiture balma, reparation toiture balma, couvreur balma, refection toiture balma, entreprise couverture balma',
};

export default function CouvertureToitureBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Balma et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons les toitures des habitations et entreprises de la région toulousaine.</p>

        <h2>Nos services de couverture et rénovation toiture a Balma</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires à Balma. Notre équipe de professionnels qualifiés intervient sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en proposant des solutions sur-mesure. Nous réalisons un diagnostic précis avant chaque intervention, évaluant l&apos;état structural, les potentiels points faibles et recommandant les solutions techniques optimales. Notre processus inclut un audit complet, un devis détaillé transparent et une réalisation avec des matériaux de haute qualité garantissant une durabilité minimale de 25 ans. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux et d&apos;un contrôle qualité final.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos couvreurs sont certifiés RGE, nos interventions bénéficient de garanties décennales, et nous proposons des solutions énergétiquement performantes. Notre taux de satisfaction client dépasse 95%, et nous intervenons rapidement sur Balma et l&apos;ensemble de la métropole toulousaine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité des travaux. Pour une maison de 100m², comptez un budget global entre 8 000€ et 25 000€. Nous proposons des financements et des aides adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et éviter des réparations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours ses certifications RGE, son assurance décennale, ses références clients et demandez plusieurs devis détaillés. Un professionnel sérieux proposera un diagnostic précis, des solutions techniques claires et un engagement de résultat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Balma ?
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
