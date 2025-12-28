import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Paris 9e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Paris 9e. Spécialistes reconnus dans la protection ',
  keywords: 'etancheite toiture paris 9e, etancheite toit terrasse paris 9e, etancheite toiture terrasse paris 9e, reparation etancheite paris 9e, entreprise etancheite paris 9e, fuite toiture terrasse paris 9e',
};

export default function EtancheiteToitureParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Paris 9e. Spécialistes reconnus dans la protection de vos infrastructures, nous intervenons avec précision et expertise pour garantir l&apos;intégrité de vos toitures.</p>

        <h2>Nos services de étanchéité toiture terrasse a Paris 9e</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des bâtiments parisiens. Nous utilisons des techniques de pointe et des membranes haute performance pour créer une barrière imperméable totale. Notre processus débute par un diagnostic précis, incluant une inspection thermographique qui permet de détecter les moindres points faibles. Nos techniciens qualifiés appliquent ensuite des solutions personnalisées, qu&apos;il s&apos;agisse de résines liquides, de membranes bitumineuses ou de systèmes synthétiques innovants, assurant une protection durable contre les infiltrations d&apos;eau.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos interventions bénéficient de plus de 15 ans d&apos;expérience, d&apos;une équipe certifiée et d&apos;un engagement qualité total. Nous proposons des garanties décennales, intervenons rapidement dans tout Paris 9e et utilisons uniquement des matériaux écologiques et certifiés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, la complexité et les matériaux choisis. Pour un appartement parisien typique, comptez un budget global entre 3 000€ et 8 000€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des décolorations, des moisissures ou des gonflements. Notre équipe recommande une inspection annuelle, particulièrement après les périodes hivernales à Paris 9e, pour détecter précocement tout problème potentiel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle peut durer entre 15 et 25 ans. Notre garantie décennale et l&apos;utilisation de matériaux haut de gamme assurent une protection optimale. L&apos;entretien régulier et des réparations rapides peuvent significativement prolonger cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Paris 9e ?
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
