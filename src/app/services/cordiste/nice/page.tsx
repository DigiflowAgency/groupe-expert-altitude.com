import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Nice | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en travaux sur corde à Nice, offre des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos co',
  keywords: 'cordiste nice, travaux sur corde nice, travaux acrobatiques nice, cordiste batiment nice, intervention cordiste nice, entreprise cordiste nice',
};

export default function CordisteNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en travaux sur corde à Nice, offre des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés transforment les interventions complexes en missions de précision et de sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Nice</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques en hauteur sur Nice et sa région. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où les méthodes traditionnelles échouent. Qu&apos;il s&apos;agisse de rénovation de façades, de nettoyage industriel, de maintenance ou d&apos;inspection technique, notre équipe dispose des certifications et de l&apos;équipement de pointe garantissant une intervention rapide et sécurisée. Notre approche combine technicité, respect des normes de sécurité et efficacité économique, offrant une solution sur-mesure adaptée à chaque projet spécifique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise certifiée avec plus de 15 ans d&apos;expérience sur le territoire azuréen
- Équipe de 12 cordistes diplômés et habilités
- Matériel dernière génération aux normes européennes de sécurité
- Interventions rapides sur Nice et départements limitrophes
- Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité, avec un minimum de facturation de 3h. Les interventions spécifiques peuvent nécessiter un devis personnalisé prenant en compte la hauteur, l&apos;accessibilité et le type de travaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, un parcours rigoureux est nécessaire : obtention du CQP Cordiste, formation en sécurité hauteur, habilitations spécifiques CATEC et IRATA, tests médicaux annuels et pratique régulière des techniques de travaux acrobatiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit impérativement posséder : les certifications IRATA ou SPRAT, une assurance responsabilité civile professionnelle, des attestations de formations à jour, un matériel aux normes NF et des références clients vérifiables.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Nice ?
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
