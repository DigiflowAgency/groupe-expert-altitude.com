import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;étanchéité de toiture terrasse à Saint-Denis et dans toute la région parisienne. Spécia',
  keywords: 'etancheite toiture saint-denis, etancheite toit terrasse saint-denis, etancheite toiture terrasse saint-denis, reparation etancheite saint-denis, entreprise etancheite saint-denis, fuite toiture terrasse saint-denis',
};

export default function EtancheiteToitureSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;étanchéité de toiture terrasse à Saint-Denis et dans toute la région parisienne. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec des solutions techniques d&apos;avant-garde et un savoir-faire certifié.</p>

        <h2>Nos services de étanchéité toiture terrasse a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse représente la solution technique ultime pour préserver l&apos;intégrité structurelle de vos locaux. Nous intervenons sur tous types de surfaces, qu&apos;il s&apos;agisse de toitures commerciales ou résidentielles à Saint-Denis, en utilisant des membranes synthétiques haute performance et des techniques d&apos;application innovantes. Notre processus comprend un diagnostic précis, un traitement personnalisé et une application méticuleuse qui garantit une protection durable contre les infiltrations d&apos;eau. Nos équipes maîtrisent parfaitement les normes techniques actuelles et utilisent uniquement des matériaux certifiés répondant aux exigences les plus strictes du bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans le domaine de l&apos;étanchéité
- Interventions rapides et diagnostic gratuit sur Saint-Denis
- Garantie décennale sur tous nos travaux
- Techniciens certifiés et formés aux dernières technologies</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et la surface à traiter. Un diagnostic précis nous permet de vous proposer un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations visibles, des zones de décoloration, des moisissures ou des gonflements. Notre expertise nous permet de détecter rapidement l&apos;origine et l&apos;étendue des désordres avec des outils de diagnostic professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes garanties et résistantes aux variations climatiques, assurant une protection optimale à long terme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Saint-Denis ?
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
