import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Nantes | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Nantes en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux sol',
  keywords: 'panneaux solaires nantes, installation photovoltaique nantes, panneaux photovoltaiques nantes, installateur panneaux solaires nantes, pose panneaux solaires nantes, photovoltaique maison nantes',
};

export default function PanneauxSolairesNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Nantes en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour les propriétaires nantais soucieux de leur empreinte environnementale.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Nantes</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;installation de panneaux photovoltaïques représente la solution énergétique moderne pour les maisons et entreprises de la région nantaise. Nous proposons une approche clé en main, depuis l&apos;étude personnalisée jusqu&apos;à la pose finale, en garantissant une performance optimale. Nos techniciens experts réalisent un diagnostic précis de votre toiture, sélectionnent les panneaux les plus adaptés et assurent une installation conforme aux normes électriques françaises. Avec un rendement moyen de 20% et une durée de vie de 25-30 ans, nos systèmes photovoltaïques permettent de réduire jusqu&apos;à 70% de votre facture énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique, ses certifications RGE, et son accompagnement personnalisé. Nos installateurs sont formés aux dernières technologies solaires, nous proposons des financements adaptés, et garantissons une intervention rapide et professionnelle. Nous maitrisons parfaitement les spécificités techniques et réglementaires des installations photovoltaïques sur la région nantaise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un système de 3kWc pour une maison individuelle coûte en moyenne 12 500€, mais permet une économie annuelle de 500€ à 800€ sur vos factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines. La pose technique elle-même ne dure que 1-2 jours, mais comprend aussi l&apos;étude préalable, les démarches administratives et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez trois critères essentiels : son inscription officielle sur le site gouvernemental, ses références clients locales, et ses certifications qualibat ou qualipv. Demandez systématiquement un devis détaillé et les garanties proposées avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Nantes ?
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
