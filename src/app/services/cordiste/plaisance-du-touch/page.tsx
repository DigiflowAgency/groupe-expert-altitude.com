import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Plaisance-du-Touch, proposant des solutions acrobatiques professionnelles',
  keywords: 'cordiste plaisance-du-touch, travaux sur corde plaisance-du-touch, travaux acrobatiques plaisance-du-touch, cordiste batiment plaisance-du-touch, intervention cordiste plaisance-du-touch, entreprise cordiste plaisance-du-touch',
};

export default function CordistePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Plaisance-du-Touch, proposant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde couvrent une large gamme d&apos;interventions techniques, des inspections de bâtiments aux rénovations industrielles. Grâce à notre expertise, nous réalisons des missions impossibles pour des méthodes traditionnelles, en garantissant une efficacité et une sécurité optimales. Nos cordistes possèdent des certifications IRATA internationales et utilisent un équipement dernier cri, permettant des interventions rapides et précises sur des structures complexes à Plaisance-du-Touch et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Équipe de 12 cordistes professionnels hautement qualifiés
- Matériel aux normes de sécurité les plus strictes
- Interventions rapides et devis gratuits sous 24h
- Assurance responsabilité civile professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité des travaux, avec un minimum de facturation de 3 heures. Les prix dépendent de la hauteur, de l&apos;accessibilité et du type d&apos;intervention requise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications IRATA/SPRAT, suivre des formations de sécurité intensives, posséder une condition physique excellente et réussir des examens théoriques et pratiques rigoureux portant sur les techniques de travaux en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;expérience professionnelle, les références clients, les assurances et les agréments officiels. Demandez systématiquement un portfolio et des attestations de formations de l&apos;équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Plaisance-du-Touch ?
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
