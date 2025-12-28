import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 8e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture dans le Paris 8e. Spécialistes depui',
  keywords: 'couverture toiture paris 8e, renovation toiture paris 8e, reparation toiture paris 8e, couvreur paris 8e, refection toiture paris 8e, entreprise couverture paris 8e',
};

export default function CouvertureToitureParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture dans le Paris 8e. Spécialistes depuis plus de 15 ans, nous transformons et protégeons votre patrimoine immobilier avec une expertise technique irréprochable.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 8e</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en réalisant un diagnostic précis avant toute intervention. Notre équipe de professionnels qualifiés évalue l&apos;état structural, propose des solutions techniques adaptées et met en œuvre des techniques de réfection garantissant l&apos;étanchéité et la longévité de votre toiture. Dans le Paris 8e, nous comprenons les contraintes architecturales spécifiques et adaptons systématiquement nos méthodes pour préserver l&apos;esthétique et la valeur de votre bien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 200 chantiers réalisés à Paris
- Devis gratuit et transparent sans surprise
- Équipe de 12 couvreurs hautement qualifiés
- Garantie décennale sur tous nos travaux
- Respect des normes environnementales et techniques les plus récentes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 150€ et 350€ au m², selon les matériaux et la complexité. Pour un pavillon standard de 100m², comptez un budget global entre 15 000€ et 35 000€. Notre expertise permet d&apos;optimiser chaque investissement en proposant des solutions sur-mesure.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou avant si vous observez des signes comme des infiltrations, tuiles cassées, déformations, mousses ou verdissements importants. Un diagnostic précis tous les 10 ans est recommandé pour anticiper les travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : la qualification RGE, l&apos;assurance décennale, les références clients, les avis en ligne, et demandez plusieurs devis détaillés. Chez Groupe Expert Altitude Com, nous mettons à votre disposition tous ces éléments pour garantir votre tranquillité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 8e ?
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
