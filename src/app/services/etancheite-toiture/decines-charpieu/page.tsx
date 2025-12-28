import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Décines-Charpieu et ses environs. Spécialistes en réno',
  keywords: 'etancheite toiture décines-charpieu, etancheite toit terrasse décines-charpieu, etancheite toiture terrasse décines-charpieu, reparation etancheite décines-charpieu, entreprise etancheite décines-charpieu, fuite toiture terrasse décines-charpieu',
};

export default function EtancheiteToitureDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Décines-Charpieu et ses environs. Spécialistes en rénovation et protection des toits, nous garantissons une imperméabilité totale contre les infiltrations et les dégradations climatiques.</p>

        <h2>Nos services de étanchéité toiture terrasse a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un service technique essentiel pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre équipe utilise des techniques et matériaux de pointe, comme les membranes synthétiques EPDM et les résines polymères, pour assurer une protection maximale. À Décines-Charpieu, nous intervenons sur tous types de surfaces : immeubles, commerces, locaux industriels. Notre processus comprend un diagnostic précis, un nettoyage approfondi, la préparation du support et l&apos;application de systèmes d&apos;étanchéité garantis 10 ans. Nos solutions permettent de réduire jusqu&apos;à 30% les risques d&apos;infiltrations et de prolonger la durée de vie de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés, notre entreprise dispose de plus de 15 ans d&apos;expérience en étanchéité. Nous proposons des interventions rapides, un devis gratuit sous 48h et une garantie décennale. Notre approche sur-mesure et notre réactivité font notre différence sur le secteur de Décines-Charpieu.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état initial et les matériaux utilisés. Pour un appartement de 100m², comptez un budget global entre 5000€ et 15000€. Un diagnostic précis permet d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, décoloration des peintures, infiltrations lors de fortes pluies. Des tests d&apos;étanchéité professionnels avec caméra thermique permettent de localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée est de 10 à 25 ans. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;exposition aux intempéries et l&apos;entretien régulier. Nos solutions atteignent facilement 15-20 ans avec un suivi annuel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Décines-Charpieu ?
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
