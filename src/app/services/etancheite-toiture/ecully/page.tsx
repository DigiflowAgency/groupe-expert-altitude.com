import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Écully | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Écully et ses environs. Spécialistes depuis plus de 15 a',
  keywords: 'etancheite toiture écully, etancheite toit terrasse écully, etancheite toiture terrasse écully, reparation etancheite écully, entreprise etancheite écully, fuite toiture terrasse écully',
};

export default function EtancheiteToitureEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Écully et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Écully</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux exigences techniques les plus strictes. Nous intervenons sur tous types de structures - résidentielles, commerciales et industrielles - en réalisant un diagnostic précis avant toute intervention. Notre méthode combine une inspection minutieuse, un traitement adapté et des matériaux haute performance garantissant une protection durable. Nos techniciens utilisent des membranes synthétiques dernière génération offrant une résistance maximale aux contraintes climatiques, avec une efficacité prouvée de plus de 95% contre les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale maîtrisée à Écully, 2) Des techniciens certifiés et formés annuellement, 3) Un diagnostic gratuit et transparent, 4) Des solutions garanties 10 ans, avec un engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes comme des traces d&apos;humidité, des auréoles sur les plafonds, des infiltrations lors de fortes pluies ou des zones de décoloration. Un professionnel utilisera des techniques comme la thermographie ou des tests d&apos;étanchéité spécifiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée dure entre 15 et 25 ans, avec un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la pose et les conditions climatiques locales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Écully ?
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
