import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Saint-Nazaire en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pan',
  keywords: 'panneaux solaires saint-nazaire, installation photovoltaique saint-nazaire, panneaux photovoltaiques saint-nazaire, installateur panneaux solaires saint-nazaire, pose panneaux solaires saint-nazaire, photovoltaique maison saint-nazaire',
};

export default function PanneauxSolairesSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Saint-Nazaire en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en électricité propre et économique pour les habitants de la région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux propriétaires de Saint-Nazaire de réduire significativement leur empreinte carbone et leurs dépenses énergétiques. Notre processus débute par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et son potentiel solaire. Nos techniciens qualifiés installent des panneaux dernière génération garantissant une production électrique optimale, avec des rendements atteignant jusqu&apos;à 22% grâce aux technologies photovoltaïques les plus performantes. Chaque installation est personnalisée, intégrée harmonieusement à votre habitat et conçue pour maximiser vos économies d&apos;énergie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise technique, ses certifications RGE, et son accompagnement sur-mesure. Nous proposons des solutions clés en main, un suivi personnalisé, des financements adaptés et une garantie de performance de 25 ans. Notre engagement local à Saint-Nazaire nous permet de comprendre parfaitement les spécificités climatiques et réglementaires de votre région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 70% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques est généralement de 4 à 6 semaines, incluant le diagnostic initial, les démarches administratives, la pose technique (2-3 jours) et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibel, consultez ses références locales, demandez plusieurs devis détaillés, et assurez-vous de sa garantie décennale et de son assurance professionnelle spécifique aux travaux photovoltaïques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Saint-Nazaire ?
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
