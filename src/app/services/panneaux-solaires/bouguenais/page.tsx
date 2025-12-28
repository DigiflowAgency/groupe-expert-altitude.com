import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Bouguenais | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Bouguenais en centrale électrique solaire grâce au Groupe Expert Altitude Com, votre partenaire local spécialisé en installatio',
  keywords: 'panneaux solaires bouguenais, installation photovoltaique bouguenais, panneaux photovoltaiques bouguenais, installateur panneaux solaires bouguenais, pose panneaux solaires bouguenais, photovoltaique maison bouguenais',
};

export default function PanneauxSolairesBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Bouguenais en centrale électrique solaire grâce au Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine tout en réduisant significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Bouguenais</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux solaires interviennent sur l&apos;ensemble du territoire de Bouguenais et ses environs, avec une approche technique et personnalisée. Chaque projet débute par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et sa capacité à accueillir des panneaux photovoltaïques. Nous sélectionnons rigoureusement des modules de dernière génération, garantissant une efficacité énergétique supérieure à 22%. Notre processus inclut l&apos;étude technique, le dimensionnement du système, l&apos;obtention des autorisations administratives et l&apos;installation complète par nos techniciens certifiés. Avec une moyenne de production de 3500 kWh par an pour un foyer standard, nos solutions permettent de réduire jusqu&apos;à 70% de votre facture électrique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale à Bouguenais, une équipe de techniciens certifiés RGE, un accompagnement administratif complet pour vos demandes de subventions. Nous proposons des garanties jusqu&apos;à 25 ans sur l&apos;ensemble de nos installations, un SAV réactif et une approche transparente depuis le premier rendez-vous technique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un foyer moyen à Bouguenais peut espérer un retour sur investissement entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les démarches administratives et la pose. La pose des panneaux elle-même ne durant que 1 à 2 jours selon la configuration de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement sa certification Qualibat ou Qualit&apos;EnR, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous que l&apos;entreprise propose un accompagnement global incluant études techniques et démarches administratives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Bouguenais ?
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
