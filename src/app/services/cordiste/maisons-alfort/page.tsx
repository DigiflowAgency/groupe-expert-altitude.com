import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Maisons-Alfort, offre des solutions acrobatiques professionnelles pour tous vos défis en',
  keywords: 'cordiste maisons-alfort, travaux sur corde maisons-alfort, travaux acrobatiques maisons-alfort, cordiste batiment maisons-alfort, intervention cordiste maisons-alfort, entreprise cordiste maisons-alfort',
};

export default function CordisteMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Maisons-Alfort, offre des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en performances de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques nécessitant agilité et expertise. Spécialisés dans les travaux acrobatiques, nous intervenons sur des chantiers variés : rénovation de façades, nettoyage industriel, maintenance de structures complexes et inspection technique. Notre équipe maîtrise parfaitement les techniques de progression verticale, garantissant une intervention rapide et sécurisée à Maisons-Alfort et ses environs. Chaque mission est précédée d&apos;un diagnostic précis, permettant une planification optimale et une exécution sans faille.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 98% de satisfaction client, des techniciens certifiés IRATA, un engagement sécurité total et une expérience de plus de 15 ans dans les travaux acrobatiques. Nous possédons tous les agréments nécessaires et un parc matériel dernière génération, assurant des interventions de haute qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Les facteurs déterminants incluent la hauteur, la difficulté technique, le matériel spécifique requis et la durée d&apos;intervention. Un devis personnalisé sera toujours établi après un diagnostic précis sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée, obtenir des certifications comme IRATA (International Rope Access Trade Association), réussir des examens techniques et médicaux stricts. Une condition physique excellente, une absence de vertige et une maîtrise parfaite des équipements de sécurité sont essentielles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : les certifications IRATA, l&apos;assurance responsabilité civile professionnelle, les références clients, les agréments de sécurité et la transparence des devis. Une entreprise sérieuse fournira systématiquement ses attestations et documentations techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Maisons-Alfort ?
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
