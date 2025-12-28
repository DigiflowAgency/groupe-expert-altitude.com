import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Hyères | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Hyères et ses environs. Spécialistes depuis plus de 1',
  keywords: 'etancheite toiture hyères, etancheite toit terrasse hyères, etancheite toiture terrasse hyères, reparation etancheite hyères, entreprise etancheite hyères, fuite toiture terrasse hyères',
};

export default function EtancheiteToitureHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en étanchéité de toiture terrasse sur Hyères et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons efficacement vos bâtiments contre les infiltrations d&apos;eau grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de étanchéité toiture terrasse a Hyères</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse représente un enjeu crucial pour préserver l&apos;intégrité structurelle de votre propriété. Notre équipe intervient sur tous types de surfaces - résidentielles, commerciales et industrielles - avec une expertise technique pointue. Nous réalisons un diagnostic précis avant toute intervention, identifiant les zones fragiles et proposant des solutions adaptées. Notre processus comprend un traitement multicouche utilisant des membranes synthétiques haute performance, garantissant une protection optimale contre l&apos;humidité et les agressions climatiques. Dans la région hyéroise, nos techniques permettent de résister aux conditions méditerranéennes parfois intenses.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de proximité, 2) Des techniciens certifiés et formés annuellement, 3) Des matériaux de haute qualité avec garantie décennale, 4) Un devis détaillé et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, les matériaux et la complexité des travaux. Un diagnostic précalable nous permet de vous proposer un devis personnalisé et compétitif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures. Un professionnel utilisera des techniques comme la thermographie ou le test à l&apos;eau pour identifier précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions intègrent des matériaux garantis et une pose technique qui maximise la durabilité de votre toiture terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Hyères ?
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
