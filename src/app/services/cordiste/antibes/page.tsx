import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Antibes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Antibes, offrant des solutions acrobatiques innovantes pour tous vos défi',
  keywords: 'cordiste antibes, travaux sur corde antibes, travaux acrobatiques antibes, cordiste batiment antibes, intervention cordiste antibes, entreprise cordiste antibes',
};

export default function CordisteAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Antibes, offrant des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en performances de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Antibes</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions en milieux difficiles d&apos;accès sur la Côte d&apos;Azur. Nos cordistes professionnels sont équipés de technologies et certifications de pointe, permettant des réalisations dans des secteurs variés : bâtiment, industrie, patrimoine et sites sensibles. Chaque intervention fait l&apos;objet d&apos;une analyse précise des risques, avec un protocole de sécurité rigoureux garantissant 100% de fiabilité. Notre expertise technique nous permet d&apos;intervenir rapidement à Antibes et ses environs, avec un taux de satisfaction client de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée IRATA/SPRAT avec plus de 15 ans d&apos;expérience, 2) Un équipement professionnel dernier cri, 3) Une approche sécuritaire irréprochable, 4) Une réactivité et adaptabilité uniques sur le secteur d&apos;Antibes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité technique, la hauteur d&apos;intervention et l&apos;urgence. Un devis personnalisé sera toujours établi après diagnostic précis de votre chantier.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle diplômante, obtenir les certifications IRATA/SPRAT, valider un CACES spécifique et réussir des examens médicaux stricts attestant une condition physique et psychologique adaptée aux travaux en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les certifications officielles IRATA/SPRAT, l&apos;assurance professionnelle, les références clients, les attestations de formations continues et les habilitations sécurité spécifiques à chaque type d&apos;intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Antibes ?
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
