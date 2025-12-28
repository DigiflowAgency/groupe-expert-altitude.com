import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris 3e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Paris 3e, en proposant des solutions photovoltaïques innovantes et sur-mesure. Nos installat',
  keywords: 'panneaux solaires paris 3e, installation photovoltaique paris 3e, panneaux photovoltaiques paris 3e, installateur panneaux solaires paris 3e, pose panneaux solaires paris 3e, photovoltaique maison paris 3e',
};

export default function PanneauxSolairesParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Paris 3e, en proposant des solutions photovoltaïques innovantes et sur-mesure. Nos installations de panneaux solaires transforment votre habitat en une source d&apos;énergie propre et économique au cœur de la capitale.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris 3e</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux photovoltaïques accompagnent chaque projet avec une approche technique et personnalisée. Nous analysons précisément l&apos;orientation de votre toiture, les contraintes architecturales parisiennes et calculons le potentiel énergétique optimal. Notre process comprend un diagnostic gratuit, une étude technique détaillée, le choix des équipements adaptés et une installation clé en main par nos techniciens certifiés. Avec un rendement moyen de 85% et des économies pouvant atteindre 60% sur vos factures énergétiques, nos solutions photovoltaïques sont un investissement intelligent pour les propriétaires du 3e arrondissement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence ? Une expertise locale unique à Paris, des certifications RGE, un accompagnement administratif complet pour vos demandes de subventions. Nos équipes maîtrisent les spécificités techniques des installations parisiennes. Nous garantissons une installation rapide, propre et sans découpe invasive, avec des panneaux haut de gamme bénéficiant de 25 ans de garantie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un foyer parisien moyen peut amortir son installation en 7-10 ans grâce aux économies d&apos;énergie et aux revenus de la revente d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 6 semaines, comprenant le diagnostic initial, les autorisations administratives et la pose technique. La pose des panneaux elle-même ne nécessite que 1-2 jours ouvrables, avec un minimum de perturbations pour votre habitat.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, demandez ses références locales, exigez un devis détaillé et gratuit. Assurez-vous que l&apos;entreprise propose une garantie décennale et dispose d&apos;un accompagnement complet, de l&apos;étude technique jusqu&apos;au raccordement au réseau électrique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris 3e ?
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
