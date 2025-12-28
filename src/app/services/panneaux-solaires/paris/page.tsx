import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat parisien en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre partenaire référence en installation de panneaux so',
  keywords: 'panneaux solaires paris, installation photovoltaique paris, panneaux photovoltaiques paris, installateur panneaux solaires paris, pose panneaux solaires paris, photovoltaique maison paris',
};

export default function PanneauxSolairesParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat parisien en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre partenaire référence en installation de panneaux solaires photovoltaïques. Depuis 2012, nous accompagnons les propriétaires franciliens vers une transition énergétique intelligente et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Paris et sa région de produire leur propre électricité propre, réduisant jusqu&apos;à 70% leurs factures énergétiques. Notre processus débute par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et sa capacité à accueillir des panneaux solaires haute performance. Nous sélectionnons uniquement des modules certifiés avec un rendement supérieur à 22%, garantissant une production électrique optimale même dans les conditions parisiennes parfois nuageuses. Notre équipe technique réalise une installation clé en main, depuis les démarches administratives jusqu&apos;au raccordement au réseau électrique, en minimisant les perturbations pour votre foyer.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : nos techniciens sont 100% certifiés RGE, nous proposons des garanties jusqu&apos;à 25 ans, et nous accompagnons chaque client dans l&apos;obtention des aides gouvernementales. Notre taux de satisfaction client dépasse 95%, preuve de notre engagement qualité et de notre expertise unique dans l&apos;installation photovoltaïque à Paris.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une maison moyenne de 100m² à Paris, l&apos;installation de panneaux solaires varie entre 9 000€ et 15 000€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% du coût total. Le retour sur investissement s&apos;effectue généralement entre 8 et 12 ans, grâce aux économies d&apos;énergie et aux revenus de la revente d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique préalable, les autorisations administratives, la pose effective et le raccordement au réseau ENEDIS. La phase de pose physique des panneaux dure généralement 2 à 3 jours pour une installation résidentielle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement trois critères : la certification Qualibat 5908 ou Qualipv, un historique de réalisations locales, et des avis clients vérifiables. Demandez systématiquement le numéro de certification, consultez l&apos;annuaire officiel FAIRE et exigez un devis détaillé avec mentions réglementaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris ?
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
