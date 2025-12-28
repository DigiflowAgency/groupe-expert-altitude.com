import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Bron | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Bron en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaire',
  keywords: 'panneaux solaires bron, installation photovoltaique bron, panneaux photovoltaiques bron, installateur panneaux solaires bron, pose panneaux solaires bron, photovoltaique maison bron',
};

export default function PanneauxSolairesBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Bron en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Bron</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux enjeux énergétiques actuels, en proposant des solutions technologiques innovantes pour les particuliers de Bron et ses environs. Nous intervenons de l&apos;étude technique préalable jusqu&apos;à la pose complète des panneaux, en garantissant une performance énergétique optimale. Chaque projet est personnalisé selon l&apos;orientation de votre toiture, votre consommation électrique et vos objectifs économiques. Nos techniciens certifiés utilisent uniquement des matériels de haute qualité, avec des rendements atteignant jusqu&apos;à 22% et une durée de vie supérieure à 25 ans. Notre approche intègre une analyse précise des aides gouvernementales et des possibilités de revente d&apos;électricité, permettant un retour sur investissement rapide.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale à Bron avec plus de 10 ans d&apos;expérience
• Techniciens certifiés RGE et habilités
• Accompagnement administratif complet
• Matériel garanti 25 ans
• Devis personnalisé et gratuit
• Solutions adaptées à chaque budget</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% du coût total. Un foyer moyen à Bron peut économiser environ 300€ par an sur ses factures énergétiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. Notre équipe garantit un processus rapide et efficace, avec un chantier propre et un accompagnement personnalisé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, son expérience locale, ses références clients, et demandez plusieurs devis comparatifs. Assurez-vous de la présence de garanties écrites et d&apos;un accompagnement complet dans vos démarches administratives et techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Bron ?
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
