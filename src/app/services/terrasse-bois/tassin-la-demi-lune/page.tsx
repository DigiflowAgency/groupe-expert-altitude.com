import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable à Tassin-la-Demi-Lune. Le Groupe Expert Altitude Com vous propose des solut',
  keywords: 'terrasse bois tassin-la-demi-lune, terrasse sur plot tassin-la-demi-lune, terrasse bois sur plot tassin-la-demi-lune, pose terrasse bois tassin-la-demi-lune, terrasse composite tassin-la-demi-lune, terrasse bois piscine tassin-la-demi-lune',
};

export default function TerrasseBoisTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable à Tassin-la-Demi-Lune. Le Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valoriseront instantanément votre espace extérieur avec professionnalisme et expertise.</p>

        <h2>Nos services de terrasse bois sur plot a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les propriétaires exigeants de Tassin-la-Demi-Lune recherchant un aménagement extérieur haut de gamme. Notre technique innovante permet une pose précise et stable, s&apos;adaptant parfaitement aux reliefs et contraintes de votre terrain. Nous travaillons avec des matériaux premium comme les bois composites et les essences naturelles durables, garantissant une résistance optimale aux intempéries et une esthétique impeccable. Notre processus inclut une étude technique préalable, un nivellement précis et une pose méthodique sur plots réglables, assurant une finition parfaite et un drainage efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Tassin-la-Demi-Lune
✓ Devis personnalisé et gratuit sous 48h
✓ Matériaux certifiés et garantie décennale
✓ Équipe de 6 poseurs professionnels spécialisés
✓ Plus de 200 réalisations de terrasses bois à votre actif</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un bois composite haut de gamme sera plus onéreux qu&apos;un bois traditionnel, mais offrira une durabilité supérieure. Notre devis détaillé vous permettra d&apos;avoir une estimation précise adaptée à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, en fonction de la surface (30 à 100 m²) et de la complexité du terrain. Notre équipe optimise chaque étape pour une réalisation rapide et soignée, avec un planning précis communiqué dès la première rencontre.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite, l&apos;ipé ou le padouk pour leur résistance exceptionnelle. Le composite offre l&apos;avantage d&apos;être quasi sans entretien, tandis que l&apos;ipé présente une excellente tenue aux intempéries. Le choix dépendra de votre budget, de l&apos;exposition et de l&apos;usage prévu de votre terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Tassin-la-Demi-Lune ?
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
