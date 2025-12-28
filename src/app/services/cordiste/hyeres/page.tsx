import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Hyères | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Hyères, offre des solutions acrobatiques innovantes pour tous vos défis en h',
  keywords: 'cordiste hyères, travaux sur corde hyères, travaux acrobatiques hyères, cordiste batiment hyères, intervention cordiste hyères, entreprise cordiste hyères',
};

export default function CordisteHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Hyères, offre des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en performances de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Hyères</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions nécessitant expertise et agilité. Sur le territoire varois et particulièrement à Hyères, nous intervenons dans des contextes variés : rénovation de façades, entretien de bâtiments industriels, nettoyage de structures complexes et maintenance de sites difficiles d&apos;accès. Notre équipe maîtrise parfaitement les techniques de progression verticale, garantissant des interventions rapides, sécurisées et économiques. Chaque mission fait l&apos;objet d&apos;une étude technique précise, avec un diagnostic complet avant intervention et un suivi personnalisé. Nos cordistes disposent de certifications IRATA et SFETH, témoignant d&apos;un niveau de compétence reconnu nationalement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts certifiés avec plus de 15 ans d&apos;expérience
• Interventions sur tout le département du Var
• Matériel professionnel aux normes de sécurité les plus récentes
• Devis gratuit et personnalisé sous 48h
• Rapport qualité-prix optimal
• Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité technique, la hauteur d&apos;intervention et l&apos;équipement spécifique requis. Un diagnostic préalable permet d&apos;établir un devis précis adapté à votre projet spécifique à Hyères.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste professionnel, il faut suivre une formation qualifiante, obtenir des certifications IRATA (niveau 1, 2 ou 3), réussir des examens pratiques et théoriques, et justifier d&apos;une condition physique irréprochable. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SFETH, consultez leurs références clients, demandez leurs attestations d&apos;assurance, et assurez-vous que leurs techniciens possèdent des diplômes à jour en sécurité et techniques verticales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Hyères ?
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
