import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Paris 7e, offre des solutions acrobatiques innovantes et sécurisées pour tou',
  keywords: 'cordiste paris 7e, travaux sur corde paris 7e, travaux acrobatiques paris 7e, cordiste batiment paris 7e, intervention cordiste paris 7e, entreprise cordiste paris 7e',
};

export default function CordisteParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en travaux sur corde à Paris 7e, offre des solutions acrobatiques innovantes et sécurisées pour tous vos défis en hauteur. Nos cordistes experts interviennent avec précision et professionnalisme sur les chantiers les plus techniques de la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 7e</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions complexes en milieu vertical. Nos cordistes hautement qualifiés sont équipés des dernières technologies et normes de sécurité, permettant des réalisations impossibles avec des méthodes traditionnelles. Que ce soit pour la rénovation de façades, l&apos;entretien de monuments historiques ou des travaux industriels à Paris 7e, nous garantissons une intervention rapide, économique et sans compromis sur la sécurité. Notre approche technique permet de réduire jusqu&apos;à 40% les coûts traditionnels d&apos;échafaudage tout en offrant une précision chirurgicale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : certification IRATA internationale, équipe de 15 cordistes expérimentés, zéro accident depuis 8 ans, assurances professionnelles complètes, matériel de pointe renouvelé annuellement. Nous sommes votre garantie de qualité et de professionnalisme pour tous vos travaux acrobatiques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, avec un devis personnalisé gratuit. Les interventions courtes commencent généralement autour de 450€, tandis que des projets complexes peuvent atteindre 2000€ pour une journée complète d&apos;intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation certifiante IRATA ou SPRAT, obtenir un diplôme de travaux en hauteur, réussir des tests physiques et techniques rigoureux, et justifier d&apos;un minimum de 1000 heures d&apos;expérience pratique. La formation dure entre 5 et 10 jours et inclut des modules de sécurité avancés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : la certification IRATA ou SPRAT, l&apos;assurance responsabilité civile professionnelle, les références clients, l&apos;ancienneté de l&apos;entreprise, et les attestations de formation continue de l&apos;équipe. Un audit préalable et un devis détaillé sont également des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 7e ?
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
