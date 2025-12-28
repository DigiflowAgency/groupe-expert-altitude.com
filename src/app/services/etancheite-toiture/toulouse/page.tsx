import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Toulouse | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre spécialiste en étanchéité de toiture terrasse à Toulouse, offrant des solutions sur-mesure pour protéger efficacement ',
  keywords: 'etancheite toiture toulouse, etancheite toit terrasse toulouse, etancheite toiture terrasse toulouse, reparation etancheite toulouse, entreprise etancheite toulouse, fuite toiture terrasse toulouse',
};

export default function EtancheiteToitureToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre spécialiste en étanchéité de toiture terrasse à Toulouse, offrant des solutions sur-mesure pour protéger efficacement votre patrimoine immobilier contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre expertise en étanchéité de toiture terrasse répond aux défis spécifiques de l&apos;habitat toulousain, caractérisé par des variations climatiques importantes. Nous intervenons sur tous types de toitures terrasses, qu&apos;elles soient résidentielles ou professionnelles, en utilisant des techniques et matériaux de dernière génération. Notre processus commence par un diagnostic précis, réalisé par nos techniciens hautement qualifiés, qui évaluent chaque surface avec des outils de détection avancés. Nous proposons ensuite une solution personnalisée, intégrant des membranes d&apos;étanchéité haute performance, garantissant une protection optimale contre l&apos;eau et une durabilité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Toulouse, 2) Des interventions rapides et précises, 3) Des techniciens certifiés et formés aux dernières normes d&apos;étanchéité, 4) Une garantie décennale sur nos travaux, offrant une tranquillité d&apos;esprit totale à nos clients.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1 500€ et 4 500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme des taches d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des déformations ou boursoufflures sur la membrane. Nos experts utilisent également des caméras thermiques et des tests d&apos;étanchéité précis pour identifier les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes synthétiques garanties 15 ans minimum, et nos interventions intègrent un suivi personnalisé pour maximiser la durée de vie de votre étanchéité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Toulouse ?
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
