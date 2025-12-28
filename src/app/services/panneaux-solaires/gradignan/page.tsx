import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Gradignan | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Gradignan en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation ',
  keywords: 'panneaux solaires gradignan, installation photovoltaique gradignan, panneaux photovoltaiques gradignan, installateur panneaux solaires gradignan, pose panneaux solaires gradignan, photovoltaique maison gradignan',
};

export default function PanneauxSolairesGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Gradignan en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions énergétiques sur-mesure qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Gradignan</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque accompagnent chaque projet résidentiel à Gradignan avec une approche technique et personnalisée. Nous réalisons un diagnostic précis de votre toiture, évaluons son orientation et sa capacité à accueillir des panneaux solaires haute performance. Notre processus comprend une étude technique gratuite, le choix des équipements adaptés, les démarches administratives et une installation clé en main par nos techniciens certifiés. Avec un rendement moyen de 80% sur 25 ans, nos solutions permettent de produire jusqu&apos;à 4000 kWh par an pour une maison de 100m², réduisant significativement vos factures énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale, sa certification RGE, et un accompagnement complet. Nos installateurs sont formés aux dernières technologies photovoltaïques, nous proposons des garanties jusqu&apos;à 25 ans, et nos solutions sont éligibles aux aides gouvernementales. Nous maîtrisons parfaitement les spécificités techniques des installations sur la métropole bordelaise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 10 et 15 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 70% de votre investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La pose effective des panneaux ne durant que 1 à 3 jours selon la configuration de votre toiture à Gradignan.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro de certification, ses références locales, ses garanties et demandez plusieurs devis comparatifs. Un bon installateur propose une étude technique gratuite, dispose d&apos;assurances professionnelles et maîtrise les démarches administratives liées aux aides énergétiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Gradignan ?
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
