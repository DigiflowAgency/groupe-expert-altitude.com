import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour tous travaux sur corde à Saint-Nazaire et ses environs. Nos cordistes hautement qualifiés',
  keywords: 'cordiste saint-nazaire, travaux sur corde saint-nazaire, travaux acrobatiques saint-nazaire, cordiste batiment saint-nazaire, intervention cordiste saint-nazaire, entreprise cordiste saint-nazaire',
};

export default function CordisteSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour tous travaux sur corde à Saint-Nazaire et ses environs. Nos cordistes hautement qualifiés interviennent avec précision et sécurité sur les chantiers les plus techniques de la région.</p>

        <h2>Nos services de travaux sur corde - cordistes a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Nos experts cordistes réalisent des interventions acrobatiques complexes sur tous types de structures à Saint-Nazaire : bâtiments industriels, monuments historiques, ouvrages maritimes et infrastructures urbaines. Grâce à des techniques d&apos;accès difficile, nous intervenons là où les méthodes traditionnelles échouent, garantissant des travaux de maintenance, rénovation et inspection en toute sécurité. Notre équipe dispose d&apos;un équipement de pointe homologué et suit une formation continue stricte, assurant une qualité d&apos;intervention irréprochable et une efficacité redoutable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification IRATA internationale garantissant les plus hauts standards de sécurité
• Plus de 15 ans d&apos;expérience sur la région nazairienne
• Interventions rapides et devis personnalisés sous 24h
• Équipe de 8 cordistes experts couvrant tout le département</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité technique, la hauteur d&apos;intervention et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit permet d&apos;établir un devis précis adapté à votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA/SPRAT de niveau 1, 2 ou 3, suivre des formations de sécurité intensives, justifier d&apos;une condition physique excellente et posséder un sens aigu de l&apos;analyse des risques professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;assurance professionnelle, les références clients, et demandez les diplômes des techniciens. Un cordiste certifié doit présenter un parcours de formation et des habilitations à jour.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Saint-Nazaire ?
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
