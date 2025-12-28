import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Balma | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Balma et dans toute la région toulousaine. Nos cordistes hautement qual',
  keywords: 'cordiste balma, travaux sur corde balma, travaux acrobatiques balma, cordiste batiment balma, intervention cordiste balma, entreprise cordiste balma',
};

export default function CordisteBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Balma et dans toute la région toulousaine. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus techniques, garantissant sécurité et excellence dans chaque intervention.</p>

        <h2>Nos services de travaux sur corde - cordistes a Balma</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution ultime pour toute intervention en hauteur nécessitant précision et expertise. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, que ce soit pour du nettoyage industriel, de la rénovation de façades ou des travaux de maintenance complexes. Chaque intervention est minutieusement préparée, avec un équipement aux normes et des techniciens certifiés. Notre approche sur Balma privilégie systématiquement la sécurité maximale et l&apos;efficacité opérationnelle, permettant des réalisations là où d&apos;autres techniques traditionnelles échouent. Nos cordistes disposent de plus de 15 ans d&apos;expérience cumulée, assurant des prestations de haute qualité dans tous les secteurs d&apos;activité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : certification IRATA internationale, équipe de 12 cordistes experts, matériel de pointe renouvelé annuellement, interventions rapides sur Balma et sa région, zéro accident depuis notre création. Nous proposons une approche personnalisée, un devis gratuit sous 24h et une réactivité garantie pour tous vos projets en hauteur.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de définir précisément le devis, avec des tarifs transparents sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir une certification IRATA/SPRAT, suivre des formations intensives de 20 à 30 jours, réussir des examens pratiques et théoriques rigoureux, et justifier d&apos;une condition physique excellente. Un parcours exigeant qui garantit la compétence des professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit présenter : certification IRATA ou SPRAT, assurances professionnelles complètes, références clients vérifiables, équipements aux normes de sécurité européennes, et techniciens ayant une expérience minimale de 3 ans en travaux acrobatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Balma ?
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
