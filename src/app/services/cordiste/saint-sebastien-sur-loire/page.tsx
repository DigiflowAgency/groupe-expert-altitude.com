import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Saint-Sébastien-sur-Loire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Saint-Sébastien-sur-Loire, offre des solutions acrobatiques innovantes pour ',
  keywords: 'cordiste saint-sébastien-sur-loire, travaux sur corde saint-sébastien-sur-loire, travaux acrobatiques saint-sébastien-sur-loire, cordiste batiment saint-sébastien-sur-loire, intervention cordiste saint-sébastien-sur-loire, entreprise cordiste saint-sébastien-sur-loire',
};

export default function CordisteSaintSebastienSurLoirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Saint-Sébastien-sur-Loire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Saint-Sébastien-sur-Loire, offre des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en missions précises et sécurisées.</p>

        <h2>Nos services de travaux sur corde - cordistes a Saint-Sébastien-sur-Loire</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques en hauteur sur le territoire de Saint-Sébastien-sur-Loire et ses environs. Nos cordistes professionnels interviennent avec une précision chirurgicale sur des chantiers variés : rénovation de façades, nettoyage de vitres, maintenance industrielle et travaux de maintenance complexes. Chaque intervention est méticuleusement planifiée, garantissant une efficacité maximale et une sécurité absolue. Notre équipe dispose d&apos;un équipement de pointe homologué, permettant des interventions rapides et économiques là où les échafaudages traditionnels seraient impossibles ou trop coûteux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification IRATA internationale garantissant une expertise de haut niveau
- Plus de 15 ans d&apos;expérience en travaux acrobatiques
- Équipe de 12 cordistes spécialisés et formés annuellement
- Assurance professionnelle complète couvrant tous les types d&apos;interventions
- Interventions sur tout le département Loire-Atlantique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques à Saint-Sébastien-sur-Loire.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation IRATA niveau 1, 2 ou 3, un CACES optionnel, une condition physique irréprochable et des compétences en techniques de travail en hauteur. Une formation continue annuelle est obligatoire pour maintenir sa certification.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez toujours : la certification IRATA, l&apos;assurance professionnelle, les références clients, l&apos;ancienneté sur le marché et les qualifications individuelles des techniciens.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Saint-Sébastien-sur-Loire ?
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
