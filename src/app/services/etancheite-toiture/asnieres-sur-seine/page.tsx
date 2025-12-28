import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Asnières-sur-Seine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltra',
  keywords: 'etancheite toiture asnières-sur-seine, etancheite toit terrasse asnières-sur-seine, etancheite toiture terrasse asnières-sur-seine, reparation etancheite asnières-sur-seine, entreprise etancheite asnières-sur-seine, fuite toiture terrasse asnières-sur-seine',
};

export default function EtancheiteToitureAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Asnières-sur-Seine, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations. Nos solutions techniques garantissent une protection durable et efficace pour tous vos bâtiments résidentiels et professionnels.</p>

        <h2>Nos services de étanchéité toiture terrasse a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre expertise technique nous permet d&apos;intervenir sur tous types de surfaces, en utilisant les matériaux les plus performants du marché. Nous réalisons un diagnostic précis avant chaque intervention, identifiant les zones sensibles et les potentielles sources d&apos;infiltration. Notre processus comprend le nettoyage approfondi, la préparation du support, l&apos;application de membranes d&apos;étanchéité haute résistance et un contrôle qualité rigoureux. Nos techniciens maîtrisent parfaitement les techniques modernes d&apos;étanchéification, garantissant une protection optimale pour les toitures terrasses à Asnières-sur-Seine et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service premium. Nos équipes possèdent plus de 15 ans d&apos;expérience en étanchéité. Nous proposons des garanties décennales sur nos interventions. Notre approche sur-mesure s&apos;adapte à chaque configuration de toiture. Nous utilisons exclusivement des matériaux certifiés et écologiques, pour une performance durable et respectueuse de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la superficie, la complexité technique et les matériaux utilisés. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les traces d&apos;humidité, les moisissures, les déformations du plafond ou les infiltrations lors de fortes pluies. Nos experts recommandent un test d&apos;étanchéité annuel et une inspection visuelle régulière des points singuliers comme les relevés et les jonctions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans, avec un entretien régulier. La qualité des matériaux, la pose et la maintenance conditionnent directement sa longévité. Nos solutions intègrent des membranes garanties 15 ans minimum.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Asnières-sur-Seine ?
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
