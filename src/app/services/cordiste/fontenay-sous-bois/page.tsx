import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Fontenay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Fontenay-sous-Bois, proposant des solutions acrobatiques innovantes pou',
  keywords: 'cordiste fontenay-sous-bois, travaux sur corde fontenay-sous-bois, travaux acrobatiques fontenay-sous-bois, cordiste batiment fontenay-sous-bois, intervention cordiste fontenay-sous-bois, entreprise cordiste fontenay-sous-bois',
};

export default function CordisteFontenaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Fontenay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Fontenay-sous-Bois, proposant des solutions acrobatiques innovantes pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur des chantiers complexes avec précision et sécurité maximale.</p>

        <h2>Nos services de travaux sur corde - cordistes a Fontenay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent une solution technique révolutionnaire pour les interventions en milieux difficiles d&apos;accès. Nos cordistes professionnels réalisent des missions variées : nettoyage de façades, rénovation, maintenance industrielle, expertise technique et travaux de sécurisation. Chaque intervention est précédée d&apos;une analyse approfondie des risques, garantissant une exécution optimale et sécurisée. Nous utilisons un équipement de pointe certifié, permettant des interventions rapides et efficaces dans la région de Fontenay-sous-Bois et ses environs. Notre expertise technique nous permet de répondre aux besoins les plus exigeants, avec une flexibilité et une réactivité qui font notre réputation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 cordistes certifiés avec plus de 15 ans d&apos;expérience
- Matériel professionnel dernière génération
- Interventions rapides sur Fontenay-sous-Bois et toute l&apos;Île-de-France
- Devis gratuit et personnalisé sous 24h
- Respect strict des normes de sécurité AFPS et OPPBTP</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit permet d&apos;établir un devis précis, sans frais cachés. Les facteurs influençant le prix incluent la hauteur, l&apos;accessibilité et la technicité requise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir un CAPA (Certificat d&apos;Aptitude Professionnel Acrobatique), suivre des formations spécialisées en travaux sur cordes, et justifier d&apos;une condition physique irréprochable. Une certification IRATA ou SPRAT est également recommandée pour les missions professionnelles complexes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez une entreprise de cordistes certifiée en vérifiant ses agréments officiels, son assurance responsabilité civile professionnelle, et ses références clients. Demandez systématiquement les attestations de compétences, les habilitations de sécurité, et consultez les avis et recommandations précédentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Fontenay-sous-Bois ?
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
