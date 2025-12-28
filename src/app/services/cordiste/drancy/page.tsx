import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Drancy | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Drancy, spécialiste des interventions acrobatiques pour tous vos défis ',
  keywords: 'cordiste drancy, travaux sur corde drancy, travaux acrobatiques drancy, cordiste batiment drancy, intervention cordiste drancy, entreprise cordiste drancy',
};

export default function CordisteDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Drancy, spécialiste des interventions acrobatiques pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les missions complexes en solutions sécurisées et efficaces.</p>

        <h2>Nos services de travaux sur corde - cordistes a Drancy</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes couvrent un large éventail d&apos;interventions techniques dans le bâtiment et l&apos;industrie. Grâce à une expertise pointue et un équipement de pointe, nous réalisons des travaux de maintenance, nettoyage, rénovation et inspection sur des structures verticales complexes. Chaque mission est précédée d&apos;une analyse approfondie des risques et d&apos;un plan d&apos;intervention détaillé. Nos techniciens, formés aux dernières normes de sécurité, garantissent une exécution parfaite, que ce soit pour des immeubles, des monuments historiques ou des sites industriels à Drancy et ses environs. Notre approche combine technicité, rapidité et respect des contraintes environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 98% de satisfaction client, des techniciens certifiés IRATA, une assurance professionnelle complète, et plus de 15 ans d&apos;expérience en travaux acrobatiques. Nous intervenons rapidement sur Drancy et toute la région parisienne, avec un engagement qualité et sécurité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA, suivre des formations intensives en techniques de travail en hauteur, réussir des examens pratiques et théoriques, et justifier d&apos;une condition physique irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur assurance professionnelle, leurs références clients, et demandez systématiquement un portfolio de réalisations récentes. Une entreprise sérieuse transmettra ces documents sans hésitation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Drancy ?
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
