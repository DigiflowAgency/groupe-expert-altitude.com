import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com transforme vos espaces extérieurs à Muret avec des terrasses bois sur plot innovantes et durables. Nous sommes votre partenaire ',
  keywords: 'terrasse bois muret, terrasse sur plot muret, terrasse bois sur plot muret, pose terrasse bois muret, terrasse composite muret, terrasse bois piscine muret',
};

export default function TerrasseBoisMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com transforme vos espaces extérieurs à Muret avec des terrasses bois sur plot innovantes et durables. Nous sommes votre partenaire local spécialisé dans la création de terrasses élégantes qui valorisent votre propriété et offrent un cadre de vie optimal.</p>

        <h2>Nos services de terrasse bois sur plot a Muret</h2>
        <div className="space-y-4">
          <p>Notre service de terrasse bois sur plot représente la solution idéale pour les propriétaires de Muret recherchant un aménagement extérieur haut de gamme. Nous proposons une pose précise sur plots techniques qui permet une parfaite horizontalité, même sur des surfaces légèrement inclinées. Notre expertise garantit une installation rapide, avec des matériaux sélectionnés pour leur résistance aux conditions climatiques locales. Chaque projet est personnalisé, en privilégiant des bois nobles comme le pin traité, le bois composite ou l&apos;ipé, qui offrent une durabilité exceptionnelle et un rendu esthétique incomparable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 12 ans à Muret, 2) Des techniciens certifiés et formés aux dernières techniques de pose, 3) Un devis gratuit et détaillé sous 48h, 4) Des matériaux garantis et une finition impeccable. Nous mettons un point d&apos;honneur à la qualité et à la satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Un projet moyen de 20m² représente un investissement de 2000€ à 5000€. Nos devis détaillés incluent la pose, les matériaux et la préparation du terrain.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, comptez 2 à 5 jours pour un projet de 20-30m². Notre équipe optimise chaque étape pour une réalisation rapide et précise, avec un chantier propre et organisé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Muret, nous recommandons le bois composite (très résistant), l&apos;ipé (très durable) ou le pin traité classe 4. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. Nous conseillons systématiquement le matériau le plus adapté à votre projet spécifique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Muret ?
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
