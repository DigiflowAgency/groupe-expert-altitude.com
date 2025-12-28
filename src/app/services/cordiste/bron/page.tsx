import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Bron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Bron et ses environs. Spécialisés en interventions acrobatiques, ',
  keywords: 'cordiste bron, travaux sur corde bron, travaux acrobatiques bron, cordiste batiment bron, intervention cordiste bron, entreprise cordiste bron',
};

export default function CordisteBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Bron et ses environs. Spécialisés en interventions acrobatiques, nos cordistes hautement qualifiés réalisent des missions complexes en toute sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Bron</h2>
        <div className="space-y-4">
          <p>Nos cordistes professionnels proposent des solutions techniques innovantes pour tous types de travaux en hauteur sur Bron et la métropole lyonnaise. Que ce soit pour des inspections de façades, des rénovations, des nettoyages industriels ou des travaux de maintenance, notre équipe intervient avec un équipement de pointe et une expertise reconnue. Chaque intervention est précédée d&apos;une évaluation technique précise permettant d&apos;optimiser la sécurité et l&apos;efficacité. Nos techniciens sont formés aux dernières normes de sécurité et disposent de certifications IRATA internationales, garantissant une qualité d&apos;intervention irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise certifiée avec plus de 15 ans d&apos;expérience dans les travaux acrobatiques
• Équipe de 12 cordistes hautement qualifiés et diplômés
• Matériel dernière génération aux normes de sécurité européennes
• Interventions rapides sur Bron et l&apos;agglomération lyonnaise</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs d&apos;un cordiste varient entre 80€ et 250€ de l&apos;heure selon la complexité des travaux, l&apos;accessibilité du site et les équipements spécifiques nécessaires. Un devis personnalisé gratuit est systématiquement proposé après diagnostic technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée, obtenir des certifications IRATA (niveau 1, 2 ou 3), disposer d&apos;un CACES, et passer des examens médicaux d&apos;aptitude aux travaux en hauteur. Une condition physique excellente et une absence de vertige sont essentielles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, et demandez systématiquement un portfolio de réalisations récentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Bron ?
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
