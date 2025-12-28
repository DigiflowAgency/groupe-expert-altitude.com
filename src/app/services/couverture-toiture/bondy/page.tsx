import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Bondy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Bondy et ses environs. Spécialistes reconnus, nous tr',
  keywords: 'couverture toiture bondy, renovation toiture bondy, reparation toiture bondy, couvreur bondy, refection toiture bondy, entreprise couverture bondy',
};

export default function CouvertureToitureBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Bondy et ses environs. Spécialistes reconnus, nous transformons et protégeons votre habitat avec des solutions sur-mesure adaptées à chaque configuration de toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Bondy</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture couvre l&apos;ensemble des besoins des propriétaires de Bondy et du département. Nous intervenons sur tous types de structures : tuiles, ardoises, zinc, bac acier, avec une approche technique et personnalisée. Notre processus démarre par un diagnostic précis de l&apos;état de votre toiture, incluant une évaluation thermique et structurelle. Nos techniciens hautement qualifiés utilisent des matériaux premium garantissant une durabilité de 20 à 30 ans, avec une isolation optimale réduisant jusqu&apos;à 35% des déperditions énergétiques. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux, du démontage à la pose finale, en respectant les normes environnementales et techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience à Bondy. Devis gratuit et détaillé sous 48h. Équipe de 12 couvreurs experts formés annuellement. Garantie décennale sur tous nos travaux. Solutions techniques innovantes adaptées à chaque configuration de toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité. Un pavillon standard de 100m² coûte en moyenne 12 500€. Nous proposons des financements et des aides adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans ou en cas de signes précis : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses et infiltrations. Un diagnostic annuel permet de prévenir les dégradations majeures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec une assurance décennale, des références locales vérifiables, des avis clients authentiques. Exigez un devis détaillé, comparez 3 professionnels et vérifiez leurs certifications officielles avant tout engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Bondy ?
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
