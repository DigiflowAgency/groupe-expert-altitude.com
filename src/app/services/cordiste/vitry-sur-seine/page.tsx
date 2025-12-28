import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Vitry-sur-Seine, offrant des solutions acrobatiques professionnelles pour',
  keywords: 'cordiste vitry-sur-seine, travaux sur corde vitry-sur-seine, travaux acrobatiques vitry-sur-seine, cordiste batiment vitry-sur-seine, intervention cordiste vitry-sur-seine, entreprise cordiste vitry-sur-seine',
};

export default function CordisteVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Vitry-sur-Seine, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des projets complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde couvrent un large éventail d&apos;interventions techniques, des rénovations de bâtiments aux inspections industrielles complexes. Nos équipes de cordistes certifiés utilisent des techniques d&apos;accès difficile permettant d&apos;intervenir là où les méthodes traditionnelles échouent, avec un taux de réussite de 98%. Chaque mission à Vitry-sur-Seine et dans la région parisienne est traitée avec une attention méticuleuse, en respectant les normes de sécurité les plus strictes. Nos professionnels maîtrisent parfaitement les techniques d&apos;escalade et de suspension, garantissant des interventions rapides, précises et économiquement avantageuses.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers essentiels : expertise technique, engagement sécuritaire et flexibilité opérationnelle. Nos cordistes possèdent plus de 15 ans d&apos;expérience cumulée, sont tous certifiés IRATA et OPPBTP, et disposent d&apos;un équipement de pointe régulièrement contrôlé. Nous intervenons rapidement sur Vitry-sur-Seine, avec des délais de réponse inférieurs à 24h et une transparence totale concernant nos devis.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs des travaux cordistes varient entre 80€ et 250€ de l&apos;heure selon la complexité, avec un devis personnalisé gratuit. Les interventions simples commencent autour de 500€, tandis que des missions techniques complexes peuvent atteindre 2500€. Chaque projet fait l&apos;objet d&apos;un diagnostic précis pour un chiffrage transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante de niveau CAP/BP, obtenir des certifications IRATA (niveaux 1, 2 ou 3), réussir des tests physiques et techniques rigoureux, et justifier d&apos;une condition physique excellente. Une formation continue et des habilitations spécifiques sont également nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit impérativement posséder : les certifications IRATA et OPPBTP, une assurance responsabilité civile professionnelle, des équipements homologués NF, des références clients vérifiables, et des techniciens disposant de formations à jour. Vérifiez toujours ces critères avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Vitry-sur-Seine ?
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
