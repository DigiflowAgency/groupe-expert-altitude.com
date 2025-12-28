import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Sanary-sur-Mer, offrant des solutions acrobatiques innovantes et sécurisé',
  keywords: 'cordiste sanary-sur-mer, travaux sur corde sanary-sur-mer, travaux acrobatiques sanary-sur-mer, cordiste batiment sanary-sur-mer, intervention cordiste sanary-sur-mer, entreprise cordiste sanary-sur-mer',
};

export default function CordisteSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Sanary-sur-Mer, offrant des solutions acrobatiques innovantes et sécurisées pour tous vos défis en hauteur. Nos cordistes professionnels interviennent sur l&apos;ensemble du littoral varois avec une expertise technique inégalée.</p>

        <h2>Nos services de travaux sur corde - cordistes a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes représentent la solution ultime pour les interventions complexes en hauteur, que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades. Grâce à notre technologie d&apos;accès sur cordes, nous réalisons des missions impossibles pour les méthodes traditionnelles, avec une précision chirurgicale et une sécurité maximale. Notre équipe hautement qualifiée dispose de certifications IRATA internationales, garantissant des interventions conformes aux plus hauts standards de sécurité. À Sanary-sur-Mer et ses environs, nous intervenons sur des chantiers allant de 5 à 150 mètres de hauteur, avec un taux de satisfaction client de 98%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos cordistes bénéficient de plus de 15 ans d&apos;expérience, d&apos;un équipement dernier cri et d&apos;une formation continue. Nous proposons une approche personnalisée, un devis gratuit sous 24h et une intervention rapide. Notre engagement qualité se traduit par une assurance professionnelle complète et des interventions 100% sécurisées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, la hauteur, et les équipements spécifiques nécessaires. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et transparent adapté à vos besoins spécifiques à Sanary-sur-Mer.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation certifiante IRATA/SPRAT, justifier d&apos;une condition physique excellente, obtenir un diplôme de secourisme et réussir des examens techniques et pratiques. La formation dure généralement entre 5 et 10 jours et nécessite une aptitude médicale stricte.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SPRAT, leur assurance professionnelle, leurs références clients, et demandez systématiquement leurs attestations de compétences. Un professionnel sérieux sera transparent et pourra vous présenter ses diplômes et habilitations sans hésitation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Sanary-sur-Mer ?
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
