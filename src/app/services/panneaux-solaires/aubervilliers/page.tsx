import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Aubervilliers en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pan',
  keywords: 'panneaux solaires aubervilliers, installation photovoltaique aubervilliers, panneaux photovoltaiques aubervilliers, installateur panneaux solaires aubervilliers, pose panneaux solaires aubervilliers, photovoltaique maison aubervilliers',
};

export default function PanneauxSolairesAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Aubervilliers en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous vous accompagnons pour produire une énergie propre et réduire significativement vos factures énergétiques.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux besoins spécifiques des habitants d&apos;Aubervilliers et des communes environnantes. Nous proposons une solution clé en main, depuis l&apos;étude technique personnalisée jusqu&apos;à la mise en service de votre installation. Nos techniciens certifiés réalisent un diagnostic précis de votre toiture, sélectionnent les panneaux les plus performants et garantissent une intégration esthétique et technique optimale. Avec un rendement moyen de 85% sur 25 ans, nos systèmes photovoltaïques permettent de produire jusqu&apos;à 70% de votre consommation électrique annuelle, tout en contribuant à la transition énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification RGE garantissant une qualité professionnelle
- Bureau d&apos;études intégré pour des solutions sur-mesure
- Financement et montage des dossiers de subventions
- SAV et maintenance assurés pendant 10 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant atteindre 30% du montant total. Un retour sur investissement estimé entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation varie de 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux (2-3 jours) et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification sur le site officiel, demandez plusieurs devis détaillés, consultez les avis clients et assurez-vous que l&apos;entreprise propose une garantie décennale et un accompagnement complet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Aubervilliers ?
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
