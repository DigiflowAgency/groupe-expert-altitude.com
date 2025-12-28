import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Ivry-sur-Seine et ses environs. Av',
  keywords: 'couverture toiture ivry-sur-seine, renovation toiture ivry-sur-seine, reparation toiture ivry-sur-seine, couvreur ivry-sur-seine, refection toiture ivry-sur-seine, entreprise couverture ivry-sur-seine',
};

export default function CouvertureToitureIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Ivry-sur-Seine et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons votre habitat grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de qualité et de durabilité. Que votre toiture nécessite une réfection complète ou des réparations ciblées, notre équipe de professionnels qualifiés intervient avec précision. Nous utilisons uniquement des matériaux haut de gamme garantissant une protection optimale contre les intempéries. Notre processus comprend un diagnostic technique complet, une proposition détaillée et une réalisation minutieuse, en respectant les normes environnementales et de sécurité en vigueur. Sur Ivry-sur-Seine, nous adaptons chaque intervention aux spécificités architecturales locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 200 chantiers réalisés
- Devis gratuit et transparent sans surprise
- Équipe de couvreurs hautement qualifiés et formés en continu
- Garantie décennale sur tous nos travaux de rénovation</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Ivry-sur-Seine coûte en moyenne entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Notre tarification s&apos;adapte précisément à vos besoins avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes de détérioration comme infiltrations, tuiles cassées, mousses importantes, ou après des événements climatiques majeurs. Un diagnostic précis permet de déterminer le moment opportun.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : ses certifications professionnelles, son expérience locale, ses références clients, ses garanties décennales, et la qualité de son devis détaillé. Groupe Expert Altitude Com répond à tous ces critères avec professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Ivry-sur-Seine ?
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
