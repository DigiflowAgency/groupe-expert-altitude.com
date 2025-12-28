import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Mérignac | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Mérignac, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les ',
  keywords: 'etancheite toiture mérignac, etancheite toit terrasse mérignac, etancheite toiture terrasse mérignac, reparation etancheite mérignac, entreprise etancheite mérignac, fuite toiture terrasse mérignac',
};

export default function EtancheiteToitureMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Mérignac, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos solutions sur mesure garantissent une protection durable pour les toitures terrasses de la métropole bordelaise.</p>

        <h2>Nos services de étanchéité toiture terrasse a Mérignac</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité d&apos;une toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité de votre bâtiment. Notre équipe de professionnels intervient sur tous types de structures à Mérignac et ses environs, en utilisant les techniques les plus avancées du marché. Nous réalisons un diagnostic précis avant toute intervention, identifiant les points faibles et les zones potentiellement vulnérables. Notre processus comprend un traitement complet : nettoyage de la surface, réparation des supports, application de membranes d&apos;étanchéité haute performance et finition soignée. Nos solutions techniques permettent de résister aux contraintes climatiques, avec une garantie décennale qui assure votre tranquillité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence en étanchéité. Nos techniciens sont certifiés et disposent de plus de 15 ans d&apos;expérience. Nous utilisons uniquement des matériaux de dernière génération, offrant une protection optimale contre l&apos;eau et l&apos;humidité. Notre approche sur-mesure et notre réactivité font notre différence, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la toiture. Pour une surface moyenne de 50m², comptez un budget global entre 2 500€ et 7 500€. Un diagnostic précalable nous permet de vous proposer un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou matériaux. Des zones de stagnation d&apos;eau, des fissures visibles ou des décollements d&apos;étanchéité sont également des alertes. Notre équipe propose un diagnostic complet avec caméra thermique pour identifier précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée est de 15 à 25 ans. Cette longévité dépend de plusieurs facteurs : qualité des matériaux, technique de pose, entretien régulier et conditions climatiques. Nos solutions intègrent des garanties décennales et nous recommandons une inspection professionnelle tous les 5 ans pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Mérignac ?
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
