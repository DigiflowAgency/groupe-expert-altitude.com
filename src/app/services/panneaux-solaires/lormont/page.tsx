import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Lormont | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Lormont en proposant des solutions photovoltaïques innovantes et sur-mesure. Nos experts en ',
  keywords: 'panneaux solaires lormont, installation photovoltaique lormont, panneaux photovoltaiques lormont, installateur panneaux solaires lormont, pose panneaux solaires lormont, photovoltaique maison lormont',
};

export default function PanneauxSolairesLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Lormont en proposant des solutions photovoltaïques innovantes et sur-mesure. Nos experts en installation de panneaux solaires transforment votre habitat en centrale électrique écologique et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Lormont</h2>
        <div className="space-y-4">
          <p>Nos installations de panneaux photovoltaïques à Lormont représentent la solution énergétique d&apos;avenir pour les particuliers soucieux de réduire leur empreinte carbone. Notre démarche complète comprend un diagnostic personnalisé, l&apos;étude technique de votre toiture et un dimensionnement optimal de l&apos;installation. Nos panneaux solaires haute performance garantissent un rendement énergétique supérieur à 22%, permettant de couvrir jusqu&apos;à 70% de vos besoins électriques annuels. Chaque projet est réalisé avec des équipements certifiés, bénéficiant des dernières technologies photovoltaïques et d&apos;une garantie de 25 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Installateurs certifiés RGE avec plus de 10 ans d&apos;expérience
- Solutions 100% personnalisées adaptées à chaque habitat de Lormont
- Accompagnement administratif complet pour vos demandes de subventions
- Matériel garanti et service après-vente premium</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% du coût total. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai moyen d&apos;installation de panneaux photovoltaïques est de 3 à 5 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations et la pose complète. Notre équipe à Lormont optimise chaque étape pour une réalisation rapide et efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale. Le Groupe Expert Altitude Com répond à tous ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Lormont ?
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
