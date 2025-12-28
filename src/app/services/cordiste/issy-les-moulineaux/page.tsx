import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Issy-les-Moulineaux, proposant des solutions acrobatiques innovantes po',
  keywords: 'cordiste issy-les-moulineaux, travaux sur corde issy-les-moulineaux, travaux acrobatiques issy-les-moulineaux, cordiste batiment issy-les-moulineaux, intervention cordiste issy-les-moulineaux, entreprise cordiste issy-les-moulineaux',
};

export default function CordisteIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Issy-les-Moulineaux, proposant des solutions acrobatiques innovantes pour tous vos défis en hauteur. Notre équipe de cordistes hautement qualifiés intervient avec précision et sécurité dans le département des Hauts-de-Seine.</p>

        <h2>Nos services de travaux sur corde - cordistes a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes en milieu vertical. Nous intervenons sur une large gamme de chantiers : rénovation de façades, nettoyage de vitres, maintenance industrielle, et travaux de maintenance technique. Notre approche unique combine expertise technique, équipements de pointe et respect strict des normes de sécurité. Chaque intervention est précédée d&apos;une évaluation minutieuse des risques, garantissant une exécution parfaite. Nos cordistes possèdent plus de 15 ans d&apos;expérience cumulée et sont certifiés IRATA, la référence internationale en travaux acrobatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos points forts : une équipe de 12 cordistes experts, un taux de satisfaction client de 98%, des interventions rapides sur Issy-les-Moulineaux et ses environs, et un engagement total pour la sécurité. Nous sommes assurés pour tous types de missions et disposons d&apos;un matériel d&apos;intervention dernier cri.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à vos besoins spécifiques. Les facteurs influençant le prix incluent la hauteur, la difficulté technique et la durée estimée de l&apos;intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée et obtenir la certification IRATA (International Rope Access Trade Association). Les étapes incluent : une formation théorique de 5 jours, des tests pratiques de sécurité, des examens médicaux spécifiques et la validation de compétences techniques en travaux acrobatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour sélectionner une entreprise de cordistes certifiée, vérifiez plusieurs critères : certification IRATA, assurance responsabilité professionnelle, références clients, expérience terrain, et équipements conformes aux normes de sécurité. N&apos;hésitez pas à demander leurs certifications et attestations avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Issy-les-Moulineaux ?
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
