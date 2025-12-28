import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a La Ciotat | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à La Ciotat, offre des solutions acrobatiques professionnelles pour tous vos défis en haut',
  keywords: 'cordiste la ciotat, travaux sur corde la ciotat, travaux acrobatiques la ciotat, cordiste batiment la ciotat, intervention cordiste la ciotat, entreprise cordiste la ciotat',
};

export default function CordisteLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à La Ciotat, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques de la région, garantissant sécurité et efficacité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a La Ciotat</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions complexes en hauteur. Spécialisés dans les techniques d&apos;accès difficile, nous intervenons sur des projets variés : rénovation de façades, nettoyage industriel, maintenance de structures, inspection technique et travaux de peinture. Chaque intervention à La Ciotat est méticuleusement planifiée, avec un équipement aux normes et des techniciens certifiés. Notre approche unique permet de réduire les coûts traditionnels de 40% tout en maintenant une qualité irréprochable. Nos cordistes disposent de plus de 15 ans d&apos;expérience cumulée, offrant des solutions rapides et sécurisées pour tous types de bâtiments et infrastructures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : certification IRATA internationale, équipe de 12 cordistes experts, matériel de pointe renouvelé annuellement, assurance responsabilité civile professionnelle comprehensive. Nous garantissons des interventions 100% sécurisées, un devis sous 24h et une réactivité inégalée sur tout le territoire de La Ciotat et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques, sans surprise financière.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation qualifiante IRATA/SPICT, une condition physique excellente, un diplôme de niveau CAP/BEP minimum et une habilitation travaux en hauteur. Une formation continue annuelle est obligatoire pour maintenir ses compétences.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : certification IRATA, assurance professionnelle, références clients, années d&apos;expérience, matériel aux normes de sécurité et formations continues des techniciens. Nous recommandons toujours une visite technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a La Ciotat ?
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
