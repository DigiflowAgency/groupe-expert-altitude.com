import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Sanary-sur-Mer en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installa',
  keywords: 'panneaux solaires sanary-sur-mer, installation photovoltaique sanary-sur-mer, panneaux photovoltaiques sanary-sur-mer, installateur panneaux solaires sanary-sur-mer, pose panneaux solaires sanary-sur-mer, photovoltaique maison sanary-sur-mer',
};

export default function PanneauxSolairesSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Sanary-sur-Mer en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Profitez du potentiel solaire exceptionnel de la région pour réduire votre facture énergétique et contribuer à la transition énergétique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;installation de panneaux photovoltaïques répond aux besoins spécifiques des propriétaires de Sanary-sur-Mer, en proposant des solutions sur-mesure adaptées à chaque configuration de toiture. Nous réalisons un diagnostic technique précis, évaluant l&apos;orientation, l&apos;inclinaison et la surface disponible pour maximiser la production électrique. Notre équipe utilise uniquement des panneaux haute performance garantissant un rendement optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Le processus comprend une étude personnalisée, l&apos;obtention des autorisations administratives, l&apos;installation technique et le raccordement au réseau électrique, le tout dans le respect des normes environnementales et réglementaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise locale, notre certification RGE, et notre accompagnement complet. Notre équipe maîtrise parfaitement les spécificités techniques du photovoltaïque sur le littoral varois. Nous proposons des garanties de 25 ans sur les panneaux, un financement flexible et un suivi personnalisé de votre installation. Nos techniciens sont formés aux dernières innovations technologiques et notre approche clé-en-main simplifie votre transition vers l&apos;énergie solaire.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance et la configuration, avec des aides de l&apos;État pouvant atteindre 30% du montant total. Pour une maison moyenne à Sanary-sur-Mer, un système de 3 à 6 kWc représente un investissement de 12 000€ à 15 000€, amortissable en 8 à 12 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique préalable, les démarches administratives et la pose effective. La phase d&apos;installation technique sur site dure en moyenne 2 à 3 jours, avec un raccordement au réseau ENEDIS réalisé dans les semaines suivantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro SIRET, ses certifications officielles (Qualibat, Qualit&apos;EnR), son ancienneté sur le marché et ses références locales. Demandez systématiquement plusieurs devis détaillés, comparez les garanties proposées et consultez les avis clients pour évaluer la qualité du service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Sanary-sur-Mer ?
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
