import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à L&apos;Haÿ-les-Roses. Nos ',
  keywords: 'terrasse bois l'haÿ-les-roses, terrasse sur plot l'haÿ-les-roses, terrasse bois sur plot l'haÿ-les-roses, pose terrasse bois l'haÿ-les-roses, terrasse composite l'haÿ-les-roses, terrasse bois piscine l'haÿ-les-roses',
};

export default function TerrasseBoisLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à L&apos;Haÿ-les-Roses. Nos solutions haut de gamme allient esthétique moderne et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Notre expertise en terrasse bois sur plot répond aux exigences les plus pointues des propriétaires de L&apos;Haÿ-les-Roses et des environs. Nous proposons des solutions techniques qui s&apos;adaptent parfaitement à tous les reliefs, garantissant une installation stable et élégante. Nos systèmes sur plot permettent une pose surélevée qui protège votre surface contre l&apos;humidité et les variations du sol, avec une isolation thermique et phonique optimale. Chaque projet est étudié individuellement pour offrir un résultat personnalisé, que ce soit pour une terrasse de piscine, un jardin ou une terrasse urbaine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux avec plus de 15 ans d&apos;expérience à L&apos;Haÿ-les-Roses
- Devis gratuit et précis sous 48h
- Matériaux haut de gamme : bois composite et bois naturel certifiés
- Équipe de poseurs qualifiés et assurés
- Garantie décennale sur nos réalisations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite ou pin) et la complexité de l&apos;installation. Pour un projet standard à L&apos;Haÿ-les-Roses, comptez environ 120€/m² tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne entre 2 et 5 jours pour un chantier de 20 à 50 m². Notre équipe optimise chaque intervention pour une réalisation rapide et soignée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le padouk, l&apos;ipé, le teck pour leur résistance, ou le composite qui ne nécessite aucun entretien. À L&apos;Haÿ-les-Roses, nous recommandons le bois composite pour sa durabilité et son aspect naturel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a L'Haÿ-les-Roses ?
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
