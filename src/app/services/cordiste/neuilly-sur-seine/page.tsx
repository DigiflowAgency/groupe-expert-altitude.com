import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Neuilly-sur-Seine, offrant des solutions acrobatiques professionnelles po',
  keywords: 'cordiste neuilly-sur-seine, travaux sur corde neuilly-sur-seine, travaux acrobatiques neuilly-sur-seine, cordiste batiment neuilly-sur-seine, intervention cordiste neuilly-sur-seine, entreprise cordiste neuilly-sur-seine',
};

export default function CordisteNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Neuilly-sur-Seine, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en performances de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques en milieux verticaux et difficiles d&apos;accès. Grâce à une technologie d&apos;équipement dernier cri et une expertise pointue, nous intervenons sur des chantiers variés : rénovation de façades, nettoyage de vitres, maintenance industrielle et entretien de structures complexes. Notre approche unique permet des interventions rapides et précises, réduisant jusqu&apos;à 40% les temps d&apos;intervention traditionnels. Chaque membre de notre équipe à Neuilly-sur-Seine est certifié IRATA, garantissant une sécurité maximale et une qualité de service irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des cordistes certifiés, un équipement aux normes européennes, une assurance professionnelle complète, et plus de 15 ans d&apos;expérience dans les travaux acrobatiques. Nous intervenons rapidement sur Neuilly-sur-Seine et toute la région parisienne, avec un engagement qualité et sécurité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Pour des travaux spécifiques à Neuilly-sur-Seine, nous proposons systématiquement un devis personnalisé après diagnostic technique gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste requiert une formation spécialisée IRATA/SPRAT, des attestations de travail en hauteur, une condition physique irréprochable et des compétences techniques pointues. Un parcours de formation peut durer entre 6 mois et 2 ans, avec des certifications de niveau 1, 2 et 3.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les certifications IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients, les attestations de formation de l&apos;équipe et le respect strict des normes de sécurité européennes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Neuilly-sur-Seine ?
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
