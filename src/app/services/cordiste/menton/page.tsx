import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Menton | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Menton et dans toute la région Provence-Alpes-Côte d&apos;Azur. Nos',
  keywords: 'cordiste menton, travaux sur corde menton, travaux acrobatiques menton, cordiste batiment menton, intervention cordiste menton, entreprise cordiste menton',
};

export default function CordisteMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Menton et dans toute la région Provence-Alpes-Côte d&apos;Azur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Menton</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques couvrent une large gamme d&apos;interventions techniques en hauteur, adaptés aux environnements urbains et industriels de Menton. Nos cordistes professionnels sont spécialisés dans des missions délicates comme la rénovation de façades, l&apos;inspection de structures, le nettoyage de vitres en hauteur et la maintenance industrielle. Chaque intervention est précédée d&apos;une évaluation rigoureuse des risques et planifiée avec une méthodologie stricte garantissant la sécurité absolue. Équipés des dernières technologies et certifications professionnelles, nous intervenons rapidement et efficacement sur des chantiers nécessitant une expertise technique pointue.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe cumule plus de 15 ans d&apos;expérience, nos techniciens détiennent tous les habilitations IRATA/SPEL, nous disposons d&apos;une assurance professionnelle complète, et notre taux de satisfaction client dépasse 95%. Nous sommes reconnus comme le leader local des travaux sur corde.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis adapté à vos besoins spécifiques à Menton.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle qualifiante, des certifications IRATA (niveau 1, 2 ou 3), une condition physique irréprochable, et une formation continue en sécurité. Un cursus technique ou du bâtiment est généralement recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs habilitations IRATA, leur assurance professionnelle, leurs références clients, et demandez systématiquement les attestations de compétences de leurs techniciens. Notre groupe répond à tous ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Menton ?
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
