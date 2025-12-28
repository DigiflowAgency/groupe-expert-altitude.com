import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Saint-Sébastien-sur-Loire, transforme et protège votre habi',
  keywords: 'couverture toiture saint-sébastien-sur-loire, renovation toiture saint-sébastien-sur-loire, reparation toiture saint-sébastien-sur-loire, couvreur saint-sébastien-sur-loire, refection toiture saint-sébastien-sur-loire, entreprise couverture saint-sébastien-sur-loire',
};

export default function CouvertureToitureSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Saint-Sébastien-sur-Loire, transforme et protège votre habitat avec des solutions sur-mesure. Depuis plus de 15 ans, nous intervenons sur tous types de toitures pour garantir la qualité et la durabilité de votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Nos services de rénovation toiture couvrent l&apos;ensemble des besoins résidentiels et professionnels sur Saint-Sébastien-sur-Loire et ses environs. Notre équipe de couvreurs hautement qualifiés réalise des diagnostics précis, détectant les moindres faiblesses structurelles et proposant des solutions techniques adaptées. Nous travaillons avec des matériaux premium - tuiles, ardoises, zinc - en privilégiant des techniques d&apos;isolation et d&apos;étanchéité innovantes. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec des devis détaillés et transparents, garantissant une intervention rapide et efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Saint-Sébastien-sur-Loire
✓ Équipe certifiée et assurée
✓ Matériaux de haute qualité et normes environnementales
✓ Délais d&apos;intervention courts et devis gratuits
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Notre diagnostic précis vous permettra d&apos;obtenir un devis détaillé et personnalisé, sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme des infiltrations, tuiles cassées, mousses importantes ou affaissements. Un diagnostic annuel permet de prévenir les dégradations majeures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec des références locales vérifiables. Vérifiez ses assurances professionnelles, demandez plusieurs devis comparatifs et assurez-vous de la garantie décennale proposée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Saint-Sébastien-sur-Loire ?
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
