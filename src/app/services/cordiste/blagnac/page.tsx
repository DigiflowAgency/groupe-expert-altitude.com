import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Blagnac | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire de référence en travaux sur corde à Blagnac, proposant des interventions acrobatiques de haute précision pour tous',
  keywords: 'cordiste blagnac, travaux sur corde blagnac, travaux acrobatiques blagnac, cordiste batiment blagnac, intervention cordiste blagnac, entreprise cordiste blagnac',
};

export default function CordisteBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire de référence en travaux sur corde à Blagnac, proposant des interventions acrobatiques de haute précision pour tous vos défis en hauteur. Nos cordistes certifiés maîtrisent parfaitement les techniques d&apos;accès difficiles dans toute l&apos;agglomération toulousaine.</p>

        <h2>Nos services de travaux sur corde - cordistes a Blagnac</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en hauteur. Que ce soit pour la rénovation de façades, l&apos;entretien de monuments historiques ou des missions industrielles, notre équipe de cordistes professionnels intervient avec une sécurité et une efficacité maximales. Chaque mission débute par une évaluation précise des risques et un plan d&apos;intervention personnalisé. Nos techniciens utilisent un équipement de pointe homologué, garantissant des prestations rapides sans installations d&apos;échafaudages coûteuses. Nos cordistes sont formés aux dernières normes de sécurité et possèdent une expérience de plus de 15 ans dans le domaine des travaux acrobatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos atouts incluent : une équipe de 12 cordistes hautement qualifiés, un taux de satisfaction client de 98%, une certification AFCEE, une intervention rapide sur Blagnac et ses environs, et une approche 100% sécurisée. Nous intervenons dans les délais les plus courts avec un engagement de qualité totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité de l&apos;intervention. Un diagnostic préalable gratuit permet de définir un devis précis. Les facteurs influençant le prix incluent la hauteur, la difficulté d&apos;accès, le type de bâtiment et la durée estimée des travaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée, obtenir le CPPAT (Certificat de Préventions des Pratiques Acrobatiques du Travail), justifier d&apos;une condition physique excellente et réussir des examens théoriques et pratiques de sécurité en hauteur. Une expérience minimum de 2 ans est généralement recommandée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications AFCEE, leur assurance responsabilité civile professionnelle, leurs références clients, leur ancienneté sur le marché et leurs équipements aux normes. Un entretien préalable et un devis détaillé sont également des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Blagnac ?
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
