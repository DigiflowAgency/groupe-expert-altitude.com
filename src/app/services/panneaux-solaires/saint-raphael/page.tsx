import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Saint-Raphaël en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installati',
  keywords: 'panneaux solaires saint-raphaël, installation photovoltaique saint-raphaël, panneaux photovoltaiques saint-raphaël, installateur panneaux solaires saint-raphaël, pose panneaux solaires saint-raphaël, photovoltaique maison saint-raphaël',
};

export default function PanneauxSolairesSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Saint-Raphaël en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Profitez du potentiel solaire exceptionnel de la région et réduisez significativement votre facture énergétique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Saint-Raphaël de produire leur propre électricité verte et autonome. Notre équipe d&apos;experts réalise un diagnostic précis de votre toiture, en évaluant son orientation, son inclinaison et sa capacité à accueillir des panneaux solaires haute performance. Nous utilisons uniquement des équipements certifiés avec un rendement énergétique supérieur à 22%, garantissant une production électrique optimale. Notre processus complet comprend l&apos;étude technique, l&apos;installation professionnelle, les démarches administratives et le raccordement au réseau électrique, pour une transition énergétique clé en main.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale, sa certification RGE, et un accompagnement personnalisé. Nos techniciens maîtrisent parfaitement les spécificités techniques de Saint-Raphaël. Nous proposons des financements adaptés, une garantie de 25 ans sur les installations et un suivi technique complet. Notre taux de satisfaction client dépasse 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un foyer moyen à Saint-Raphaël peut récupérer son investissement en 8-10 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La pose des panneaux elle-même ne prend que 2 à 3 jours pour une installation résidentielle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement sa certification Qualibat, ses références locales, et demandez plusieurs devis détaillés. Assurez-vous que l&apos;entreprise propose un accompagnement complet, de l&apos;étude technique jusqu&apos;au raccordement, avec des garanties écrites.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Saint-Raphaël ?
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
