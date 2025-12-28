import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Écully | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Écully, en proposant des solutions photovoltaïques innovantes et sur-mesure. Nos installatio',
  keywords: 'panneaux solaires écully, installation photovoltaique écully, panneaux photovoltaiques écully, installateur panneaux solaires écully, pose panneaux solaires écully, photovoltaique maison écully',
};

export default function PanneauxSolairesEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Écully, en proposant des solutions photovoltaïques innovantes et sur-mesure. Nos installations de panneaux solaires transforment votre habitat en une source d&apos;énergie propre et économique, adaptée aux spécificités architecturales de notre région lyonnaise.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Écully</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux photovoltaïques accompagnent chaque projet avec une approche technique et personnalisée. Nous analysons précisément l&apos;orientation de votre toiture, les contraintes techniques et votre consommation énergétique pour optimiser chaque installation. Nos panneaux solaires haute performance atteignent un rendement de 22,5%, permettant de couvrir jusqu&apos;à 70% de vos besoins énergétiques annuels. Sur Écully et ses environs, nous maîtrisons les normes d&apos;intégration architecturale et réglementaires, garantissant une installation esthétique et performante.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous proposons une expertise locale avec un accompagnement complet. Notre bureau d&apos;études intégré réalise des simulations précises avant intervention. Nous sélectionnons uniquement des matériels européens de haute qualité. Notre équipe technique dispose de plus de 15 ans d&apos;expérience dans l&apos;installation de systèmes photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un système de 3kWc revient en moyenne à 11 500€, amortissable en 10-12 ans grâce aux économies d&apos;énergie et au rachat de l&apos;électricité produite.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La pose des panneaux elle-même nécessite généralement 2 à 3 jours ouvrés, avec un raccordement au réseau électrique dans la foulée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5911 ou Qualisol, demandez plusieurs devis détaillés, consultez ses références locales et assurez-vous de la garantie décennale. Un professionnel RGE vous conseillera sur les aides financières et réalisera un diagnostic énergétique complet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Écully ?
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
