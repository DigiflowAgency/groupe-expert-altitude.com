import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation de toiture à Saint-Maur-des-Fossés, spécialiste des interventions sur mesure qui',
  keywords: 'couverture toiture saint-maur-des-fossés, renovation toiture saint-maur-des-fossés, reparation toiture saint-maur-des-fossés, couvreur saint-maur-des-fossés, refection toiture saint-maur-des-fossés, entreprise couverture saint-maur-des-fossés',
};

export default function CouvertureToitureSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation de toiture à Saint-Maur-des-Fossés, spécialiste des interventions sur mesure qui protègent durablement votre patrimoine immobilier. Avec plus de 15 ans d&apos;expertise, nous intervenons sur tous types de couvertures dans le Val-de-Marne.</p>

        <h2>Nos services de couverture et rénovation toiture a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de sécurité. Nos équipes de couvreurs professionnels réalisent un diagnostic précis avant toute intervention, évaluant l&apos;état structural et les potentiels points faibles. Nous utilisons uniquement des matériaux haute performance garantissant une étanchéité optimale et une résistance aux conditions climatiques. Notre processus inclut un relevé technique complet, une proposition détaillée et transparente, puis une réalisation méticuleuse respectant les normes en vigueur. Chaque chantier à Saint-Maur-des-Fossés bénéficie d&apos;une approche personnalisée et d&apos;une attention aux moindres détails.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 15 ans d&apos;expérience
- Diagnostic technique gratuit et précis
- Devis transparent sans surprise
- Interventions rapides et sur-mesure
- Garantie décennale sur tous nos travaux
- Adaptabilité à tous types d&apos;habitats et de toitures</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Chez Groupe Expert Altitude Com, nous proposons des solutions modulables et un financement personnalisé pour s&apos;adapter à chaque budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précis : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses importantes, ou après un événement climatique majeur. Un diagnostic professionnel permet de déterminer précisément le moment opportun.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications officielles, son assurance décennale, ses avis clients, ses références locales, et sa capacité à fournir un devis détaillé. Groupe Expert Altitude Com répond à tous ces critères et propose systématiquement une expertise technique avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Saint-Maur-des-Fossés ?
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
