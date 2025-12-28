import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Carquefou | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire référent en travaux sur corde à Carquefou, propose des solutions acrobatiques innovantes pour tous vos défis e',
  keywords: 'cordiste carquefou, travaux sur corde carquefou, travaux acrobatiques carquefou, cordiste batiment carquefou, intervention cordiste carquefou, entreprise cordiste carquefou',
};

export default function CordisteCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire référent en travaux sur corde à Carquefou, propose des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes professionnels interviennent avec précision et sécurité sur les chantiers les plus techniques de la région nantaise.</p>

        <h2>Nos services de travaux sur corde - cordistes a Carquefou</h2>
        <div className="space-y-4">
          <p>Nos interventions de cordistes couvrent un large spectre de missions complexes, depuis les inspections de bâtiments jusqu&apos;aux travaux de maintenance industrielle. Grâce à des techniques d&apos;accès spécialisées, nous réalisons des prestations impossible à effectuer par des méthodes traditionnelles. Notre équipe de Carquefou dispose d&apos;un équipement de pointe certifié, garantissant une efficacité maximale et une sécurité absolue. Chaque intervention fait l&apos;objet d&apos;une étude préalable minutieuse, avec une évaluation des risques et un protocole d&apos;action adapté.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en travaux acrobatiques
✓ Certifications IRATA et CACES pour tous nos cordistes
✓ Interventions rapides sur Carquefou et toute la Loire-Atlantique
✓ Devis gratuit et personnalisé sous 24h
✓ Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis adapté à vos besoins spécifiques à Carquefou.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications comme le niveau IRATA, suivre des formations techniques intensives de 3 à 6 mois et posséder une condition physique irréprochable. Une formation continue et des habilitations spécifiques sont également nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez les certifications IRATA, consultez les références clients, exigez une présentation des diplômes des intervenants et assurez-vous que l&apos;entreprise dispose d&apos;une assurance professionnelle couvrant les travaux en hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Carquefou ?
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
