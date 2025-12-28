import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Saint-Sébastien-sur-Loire avec des solutions photovoltaïques innovantes et sur-mesure. Nos inst',
  keywords: 'panneaux solaires saint-sébastien-sur-loire, installation photovoltaique saint-sébastien-sur-loire, panneaux photovoltaiques saint-sébastien-sur-loire, installateur panneaux solaires saint-sébastien-sur-loire, pose panneaux solaires saint-sébastien-sur-loire, photovoltaique maison saint-sébastien-sur-loire',
};

export default function PanneauxSolairesSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Saint-Sébastien-sur-Loire avec des solutions photovoltaïques innovantes et sur-mesure. Nos installations de panneaux solaires permettent aux habitants de la région de produire leur propre électricité verte et de réaliser des économies significatives.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux photovoltaïques proposent une approche complète et personnalisée pour transformer votre habitat en centrale électrique autonome. Chaque projet débute par un diagnostic technique précis, évaluant l&apos;orientation de votre toiture, sa capacité structurelle et votre consommation énergétique. Nous utilisons uniquement des panneaux de haute performance, garantissant un rendement optimal de 20 à 25% et une durée de vie supérieure à 25 ans. Sur Saint-Sébastien-sur-Loire, nos installations permettent en moyenne de couvrir 60-70% des besoins énergétiques d&apos;un foyer standard, avec des économies annuelles estimées entre 500 et 1200€.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification RGE officielle garantissant la qualité de nos interventions
- Équipe technique locale avec plus de 10 ans d&apos;expérience
- Accompagnement administratif complet pour les demandes de subventions
- Solutions personnalisées adaptées à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un crédit d&apos;impôt de 40% et des subventions locales peuvent significativement réduire le budget final.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement de 4 à 8 semaines, incluant le diagnostic initial, les démarches administratives, la préparation du site et la pose des panneaux. La pose technique elle-même ne prend que 2 à 3 jours pour une maison individuelle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro SIRET, consultez ses certifications officielles sur le site de l&apos;ADEME, étudiez ses références clients et demandez plusieurs devis détaillés comparatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Saint-Sébastien-sur-Loire ?
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
