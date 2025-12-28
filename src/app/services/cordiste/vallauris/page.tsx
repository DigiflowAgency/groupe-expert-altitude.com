import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Vallauris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Vallauris, offrant une expertise unique en interventions acrobati',
  keywords: 'cordiste vallauris, travaux sur corde vallauris, travaux acrobatiques vallauris, cordiste batiment vallauris, intervention cordiste vallauris, entreprise cordiste vallauris',
};

export default function CordisteVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Vallauris, offrant une expertise unique en interventions acrobatiques professionnelles. Nos cordistes hautement qualifiés transforment les défis en solutions sécurisées pour tous vos projets en hauteur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Vallauris</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution technique ultime pour les interventions complexes nécessitant précision et sécurité maximale. Dans la région de Vallauris, nous intervenons sur des chantiers variés : rénovation de façades, entretien de bâtiments industriels, nettoyage de structures complexes et maintenance technique en altitude. Notre méthode exclusive permet des interventions rapides et économiques, réduisant jusqu&apos;à 40% les coûts traditionnels d&apos;échafaudage. Chaque cordiste de notre équipe possède une certification IRATA internationale, garantissant une qualité d&apos;intervention irréprochable et une conformité totale aux normes de sécurité les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés IRATA avec plus de 15 ans d&apos;expérience collective
• Interventions 100% sécurisées sur tout type de structure
• Devis gratuit et personnalisé sous 24h
• Matériel technique dernier cri et contrôlé annuellement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 150€ de l&apos;heure selon la complexité du chantier. Pour une intervention standard à Vallauris, comptez environ 110€/heure, incluant le matériel et la main-d&apos;œuvre qualifiée.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle spécifique, un niveau IRATA (International Rope Access Trade Association), des formations aux travaux en hauteur, et une condition physique irréprochable. La certification requiert des stages pratiques et théoriques intensifs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement : leurs certifications IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, et leurs attestations de formations sécurité à jour.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Vallauris ?
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
