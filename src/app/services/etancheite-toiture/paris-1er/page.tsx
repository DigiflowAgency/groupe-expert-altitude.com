import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 1er | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité toiture terrasse à Paris 1er, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les',
  keywords: 'etancheite toiture paris 1er, etancheite toit terrasse paris 1er, etancheite toiture terrasse paris 1er, reparation etancheite paris 1er, entreprise etancheite paris 1er, fuite toiture terrasse paris 1er',
};

export default function EtancheiteToitureParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité toiture terrasse à Paris 1er, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nos solutions sur-mesure garantissent une protection optimale de vos toitures terrassses dans la capitale.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 1er</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux exigences les plus strictes de l&apos;habitat parisien. Nos techniciens hautement qualifiés réalisent un diagnostic précis avant d&apos;appliquer des membranes d&apos;étanchéité dernière génération, résistantes aux conditions climatiques urbaines. Nous intervenons sur tous types de toitures terrassses, neuves ou anciennes, en utilisant des techniques innovantes comme les résines polyuréthanes ou les systèmes d&apos;étanchéité liquide. Notre approche garantit une protection durable contre les infiltrations, préservant la structure de votre bâtiment et évitant les coûteuses réparations futures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise de plus de 15 ans à Paris 1er
✓ Diagnostic gratuit et précis
✓ Techniciens certifiés et formés aux dernières normes
✓ Garantie décennale sur nos interventions
✓ Solutions personnalisées adaptées à chaque configuration de toiture terrasse</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état actuel et les matériaux utilisés. Pour un appartement parisien typique, comptez un budget global entre 3 000€ et 8 000€ pour une intervention complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, décoloration des peintures, moisissures ou zones de stagnation d&apos;eau. Un diagnostic professionnel avec caméra thermique permet une détection précise et sans dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans. Notre système d&apos;étanchéité utilise des matériaux haute performance qui, avec un entretien régulier, peuvent prolonger cette durée jusqu&apos;à 30 ans, protégeant durablement votre patrimoine immobilier parisien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 1er ?
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
