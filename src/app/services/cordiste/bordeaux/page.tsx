import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Bordeaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Bordeaux et dans toute la région Nouvelle-Aquitaine. Nos cordistes profes',
  keywords: 'cordiste bordeaux, travaux sur corde bordeaux, travaux acrobatiques bordeaux, cordiste batiment bordeaux, intervention cordiste bordeaux, entreprise cordiste bordeaux',
};

export default function CordisteBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Bordeaux et dans toute la région Nouvelle-Aquitaine. Nos cordistes professionnels réalisent des interventions techniques en hauteur avec une expertise et une sécurité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a Bordeaux</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent un large éventail d&apos;interventions techniques nécessitant des compétences spécifiques en cordage. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes allant de la rénovation de façades aux travaux industriels, avec une précision chirurgicale. Nous utilisons un équipement dernier cri et des techniques certifiées IRATA, garantissant une efficacité et une sécurité optimales. Notre équipe à Bordeaux dispose de plus de 15 ans d&apos;expérience dans les travaux en hauteur, ce qui nous permet de répondre rapidement et efficacement aux besoins les plus exigeants.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos cordistes sont tous certifiés et disposent d&apos;une formation continue. Nous proposons une intervention sur-mesure, un devis gratuit sous 48h, une assurance professionnelle complète et un engagement qualité. Notre taux de satisfaction client dépasse les 95% à Bordeaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, la hauteur, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de définir un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA, suivre des formations de sécurité intensives, justifier d&apos;une condition physique excellente et posséder un solide sens des responsabilités. Une formation peut durer entre 3 et 6 mois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leurs certifications IRATA, leur assurance professionnelle, leurs références clients, leur ancienneté sur le marché et leurs équipements aux normes de sécurité actuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Bordeaux ?
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
