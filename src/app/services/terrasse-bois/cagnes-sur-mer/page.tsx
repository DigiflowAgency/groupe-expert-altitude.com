import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Cagnes-sur-Mer avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des soluti',
  keywords: 'terrasse bois cagnes-sur-mer, terrasse sur plot cagnes-sur-mer, terrasse bois sur plot cagnes-sur-mer, pose terrasse bois cagnes-sur-mer, terrasse composite cagnes-sur-mer, terrasse bois piscine cagnes-sur-mer',
};

export default function TerrasseBoisCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Cagnes-sur-Mer avec une terrasse bois sur plot élégante et durable. Groupe Expert Altitude Com vous propose des solutions sur-mesure qui valorisent votre propriété et offrent un prolongement naturel de votre habitat.</p>

        <h2>Nos services de terrasse bois sur plot a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les propriétaires exigeants de la région. Parfaitement adaptées aux sols irréguliers de Cagnes-sur-Mer, ces installations permettent une pose précise et stable grâce à un système de plots réglables. Nous travaillons essentiellement avec des matériaux nobles comme les bois exotiques, le pin traité ou les composites haut de gamme, garantissant une résistance optimale aux conditions climatiques méditerranéennes. Notre processus comprend un diagnostic terrain précis, une préparation soignée du support et une pose méthodique qui assure une finition impeccable et une durabilité de 15 à 25 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis 15 ans, nous maîtrisons parfaitement les spécificités techniques des terrasses bois. Notre équipe certifiée intervient rapidement sur Cagnes-sur-Mer et ses environs. Nous proposons un devis gratuit sous 48h, utilisons uniquement des matériaux certifiés et garantissons nos réalisations. Notre taux de satisfaction client dépasse 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon le matériau choisi. Un projet moyen de 20m² coûtera entre 1600€ et 5000€, installation comprise. Nos devis détaillés n&apos;incluent aucun frais caché.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, en fonction de la surface et de la complexité du terrain. Un chantier standard de 20m² sera réalisé en 3 jours ouvrables par notre équipe.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois exotique (ipé, teck) pour sa durabilité, le pin traité pour son rapport qualité-prix, ou les composites pour un entretien minimal. Chaque matériau présente des avantages spécifiques que nous analyserons ensemble lors de notre consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Cagnes-sur-Mer ?
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
