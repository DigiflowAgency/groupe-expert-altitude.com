import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Muret | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Muret et ses environs. Avec plu',
  keywords: 'couverture toiture muret, renovation toiture muret, reparation toiture muret, couvreur muret, refection toiture muret, entreprise couverture muret',
};

export default function CouvertureToitureMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Muret et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons et valorisons votre patrimoine immobilier grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Muret</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture représentent bien plus qu&apos;un simple rafraîchissement esthétique. Notre équipe de professionnels qualifiés analyse précisément l&apos;état structural de votre toiture pour proposer des interventions durables et économiques. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles, bâtiments industriels - en utilisant des matériaux haute performance garantissant une protection optimale contre les intempéries. Notre processus comprend un diagnostic technique complet, une proposition détaillée et une réalisation méticuleuse, avec un engagement de résultat et de propreté sur chaque chantier à Muret.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expérience locale
• Devis gratuit et transparent sous 48h
• Matériaux sélectionnés auprès de fournisseurs français
• Garantie décennale sur tous nos travaux
• Intervention rapide et adaptée à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ par m², selon les matériaux et la complexité. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Notre équipe propose systématiquement plusieurs options tarifaires adaptées à vos besoins et contraintes budgétaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et éviter des rénovations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : son immatriculation au registre du commerce, ses certifications professionnelles, son assurance décennale, ses avis clients et références locales. Demandez systématiquement un devis détaillé et comparez plusieurs professionnels avant de vous engager.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Muret ?
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
