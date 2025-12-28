import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Grasse | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Grasse. Nos solutions',
  keywords: 'terrasse bois grasse, terrasse sur plot grasse, terrasse bois sur plot grasse, pose terrasse bois grasse, terrasse composite grasse, terrasse bois piscine grasse',
};

export default function TerrasseBoisGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Grasse. Nos solutions haut de gamme allient esthétique provençale et technicité irréprochable pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Grasse</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire, adapté au climat méditerranéen de Grasse. Notre méthode exclusive garantit une installation précise, avec un nivellement parfait grâce à des plots réglables en hauteur. Nous sélectionnons rigoureusement des matériaux résistants aux variations climatiques, privilégiant des essences comme le pin traité ou le bois composite, qui offrent durabilité et élégance. Chaque projet fait l&apos;objet d&apos;un diagnostic préalable pour optimiser l&apos;implantation et assurer une parfaite intégration architecturale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise technique unique. Plus de 15 ans d&apos;expérience dans l&apos;aménagement extérieur, une équipe de 6 professionnels certifiés, un taux de satisfaction client de 98%. Nous garantissons des délais courts, un devis précis sous 48h et une intervention sur l&apos;ensemble du département des Alpes-Maritimes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un pin traité, mais offrira une durabilité supérieure. Notre tarification transparente inclut le matériel, la pose et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais comptez en moyenne 2 à 5 jours pour un projet de 20-30 m². Notre équipe optimise chaque intervention, avec un planning précis et un respect scrupuleux des délais annoncés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Grasse, nous recommandons le bois composite ou le pin traité autoclave classe 4. Ces matériaux résistent parfaitement au climat méditerranéen, aux UV et à l&apos;humidité. Le composite offre l&apos;avantage d&apos;un entretien minimal et d&apos;une durée de vie jusqu&apos;à 25 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Grasse ?
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
