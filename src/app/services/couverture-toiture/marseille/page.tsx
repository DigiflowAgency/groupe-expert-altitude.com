import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Marseille | Groupe Expert Altitude Com',
  description: 'Expert en couverture et rénovation toiture à Marseille, le Groupe Expert Altitude Com transforme et protège votre habitat avec des solutions sur-mesure. No',
  keywords: 'couverture toiture marseille, renovation toiture marseille, reparation toiture marseille, couvreur marseille, refection toiture marseille, entreprise couverture marseille',
};

export default function CouvertureToitureMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert en couverture et rénovation toiture à Marseille, le Groupe Expert Altitude Com transforme et protège votre habitat avec des solutions sur-mesure. Nos interventions techniques garantissent la longévité et l&apos;esthétique de votre toiture dans toute la région marseillaise.</p>

        <h2>Nos services de couverture et rénovation toiture a Marseille</h2>
        <div className="space-y-4">
          <p>Notre expertise en rénovation de toiture couvre l&apos;ensemble des besoins des propriétaires marseillais, des bâtiments anciens aux constructions contemporaines. Nous intervenons sur tous types de toitures : tuiles, ardoises, zinc, bac acier, avec une précision technique et un souci constant de qualité. Notre processus débute par un diagnostic précis, réalisé par nos techniciens experts qui évaluent l&apos;état structural et proposent des solutions adaptées. Chaque intervention est personnalisée, intégrant les contraintes techniques, budgétaires et esthétiques de votre projet.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec plus de 15 ans d&apos;expérience, 2) Des matériaux premium garantis 10 ans, 3) Un devis gratuit et détaillé sous 48h, 4) Une intervention rapide et professionnelle sur Marseille et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Marseille varie entre 5 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permet de définir un budget exact, avec nos devis transparents sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précis : fuites récurrentes, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet de prévenir les dégradations et prolonger la durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : certifications professionnelles, assurances décennales, références vérifiables, avis clients positifs. Vérifiez ses qualifications RGE, demandez plusieurs devis comparatifs et contactez ses précédents clients pour garantir son professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Marseille ?
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
