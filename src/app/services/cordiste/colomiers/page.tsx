import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Colomiers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Colomiers et dans toute la région toulousaine. Nos cordistes haut',
  keywords: 'cordiste colomiers, travaux sur corde colomiers, travaux acrobatiques colomiers, cordiste batiment colomiers, intervention cordiste colomiers, entreprise cordiste colomiers',
};

export default function CordisteColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Colomiers et dans toute la région toulousaine. Nos cordistes hautement qualifiés réalisent des interventions techniques et sécurisées en milieux verticaux et difficiles d&apos;accès.</p>

        <h2>Nos services de travaux sur corde - cordistes a Colomiers</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent une large gamme d&apos;interventions professionnelles, de l&apos;entretien de bâtiments aux travaux industriels complexes. Nos cordistes certifiés IRATA disposent d&apos;un équipement de pointe et d&apos;une expertise technique leur permettant d&apos;intervenir sur des chantiers nécessitant des compétences spécifiques. Chaque mission est précédée d&apos;une analyse approfondie des risques et d&apos;un plan d&apos;intervention détaillé, garantissant une sécurité maximale et une efficacité optimale. Plus de 95% de nos clients nous recommandent après une intervention à Colomiers et dans l&apos;agglomération toulousaine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre entreprise se démarque par son engagement total envers la qualité et la sécurité. Nos cordistes possèdent plus de 10 ans d&apos;expérience moyenne, une formation continue annuelle et sont équipés des dernières technologies. Nous sommes certifiés ISO 9001 et disposons de toutes les assurances professionnelles requises pour des interventions en toute tranquillité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité des travaux, l&apos;équipement nécessaire et la durée d&apos;intervention. Un devis personnalisé est toujours établi après un diagnostic technique précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA ou SPRAT, suivre des formations de sécurité intensives, posséder une excellente condition physique et avoir une absence totale de vertige. Une formation initiale de 3 à 6 mois est généralement nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur expérience sur des chantiers similaires, leurs références clients, leurs assurances professionnelles et leurs attestations de formation continue en sécurité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Colomiers ?
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
