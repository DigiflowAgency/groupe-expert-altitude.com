import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde sur tout le littoral varois, spécialisé dans les interventions acrobatiqu',
  keywords: 'cordiste la seyne-sur-mer, travaux sur corde la seyne-sur-mer, travaux acrobatiques la seyne-sur-mer, cordiste batiment la seyne-sur-mer, intervention cordiste la seyne-sur-mer, entreprise cordiste la seyne-sur-mer',
};

export default function CordisteLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde sur tout le littoral varois, spécialisé dans les interventions acrobatiques complexes à La Seyne-sur-Mer et ses environs. Nos cordistes hautement qualifiés réalisent des missions techniques en toute sécurité, quelque soit la configuration de votre site.</p>

        <h2>Nos services de travaux sur corde - cordistes a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos experts cordistes interviennent sur des chantiers variés, des rénovations de façades aux maintenances industrielles complexes. Équipés de techniques verticales innovantes, nous garantissons des prestations précises et rapides, sans échafaudage encombrant. Notre approche permet des interventions jusqu&apos;à 100 mètres de hauteur, avec un taux de réalisation de 98% des missions dans les délais prévus. Chaque cordiste de notre équipe possède les certifications IRATA niveau 3, la qualification la plus exigeante du marché, assurant une expertise technique et une sécurité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides sur La Seyne-sur-Mer et le Var
- Matériel dernière génération aux normes ISO
- Devis gratuit et personnalisé sous 24h
- Garantie qualité et satisfaction client</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité, la hauteur et le type de travaux. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications IRATA/SPRAT, suivre des formations techniques intensives de 3 à 6 mois, posséder une excellente condition physique et une absence totale de vertige. Un cursus technique (BTS, DUT) est un plus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients et demandez un portfolio de réalisations. Un professionnel sérieux transmettra ces documents sans hésitation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a La Seyne-sur-Mer ?
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
