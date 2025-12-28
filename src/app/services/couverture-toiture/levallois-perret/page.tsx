import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Levallois-Perret, spécialiste des solutions sur-mesure p',
  keywords: 'couverture toiture levallois-perret, renovation toiture levallois-perret, reparation toiture levallois-perret, couvreur levallois-perret, refection toiture levallois-perret, entreprise couverture levallois-perret',
};

export default function CouvertureToitureLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Levallois-Perret, spécialiste des solutions sur-mesure pour protéger et valoriser votre patrimoine immobilier. Notre expertise technique garantit des interventions précises et durables pour tous vos projets de toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires de Levallois-Perret et des environs. Nous intervenons sur tous types de toitures : tuiles, ardoises, zinc ou bacs acier, avec une approche technique et personnalisée. Notre processus démarre par un diagnostic précis de votre structure, suivi d&apos;une évaluation technique détaillée qui nous permet de proposer la solution la plus adaptée. Nos équipes qualifiées utilisent des matériaux haute performance, garantissant une étanchéité optimale et une durabilité minimale de 25 ans. Chaque chantier fait l&apos;objet d&apos;un suivi rigoureux et d&apos;un contrôle qualité systématique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en couverture sur Levallois-Perret
✓ Équipe de 12 couvreurs certifiés et formés en permanence
✓ Devis gratuit et détaillé sous 48h
✓ Interventions rapides et techniques innovantes
✓ Garantie décennale et assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 150€ et 350€ au m², avec des variations selon les matériaux et la complexité. Pour un pavillon standard de 100m², comptez un budget global entre 15 000€ et 35 000€. Un diagnostic précis permettra d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et anticiper les travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec des références vérifiables, une immatriculation au registre du commerce, une assurance décennale et des avis clients positifs. Demandez systématiquement plusieurs devis détaillés et comparez les propositions techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Levallois-Perret ?
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
