import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Carquefou | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Carquefou et ses environs. Spécial',
  keywords: 'couverture toiture carquefou, renovation toiture carquefou, reparation toiture carquefou, couvreur carquefou, refection toiture carquefou, entreprise couverture carquefou',
};

export default function CouvertureToitureCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Carquefou et ses environs. Spécialistes depuis plus de 15 ans, nous intervenons sur tous types de toitures avec un savoir-faire artisanal et des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Carquefou</h2>
        <div className="space-y-4">
          <p>Notre service de rénovation de toiture répond aux problématiques les plus complexes de l&apos;habitat sur Carquefou et la région nantaise. Nous réalisons un diagnostic précis de votre couverture, en évaluant l&apos;état des tuiles, de la charpente et de l&apos;étanchéité. Notre équipe propose des solutions adaptées, allant de la réparation ponctuelle à la réfection totale, en utilisant uniquement des matériaux de haute qualité et aux normes environnementales actuelles. Notre approche technique garantit une intervention durable, protégeant votre habitat contre les infiltrations et améliorant ses performances thermiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Carquefou
- Équipe de couvreurs certifiés et formés aux techniques modernes
- Diagnostic gratuit et devis détaillé sans engagement
- Matériaux sélectionnés auprès de fournisseurs français
- Délais d&apos;intervention rapides et planning respecté</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ le m², selon les matériaux et la complexité. Pour une maison standard de 100m², comptez un budget global entre 8 000€ et 25 000€. Nous proposons des financements et des aides adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : tuiles cassées, infiltrations récurrentes, mousses importantes, déformation de la charpente. Un diagnostic annuel permet de prévenir ces dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur avec : certification professionnelle, assurance décennale, avis clients vérifiables, devis détaillé, références locales. Vérifiez son immatriculation au registre du commerce et demandez plusieurs devis comparatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Carquefou ?
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
