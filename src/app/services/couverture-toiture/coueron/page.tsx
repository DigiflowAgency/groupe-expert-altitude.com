import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Couëron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Couëron et ses environs. Spécialistes depuis plus de ',
  keywords: 'couverture toiture couëron, renovation toiture couëron, reparation toiture couëron, couvreur couëron, refection toiture couëron, entreprise couverture couëron',
};

export default function CouvertureToitureCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Couëron et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Couëron</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs, bâtiments industriels - en proposant des solutions adaptées à chaque configuration. Notre équipe de couvreurs hautement qualifiés réalise un diagnostic précis avant toute intervention, garantissant une rénovation optimale et économique. Nous utilisons uniquement des matériaux de haute qualité, certifiés et respectueux de l&apos;environnement, pour assurer une protection maximale contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique reconnue avec plus de 250 chantiers réalisés à Couëron, 2) Des artisans certifiés et formés aux dernières technologies de couverture, 3) Un devis gratuit et détaillé sous 48h, 4) Une garantie décennale sur tous nos travaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité technique. Notre approche sur-mesure permet de vous proposer des solutions financièrement optimisées avec des options de financement adaptées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans ou en cas de signes visibles de dégradation : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les désordres majeurs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : la qualification RGE, les références clients, l&apos;assurance décennale, les certifications professionnelles et demandez systématiquement un devis détaillé avec descriptif technique précis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Couëron ?
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
