import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Lyon et dans sa région. Spécialistes des solutions techniq',
  keywords: 'etancheite toiture lyon, etancheite toit terrasse lyon, etancheite toiture terrasse lyon, reparation etancheite lyon, entreprise etancheite lyon, fuite toiture terrasse lyon',
};

export default function EtancheiteToitureLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse à Lyon et dans sa région. Spécialistes des solutions techniques innovantes, nous protégeons vos bâtiments contre les infiltrations d&apos;eau grâce à notre expertise pointue dans le domaine de l&apos;étanchéité.</p>

        <h2>Nos services de étanchéité toiture terrasse a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences les plus strictes de protection et de durabilité. Nos techniciens hautement qualifiés réalisent un diagnostic précis avant d&apos;appliquer des solutions sur-mesure adaptées à chaque structure. Nous utilisons uniquement des matériaux haute performance comme les membranes synthétiques, les résines spéciales et les revêtements élastomères garantissant une étanchéité optimale. Notre processus comprend un audit technique complet, la préparation du support, l&apos;application du système d&apos;étanchéité et un contrôle qualité rigoureux pour assurer une protection durable contre les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans l&apos;étanchéité lyonnaise, 2) Des techniciens certifiés et formés aux dernières technologies, 3) Un diagnostic gratuit et précis avant intervention, 4) Des solutions garanties 10 ans avec un suivi personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité des travaux et les matériaux utilisés. Pour un toit terrasse moyen de 50m², comptez un budget global entre 4 000€ et 12 500€. Un devis personnalisé gratuit vous permettra d&apos;obtenir un prix précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations lors de fortes pluies, zones de décoloration, moisissures ou boursoufflures sur les murs. Un professionnel utilisera des méthodes comme la caméra thermique, le test à l&apos;eau ou la détection électronique pour localiser précisément l&apos;origine de la fuite.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;entretien régulier et l&apos;exposition aux conditions climatiques. Un suivi annuel et des réparations ponctuelles peuvent significativement prolonger cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Lyon ?
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
