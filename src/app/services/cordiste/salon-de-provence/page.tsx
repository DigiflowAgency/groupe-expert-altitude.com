import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Salon-de-Provence. Nos cordistes hautement qualifiés interviennen',
  keywords: 'cordiste salon-de-provence, travaux sur corde salon-de-provence, travaux acrobatiques salon-de-provence, cordiste batiment salon-de-provence, intervention cordiste salon-de-provence, entreprise cordiste salon-de-provence',
};

export default function CordisteSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Salon-de-Provence. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques, garantissant sécurité et précision à chaque intervention.</p>

        <h2>Nos services de travaux sur corde - cordistes a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Nos experts cordistes réalisent des interventions acrobatiques sur tous types de structures à Salon-de-Provence et ses environs. Spécialisés dans les travaux en hauteur, nous intervenons pour le nettoyage industriel, la rénovation de façades, les travaux de maintenance et les inspections techniques. Notre équipe dispose d&apos;équipements homologués et d&apos;une certification IRATA internationale, permettant des interventions complexes en toute sécurité. Chaque mission fait l&apos;objet d&apos;une étude préalable précise, avec un protocole de sécurité renforcé et un devis personnalisé.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise technique unique : 15 ans d&apos;expérience, 98% de satisfaction client, une équipe de 12 cordistes certifiés. Nous proposons des solutions sur-mesure, un engagement qualité total et une réactivité immédiate. Nos interventions respectent les normes de sécurité les plus strictes, avec un matériel régulièrement contrôlé et renouvelé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, la hauteur, et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit nous permet de définir un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle diplômante, obtenir la certification IRATA (niveau 1, 2 ou 3), posséder une condition physique excellente et réussir des examens théoriques et pratiques de sécurité et de techniques d&apos;escalade professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez une entreprise de cordistes certifiée en vérifiant ses labels IRATA, ses références clients, son assurance professionnelle et ses certifications de sécurité. Demandez systématiquement les attestations de qualification et les références de chantiers précédents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Salon-de-Provence ?
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
