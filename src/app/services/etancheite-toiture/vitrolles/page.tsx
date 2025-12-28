import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Vitrolles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Vitrolles et dans toute la région PACA. Spécialiste',
  keywords: 'etancheite toiture vitrolles, etancheite toit terrasse vitrolles, etancheite toiture terrasse vitrolles, reparation etancheite vitrolles, entreprise etancheite vitrolles, fuite toiture terrasse vitrolles',
};

export default function EtancheiteToitureVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Vitrolles et dans toute la région PACA. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux problématiques spécifiques des constructions locales à Vitrolles. Nous intervenons sur tous types de surfaces, qu&apos;il s&apos;agisse de bâtiments résidentiels, commerciaux ou industriels. Notre approche technique combine des membranes haute performance, un diagnostic précis et une application méticuleuse garantissant une protection durable contre l&apos;humidité. Chaque intervention commence par un état des lieux complet permettant d&apos;identifier les zones sensibles et de proposer une solution sur-mesure adaptée à la structure et aux contraintes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des techniciens formés aux dernières normes d&apos;étanchéité, 2) Un diagnostic gratuit et transparent, 3) Des matériaux de haute qualité garantissant une durabilité de 15 à 20 ans, 4) Une intervention rapide et professionnelle sur Vitrolles et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, la surface et les matériaux utilisés. Pour une terrasse moyenne de 50m², comptez un budget global entre 2 500€ et 7 500€. Un devis personnalisé gratuit vous permettra d&apos;avoir un chiffrage précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes révélateurs d&apos;une fuite en toiture terrasse sont : infiltrations d&apos;eau, taches d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, et présence de gouttes lors des épisodes pluvieux. Un professionnel détectera les zones problématiques grâce à des tests d&apos;étanchéité et une inspection thermographique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Cette longévité dépend de la qualité des matériaux, de l&apos;application, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Un suivi annuel permet de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Vitrolles ?
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
