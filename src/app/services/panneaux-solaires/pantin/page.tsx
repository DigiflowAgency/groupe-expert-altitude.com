import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Pantin | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Pantin en centrale électrique verte avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solair',
  keywords: 'panneaux solaires pantin, installation photovoltaique pantin, panneaux photovoltaiques pantin, installateur panneaux solaires pantin, pose panneaux solaires pantin, photovoltaique maison pantin',
};

export default function PanneauxSolairesPantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Pantin en centrale électrique verte avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et écologique pour les habitants de la région parisienne.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Pantin</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation de panneaux photovoltaïques répond aux besoins croissants de transition énergétique sur Pantin et ses environs. Nous proposons une solution clé en main, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service, en garantissant une performance optimale de votre installation. Notre équipe technique qualifiée réalise un diagnostic précis de votre toiture, dimensionne le système selon votre consommation et installe des panneaux de dernière génération atteignant jusqu&apos;à 22% de rendement. Chaque projet est conçu pour maximiser votre autonomie énergétique et réduire significativement vos factures d&apos;électricité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son approche sur-mesure et son engagement local. Nos installateurs sont certifiés RGE, nous maîtrisons les dernières technologies photovoltaïques et proposons un accompagnement complet. Nous gérons les démarches administratives, mobilisons les aides gouvernementales et assurons un suivi technique pendant toute la durée de vie de votre installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, l&apos;orientation et la puissance désirée. Comptez environ 250€/m² posés, avec des aides pouvant atteindre 30% du montant total grâce au crédit d&apos;impôt et aux subventions locales.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose et la mise en service. La pose physique des panneaux ne durant que 2 à 3 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son immatriculation sur le site officiel, ses certifications Qualibat ou Qualit&apos;EnR, son ancienneté sur le marché et ses références clients. Exigez un devis détaillé et une visite technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Pantin ?
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
