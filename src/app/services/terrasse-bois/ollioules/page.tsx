import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Ollioules | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Ollioules. Nos soluti',
  keywords: 'terrasse bois ollioules, terrasse sur plot ollioules, terrasse bois sur plot ollioules, pose terrasse bois ollioules, terrasse composite ollioules, terrasse bois piscine ollioules',
};

export default function TerrasseBoisOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Ollioules. Nos solutions haut de gamme allient esthétique moderne et durabilité pour sublimer vos espaces exterieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Ollioules</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire parfaitement adapté à votre environnement. Notre expertise technique nous permet de réaliser des terrasses sur mesure, en privilégiant des matériaux nobles comme le bois composite ou le bois exotique. Chaque projet est étudié précisément pour garantir une parfaite planéité, une excellente résistance aux intempéries et une integration harmonieuse dans votre jardin ou autour de votre piscine. Notre équipe maîtrise les techniques de pose les plus avancées, avec un niveau de précision de +/- 2mm, assurant un résultat impeccable et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence à Ollioules. Notre différence réside dans notre approche sur-mesure, notre expérience de plus de 15 ans, et notre engagement qualité. Nos équipes sont certifiées, nos matériaux sélectionnés rigoureusement, et nous proposons une garantie décennale sur tous nos travaux. Nous sommes votre partenaire confiance pour transformer vos extérieurs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour Ollioules, notre tarif moyen se situe autour de 120€/m² pour un bois composite haut de gamme, pose et fourniture comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 3 à 5 jours pour un espace de 30m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, ou l&apos;ipé pour son excellente résistance naturelle. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Nous conseillons systématiquement le matériau le plus adapté à votre projet spécifique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Ollioules ?
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
