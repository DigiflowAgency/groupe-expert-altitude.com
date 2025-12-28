import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Villeurbanne en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en instal',
  keywords: 'panneaux solaires villeurbanne, installation photovoltaique villeurbanne, panneaux photovoltaiques villeurbanne, installateur panneaux solaires villeurbanne, pose panneaux solaires villeurbanne, photovoltaique maison villeurbanne',
};

export default function PanneauxSolairesVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Villeurbanne en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque couvre l&apos;intégralité du processus, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service complète. Nous analysons précisément l&apos;orientation de votre toiture, les caractéristiques techniques de votre habitat et vos consommations énergétiques pour proposer un système photovoltaïque optimal. Notre approche technique garantit un rendement énergétique maximal, avec des panneaux atteignant jusqu&apos;à 22% d&apos;efficacité. Chaque installation à Villeurbanne est conçue pour générer en moyenne 4000 kWh/an, permettant une autonomie électrique significative et des économies substantielles sur vos factures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son engagement qualité : certification RGE, techniciens hautement qualifiés, matériels de dernière génération. Nous proposons un accompagnement total, incluant les démarches administratives, le raccordement au réseau et le suivi de production. Notre connaissance approfondie du territoire villeurbannais nous permet d&apos;adapter chaque solution aux contraintes locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour une maison moyenne représente environ 11 500€, amortissable en 8-10 ans grâce aux économies et aux revenus de la revente d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend de 4 à 8 semaines : 1 semaine pour l&apos;étude technique, 1-2 semaines pour l&apos;obtention des autorisations, et 2-3 semaines pour l&apos;installation physique et les tests de mise en service. Notre équipe optimise chaque étape pour minimiser les délais.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement : la certification Qualibat 5454, l&apos;inscription au registre FAIRE, les avis clients, les références locales. Demandez systématiquement le devis détaillé, la garantie décennale et les certifications officielles. Notre entreprise répond à l&apos;ensemble de ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Villeurbanne ?
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
