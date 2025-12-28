import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Asnières-sur-Seine et ses environs. Spécialistes depui',
  keywords: 'couverture toiture asnières-sur-seine, renovation toiture asnières-sur-seine, reparation toiture asnières-sur-seine, couvreur asnières-sur-seine, refection toiture asnières-sur-seine, entreprise couverture asnières-sur-seine',
};

export default function CouvertureToitureAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Asnières-sur-Seine et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires d&apos;Asnières-sur-Seine et de la région parisienne. Notre expertise technique nous permet d&apos;intervenir sur tous types de toitures : tuiles, ardoises, zinc, bacs acier, avec une attention particulière à la qualité des matériaux et à l&apos;isolation thermique. Notre processus débute par un diagnostic précis, réalisé par nos experts qui évaluent l&apos;état structural et préconisent les interventions adaptées. Nous proposons des solutions personnalisées, alliant performance technique et esthétique, garantissant une protection optimale contre les intempéries et améliorant la valeur énergétique de votre bien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe de couvreurs certifiés et expérimentés
✓ Devis gratuit et détaillé sous 48h
✓ Interventions rapides et sur-mesure
✓ Garantie décennale et assurance professionnelle
✓ Techniques innovantes et matériaux haute qualité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Chez Groupe Expert Altitude Com, nous proposons des devis transparents sans frais cachés, adaptés à chaque budget et configuration.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes de détérioration : fuites, tuiles cassées, infiltrations, mousses, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et optimiser la longévité de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : certification RGE, avis clients, années d&apos;expérience, garanties proposées, assurances professionnelles. Groupe Expert Altitude Com réunit tous ces critères et met à votre disposition nos références et attestations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Asnières-sur-Seine ?
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
