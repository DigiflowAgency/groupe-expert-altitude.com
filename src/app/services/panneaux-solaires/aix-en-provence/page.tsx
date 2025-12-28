import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Aix-en-Provence en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en install',
  keywords: 'panneaux solaires aix-en-provence, installation photovoltaique aix-en-provence, panneaux photovoltaiques aix-en-provence, installateur panneaux solaires aix-en-provence, pose panneaux solaires aix-en-provence, photovoltaique maison aix-en-provence',
};

export default function PanneauxSolairesAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Aix-en-Provence en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux exigences techniques les plus pointues. Nous réalisons un diagnostic précis de votre toiture, évaluons votre potentiel énergétique et proposons une solution adaptée à votre consommation. Nos techniciens certifiés interviennent sur l&apos;ensemble de la région aixoise, garantissant une pose professionnelle qui maximise votre production électrique. Chaque installation est pensée pour optimiser votre rendement : orientation, inclinaison, puissance des modules sont calculés scientifiquement pour vous assurer jusqu&apos;à 70% d&apos;autoconsommation électrique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Installateurs RGE certifiés avec plus de 10 ans d&apos;expérience
• Solutions personnalisées 100% adaptées à votre habitat
• Accompagnement administratif complet pour vos demandes de subventions
• Matériel de haute qualité avec garanties constructeurs étendues</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires varie entre 9 000€ et 20 000€ selon la superficie, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de votre investissement. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant le diagnostic initial, les démarches administratives et la pose technique. La pose effective des panneaux ne durant que 2 à 3 jours pour une maison individuelle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale. Notre entreprise répond à tous ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Aix-en-Provence ?
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
