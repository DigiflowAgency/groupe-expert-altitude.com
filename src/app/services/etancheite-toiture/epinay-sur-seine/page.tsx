import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Épinay-sur-Seine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrati',
  keywords: 'etancheite toiture épinay-sur-seine, etancheite toit terrasse épinay-sur-seine, etancheite toiture terrasse épinay-sur-seine, reparation etancheite épinay-sur-seine, entreprise etancheite épinay-sur-seine, fuite toiture terrasse épinay-sur-seine',
};

export default function EtancheiteToitureEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Épinay-sur-Seine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations. Nos solutions professionnelles garantissent une protection durable et efficace pour tous types de toitures terrasses.</p>

        <h2>Nos services de étanchéité toiture terrasse a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver la structure et la valeur de votre bâtiment. Notre expertise technique nous permet d&apos;intervenir sur tous types de surfaces, qu&apos;il s&apos;agisse de toitures résidentielles ou professionnelles à Épinay-sur-Seine et ses environs. Notre processus commence par un diagnostic précis, utilisant des techniques de détection avancées pour identifier les points faibles. Nous proposons ensuite des solutions sur-mesure, avec des membranes synthétiques haute performance offrant une protection optimale contre l&apos;eau et les intempéries. Notre approche combine technicité et durabilité, avec des matériaux garantissant une étanchéité jusqu&apos;à 20 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service premium : techniciens certifiés, intervention rapide sous 48h, devis gratuit et détaillé, garantie décennale, techniques innovantes, et plus de 15 ans d&apos;expérience en étanchéité. Nous sommes votre partenaire de confiance pour protéger durablement votre toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état actuel et les matériaux choisis. Pour un projet moyen de 50m², comptez un budget global entre 2 500€ et 7 500€. Un diagnostic précis permettra d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des murs, ou zones de stagnation d&apos;eau. Un professionnel utilisera des caméras thermiques et des tests d&apos;étanchéité spécifiques pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Cette longévité dépend de plusieurs facteurs : qualité des matériaux, technique de pose, exposition aux intempéries et entretien régulier. Un suivi annuel peut significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Épinay-sur-Seine ?
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
