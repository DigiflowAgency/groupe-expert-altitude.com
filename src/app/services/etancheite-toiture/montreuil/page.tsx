import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Montreuil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Montreuil, spécialiste des solutions durables contre les i',
  keywords: 'etancheite toiture montreuil, etancheite toit terrasse montreuil, etancheite toiture terrasse montreuil, reparation etancheite montreuil, entreprise etancheite montreuil, fuite toiture terrasse montreuil',
};

export default function EtancheiteToitureMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Montreuil, spécialiste des solutions durables contre les infiltrations. Notre expertise technique garantit la protection optimale de votre bâtiment contre les risques d&apos;humidité et de dégradation structurelle.</p>

        <h2>Nos services de étanchéité toiture terrasse a Montreuil</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques de l&apos;habitat à Montreuil, en proposant des solutions sur-mesure adaptées à chaque configuration. Notre processus commence par un diagnostic précis utilisant des techniques de détection thermique et d&apos;inspection drone, permettant d&apos;identifier avec une précision de 95% les zones potentiellement fragiles. Nous intervenons ensuite avec des membranes d&apos;étanchéité haute performance, posées selon les normes NF-DTU, qui offrent une protection garantie pendant 15 à 20 ans. Notre approche technique intègre des matériaux écologiques et résistants, assurant une imperméabilisation complète tout en préservant l&apos;esthétique de votre toiture terrasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Montreuil, 2) Des techniciens certifiés et formés aux dernières technologies d&apos;étanchéité, 3) Un diagnostic gratuit et transparent, 4) Des interventions rapides et un suivi personnalisé. Notre taux de satisfaction client dépasse les 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ par m², selon la complexité des travaux, les matériaux utilisés et l&apos;état initial de la surface. Pour un projet moyen de 30m², comptez un investissement global entre 2 400€ et 7 500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration ou cloquage de la peinture, présence de moisissures. Un professionnel utilisera des caméras thermiques et des tests d&apos;étanchéité pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Cette longévité dépend de plusieurs facteurs : qualité des matériaux, technique de pose, exposition aux intempéries et entretien régulier. Un contrôle annuel et des petites réparations préventives peuvent significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Montreuil ?
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
