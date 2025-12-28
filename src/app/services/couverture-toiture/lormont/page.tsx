import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Lormont | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Lormont et ses environs. Avec plus de 15 ans d&apos;expe',
  keywords: 'couverture toiture lormont, renovation toiture lormont, reparation toiture lormont, couvreur lormont, refection toiture lormont, entreprise couverture lormont',
};

export default function CouvertureToitureLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur Lormont et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons votre habitat grâce à des solutions techniques sur-mesure adaptées à chaque type de toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation représente bien plus qu&apos;un simple travail de réfection. Nous intervenons de manière globale, en analysant précisément l&apos;état structural de votre toiture avant toute intervention. Notre équipe de professionnels qualifiés réalise un diagnostic technique complet, évaluant l&apos;usure des matériaux, les potentielles infiltrations et les besoins de renforcement. Nous proposons des solutions personnalisées qui garantissent à la fois l&apos;esthétique et la performance technique, en utilisant uniquement des matériaux de haute qualité homologués. Sur Lormont, nous maîtrisons parfaitement les spécificités architecturales locales, ce qui nous permet d&apos;intervenir avec une expertise précise et adaptée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de couvreurs certifiés avec plus de 15 ans d&apos;expérience
- Diagnostic technique gratuit et sans engagement
- Interventions rapides et sur-mesure
- Devis détaillé et transparent sous 48h
- Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Chez Groupe Expert Altitude Com, nous proposons un devis précis après un diagnostic technique gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes précis : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses importantes ou isolation défectueuse. Un diagnostic annuel permet de prévenir ces problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son numéro SIRET, ses références clients, ses garanties décennales, et demandez plusieurs devis comparatifs. Chez nous à Lormont, tous nos techniciens sont formés et certifiés annuellement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Lormont ?
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
