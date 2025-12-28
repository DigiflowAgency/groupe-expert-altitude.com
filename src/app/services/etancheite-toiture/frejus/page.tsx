import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Fréjus | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse à Fréjus, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les',
  keywords: 'etancheite toiture fréjus, etancheite toit terrasse fréjus, etancheite toiture terrasse fréjus, reparation etancheite fréjus, entreprise etancheite fréjus, fuite toiture terrasse fréjus',
};

export default function EtancheiteToitureFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse à Fréjus, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations et les dégradations. Nous intervenons rapidement sur tous types de toitures dans la région varoise pour garantir la longévité de votre bâtiment.</p>

        <h2>Nos services de étanchéité toiture terrasse a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic précis avant toute intervention, en utilisant des techniques modernes et des matériaux haute performance. Notre équipe qualifiée traite chaque surface avec une attention méticuleuse, en respectant les normes NF et les spécificités de chaque structure. Nous proposons plusieurs solutions adaptées : résines spéciales, membranes synthétiques ou systèmes multicouches, toujours sélectionnés pour leur durabilité et leur efficacité. À Fréjus, nous comprenons les contraintes climatiques locales qui impactent directement la qualité de l&apos;étanchéité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 15 ans dans le domaine 
• Intervention rapide sous 48h 
• Techniciens certifiés et formés aux dernières technologies 
• Devis gratuit et transparent 
• Garantie décennale sur nos travaux 
• Solutions personnalisées adaptées à chaque type de toiture terrasse</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité technique et les matériaux utilisés. Pour une surface moyenne de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic préalable permettra un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou papiers peints. Utilisez un test à l&apos;eau ou une caméra thermique. En cas de doute, notre équipe réalise un diagnostic complet avec des outils professionnels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse varie de 10 à 25 ans selon la qualité des matériaux et de la pose. Une maintenance régulière tous les 3-5 ans peut prolonger significativement cette durée. Nos solutions utilisent des membranes garantissant une protection optimale contre les agressions climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Fréjus ?
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
