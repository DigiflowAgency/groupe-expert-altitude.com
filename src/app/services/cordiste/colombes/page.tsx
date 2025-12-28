import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Colombes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en travaux sur corde à Colombes et dans toute la région parisienne. Spécialistes des interv',
  keywords: 'cordiste colombes, travaux sur corde colombes, travaux acrobatiques colombes, cordiste batiment colombes, intervention cordiste colombes, entreprise cordiste colombes',
};

export default function CordisteColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en travaux sur corde à Colombes et dans toute la région parisienne. Spécialistes des interventions acrobatiques, nous intervenons sur tous types de chantiers en hauteur avec une expertise technique et une sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Colombes</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels réalisent des interventions complexes nécessitant des techniques spécialisées d&apos;accès difficile. Que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades à Colombes, notre équipe dispose des certifications et équipements homologués pour garantir une intervention précise et sécurisée. Nos techniciens maîtrisent parfaitement les techniques de progression sur cordes, permettant d&apos;intervenir là où les échafaudages traditionnels sont impossibles, avec un rapport qualité-prix optimal. Chaque intervention fait l&apos;objet d&apos;une préparation méticuleuse, d&apos;un diagnostic préalable et d&apos;un suivi personnalisé.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions 100% sécurisées conformes aux normes OPPBTP
- Devis gratuit et personnalisé sous 24h
- Matériel technique dernière génération
- Références solides sur Colombes et l&apos;Île-de-France</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier, les équipements nécessaires et la durée d&apos;intervention. Un diagnostic préalable nous permet de proposer un devis précis et transparent sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le CQP Cordiste, suivre des formations en hauteur, maîtriser les techniques de sécurité et posséder une condition physique irréprochable. Une formation continue est obligatoire pour maintenir ses compétences.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs références, leurs certifications AFPS/OPPBTP, leur assurance professionnelle et demandez systématiquement un devis détaillé avec les garanties associées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Colombes ?
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
