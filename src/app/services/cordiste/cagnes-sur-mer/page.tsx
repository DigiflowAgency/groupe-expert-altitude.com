import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Cagnes-sur-Mer, offrant des solutions techniques innovantes pour tous ',
  keywords: 'cordiste cagnes-sur-mer, travaux sur corde cagnes-sur-mer, travaux acrobatiques cagnes-sur-mer, cordiste batiment cagnes-sur-mer, intervention cordiste cagnes-sur-mer, entreprise cordiste cagnes-sur-mer',
};

export default function CordisteCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Cagnes-sur-Mer, offrant des solutions techniques innovantes pour tous vos défis d&apos;intervention en hauteur. Nos cordistes hautement qualifiés interviennent sur l&apos;ensemble du territoire azuréen avec une expertise et une sécurité incomparables.</p>

        <h2>Nos services de travaux sur corde - cordistes a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution technique ultime pour les interventions complexes en hauteur. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, que ce soit pour des travaux de rénovation, de maintenance industrielle ou de nettoyage de façades à Cagnes-sur-Mer et ses environs. Nous disposons d&apos;un équipement de pointe certifié et d&apos;une formation continue garantissant une intervention rapide et sécurisée à 100%. Chaque mission fait l&apos;objet d&apos;une évaluation précise des risques et d&apos;un protocole d&apos;intervention personnalisé, assurant une efficacité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers essentiels : une expertise technique de 15 ans, une certification IRATA internationale, et un taux de satisfaction client de 98%. Nos cordistes sont formés aux dernières normes de sécurité, disposent d&apos;un équipement dernier cri et interviennent avec une réactivité et une précision chirurgicales. Nous sommes le partenaire de confiance pour tous vos travaux en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité de l&apos;intervention, l&apos;accessibilité du site et les équipements spécifiques requis. Un diagnostic préalable gratuit nous permet de définir un devis précis et transparent adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle rigoureuse incluant une certification IRATA/SPRAT, des compétences en techniques de cordage, une condition physique irréprochable et une formation continue en sécurité. Un diplôme de niveau CAP/BEP en travaux acrobatiques est généralement recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leur certification IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, et leur expérience dans votre domaine d&apos;intervention. Un entretien technique préalable et la transparence de leurs documents sont des gages de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Cagnes-sur-Mer ?
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
