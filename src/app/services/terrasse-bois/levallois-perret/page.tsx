import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Levallois-Perret | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Levallois-Perret avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solu',
  keywords: 'terrasse bois levallois-perret, terrasse sur plot levallois-perret, terrasse bois sur plot levallois-perret, pose terrasse bois levallois-perret, terrasse composite levallois-perret, terrasse bois piscine levallois-perret',
};

export default function TerrasseBoisLevalloisPerretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Levallois-Perret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Levallois-Perret avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent instantanément votre propriété et offrent un cadre de vie extérieur exceptionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Levallois-Perret</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et esthétique parfaite pour les propriétaires exigeants de Levallois-Perret. Notre méthode innovante permet une installation précise, avec une hauteur ajustable qui compense les différences de niveau du sol. Nous sélectionnons rigoureusement des matériaux de haute qualité, principalement des bois composites résistants aux intempéries et aux UV, garantissant une durabilité de plus de 25 ans. Notre processus inclut un diagnostic préalable, un nivellement précis, la pose de plots techniques et l&apos;assemblage soigné de chaque lame pour un résultat impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée cumule plus de 15 ans d&apos;expérience, nous proposons des garanties décennales, nos devis sont transparents sans frais cachés, et nous maîtrisons parfaitement les techniques de pose les plus récentes. Nous sommes également engagés dans une démarche éco-responsable avec des matériaux sourcés durablement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis et la complexité de l&apos;installation. Un projet moyen de 20m² représente un investissement entre 2 400€ et 5 000€, installation comprise. Nos devis détaillés n&apos;incluent aucune surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 2 à 5 jours pour un projet résidentiel standard. Pour un espace de 20m², notre équipe professionnelle réalise généralement l&apos;intégralité du chantier en 3 jours ouvrables, avec un résultat clé en main.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois principaux : le bois composite (le plus durable), le bois exotique comme l&apos;ipé (très résistant) ou le mélèze traité. Le composite offre le meilleur rapport qualité-prix avec une durée de vie de 25-30 ans, sans entretien contraignant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Levallois-Perret ?
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
