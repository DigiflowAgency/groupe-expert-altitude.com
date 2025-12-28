import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Fréjus | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Fréjus et dans le Var. Spécialiste',
  keywords: 'couverture toiture fréjus, renovation toiture fréjus, reparation toiture fréjus, couvreur fréjus, refection toiture fréjus, entreprise couverture fréjus',
};

export default function CouvertureToitureFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Fréjus et dans le Var. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences techniques les plus pointues. Nous intervenons sur tous types de bâtiments - maisons individuelles, copropriétés, bâtiments commerciaux - avec une approche personnalisée. Notre processus démarre par un diagnostic précis, réalisé gratuitement, qui permet d&apos;évaluer l&apos;état exact de votre toiture. Nos techniciens utilisent les matériaux les plus récents garantissant une durabilité maximale et une isolation thermique optimale. À Fréjus, nous connaissons parfaitement les contraintes climatiques locales qui impactent la structure des toitures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe de 12 couvreurs certifiés avec plus de 15 ans d&apos;expérience
• Devis gratuit et détaillé sous 48h
• Interventions rapides et garanties décennales
• Matériaux haute performance sélectionnés avec soin</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ par m², selon les matériaux choisis et la complexité des travaux. Pour une maison de 100m², comptez un budget global entre 8 000€ et 25 000€ avec une moyenne autour de 15 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans ou en cas de signes précurseurs : tuiles cassées, infiltrations, mousses, déformations structurelles. Un diagnostic annuel permet d&apos;anticiper les réparations nécessaires et éviter des dégâts plus importants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder : une certification professionnelle, une assurance décennale, des références clients, des avis vérifiables, et maîtriser les normes techniques actuelles. Vérifiez toujours ses certifications et demandez plusieurs devis comparatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Fréjus ?
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
