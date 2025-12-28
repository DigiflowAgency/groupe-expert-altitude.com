import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Saint-Maur-des-Fossés. Nos cordistes hautement qualifiés interviennent ',
  keywords: 'cordiste saint-maur-des-fossés, travaux sur corde saint-maur-des-fossés, travaux acrobatiques saint-maur-des-fossés, cordiste batiment saint-maur-des-fossés, intervention cordiste saint-maur-des-fossés, entreprise cordiste saint-maur-des-fossés',
};

export default function CordisteSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Saint-Maur-des-Fossés. Nos cordistes hautement qualifiés interviennent sur tous types de chantiers, garantissant des solutions techniques et sécurisées pour vos projets les plus complexes.</p>

        <h2>Nos services de travaux sur corde - cordistes a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent une solution innovative pour les interventions en hauteur nécessitant précision et expertise. Nos équipes de cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, que ce soit pour la rénovation de façades, l&apos;entretien industriel ou les travaux de maintenance. Nous disposons d&apos;un équipement de pointe homologué et nos techniciens suivent annuellement des formations de certification. Notre approche combine technicité, rapidité et respect des normes de sécurité les plus strictes, offrant une prestation clé en main à Saint-Maur-des-Fossés et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- 15 ans d&apos;expérience en travaux acrobatiques
- Équipe de 12 cordistes certifiés
- Interventions rapides sur Saint-Maur-des-Fossés
- Matériel aux normes européennes
- Devis gratuit sous 24h
- Assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir le CIRA (Certificat d&apos;Aptitude à l&apos;Intervention en Région Alpine), suivre des formations de sécurité, justifier d&apos;une condition physique excellente et posséder un sens aigu de l&apos;analyse des risques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications AFPS, les habilitations CARSAT, l&apos;existence de formations continues et l&apos;ancienneté de l&apos;entreprise. Demandez systématiquement les références de chantiers précédents et les attestations d&apos;assurance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Saint-Maur-des-Fossés ?
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
