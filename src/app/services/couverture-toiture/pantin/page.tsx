import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Pantin | Groupe Expert Altitude Com',
  description: 'Experts en couverture et rénovation de toiture à Pantin, le Groupe Expert Altitude Com transforme et protège votre habitat avec un savoir-faire artisanal u',
  keywords: 'couverture toiture pantin, renovation toiture pantin, reparation toiture pantin, couvreur pantin, refection toiture pantin, entreprise couverture pantin',
};

export default function CouvertureToiturePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en couverture et rénovation de toiture à Pantin, le Groupe Expert Altitude Com transforme et protège votre habitat avec un savoir-faire artisanal unique. Nous intervenons sur tous types de toitures pour garantir la durabilité et l&apos;esthétique de votre bien immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Pantin</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation répond aux exigences les plus strictes de qualité et de performance. Nous réalisons un diagnostic précis de votre toiture, identifiant chaque désordre potentiel comme les infiltrations, tuiles cassées ou problèmes d&apos;étanchéité. Notre équipe de professionnels à Pantin utilise des techniques et matériaux de dernière génération, permettant une rénovation complète qui améliore l&apos;isolation thermique et la résistance de votre toiture. Chaque intervention est personnalisée, avec un devis détaillé et transparent, garantissant une solution sur-mesure adaptée à votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans la rénovation de toiture, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un engagement qualité avec 10 ans de garantie décennale, 4) Des solutions techniques innovantes réduisant jusqu&apos;à 30% les déperditions énergétiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Pantin varie entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Un diagnostic précis permet d&apos;établir un devis personnalisé avec différentes options budgétaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes comme infiltrations récurrentes, tuiles déformées, mousses importantes, ou après des événements climatiques majeurs. Un expert peut réaliser un diagnostic complet pour vous conseiller.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, demandez des références locales à Pantin, consultez ses avis clients, assurez-vous de sa garantie décennale et obtenez plusieurs devis comparatifs détaillant précisément les interventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Pantin ?
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
