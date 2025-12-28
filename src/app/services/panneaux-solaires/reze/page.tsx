import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Rezé | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Rezé en centrale électrique verte avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires',
  keywords: 'panneaux solaires rezé, installation photovoltaique rezé, panneaux photovoltaiques rezé, installateur panneaux solaires rezé, pose panneaux solaires rezé, photovoltaique maison rezé',
};

export default function PanneauxSolairesRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Rezé en centrale électrique verte avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous concevons des solutions énergétiques sur-mesure qui valorisent votre patrimoine et réduisent votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Rezé</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque accompagnent les habitants de Rezé et ses environs dans leur transition énergétique. Nous proposons une approche clé en main, depuis l&apos;étude technique personnalisée jusqu&apos;à la pose complète des panneaux solaires. Notre processus débute par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et sa capacité à accueillir des modules photovoltaïques performants. Nos techniciens certifiés sélectionnent des panneaux haute efficacité atteignant jusqu&apos;à 22% de rendement, garantissant une production électrique optimale. Chaque installation est conçue pour maximiser vos économies d&apos;énergie et minimiser votre facture électrique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique et un accompagnement local. Nos installateurs sont certifiés RGE, gage de professionnalisme. Nous maîtrisons les dernières technologies photovoltaïques et proposons des solutions adaptées à chaque budget. Notre engagement inclut un suivi personnalisé et des garanties allant jusqu&apos;à 25 ans sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides gouvernementales comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 50% de votre investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement de 3 à 6 semaines. Cela comprend l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux et le raccordement au réseau électrique. Notre équipe à Rezé optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez sa qualification Qualibat, Qualit&apos;EnR ou AFCEE. Demandez ses références locales, son numéro de certification et ses attestations. Un bon installateur propose un diagnostic gratuit, un devis détaillé et justifie ses compétences techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Rezé ?
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
