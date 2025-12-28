import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Talence | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Talence en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux ',
  keywords: 'panneaux solaires talence, installation photovoltaique talence, panneaux photovoltaiques talence, installateur panneaux solaires talence, pose panneaux solaires talence, photovoltaique maison talence',
};

export default function PanneauxSolairesTalencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Talence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Talence en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour votre maison.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Talence</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation de panneaux photovoltaïques répond aux enjeux énergétiques modernes. Sur Talence et ses environs, nous proposons des solutions clés en main adaptées à chaque configuration de toiture. Notre processus débute par un diagnostic précis : étude technique, dimensionnement optimal, choix des équipements performants. Nos techniciens certifiés garantissent une installation professionnelle, avec des panneaux atteignant jusqu&apos;à 22% de rendement énergétique. Nous sélectionnons uniquement des matériels haute qualité homologués, assurant une production électrique maximale et une durabilité sur 25-30 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale, sa certification RGE, et un accompagnement sur-mesure. Nos installateurs sont formés aux dernières technologies photovoltaïques. Nous proposons un conseil personnalisé, un devis détaillé sans engagement, et un suivi complet de votre projet. Notre objectif : optimiser votre production énergétique et réduire significativement vos factures d&apos;électricité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement de 8 à 12 ans. Les aides gouvernementales peuvent couvrir jusqu&apos;à 30% du projet, incluant MaPrimeRénov&apos; et les certificats d&apos;économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend de 3 à 6 semaines, comprenant l&apos;étude technique, l&apos;obtention des autorisations, la pose et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour une réalisation rapide et efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, son expérience locale, ses références clients, et demandez un audit énergétique détaillé. Assurez-vous de la garantie des travaux et de la conformité aux normes électriques en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Talence ?
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
