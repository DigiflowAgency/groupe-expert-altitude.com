import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Ramonville-Saint-Agne, avec plus de 15 ans d&apos;exper',
  keywords: 'couverture toiture ramonville-saint-agne, renovation toiture ramonville-saint-agne, reparation toiture ramonville-saint-agne, couvreur ramonville-saint-agne, refection toiture ramonville-saint-agne, entreprise couverture ramonville-saint-agne',
};

export default function CouvertureToitureRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Ramonville-Saint-Agne, avec plus de 15 ans d&apos;expertise dans la protection de votre patrimoine immobilier. Nos solutions sur-mesure garantissent la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en proposant un diagnostic précis et personnalisé. Notre équipe de professionnels qualifiés réalise un état des lieux complet, identifiant chaque désordre potentiel et proposant des solutions techniques adaptées. Nous utilisons uniquement des matériaux certifiés et respectueux de l&apos;environnement, avec une attention particulière aux normes thermiques et acoustiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale confirmée à Ramonville-Saint-Agne
✓ Équipe de 8 couvreurs certifiés et expérimentés
✓ Devis gratuit et détaillé sous 48h
✓ Garantie décennale sur tous nos travaux
✓ Solutions techniques innovantes et écologiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Notre diagnostic précis vous permettra d&apos;obtenir un devis détaillé sans surprise, avec des options de financement adaptées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes de vétusté comme infiltrations, tuiles cassées, mousses importantes, ou après des événements climatiques majeurs. Un diagnostic annuel peut prévenir des dégradations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur avec certification RGE, références vérifiables, assurances professionnelles, et proposant un diagnostic complet. Vérifiez les avis clients, demandez plusieurs devis comparatifs et assurez-vous de la garantie décennale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Ramonville-Saint-Agne ?
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
