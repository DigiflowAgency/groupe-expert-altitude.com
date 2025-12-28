import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Gradignan | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Gradignan et dans toute la région bordelaise. Spéci',
  keywords: 'etancheite toiture gradignan, etancheite toit terrasse gradignan, etancheite toiture terrasse gradignan, reparation etancheite gradignan, entreprise etancheite gradignan, fuite toiture terrasse gradignan',
};

export default function EtancheiteToitureGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Gradignan et dans toute la région bordelaise. Spécialistes reconnus, nous protégeons votre patrimoine immobilier contre les infiltrations grâce à des solutions techniques innovantes et durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a Gradignan</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des bâtiments résidentiels et professionnels de Gradignan. Nous intervenons sur tous types de surfaces, en utilisant des membranes synthétiques haute performance garantissant une protection optimale contre l&apos;eau et l&apos;humidité. Notre processus comprend un diagnostic précis, un nettoyage approfondi de la surface, la préparation du support et l&apos;application de systèmes d&apos;étanchéité adaptés à chaque configuration. Notre expertise technique nous permet de traiter efficacement les zones sensibles comme les jonctions, les relevés et les évacuations, en assurant une imperméabilité totale et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience, nous proposons des garanties décennales, utilisons uniquement des matériaux de haute qualité et réalisons des interventions rapides et précises. Notre taux de satisfaction client dépasse les 95% sur les chantiers d&apos;étanchéité de toiture terrasse.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un toit terrasse moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, recherchez des signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures, des déformations ou des taches d&apos;eau. Utilisez un test à la lance pour localiser précisément les points faibles. Un professionnel peut également réaliser un diagnostic par caméra thermique pour identifier les zones de vulnérabilité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Les membranes synthétiques modernes offrent une résistance exceptionnelle aux UV, aux variations climatiques et à l&apos;usure. Un entretien régulier et des réparations ponctuelles peuvent significativement prolonger cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Gradignan ?
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
