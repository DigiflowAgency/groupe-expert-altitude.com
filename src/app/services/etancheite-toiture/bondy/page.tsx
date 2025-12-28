import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Bondy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bondy et dans toute la région parisienne. Spécialistes',
  keywords: 'etancheite toiture bondy, etancheite toit terrasse bondy, etancheite toiture terrasse bondy, reparation etancheite bondy, entreprise etancheite bondy, fuite toiture terrasse bondy',
};

export default function EtancheiteToitureBondyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Bondy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Bondy et dans toute la région parisienne. Spécialistes depuis plus de 15 ans, nous garantissons des solutions durables contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Bondy</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un service technique crucial pour protéger votre bâtiment contre les risques d&apos;infiltration et de dommages structurels. Notre équipe hautement qualifiée intervient sur tous types de toitures terrasses, résidentielles et commerciales à Bondy, en utilisant les techniques les plus modernes et les matériaux haute performance. Nous réalisons un diagnostic précis avant toute intervention, identifiant chaque point faible et proposant une solution sur-mesure. Notre processus comprend le nettoyage complet de la surface, la préparation du support, l&apos;application de membranes d&apos;étanchéité spécialisées et un contrôle final garantissant une protection optimale contre l&apos;eau et l&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Bondy
- Techniciens certifiés et formés aux dernières normes
- Devis gratuit et transparent
- Garantie décennale sur nos interventions
- Matériaux écologiques et haute résistance
- Intervention rapide sous 48h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un investissement entre 1500€ et 4500€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les taches d&apos;humidité sur les plafonds, les moisissures, les décollements de peinture ou les infiltrations. Des zones décolorées ou des boursoufflures peuvent également indiquer un problème d&apos;étanchéité. Un professionnel utilisera des techniques comme la thermographie ou le test à l&apos;eau pour localiser précisément la source.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans. La durée de vie dépend des matériaux utilisés, de la qualité de la pose, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Des visites annuelles de maintenance peuvent significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Bondy ?
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
