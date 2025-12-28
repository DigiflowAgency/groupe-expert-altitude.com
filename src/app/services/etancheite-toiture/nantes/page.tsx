import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Nantes, offrant des solutions professionnelles contre les ',
  keywords: 'etancheite toiture nantes, etancheite toit terrasse nantes, etancheite toiture terrasse nantes, reparation etancheite nantes, entreprise etancheite nantes, fuite toiture terrasse nantes',
};

export default function EtancheiteToitureNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en étanchéité de toiture terrasse à Nantes, offrant des solutions professionnelles contre les infiltrations et les dégradations. Nous protégeons efficacement vos bâtiments avec une expertise technique reconnue dans toute la région nantaise.</p>

        <h2>Nos services de étanchéité toiture terrasse a Nantes</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse représente une solution complète et sur-mesure pour garantir l&apos;intégrité de votre patrimoine immobilier. Nos techniciens hautement qualifiés réalisent un diagnostic précis avant d&apos;appliquer des membranes d&apos;étanchéité de dernière génération, résistantes aux variations climatiques. Nous intervenons sur tous types de structures : immeubles, locaux commerciaux, bâtiments industriels, avec une attention particulière aux spécificités architecturales nantaises. Notre approche combine des techniques modernes comme la pose de résines liquides, de membranes bitumineuses ou synthétiques, assurant une protection durable contre les infiltrations et les risques de dégradation structurelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe dispose de plus de 15 ans d&apos;expérience, nous sommes certifiés RGE et proposons une garantie décennale. Nous réalisons des interventions rapides, avec un taux de satisfaction client de 98%. Notre approche transparente inclut un devis détaillé sans engagement et un accompagnement personnalisé tout au long du projet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, l&apos;état actuel et les matériaux utilisés. Pour un projet moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic préalable gratuit nous permet de vous proposer le devis le plus précis possible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des auréoles jaunâtres, des moisissures, des décollements de peinture ou des infiltrations visibles. Nous recommandons un contrôle annuel et une attention particulière après des épisodes climatiques intenses à Nantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de toiture terrasse bien réalisée peut durer entre 15 et 25 ans avec un entretien régulier. Nos solutions utilisent des matériaux haute performance garantissant une durabilité maximale. Un suivi annuel permet de prolonger significativement cette durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Nantes ?
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
