import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 1er | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde hautement sécurisés au cœur de Paris 1er. Nos cordistes experts int',
  keywords: 'cordiste paris 1er, travaux sur corde paris 1er, travaux acrobatiques paris 1er, cordiste batiment paris 1er, intervention cordiste paris 1er, entreprise cordiste paris 1er',
};

export default function CordisteParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde hautement sécurisés au cœur de Paris 1er. Nos cordistes experts interviennent sur les bâtiments historiques et modernes, garantissant des solutions techniques précises et innovantes.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 1er</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution ultime pour toute intervention complexe en hauteur. Nos cordistes hautement qualifiés maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des interventions dans des zones inaccessibles aux méthodes traditionnelles. Que ce soit pour du nettoyage de façade, de la rénovation, de la maintenance ou de l&apos;inspection technique, nous intervenons avec une précision chirurgicale sur l&apos;ensemble des structures parisiennes. Notre équipe dispose d&apos;équipements homologués et respecte scrupuleusement les normes de sécurité les plus strictes, avec un taux de réussite de 99,8% sur nos missions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos cordistes possèdent plus de 15 ans d&apos;expérience collective. Nous sommes certifiés ISO 9001 et disposons de toutes les habilitations nécessaires. Notre engagement qualité se traduit par une intervention rapide, un devis personnalisé sous 24h et une traçabilité complète de chaque mission réalisée à Paris 1er.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité de l&apos;intervention, les équipements nécessaires et la durée estimée. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation qualifiante de niveau BAC+2 minimum, avec une certification IRATA ou SPRAT obligatoire. Il faut aussi réussir des tests physiques rigoureux, maîtriser les techniques de sécurité et posséder un sens aigu de l&apos;analyse des risques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement ses certifications QUALIBAT, ses assurances professionnelles, ses références clients et ses attestations de formations continues. Demandez systématiquement les justificatifs avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 1er ?
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
