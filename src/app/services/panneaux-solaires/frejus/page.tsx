import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Fréjus | Groupe Expert Altitude Com',
  description: 'Transformez votre maison à Fréjus en une source d&apos;énergie verte et économique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation',
  keywords: 'panneaux solaires fréjus, installation photovoltaique fréjus, panneaux photovoltaiques fréjus, installateur panneaux solaires fréjus, pose panneaux solaires fréjus, photovoltaique maison fréjus',
};

export default function PanneauxSolairesFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre maison à Fréjus en une source d&apos;énergie verte et économique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine et réduisent significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux enjeux énergétiques actuels, en proposant des solutions technologiques innovantes adaptées à chaque habitat de la région de Fréjus. Nous réalisons un diagnostic précis de votre toiture, évaluons son potentiel solaire et définissons le système photovoltaïque optimal. Notre équipe certifiée utilise uniquement des panneaux de haute performance, garantissant une production électrique maximale et une rentabilité rapide. Chaque installation est personnalisée, en tenant compte de votre consommation énergétique, de l&apos;orientation de votre toiture et des contraintes architecturales locales. Nous accompagnons nos clients de la conception jusqu&apos;à la mise en service, en gérant également les démarches administratives et les demandes de raccordement au réseau électrique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise locale, notre certification RGE, et notre engagement qualité. Notre taux de satisfaction client dépasse 95%, grâce à un accompagnement personnalisé. Nous proposons des solutions clés en main, avec des financements adaptés et un suivi technique après installation. Notre connaissance approfondie du territoire de Fréjus nous permet de maximiser la performance de chaque système photovoltaïque.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ pour une maison individuelle, selon la puissance et la surface. Comptez environ 2 500€ par kilowatt installé. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent couvrir jusqu&apos;à 50% de l&apos;investissement, avec un retour sur investissement estimé entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines. La pose des panneaux elle-même dure 2 à 3 jours, mais comprend aussi les études préalables, les démarches administratives et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour minimiser les perturbations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez sa qualification Qualibat 5182, demandez ses références locales à Fréjus, consultez ses avis clients et assurez-vous qu&apos;il propose une garantie décennale. Vérifiez également son adhésion à des organisations professionnelles comme QUALIT&apos;EnR et demandez plusieurs devis détaillés pour comparer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Fréjus ?
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
