import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Bègles | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Bègles en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux s',
  keywords: 'panneaux solaires bègles, installation photovoltaique bègles, panneaux photovoltaiques bègles, installateur panneaux solaires bègles, pose panneaux solaires bègles, photovoltaique maison bègles',
};

export default function PanneauxSolairesBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Bègles en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour les propriétaires de la métropole bordelaise.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Bègles</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Bègles de réduire significativement leur facture énergétique tout en contribuant à la transition écologique. Notre équipe technique certifiée réalise des installations clés en main, depuis l&apos;étude de faisabilité jusqu&apos;à la mise en service, en garantissant une performance optimale de vos panneaux solaires. Nous utilisons uniquement des équipements de haute qualité avec un rendement supérieur à 22%, assurant une production électrique maximale. Chaque projet est personnalisé selon l&apos;orientation de votre toiture, la consommation électrique de votre foyer et les spécificités architecturales de votre propriété à Bègles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 10 ans d&apos;expérience en photovoltaïque
- Installateurs certifiés RGE et formés en continu
- Accompagnement administratif complet pour les aides et subventions
- Garantie décennale et suivi technique après installation</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ pour une maison moyenne de 100m², avec un retour sur investissement estimé entre 8 et 12 ans. Les aides gouvernementales peuvent réduire ce coût jusqu&apos;à 30%, et notre financement sur mesure facilite votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 6 semaines, incluant l&apos;étude technique préalable, l&apos;obtention des autorisations, la pose des panneaux (2-3 jours) et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour minimiser les désagréments.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : la qualification Qualibat 5911 ou Qualisol, les références clients, les avis en ligne, et demandez plusieurs devis détaillés comparatifs. Notre certification atteste de notre professionnalisme et expertise technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Bègles ?
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
