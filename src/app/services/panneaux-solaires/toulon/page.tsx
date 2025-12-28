import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Toulon | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Toulon en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire référent en installation de pann',
  keywords: 'panneaux solaires toulon, installation photovoltaique toulon, panneaux photovoltaiques toulon, installateur panneaux solaires toulon, pose panneaux solaires toulon, photovoltaique maison toulon',
};

export default function PanneauxSolairesToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Toulon en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire référent en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine et réduisent significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Toulon</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque vous accompagnent de A à Z dans votre projet d&apos;installation à Toulon. Notre approche technique garantit une performance maximale, en analysant précisément l&apos;orientation de votre toiture, les contraintes architecturales et votre consommation énergétique. Nous sélectionnons rigoureusement des modules photovoltaïques haut de gamme atteignant jusqu&apos;à 22% de rendement, permettant de couvrir 60 à 80% de vos besoins électriques annuels. Notre équipe certifiée réalise un dimensionnement personnalisé, en intégrant les dernières innovations technologiques pour optimiser votre production et vos économies.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale avec 10 ans d&apos;expérience sur Toulon et sa région, 2) Des installateurs certifiés RGE garantissant une qualité professionnelle, 3) Un accompagnement administratif complet pour vos demandes de subventions et raccordement, 4) Une solution clé en main sans souci technique pour vous.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ selon la puissance (3 à 9 kWc), avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement estimé entre 8 et 12 ans, et des économies annuelles de 500 à 1 200€ sur vos factures.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement de 4 à 8 semaines, incluant l&apos;étude technique préalable (1-2 semaines), l&apos;obtention des autorisations (2-3 semaines) et la pose effective des panneaux (1-2 semaines). Notre équipe optimise chaque étape pour une réalisation rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez : 1) La certification QUALIPV ou QUALIBAT, 2) Les références clients locaux, 3) Une visite technique préalable gratuite, 4) Une proposition détaillée avec devis précis, 5) Les garanties proposées sur l&apos;installation et les équipements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Toulon ?
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
