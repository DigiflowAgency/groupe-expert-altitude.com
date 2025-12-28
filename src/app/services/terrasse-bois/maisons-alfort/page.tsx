import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure par Groupe Expert Altitude Com. Spécialistes à Maisons',
  keywords: 'terrasse bois maisons-alfort, terrasse sur plot maisons-alfort, terrasse bois sur plot maisons-alfort, pose terrasse bois maisons-alfort, terrasse composite maisons-alfort, terrasse bois piscine maisons-alfort',
};

export default function TerrasseBoisMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure par Groupe Expert Altitude Com. Spécialistes à Maisons-Alfort, nous créons des espaces de vie extérieurs élégants et durables qui valorisent votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Notre service de pose de terrasse bois sur plot représente la solution idéale pour les habitants de Maisons-Alfort souhaitant optimiser leurs espaces extérieurs. Nous utilisons des matériaux haut de gamme, principalement des bois composites résistants aux intempéries et aux UV, garantissant une durabilité exceptionnelle. Notre processus débute par un diagnostic précis de votre terrain, permettant une installation parfaitement nivelée grâce à un système de plots réglables. Chaque projet est personnalisé, en tenant compte de la configuration spécifique de votre espace et de vos préférences esthétiques. Nos équipes qualifiées assurent une pose méticuleuse, avec une attention particulière à l&apos;étanchéité et à la stabilité de l&apos;ensemble.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens disposent de plus de 15 ans d&apos;expérience en aménagement extérieur. Nous proposons une garantie décennale sur nos réalisations. Notre approche sur-mesure permet une intégration harmonieuse de votre terrasse. Nous sélectionnons uniquement des matériaux écologiques et certifiés, garantissant performance et respect environnemental.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon la qualité des matériaux et la complexité de l&apos;installation. Pour un projet standard à Maisons-Alfort, comptez environ 120€/m² pour un bois composite haut de gamme, pose et fourniture comprises.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise un chantier de 20-30m² en 2-3 jours ouvrables. Un projet de terrasse de 50m² nécessitera environ 4-5 jours de travail, incluant la préparation du terrain et la pose finale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse à Maisons-Alfort, nous recommandons le bois composite ou l&apos;essence de robinier. Le composite offre une durabilité de 25-30 ans sans entretien, tandis que le robinier naturel présente une résistance exceptionnelle aux agressions extérieures. Le choix dépendra de votre budget et de l&apos;exposition de votre terrain.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Maisons-Alfort ?
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
