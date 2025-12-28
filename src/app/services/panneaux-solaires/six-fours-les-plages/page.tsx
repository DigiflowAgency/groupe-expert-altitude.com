import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Six-Fours-les-Plages en source d&apos;énergie propre avec le Groupe Expert Altitude Com, votre spécialiste en installation de pannea',
  keywords: 'panneaux solaires six-fours-les-plages, installation photovoltaique six-fours-les-plages, panneaux photovoltaiques six-fours-les-plages, installateur panneaux solaires six-fours-les-plages, pose panneaux solaires six-fours-les-plages, photovoltaique maison six-fours-les-plages',
};

export default function PanneauxSolairesSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Six-Fours-les-Plages en source d&apos;énergie propre avec le Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque accompagnent les habitants de Six-Fours-les-Plages dans leur transition énergétique, en proposant des systèmes clés en main parfaitement adaptés à chaque configuration. Notre approche technique garantit une production électrique optimale, avec des rendements pouvant atteindre 22% grâce à des panneaux de dernière génération. Nous réalisons un diagnostic précis de votre toiture, étudions votre consommation énergétique et dimensionnons une installation photovoltaïque qui maximise vos économies. Notre process comprend l&apos;étude technique, les démarches administratives, l&apos;installation et le raccordement au réseau, pour une transition sereine vers l&apos;autoconsommation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une qualité d&apos;installation irréprochable. Notre équipe dispose de plus de 10 ans d&apos;expérience dans le photovoltaïque. Nous proposons des financements adaptés avec jusqu&apos;à 30% d&apos;aides publiques. Notre bureau d&apos;études local assure un suivi personnalisé et une intervention rapide.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance, avec des aides pouvant couvrir jusqu&apos;à 40% de l&apos;investissement. Pour une maison de 100m², comptez environ 12 500€ avant déductions fiscales et subventions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La phase d&apos;installation sur site dure en moyenne 2 à 3 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5454, demandez plusieurs devis détaillés, consultez les avis clients et assurez-vous que l&apos;entreprise propose une garantie décennale sur l&apos;installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Six-Fours-les-Plages ?
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
