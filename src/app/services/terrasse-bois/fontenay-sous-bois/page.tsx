import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Fontenay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par les experts du Groupe Altitude Com à Fontenay-sous',
  keywords: 'terrasse bois fontenay-sous-bois, terrasse sur plot fontenay-sous-bois, terrasse bois sur plot fontenay-sous-bois, pose terrasse bois fontenay-sous-bois, terrasse composite fontenay-sous-bois, terrasse bois piscine fontenay-sous-bois',
};

export default function TerrasseBoisFontenaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Fontenay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par les experts du Groupe Altitude Com à Fontenay-sous-Bois. Nous réalisons des aménagements extérieurs durables qui valorisent votre propriété et offrent un espace de vie supplémentaire.</p>

        <h2>Nos services de terrasse bois sur plot a Fontenay-sous-Bois</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution esthétique et technique pour aménager vos espaces extérieurs avec élégance. Notre expertise permet de créer des surfaces parfaitement nivelées, même sur des sols légèrement en pente, grâce à un système de plots réglables. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, garantissant une résistance optimale aux intempéries. Chaque projet à Fontenay-sous-Bois est étudié individuellement pour s&apos;adapter à vos contraintes spécifiques, avec une attention particulière portée à l&apos;esthétique et à la durabilité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche sur-mesure : 15 ans d&apos;expérience, des techniciens certifiés, un devis précis sous 48h et des matériaux sélectionnés pour leur qualité. Nous proposons des solutions adaptées à chaque configuration, avec une garantie décennale et un suivi personnalisé. Notre engagement : transformer votre projet en une réalisation durable et esthétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite haut de gamme) et la complexité de l&apos;installation. Un projet moyen de 20m² à Fontenay-sous-Bois coûtera environ 2 000€ à 4 500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais comptez généralement 2 à 5 jours pour un projet standard de 20-30m². Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse durable, nous recommandons le bois composite (60% bois, 40% plastique recyclé), l&apos;ipé ou le padouk pour leur résistance naturelle. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu : nos experts vous guideront vers le matériau le plus adapté.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Fontenay-sous-Bois ?
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
