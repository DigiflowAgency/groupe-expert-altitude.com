import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Pessac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Pessac et dans toute la région bordelaise. Nos cordistes hautemen',
  keywords: 'cordiste pessac, travaux sur corde pessac, travaux acrobatiques pessac, cordiste batiment pessac, intervention cordiste pessac, entreprise cordiste pessac',
};

export default function CordistePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Pessac et dans toute la région bordelaise. Nos cordistes hautement qualifiés interviennent sur tous types de chantiers complexes, garantissant des solutions techniques et sécurisées en hauteur.</p>

        <h2>Nos services de travaux sur corde - cordistes a Pessac</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent une solution innovante pour les interventions techniques nécessitant une approche verticale. Grâce à des techniques spécialisées, nos cordistes réalisent des missions complexes sur des structures industrielles, bâtiments historiques et équipements techniques. Notre expertise couvre la rénovation, l&apos;entretien, le nettoyage et les inspections, avec une précision millimétrique et un engagement total envers la sécurité. Chaque intervention à Pessac est précédée d&apos;un diagnostic technique précis, permettant une planification optimale et des résultats professionnels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Plus de 15 ans d&apos;expérience en travaux acrobatiques
- Certifications IRATA et CACES garantissant une qualité maximale
- Équipement technique dernier cri et normes de sécurité strictes
- Interventions rapides et adaptées à chaque configuration architecturale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 180€ de l&apos;heure selon la complexité du chantier, l&apos;accessibilité et les équipements spécifiques requis. Un devis personnalisé est toujours établi après un diagnostic précis sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle spécialisée, incluant des certifications comme IRATA niveau 1, 2 ou 3. Une condition physique excellente, une absence de vertige et des compétences techniques en travaux en hauteur sont essentielles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur expérience sur des chantiers similaires, leurs assurances professionnelles et demandez systématiquement des références et un portfolio de réalisations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Pessac ?
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
