import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Saint-Nazaire. Nos so',
  keywords: 'terrasse bois saint-nazaire, terrasse sur plot saint-nazaire, terrasse bois sur plot saint-nazaire, pose terrasse bois saint-nazaire, terrasse composite saint-nazaire, terrasse bois piscine saint-nazaire',
};

export default function TerrasseBoisSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Saint-Nazaire. Nos solutions innovantes allient esthétique, durabilité et technicité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre expertise, développée depuis plus de 15 ans à Saint-Nazaire, nous permet de réaliser des terrasses adaptées à tous les environnements, qu&apos;il s&apos;agisse d&apos;une surface plane ou en légère pente. Nous travaillons principalement avec des matériaux haut de gamme comme le bois composite et le bois exotique, garantissant une résistance optimale aux intempéries et une durée de vie de plus de 25 ans. Notre processus inclut un diagnostic précis du terrain, une préparation minutieuse du support et une pose selon les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique unique à Saint-Nazaire. Notre équipe certifiée maîtrise parfaitement les techniques de pose sur plot, offrant des garanties décennales. Nous proposons un devis personnalisé sous 48h, un accompagnement technique complet et une intervention rapide. Notre taux de satisfaction client dépasse les 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le type de matériau choisi (bois exotique, composite) et la complexité de l&apos;installation. Pour un projet standard de 20m², comptez environ 1500€ à 4000€ tout compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Un chantier de 20m² nécessite généralement 2 à 4 jours, incluant la préparation du terrain, la pose des plots et des lames, et les finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très durable), l&apos;ipé (bois exotique résistant), ou le mélèze traité. Chaque matériau présente des avantages en termes de durabilité, d&apos;entretien et d&apos;esthétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Saint-Nazaire ?
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
