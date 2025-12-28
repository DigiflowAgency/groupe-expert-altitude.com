import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Orvault | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Orvault, offrant des solutions professionnelles et sécurisées pour tous v',
  keywords: 'cordiste orvault, travaux sur corde orvault, travaux acrobatiques orvault, cordiste batiment orvault, intervention cordiste orvault, entreprise cordiste orvault',
};

export default function CordisteOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Orvault, offrant des solutions professionnelles et sécurisées pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec une expertise technique et une précision remarquables.</p>

        <h2>Nos services de travaux sur corde - cordistes a Orvault</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent un large spectre d&apos;interventions, de la rénovation de façades à l&apos;entretien industriel. Grâce à des techniques d&apos;accès difficile, nous réalisons des missions impossibles pour les méthodes traditionnelles, avec un taux de réussite de 98%. Nos cordistes disposent d&apos;équipements homologués et suivent des formations continues garantissant une sécurité maximale. Basés à Orvault, nous intervenons dans toute la région des Pays de la Loire, proposant des solutions sur-mesure adaptées à chaque configuration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés IRATA, plus de 15 ans d&apos;expérience, assurance responsabilité professionnelle complète, devis gratuit sous 48h, interventions rapides et précises. Notre engagement qualité fait notre réputation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité, avec un minimum de facturation de 3h. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle qualifiante, un certificat IRATA (International Rope Access Trade Association), une condition physique irréprochable et des compétences en sécurité. La formation dure généralement 3 à 6 mois et inclut des certifications techniques et de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA des techniciens, l&apos;existence d&apos;une assurance responsabilité professionnelle, les références clients, les avis en ligne et la transparence des devis. Ne négligez jamais ces critères de sélection.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Orvault ?
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
