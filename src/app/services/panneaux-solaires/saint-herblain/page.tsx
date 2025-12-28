import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Saint-Herblain en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pa',
  keywords: 'panneaux solaires saint-herblain, installation photovoltaique saint-herblain, panneaux photovoltaiques saint-herblain, installateur panneaux solaires saint-herblain, pose panneaux solaires saint-herblain, photovoltaique maison saint-herblain',
};

export default function PanneauxSolairesSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Saint-Herblain en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour votre foyer.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque proposent une solution complète et personnalisée pour chaque maison de Saint-Herblain et ses environs. Nous réalisons un diagnostic précis de votre toiture, calculons votre potentiel énergétique et concevons un système sur-mesure. Notre processus inclut une étude technique approfondie, le choix des panneaux les plus performants, une installation professionnelle et le raccordement au réseau électrique. Nos solutions permettent de réduire jusqu&apos;à 70% de votre consommation électrique et de générer des revenus complémentaires grâce à la revente d&apos;électricité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons : 1) Des techniciens hautement qualifiés 2) Des matériels de dernière génération avec 25 ans de garantie 3) Un accompagnement administratif complet pour vos demandes de subventions 4) Un service après-vente réactif et un suivi personnalisé de votre installation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant atteindre 5 000€. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation est de 4 à 8 semaines, comprenant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux (2-3 jours) et le raccordement au réseau.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez la certification RGE, consultez leurs références, demandez plusieurs devis détaillés, assurez-vous de leur expérience locale et de la qualité des matériaux proposés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Saint-Herblain ?
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
