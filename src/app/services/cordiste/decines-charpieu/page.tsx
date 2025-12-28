import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Décines-Charpieu, spécialiste des interventions acrobatiques en hauteur',
  keywords: 'cordiste décines-charpieu, travaux sur corde décines-charpieu, travaux acrobatiques décines-charpieu, cordiste batiment décines-charpieu, intervention cordiste décines-charpieu, entreprise cordiste décines-charpieu',
};

export default function CordisteDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Décines-Charpieu, spécialiste des interventions acrobatiques en hauteur avec une expertise technique inégalée. Nos cordistes professionnels réalisent des missions complexes en toute sécurité pour les entreprises et particuliers de la région lyonnaise.</p>

        <h2>Nos services de travaux sur corde - cordistes a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent un large éventail d&apos;interventions techniques nécessitant des compétences spécialisées. Que ce soit pour des travaux de maintenance industrielle, de rénovation de bâtiments ou d&apos;entretien de structures complexes, notre équipe dispose des certifications et équipements de pointe. Chaque intervention est précédée d&apos;une analyse rigoureuse des risques et d&apos;un plan d&apos;action détaillé, garantissant une exécution parfaite et sécurisée. Nos cordistes à Décines-Charpieu maîtrisent parfaitement les techniques d&apos;accès difficile et disposent de plus de 15 ans d&apos;expérience collective dans le domaine des travaux acrobatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée IRATA/SPRAT avec plus de 95% de missions réussies
- Matériel technique homologué aux dernières normes de sécurité
- Interventions rapides sur Décines-Charpieu et toute la métropole lyonnaise
- Devis gratuit et transparent sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, la hauteur et les équipements spécifiques nécessaires. Un diagnostic préalable permet d&apos;établir un devis précis adapté à votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications comme l&apos;IRATA niveau 1, 2 ou 3, suivre des formations de sécurité intensives, posséder une condition physique excellente et réussir des examens techniques et pratiques très sélectifs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA/SPRAT, l&apos;assurance professionnelle, les références clients, et demandez un portfolio des réalisations précédentes. Une entreprise de cordistes sérieuse transmet facilement ces justificatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Décines-Charpieu ?
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
