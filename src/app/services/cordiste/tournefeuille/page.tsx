import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Tournefeuille, offre des solutions techniques innovantes pour tous vos défis d&apos;intervent',
  keywords: 'cordiste tournefeuille, travaux sur corde tournefeuille, travaux acrobatiques tournefeuille, cordiste batiment tournefeuille, intervention cordiste tournefeuille, entreprise cordiste tournefeuille',
};

export default function CordisteTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Tournefeuille, offre des solutions techniques innovantes pour tous vos défis d&apos;intervention en hauteur. Nos cordistes hautement qualifiés transforment les missions complexes en performances de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent un large spectre d&apos;interventions techniques, depuis la maintenance industrielle jusqu&apos;aux rénovations de bâtiments complexes. Chaque projet est abordé avec une méthodologie rigoureuse, garantissant des résultats optimaux et une sécurité maximale. Nos cordistes professionnels utilisent un équipement de pointe homologué, permettant des interventions dans des zones inaccessibles par les méthodes traditionnelles. Que ce soit pour du nettoyage de façade, de la réparation structurelle ou de l&apos;inspection technique, notre équipe intervient rapidement sur Tournefeuille et ses environs, avec un taux de satisfaction de plus de 95%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos atouts incluent : une certification AFPS pour tous nos cordistes, un parc matériel régulièrement renouvelé, une expérience de plus de 15 ans dans les travaux acrobatiques, et une approche sur-mesure adaptée à chaque problématique client. Nous garantissons des interventions rapides, précises et totalement sécurisées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit nous permet de proposer un devis précis et transparent adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante de type CATEC (Certificat d&apos;Aptitude aux Travaux En Cordage), obtenir des certifications de sécurité, justifier d&apos;une condition physique excellente et posséder un sens aigu de l&apos;analyse des risques. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications officielles (AFPS, OPPBTP), consultez leurs références clients, assurez-vous de leur couverture assurance responsabilité civile professionnelle et demandez systématiquement un devis détaillé avec les garanties associées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Tournefeuille ?
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
