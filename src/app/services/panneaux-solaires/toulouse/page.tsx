import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Toulouse | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Toulouse en une centrale électrique écologique grâce à Groupe Expert Altitude Com, votre spécialiste local en installation de p',
  keywords: 'panneaux solaires toulouse, installation photovoltaique toulouse, panneaux photovoltaiques toulouse, installateur panneaux solaires toulouse, pose panneaux solaires toulouse, photovoltaique maison toulouse',
};

export default function PanneauxSolairesToulousePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Toulouse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Toulouse en une centrale électrique écologique grâce à Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous accompagnons les propriétaires toulousains vers une énergie propre et économique depuis plus de 10 ans.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Toulouse</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation de panneaux photovoltaïques couvre l&apos;ensemble des besoins énergétiques des particuliers à Toulouse et sa région. Nous proposons des solutions sur-mesure, adaptées à chaque configuration de toiture et consommation électrique. Notre processus débute par un diagnostic technique précis, permettant d&apos;évaluer le potentiel solaire de votre propriété et de dimensionner l&apos;installation optimale. Nos techniciens certifiés utilisent uniquement des panneaux de haute performance, garantissant un rendement énergétique maximal et une durabilité de plus de 25 ans. L&apos;objectif : réduire jusqu&apos;à 70% de vos factures d&apos;électricité tout en contribuant à la transition écologique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son engagement total : certification RGE, devis gratuit sous 48h, accompagnement administratif complet pour les aides et subventions. Nos installateurs sont formés aux dernières normes techniques, et nous proposons une garantie décennale sur tous nos travaux. Notre implantation locale à Toulouse nous permet une intervention rapide et un service personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 2 et 4 semaines, incluant le diagnostic initial, les démarches administratives, la pose technique (1-2 jours) et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement : la certification Qualibat ou Qualisol, les avis clients vérifiés, l&apos;ancienneté de l&apos;entreprise, et demandez systématiquement un devis détaillé avec les références des matériels utilisés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Toulouse ?
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
