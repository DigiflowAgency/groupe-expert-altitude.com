import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a La Garde | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse sur La Garde et ses environs, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les ',
  keywords: 'etancheite toiture la garde, etancheite toit terrasse la garde, etancheite toiture terrasse la garde, reparation etancheite la garde, entreprise etancheite la garde, fuite toiture terrasse la garde',
};

export default function EtancheiteToitureLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse sur La Garde et ses environs, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations depuis plus de 15 ans. Nos solutions sur-mesure garantissent une protection durable et efficace pour tous vos bâtiments.</p>

        <h2>Nos services de étanchéité toiture terrasse a La Garde</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver la structure et la valeur de votre bien immobilier. Notre expertise technique nous permet d&apos;intervenir sur tous types de surfaces, qu&apos;il s&apos;agisse de toitures résidentielles ou professionnelles à La Garde. Notre processus d&apos;intervention comprend un diagnostic précis, un traitement adapté et une mise en œuvre rigoureuse utilisant les matériaux les plus performants du marché. Nous réalisons un contrôle d&apos;étanchéité complet, identifions les zones sensibles et proposons une solution personnalisée qui répond à vos contraintes techniques et budgétaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche globale : diagnostic technique pointu, solutions innovantes, équipe certifiée et intervention rapide. 95% de nos clients recommandent nos services. Nous proposons une garantie décennale, un devis gratuit sous 48h et un accompagnement personnalisé tout au long du chantier d&apos;étanchéité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état du support et la technique utilisée. Pour une terrasse moyenne de 30m², comptez un budget entre 1500€ et 4500€. Un diagnostic précis permettra de définir un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité sur les plafonds, les murs intérieurs, les décollements de peinture ou les infiltrations lors de fortes pluies. Un professionnel utilisera des techniques comme la thermographie ou le test à l&apos;eau pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 10 et 25 ans. La durée dépend de la qualité des matériaux, de la pose et de l&apos;entretien régulier. Nos solutions utilisent des membranes d&apos;étanchéité haute performance garantissant une protection optimale sur le long terme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a La Garde ?
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
