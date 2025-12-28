import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Gradignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Gradignan, offrant des solutions acrobatiques professionnelles et sécuris',
  keywords: 'cordiste gradignan, travaux sur corde gradignan, travaux acrobatiques gradignan, cordiste batiment gradignan, intervention cordiste gradignan, entreprise cordiste gradignan',
};

export default function CordisteGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Gradignan, offrant des solutions acrobatiques professionnelles et sécurisées pour tous vos défis en hauteur. Nos cordistes experts interviennent sur l&apos;ensemble de la métropole bordelaise avec une précision et un savoir-faire garantis.</p>

        <h2>Nos services de travaux sur corde - cordistes a Gradignan</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en milieux verticaux et difficiles d&apos;accès. Nos cordistes hautement qualifiés maîtrisent parfaitement les techniques d&apos;accès et de progression sur cordes, permettant des interventions rapides et sécurisées sur des structures variées : bâtiments industriels, monuments historiques, ouvrages d&apos;art ou sites naturels. Chaque mission fait l&apos;objet d&apos;une étude préalable précise, avec un protocole de sécurité strict conforme aux normes AFPS et OPPBTP. Notre équipe dispose de certifications professionnelles et d&apos;un équipement de pointe, garantissant des prestations de qualité supérieure à Gradignan et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique et la sécurité maximale. Nos avantages clés incluent : une expertise de plus de 15 ans dans les travaux acrobatiques, une équipe de 12 cordistes certifiés, un taux de satisfaction client de 98%, et une intervention rapide sous 48h sur Gradignan. Nous sommes assurés et habilités pour tous types de missions complexes.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, sa durée et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation qualifiante de niveau BP JEPS, une formation en hauteur CACES, des certifications de sécurité (CATEC, SSIAP) et une condition physique irréprochable. Une expérience minimale de 3 ans est généralement exigée par les entreprises spécialisées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les habilitations officielles (AFPS, OPPBTP), les assurances professionnelles, les références clients, les certifications individuelles des techniciens, et demandez systématiquement un portfolio de réalisations récentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Gradignan ?
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
