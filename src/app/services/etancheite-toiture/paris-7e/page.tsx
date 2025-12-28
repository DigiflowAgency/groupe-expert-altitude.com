import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Paris 7e, spécialisé dans la protection et la rénovation',
  keywords: 'etancheite toiture paris 7e, etancheite toit terrasse paris 7e, etancheite toiture terrasse paris 7e, reparation etancheite paris 7e, entreprise etancheite paris 7e, fuite toiture terrasse paris 7e',
};

export default function EtancheiteToitureParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Paris 7e, spécialisé dans la protection et la rénovation de vos espaces horizontaux exposés aux intempéries. Notre expertise technique garantit des solutions durables contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 7e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux enjeux spécifiques de l&apos;immobilier parisien, en proposant des interventions sur-mesure adaptées à chaque configuration. Nous utilisons des membranes haute performance en PVC ou bitume élastomère, appliquées selon des techniques professionnelles qui assurent une protection optimale contre l&apos;eau et l&apos;humidité. Notre processus comprend un diagnostic précis, un traitement des supports, une préparation minutieuse et une application rigoureuse qui permet de garantir une étanchéité totale pendant 10 à 15 ans. Chaque intervention est réalisée par des techniciens certifiés, avec un contrôle qualité systématique pour une tranquillité totale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe dispose de plus de 15 ans d&apos;expérience spécifique sur Paris, nous intervenons rapidement (sous 48h), nos interventions sont garanties 10 ans, et nous proposons un diagnostic gratuit. Nos solutions sont adaptées aux contraintes architecturales du 7e arrondissement, avec un respect total des normes de construction.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état du support et la technique utilisée. Pour un appartement parisien moyen de 30m², comptez un investissement global entre 2 500€ et 6 000€. Un diagnostic précis permettra d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Notre équipe réalise des tests d&apos;étanchéité avec caméra thermique et détection électronique pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée varie entre 10 et 20 ans. Nos solutions atteignent facilement 15 ans avec un entretien annuel, grâce à l&apos;utilisation de matériaux haute qualité et une pose selon les règles de l&apos;art. Un suivi régulier est recommandé pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 7e ?
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
