import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Grasse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur toute la région grassoise. Situés au cœur de Grasse',
  keywords: 'couverture toiture grasse, renovation toiture grasse, reparation toiture grasse, couvreur grasse, refection toiture grasse, entreprise couverture grasse',
};

export default function CouvertureToitureGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur toute la région grassoise. Situés au cœur de Grasse, nous intervenons avec expertise pour protéger et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Grasse</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection finale, en utilisant des matériaux haute performance adaptés au climat méditerranéen. Notre équipe de professionnels maîtrise parfaitement les techniques modernes d&apos;isolation et de rénovation, garantissant une protection optimale contre les intempéries et une valorisation énergétique de votre habitat. Chaque projet est personnalisé, avec une attention méticuleuse aux spécificités architecturales locales de Grasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans dans la région grassoise
- Équipe certifiée et formée aux dernières normes techniques
- Devis gratuit et transparent sans engagement
- Interventions rapides et sur-mesure adaptées à chaque type de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la surface, les matériaux choisis et la complexité des travaux. Notre expertise nous permet de proposer des solutions financièrement optimisées avec des garanties décennales.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes visibles de dégradation comme des infiltrations, tuiles cassées, mousse ou affaissement. Un diagnostic précis tous les 10 ans permet d&apos;anticiper les réparations nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications professionnelles, une assurance décennale, des références vérifiables et une expertise technique récente. Vérifiez ses diplômes, demandez des avis clients et assurez-vous qu&apos;il maîtrise les techniques adaptées à votre type de toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Grasse ?
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
