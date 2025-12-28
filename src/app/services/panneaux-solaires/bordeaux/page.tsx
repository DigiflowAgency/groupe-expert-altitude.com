import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Bordeaux avec ses solutions d&apos;installation de panneaux solaires photovoltaïques. Nos ex',
  keywords: 'panneaux solaires bordeaux, installation photovoltaique bordeaux, panneaux photovoltaiques bordeaux, installateur panneaux solaires bordeaux, pose panneaux solaires bordeaux, photovoltaique maison bordeaux',
};

export default function PanneauxSolairesBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Bordeaux avec ses solutions d&apos;installation de panneaux solaires photovoltaïques. Nos experts transforment votre toiture en une source d&apos;énergie propre et économique, adaptée au climat aquitain.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Bordeaux</h2>
        <div className="space-y-4">
          <p>Nous proposons une solution complète et personnalisée d&apos;installation de panneaux photovoltaïques, conçue pour maximiser la performance énergétique de votre habitat. Notre équipe technique analyse précisément votre configuration, en tenant compte de l&apos;orientation, de l&apos;inclinaison et des spécificités de votre toiture bordelaise. Nous sélectionnons des panneaux haute performance atteignant jusqu&apos;à 22% de rendement énergétique, garantissant une production électrique optimale. Notre processus comprend un diagnostic technique gratuit, un dimensionnement sur-mesure, l&apos;installation professionnelle et le raccordement au réseau électrique, le tout dans le respect des normes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos atouts différenciants : une expertise de plus de 10 ans, une certification RGE garantissant la qualité, un accompagnement administratif complet pour vos demandes de subventions. Nos installateurs sont formés aux dernières technologies photovoltaïques et notre taux de satisfaction client dépasse 95%. Nous proposons également des solutions de financement adaptées et une garantie décennale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance (3 à 9 kWc), avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc coûte environ 10 500€, mais permet des économies annuelles de 500€ à 800€ sur votre facture énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant le diagnostic technique (1 semaine), les démarches administratives (2-3 semaines) et la pose effective des panneaux (2-3 jours). Notre équipe optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIT&apos;EnR, demandez ses références locales à Bordeaux, consultez les avis clients, et assurez-vous qu&apos;il propose un accompagnement complet incluant études techniques, installation et suivi post-pose.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Bordeaux ?
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
