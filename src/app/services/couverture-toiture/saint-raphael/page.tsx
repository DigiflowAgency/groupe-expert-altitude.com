import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Saint-Raphaël, intervient depuis plus de 15 ans pour protég',
  keywords: 'couverture toiture saint-raphaël, renovation toiture saint-raphaël, reparation toiture saint-raphaël, couvreur saint-raphaël, refection toiture saint-raphaël, entreprise couverture saint-raphaël',
};

export default function CouvertureToitureSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Saint-Raphaël, intervient depuis plus de 15 ans pour protéger et valoriser votre patrimoine immobilier. Nos experts maîtrisent tous les aspects techniques pour garantir la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes des propriétaires de Saint-Raphaël et ses environs. Notre équipe qualifiée réalise des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection finale, en utilisant des matériaux de haute qualité adaptés au climat méditerranéen. Nous travaillons avec des tuiles terre cuite, ardoises, bacs acier et matériaux composites, en respectant les normes techniques et esthétiques. Notre approche sur-mesure permet de traiter chaque projet individuellement, en proposant des solutions durables et économiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Saint-Raphaël
• Équipe de 12 couvreurs certifiés et formés
• Devis gratuit et détaillé sous 48h
• Matériaux garantis avec une durabilité de 30 ans
• Interventions rapides et professionnelles
• Respect des normes environnementales et techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ par m², selon les matériaux choisis et la complexité du chantier. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations structurelles. Les toitures exposées aux conditions méditerranéennes nécessitent une vigilance accrue avec des inspections tous les 5-10 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications officielles, son assurance décennale, ses références locales, ses avis clients, et sa capacité à fournir un devis détaillé. Demandez systématiquement un diagnostic technique préalable et comparez plusieurs propositions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Saint-Raphaël ?
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
