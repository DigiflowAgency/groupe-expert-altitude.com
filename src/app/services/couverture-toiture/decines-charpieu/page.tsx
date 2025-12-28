import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Décines-Charpieu. Spécialistes depuis plus de 15 ans,',
  keywords: 'couverture toiture décines-charpieu, renovation toiture décines-charpieu, reparation toiture décines-charpieu, couvreur décines-charpieu, refection toiture décines-charpieu, entreprise couverture décines-charpieu',
};

export default function CouvertureToitureDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Décines-Charpieu. Spécialistes depuis plus de 15 ans, nous transformons et protégeons votre habitat avec des solutions techniques sur-mesure adaptées aux exigences de votre région.</p>

        <h2>Nos services de couverture et rénovation toiture a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux défis spécifiques de l&apos;habitat lyonnais. Nous intervenons sur tous types de structures - tuiles, ardoises, bacs acier - en proposant des solutions durables et esthétiques. Notre méthode combine diagnostic précis, techniques modernes et matériaux haute performance, garantissant une rénovation qui préserve l&apos;intégrité et la valeur de votre bien. Chaque intervention à Décines-Charpieu est précédée d&apos;un audit technique complet permettant de définir le plan de rénovation optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expérience locale
• Devis gratuit et transparent sous 48h
• Interventions rapides et adaptées à chaque configuration
• Garantie décennale sur l&apos;ensemble de nos travaux
• Utilisation de matériaux écologiques et performants</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité technique. Chez Groupe Expert Altitude Com, nous proposons des solutions flexibles avec des financements adaptés et des aides potentielles.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : fuites récurrentes, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet d&apos;anticiper et limiter les coûts.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec références vérifiables, assurance décennale, et qui propose un diagnostic préalable détaillé. Vérifiez ses certifications, demandez plusieurs devis comparatifs et contactez ses précédents clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Décines-Charpieu ?
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
