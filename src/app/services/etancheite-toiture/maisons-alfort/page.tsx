import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Votre toiture terrasse mérite une protection d&apos;excellence. Groupe Expert Altitude Com est votre partenaire spécialisé en étanchéité à Maisons-Alfort, garan',
  keywords: 'etancheite toiture maisons-alfort, etancheite toit terrasse maisons-alfort, etancheite toiture terrasse maisons-alfort, reparation etancheite maisons-alfort, entreprise etancheite maisons-alfort, fuite toiture terrasse maisons-alfort',
};

export default function EtancheiteToitureMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture terrasse mérite une protection d&apos;excellence. Groupe Expert Altitude Com est votre partenaire spécialisé en étanchéité à Maisons-Alfort, garantissant des solutions durables contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse représente un enjeu crucial pour la préservation de votre patrimoine immobilier. Notre expertise technique nous permet de réaliser des interventions précises, adaptées à chaque configuration architecturale. Nous utilisons des membranes synthétiques haute performance, appliquées selon des techniques professionnelles qui assurent une protection optimale contre l&apos;humidité. Notre processus comprend un diagnostic approfondi, un traitement sur-mesure et une finition soignée, avec une attention particulière portée aux points singuliers comme les relevés, les angles et les évacuations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour la qualité et la fiabilité. Nos techniciens sont certifiés, notre expérience dépasse 15 ans dans le domaine de l&apos;étanchéité sur Maisons-Alfort. Nous proposons des garanties décennales, intervenons rapidement et utilisons uniquement des matériaux conformes aux normes françaises. Notre approche allie expertise technique et conseil personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux choisis. Un diagnostic préalable gratuit permet d&apos;établir un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes comme des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures ou des déformations. Des tests d&apos;étanchéité à l&apos;eau et des inspections thermographiques permettent un diagnostic professionnel précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de la qualité des matériaux, de l&apos;installation et de l&apos;entretien régulier. Un suivi annuel permet de prolonger significativement sa durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Maisons-Alfort ?
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
