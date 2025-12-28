import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Puteaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Puteaux et dans toute la région parisienne. Nos cordistes hautement ',
  keywords: 'cordiste puteaux, travaux sur corde puteaux, travaux acrobatiques puteaux, cordiste batiment puteaux, intervention cordiste puteaux, entreprise cordiste puteaux',
};

export default function CordistePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Puteaux et dans toute la région parisienne. Nos cordistes hautement qualifiés réalisent des interventions acrobatiques complexes avec une précision et une sécurité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a Puteaux</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde couvrent un large éventail d&apos;interventions techniques, depuis la maintenance industrielle jusqu&apos;aux travaux de rénovation urbaine. Nos équipes de cordistes professionnels sont équipées des dernières technologies et certifications pour intervenir sur des chantiers complexes à Puteaux et ses environs. Chaque mission fait l&apos;objet d&apos;une analyse précise des risques, avec un plan d&apos;intervention personnalisé garantissant la sécurité et l&apos;efficacité. Nos techniciens maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des interventions là où les méthodes traditionnelles sont impossibles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• 15 ans d&apos;expertise en travaux acrobatiques
• Certifications IRATA et CACES à jour
• Équipement de pointe conforme aux normes de sécurité
• Interventions rapides sur Puteaux et toute l&apos;Île-de-France
• Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications comme le niveau IRATA, suivre des formations de sécurité intensives, justifier d&apos;une condition physique excellente et posséder un sens aigu de l&apos;analyse des risques. Une formation technique et des stages pratiques sont essentiels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, les assurances professionnelles, les références clients et les habilitations sécurité. Un cordiste professionnel doit présenter un historique de missions réussies et des garanties techniques solides.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Puteaux ?
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
