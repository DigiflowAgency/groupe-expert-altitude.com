import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Couëron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Couëron, offrant des solutions acrobatiques professionnelles pour tous vo',
  keywords: 'cordiste couëron, travaux sur corde couëron, travaux acrobatiques couëron, cordiste batiment couëron, intervention cordiste couëron, entreprise cordiste couëron',
};

export default function CordisteCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Couëron, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble du territoire de la région nantaise avec une expertise technique et une sécurité irréprochable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Couëron</h2>
        <div className="space-y-4">
          <p>Nos interventions de cordistes couvrent un large éventail de prestations techniques, depuis les inspections de bâtiments jusqu&apos;aux travaux de maintenance complexes. Notre équipe maîtrise parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où les méthodes traditionnelles échouent. Chaque projet à Couëron et ses environs bénéficie d&apos;une approche personnalisée, avec un diagnostic précis et un plan d&apos;intervention optimal. Nos cordistes sont équipés des dernières technologies et certifications, garantissant une efficacité et une sécurité maximales lors de chaque mission.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en travaux acrobatiques, 2) Des techniciens certifiés IRATA/SPIR, 3) Un engagement sécurité total avec zéro accident depuis 2010, 4) Une réactivité et un conseil technique immédiat pour tous vos projets en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un devis personnalisé gratuit permet de définir précisément le coût de votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle qualifiante, obtenir les certifications IRATA/SPIR, réussir des tests techniques et médicaux rigoureux, et justifier d&apos;une condition physique irréprochable. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SPIR, leur expérience dans votre secteur d&apos;activité, leurs références clients, leurs assurances professionnelles et leur politique de sécurité. Un entretien préalable permet de valider ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Couëron ?
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
