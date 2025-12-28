import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Cenon | Groupe Expert Altitude Com',
  description: 'Spécialistes de l&apos;étanchéité toiture terrasse à Cenon depuis plus de 15 ans, le Groupe Expert Altitude Com protège votre patrimoine contre les infiltration',
  keywords: 'etancheite toiture cenon, etancheite toit terrasse cenon, etancheite toiture terrasse cenon, reparation etancheite cenon, entreprise etancheite cenon, fuite toiture terrasse cenon',
};

export default function EtancheiteToitureCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes de l&apos;étanchéité toiture terrasse à Cenon depuis plus de 15 ans, le Groupe Expert Altitude Com protège votre patrimoine contre les infiltrations et les dégradations. Nous intervenons sur tous types de toitures terrasses avec une expertise technique garantissant une protection durable.</p>

        <h2>Nos services de étanchéité toiture terrasse a Cenon</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, identifiant les zones sensibles et les potentiels points faibles. Nous utilisons des membranes techniques haute performance adaptées à chaque configuration, avec des matériaux résistant aux variations climatiques de la région bordelaise. Notre processus comprend un nettoyage approfondi, une préparation de surface méticuleuse, et l&apos;application de systèmes d&apos;étanchéité multicouches offrant une protection optimale contre l&apos;eau et l&apos;humidité. Chaque chantier à Cenon bénéficie d&apos;un suivi personnalisé et de techniques d&apos;application conformes aux normes professionnelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans 
✓ Équipe technique certifiée et formée aux dernières technologies 
✓ Devis gratuit et transparent 
✓ Interventions rapides sur Cenon et l&apos;agglomération bordelaise 
✓ Garantie décennale sur tous nos travaux d&apos;étanchéité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité technique et les matériaux utilisés. Pour un projet moyen de 30m², comptez un investissement global entre 1500€ et 4500€. Un diagnostic précalable permet d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez des signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures ou des déformations. Des tests d&apos;étanchéité professionnels avec caméra thermique et systèmes de détection spécialisés permettent une analyse précise et non invasive.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans. La durée de vie dépend de la qualité des matériaux, de la pose, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Un contrôle annuel et des petites réparations préventives peuvent significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Cenon ?
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
