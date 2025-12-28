import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Pantin et dans toute la région parisienne. Spécialistes des travaux de zinguerie, ',
  keywords: 'zinguerie pantin, travaux zinguerie pantin, toiture zinc pantin, zingueur pantin, reparation zinc pantin, zinco reflect pantin',
};

export default function ZingueriePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Pantin et dans toute la région parisienne. Spécialistes des travaux de zinguerie, nous intervenons avec précision et expertise sur tous vos projets de toiture et habillage métallique.</p>

        <h2>Nos services de travaux de zinguerie a Pantin</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins techniques et esthétiques pour les particuliers et professionnels de Pantin. Notre équipe maîtrise parfaitement la pose, la réparation et l&apos;entretien des systèmes de zinguerie, en utilisant des techniques modernes et des matériaux haute qualité. Nous réalisons des interventions complètes, depuis le diagnostic initial jusqu&apos;à la réalisation finale, en garantissant une étanchéité optimale et une durabilité exceptionnelle. Nos zingueurs certifiés travaillent avec des techniques précises, en respectant les normes techniques et environnementales actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 15 ans dans le domaine 
• Équipe de zingueurs hautement qualifiés et certifiés 
• Interventions rapides et devis gratuits sous 48h 
• Matériaux premium et techniques innovantes 
• Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et le type de toiture. Pour un projet précis à Pantin, nous proposons systématiquement un diagnostic personnalisé et un devis détaillé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. La durée de vie dépend de plusieurs facteurs comme la qualité de la pose, l&apos;exposition aux intempéries et l&apos;entretien régulier. Nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des systèmes de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration et maintenir l&apos;intégrité de votre toiture.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Pantin ?
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
