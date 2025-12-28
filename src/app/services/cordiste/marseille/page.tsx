import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Marseille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne les travaux en hauteur à Marseille grâce à des cordistes hautement qualifiés. Notre expertise en travaux acrobatiqu',
  keywords: 'cordiste marseille, travaux sur corde marseille, travaux acrobatiques marseille, cordiste batiment marseille, intervention cordiste marseille, entreprise cordiste marseille',
};

export default function CordisteMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne les travaux en hauteur à Marseille grâce à des cordistes hautement qualifiés. Notre expertise en travaux acrobatiques offre des solutions sécurisées et innovantes pour tous vos défis techniques en milieu vertical.</p>

        <h2>Nos services de travaux sur corde - cordistes a Marseille</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels interviennent sur l&apos;ensemble des chantiers marseillais, des bâtiments historiques aux infrastructures modernes. Spécialisés dans les techniques d&apos;accès difficile, nous réalisons des prestations de nettoyage, rénovation, peinture et maintenance en toute sécurité. Notre méthode unique permet des interventions rapides et précises, réduisant jusqu&apos;à 40% les coûts traditionnels d&apos;échafaudage. Chaque projet bénéficie d&apos;un diagnostic technique personnalisé et d&apos;équipements aux normes de sécurité les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : certification IRATA internationale, plus de 15 ans d&apos;expérience à Marseille, équipe de 12 cordistes experts, assurance professionnelle complète et engagement qualité garanti. Nous intervenons sur tous types de structures avec une réactivité et un professionnalisme reconnus.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, la hauteur et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit permet un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation certifiante IRATA, justifier d&apos;une condition physique excellente, obtenir un diplôme de secourisme et réussir des examens techniques et pratiques. La formation dure généralement entre 3 et 6 mois avec des certifications de niveau I, II ou III.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit présenter des qualifications IRATA, une assurance professionnelle complète, des références clients vérifiables et des certifications de sécurité à jour. Vérifiez toujours leurs agréments et leur expérience sur des projets similaires avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Marseille ?
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
