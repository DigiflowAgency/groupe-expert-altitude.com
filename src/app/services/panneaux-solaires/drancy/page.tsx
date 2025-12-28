import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Drancy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie verte à Drancy avec des solutions de panneaux solaires photovoltaïques innovantes et sur-mesure. Notre ex',
  keywords: 'panneaux solaires drancy, installation photovoltaique drancy, panneaux photovoltaiques drancy, installateur panneaux solaires drancy, pose panneaux solaires drancy, photovoltaique maison drancy',
};

export default function PanneauxSolairesDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie verte à Drancy avec des solutions de panneaux solaires photovoltaïques innovantes et sur-mesure. Notre expertise locale vous permet de transformer votre habitat en une source d&apos;énergie propre et économique, directement adaptée aux spécificités de votre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Drancy</h2>
        <div className="space-y-4">
          <p>Nos installations de panneaux photovoltaïques représentent la solution énergétique moderne pour les habitants de Drancy et ses environs. Notre processus complet commence par un diagnostic précis de votre toiture, évaluant son orientation, sa résistance et son potentiel solaire. Nous sélectionnons uniquement des panneaux de haute performance, garantissant un rendement énergétique optimal pouvant atteindre 22% d&apos;efficacité. Notre équipe certifiée réalise une installation professionnelle, en respectant les normes techniques les plus strictes, avec un raccordement électrique sécurisé et une intégration esthétique parfaite. Chaque projet permet en moyenne de réduire jusqu&apos;à 70% de votre facture énergétique annuelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre certification RGE, une expertise de plus de 10 ans, des techniciens formés en permanence, et un accompagnement total depuis l&apos;étude jusqu&apos;à l&apos;installation. Nous proposons des solutions 100% personnalisées, avec des financements adaptés et un suivi technique complet après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un retour sur investissement est généralement constaté entre 8 et 12 ans, grâce aux économies d&apos;énergie et aux revenus de la revente d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend de 3 à 6 semaines, incluant le diagnostic initial, les démarches administratives, la préparation du site et la pose technique. Notre équipe à Drancy optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement sa certification QUALIBAT ou QUALIT&apos;EnR, consultez ses références clients locales, demandez plusieurs devis détaillés et assurez-vous de la présence de garanties écrites sur les matériels et la main-d&apos;œuvre.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Drancy ?
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
