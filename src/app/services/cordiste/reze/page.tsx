import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Rezé, offrant des solutions acrobatiques professionnelles pour tous vos d',
  keywords: 'cordiste rezé, travaux sur corde rezé, travaux acrobatiques rezé, cordiste batiment rezé, intervention cordiste rezé, entreprise cordiste rezé',
};

export default function CordisteRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Rezé, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble de la métropole nantaise avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux sur corde - cordistes a Rezé</h2>
        <div className="space-y-4">
          <p>Nos interventions de cordistes couvrent un large spectre de prestations techniques, de la rénovation de façades aux travaux industriels complexes. Nous utilisons des techniques d&apos;accès difficile permettant d&apos;intervenir là où les méthodes traditionnelles échouent, avec un taux de réussite de plus de 98%. Nos équipes sont équipées des derniers équipements de sécurité aux normes ISO 45001, garantissant des interventions précises et totalement sécurisées. Chaque mission fait l&apos;objet d&apos;une étude préalable approfondie pour optimiser les délais et la qualité d&apos;exécution.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi choisir Groupe Expert Altitude Com ? Nos cordistes cumulent plus de 15 ans d&apos;expérience opérationnelle. Nous sommes certifiés IRATA International, la référence mondiale en travaux acrobatiques. Notre engagement qualité se traduit par une assurance professionnelle complète et des interventions 100% traçables. Nous intervenons rapidement sur Rezé et ses environs, avec des devis gratuits sous 24h.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité des travaux. Un diagnostic préalable gratuit nous permet de définir précisément le devis, avec une transparence totale sur les coûts et sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA, suivre des formations de sécurité intensives et justifier d&apos;une condition physique irréprochable. Un parcours exigeant qui garantit une expertise technique maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit disposer des agréments IRATA, des habilitations travaux en hauteur, une assurance responsabilité civile professionnelle et des équipements aux normes de sécurité les plus récentes. Vérifiez toujours ces critères avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Rezé ?
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
