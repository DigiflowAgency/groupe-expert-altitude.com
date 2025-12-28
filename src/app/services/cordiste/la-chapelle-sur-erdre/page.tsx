import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à La Chapelle-sur-Erdre, offre des solutions acrobatiques innovantes pour tous',
  keywords: 'cordiste la chapelle-sur-erdre, travaux sur corde la chapelle-sur-erdre, travaux acrobatiques la chapelle-sur-erdre, cordiste batiment la chapelle-sur-erdre, intervention cordiste la chapelle-sur-erdre, entreprise cordiste la chapelle-sur-erdre',
};

export default function CordisteLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à La Chapelle-sur-Erdre, offre des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en performances de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions en milieux verticaux et difficiles d&apos;accès. Que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades, nos cordistes professionnels interviennent avec une expertise chirurgicale. Chaque mission est précédée d&apos;une analyse approfondie des risques, garantissant une intervention optimale et sécurisée. Nos équipes utilisent un équipement dernier cri, permettant des interventions rapides et efficaces sur des structures complexes à La Chapelle-sur-Erdre et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos cordistes bénéficient de plus de 15 ans d&apos;expérience, sont certifiés IRATA niveau 3, et disposent d&apos;une assurance professionnelle complète. Nous intervenons dans le respect strict des normes de sécurité, avec un taux de satisfaction client de 98%. Notre engagement qualité fait de nous le partenaire de confiance pour vos travaux acrobatiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un devis précis dépend de la surface, de la hauteur, et des spécificités techniques de l&apos;intervention. Nous proposons systématiquement un diagnostic gratuit pour une estimation transparente.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle rigoureuse, incluant des certifications IRATA ou SPRAT. Il faut réussir des formations techniques (travail en hauteur, techniques de secours), avoir une condition physique excellente, et obtenir des habilitations spécifiques. Une formation dure généralement entre 6 mois et 2 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur assurance professionnelle, leurs références clients, et leurs attestations de formations. Un professionnel sérieux fournira systématiquement ces documents et proposera un audit préalable gratuit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a La Chapelle-sur-Erdre ?
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
