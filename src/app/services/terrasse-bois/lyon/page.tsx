import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Lyon | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur à Lyon avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces de vie. Groupe Expert Altitud',
  keywords: 'terrasse bois lyon, terrasse sur plot lyon, terrasse bois sur plot lyon, pose terrasse bois lyon, terrasse composite lyon, terrasse bois piscine lyon',
};

export default function TerrasseBoisLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur à Lyon avec une terrasse bois sur plot, la solution élégante et durable pour sublimer vos espaces de vie. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui allient esthétique et performance pour tous vos projets lyonnais.</p>

        <h2>Nos services de terrasse bois sur plot a Lyon</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente aujourd&apos;hui la solution idéale pour aménager un espace extérieur fonctionnel et design. Notre méthode exclusive permet une installation précise qui garantit une parfaite horizontalité, même sur des surfaces légèrement inclinées. Nos terrasses en bois composite ou bois naturel offrent une résistance exceptionnelle aux intempéries, avec une durabilité pouvant atteindre 25 ans. Chaque projet est étudié individuellement, en prenant en compte la configuration du terrain, l&apos;exposition et vos usages spécifiques, pour un résultat parfaitement adapté à votre environnement lyonnais.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se démarque par son expertise technique unique : nos équipes sont formées aux dernières techniques d&apos;installation, nous utilisons uniquement des matériaux de haute qualité, et nous proposons une garantie de 10 ans sur nos réalisations. Nous maîtrisons parfaitement les contraintes techniques locales, et notre approche sur-mesure nous permet de répondre aux exigences les plus pointues de nos clients lyonnais.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Notre devis personnalisé inclut la fourniture des matériaux, la préparation du terrain et la pose complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité du terrain. En moyenne, nous réalisons entre 20 et 40 m² par jour. Pour un projet standard de 30 m², comptez 2 à 3 jours de travaux, incluant la préparation du terrain, la pose des plots et des lames.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons trois types de bois principaux : le bois composite (très résistant, peu d&apos;entretien), l&apos;ipé (bois exotique ultra-durable) et le mélèze (option économique et naturelle). Chaque essence présente des avantages spécifiques en termes de résistance, durabilité et esthétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Lyon ?
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
