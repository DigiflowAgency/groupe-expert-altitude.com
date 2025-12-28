import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Experts en étanchéité de toiture terrasse, le Groupe Expert Altitude Com protège votre patrimoine immobilier à Mandelieu-la-Napoule depuis plus de 15 ans. ',
  keywords: 'etancheite toiture mandelieu-la-napoule, etancheite toit terrasse mandelieu-la-napoule, etancheite toiture terrasse mandelieu-la-napoule, reparation etancheite mandelieu-la-napoule, entreprise etancheite mandelieu-la-napoule, fuite toiture terrasse mandelieu-la-napoule',
};

export default function EtancheiteToitureMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en étanchéité de toiture terrasse, le Groupe Expert Altitude Com protège votre patrimoine immobilier à Mandelieu-la-Napoule depuis plus de 15 ans. Nos solutions sur-mesure garantissent une protection optimale contre les infiltrations, préservant la durabilité et la valeur de votre bien.</p>

        <h2>Nos services de étanchéité toiture terrasse a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux spécificités techniques de chaque bâtiment, en utilisant des membranes haute performance adaptées aux conditions climatiques méditerranéennes. Nous réalisons un diagnostic précis avant toute intervention, identifiant les zones fragiles et proposant une solution personnalisée. Notre processus comprend un nettoyage approfondi, la préparation du support, l&apos;application de primaires d&apos;accrochage et la pose de membranes d&apos;étanchéité certifiées. Chaque chantier à Mandelieu-la-Napoule bénéficie d&apos;un suivi technique rigoureux, garantissant une protection durable contre les infiltrations et les dégradations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre réactivité et notre engagement qualité. 95% de nos clients recommandent nos services, grâce à notre approche sur-mesure. Nos techniciens sont certifiés, notre matériel est à la pointe et nous proposons une garantie décennale sur tous nos travaux d&apos;étanchéité. Notre connaissance approfondie des problématiques locales fait de nous le partenaire de confiance pour protéger votre toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ par m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Un diagnostic précis nous permet de vous proposer un devis détaillé et transparent, sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes comme les traces d&apos;humidité sur les plafonds, les moisissures, les décollements de peinture ou les infiltrations. Nos experts utilisent des techniques professionnelles comme la thermographie et des tests d&apos;étanchéité pour localiser précisément les points faibles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Nos membranes haut de gamme et notre pose experte garantissent une protection optimale, minimisant les risques de dégradation prématurée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Mandelieu-la-Napoule ?
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
