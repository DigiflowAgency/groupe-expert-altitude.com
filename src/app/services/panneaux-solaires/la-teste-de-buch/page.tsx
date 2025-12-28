import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire sur La Teste-de-Buch avec des solutions photovoltaïques innovantes et sur-mesure. Nos installatio',
  keywords: 'panneaux solaires la teste-de-buch, installation photovoltaique la teste-de-buch, panneaux photovoltaiques la teste-de-buch, installateur panneaux solaires la teste-de-buch, pose panneaux solaires la teste-de-buch, photovoltaique maison la teste-de-buch',
};

export default function PanneauxSolairesLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire sur La Teste-de-Buch avec des solutions photovoltaïques innovantes et sur-mesure. Nos installations de panneaux solaires transforment votre habitat en une source d&apos;énergie propre et économique, adaptée aux spécificités du bassin d&apos;Arcachon.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux photovoltaïques proposent une approche complète et personnalisée. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les équipements les plus performants et garantissons une intégration esthétique parfaite. Chaque projet est étudié techniquement pour maximiser votre production énergétique, avec des rendements pouvant atteindre 85% sur l&apos;année. Notre process inclut un accompagnement administratif complet, de la déclaration de travaux aux demandes de subventions, simplifiant totalement votre démarche. Sur La Teste-de-Buch, nous maîtrisons les contraintes techniques locales pour une installation optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification RGE garantissant une qualité professionnelle
- Devis gratuit et personnalisé sous 48h
- Équipe technique avec plus de 10 ans d&apos;expérience
- Matériels de marques françaises et européennes
- Suivi et maintenance après installation</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un foyer moyen à La Teste-de-Buch peut économiser environ 500€ par an sur ses factures énergétiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 à 8 semaines : 1 semaine pour l&apos;étude technique, 1 semaine pour les autorisations administratives et 2-3 semaines pour l&apos;installation et les tests techniques. Notre équipe optimise chaque étape pour une rapidité maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification officielle, demandez des références locales, étudiez ses avis clients, et assurez-vous qu&apos;il propose un accompagnement complet incluant études techniques, installation et suivi après-vente.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a La Teste-de-Buch ?
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
