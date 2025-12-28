import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Champigny-sur-Marne et ses environs. Nos cordistes hautement qualifiés ',
  keywords: 'cordiste champigny-sur-marne, travaux sur corde champigny-sur-marne, travaux acrobatiques champigny-sur-marne, cordiste batiment champigny-sur-marne, intervention cordiste champigny-sur-marne, entreprise cordiste champigny-sur-marne',
};

export default function CordisteChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Champigny-sur-Marne et ses environs. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes en hauteur, garantissant sécurité et précision maximales pour chaque mission.</p>

        <h2>Nos services de travaux sur corde - cordistes a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent une large gamme d&apos;interventions professionnelles, des rénovations de façades aux maintenances industrielles. Nos cordistes disposent d&apos;équipements homologués et d&apos;une formation certifiée leur permettant d&apos;accéder aux zones les plus difficiles d&apos;accès. À Champigny-sur-Marne, nous intervenons aussi bien pour des entreprises que des particuliers, avec une moyenne de 95% de satisfaction client. Nos techniques innovantes permettent de réaliser des travaux rapides et économiques, sans nécessiter d&apos;échafaudages complexes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Des techniciens certifiés IRATA/SPRAT, 2) Un engagement sécurité total avec zéro accident depuis 2015, 3) Une intervention rapide sur Champigny-sur-Marne et départements limitrophes, 4) Un devis personnalisé et gratuit sous 24h.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle diplômante, obtenir des certifications comme IRATA niveau 1/2/3, et justifier d&apos;une condition physique irréprochable. Une formation continue et des habilitations spécifiques sont également nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA/SPRAT, l&apos;assurance professionnelle, les références clients, et demandez les diplômes des techniciens. Un professionnel sérieux transmettra ces documents sans hésitation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Champigny-sur-Marne ?
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
