import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Nice | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Nice en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneau',
  keywords: 'panneaux solaires nice, installation photovoltaique nice, panneaux photovoltaiques nice, installateur panneaux solaires nice, pose panneaux solaires nice, photovoltaique maison nice',
};

export default function PanneauxSolairesNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Nice en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui allient performance énergétique et économies durables pour les propriétaires de la Côte d&apos;Azur.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Nice</h2>
        <div className="space-y-4">
          <p>Nos installations photovoltaïques représentent la solution énergétique d&apos;avenir pour les maisons niçoises, offrant une autonomie électrique optimale. Notre expertise technique nous permet de réaliser des systèmes personnalisés, adaptés à chaque configuration de toiture et orientation géographique. Nos panneaux haute performance captent jusqu&apos;à 22% d&apos;énergie solaire supplémentaire par rapport aux installations standard, garantissant une rentabilité rapide. Notre processus complet comprend un diagnostic précis, une étude technique détaillée, l&apos;installation professionnelle et le suivi énergétique, assurant une transition écologique en toute sérénité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée RGE avec plus de 15 ans d&apos;expérience, 2) Des technologies photovoltaïques dernier cri, 3) Un accompagnement administratif complet pour les aides et subventions, 4) Une garantie décennale sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; peuvent réduire jusqu&apos;à 30% du budget total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines : 1-2 semaines pour l&apos;étude technique, 2-3 jours pour la pose des panneaux, et le reste consacré aux raccordements électriques et aux démarches administratives.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez : la certification Qualibat 5911 ou Qualit&apos;EnR, les références clients locaux, les avis vérifiés, l&apos;appartenance à des réseaux professionnels reconnus et une proposition détaillée incluant étude technique, devis précis et engagement de performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Nice ?
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
