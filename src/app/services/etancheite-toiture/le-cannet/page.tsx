import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Le Cannet | Groupe Expert Altitude Com',
  description: 'Spécialiste de l&apos;étanchéité de toiture terrasse sur Le Cannet et ses environs, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les',
  keywords: 'etancheite toiture le cannet, etancheite toit terrasse le cannet, etancheite toiture terrasse le cannet, reparation etancheite le cannet, entreprise etancheite le cannet, fuite toiture terrasse le cannet',
};

export default function EtancheiteToitureLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste de l&apos;étanchéité de toiture terrasse sur Le Cannet et ses environs, le Groupe Expert Altitude Com protège votre patrimoine immobilier contre les infiltrations d&apos;eau. Nos solutions sur-mesure garantissent une protection durable et une tranquillité d&apos;esprit totale pour les propriétaires du secteur.</p>

        <h2>Nos services de étanchéité toiture terrasse a Le Cannet</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité de votre bâtiment. Notre équipe intervient sur tous types de surfaces - béton, bois, métal - avec des techniques de pointe certifiées. Nous réalisons un diagnostic précis avant toute intervention, identifiant chaque point faible potentiel. Notre processus inclut un traitement par membranes synthétiques haute résistance, appliquées selon des normes techniques strictes. Chaque chantier bénéficie d&apos;une préparation minutieuse : nettoyage, réparation des supports, application de primaires d&apos;accrochage et pose de résines d&apos;étanchéité garantissant une protection jusqu&apos;à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience sur Le Cannet. Nos techniciens sont formés aux dernières normes d&apos;étanchéité. Devis gratuit sous 48h. Interventions rapides et propres. Garantie décennale sur tous nos travaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, l&apos;état du support et la technique utilisée. Pour un appartement standard de 30m² à Le Cannet, comptez un budget entre 2 500€ et 5 000€ TTC.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Signes de fuite : traces d&apos;humidité sur plafonds, moisissures, infiltrations, décoloration des peintures, gouttes pendant les périodes pluvieuses. Un diagnostic professionnel avec caméra thermique permet de localiser précisément les zones problématiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 10 et 25 ans. Notre garantie décennale couvre les travaux, avec des produits offrant une durabilité maximale grâce à des membranes techniques innovantes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Le Cannet ?
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
