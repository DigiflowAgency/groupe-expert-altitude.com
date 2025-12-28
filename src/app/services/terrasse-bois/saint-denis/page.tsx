import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com transforme vos espaces extérieurs à Saint-Denis avec des terrasses bois sur plot innovantes et durables. Spécialistes de l&apos;am',
  keywords: 'terrasse bois saint-denis, terrasse sur plot saint-denis, terrasse bois sur plot saint-denis, pose terrasse bois saint-denis, terrasse composite saint-denis, terrasse bois piscine saint-denis',
};

export default function TerrasseBoisSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com transforme vos espaces extérieurs à Saint-Denis avec des terrasses bois sur plot innovantes et durables. Spécialistes de l&apos;aménagement sur mesure, nous concevons des terrasses qui allient esthétique et performance pour sublimer votre jardin ou votre espace de vie.</p>

        <h2>Nos services de terrasse bois sur plot a Saint-Denis</h2>
        <div className="space-y-4">
          <p>La terrasse bois sur plot représente la solution idéale pour créer un espace extérieur élégant et fonctionnel à Saint-Denis. Notre méthode exclusive permet une pose précise qui garantit une parfaite horizontalité, même sur des surfaces légèrement inclinées. Nos plots techniques s&apos;adaptent à tous les types de sols, offrant une stabilité maximale et une isolation phonique et thermique optimale. Nous travaillons principalement avec des bois nobles comme l&apos;ipé, le châtaignier et le composite haut de gamme, sélectionnés pour leur résistance aux intempéries et leur durabilité exceptionnelle. Chaque projet est étudié individuellement pour proposer une solution personnalisée qui correspond parfaitement à vos attentes et à votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Avec plus de 15 ans d&apos;expérience, notre expertise se distingue par : une équipe de poseurs certifiés, un devis gratuit et détaillé, des matériaux garantis 10 ans, un accompagnement technique complet. Nous sommes reconnus comme le leader local des terrasses sur plot, avec plus de 250 réalisations à Saint-Denis et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi. Un projet moyen de 20m² coûtera entre 1600€ et 5000€, installation comprise. Nos devis détaillés incluent le matériel, la main-d&apos;œuvre et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot est généralement de 2 à 5 jours pour une surface de 20-30m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable. Le planning précis vous sera communiqué lors du premier rendez-vous.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, le châtaignier pour son aspect naturel, ou l&apos;ipé pour sa résistance exceptionnelle. Chaque essence présente des avantages : le composite ne nécessite aucun entretien, le châtaignier offre un rendu chaleureux, et l&apos;ipé est idéal pour les zones à forte exposition.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Saint-Denis ?
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
