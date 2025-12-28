import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Écully | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Écully, spécialiste des travaux de toiture et de protection contre les infiltra',
  keywords: 'zinguerie écully, travaux zinguerie écully, toiture zinc écully, zingueur écully, reparation zinc écully, zinco reflect écully',
};

export default function ZinguerieEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Écully, spécialiste des travaux de toiture et de protection contre les infiltrations depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble des chantiers de zinguerie avec une expertise technique et un engagement de qualité pour les particuliers et professionnels.</p>

        <h2>Nos services de travaux de zinguerie a Écully</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et la longévité de votre toiture. Nos techniciens qualifiés réalisent des interventions complètes, depuis le diagnostic précis jusqu&apos;à la pose de systèmes de zinguerie sur-mesure. Nous travaillons principalement avec des matériaux haute performance comme le zinc Zinco Reflect, garantissant une résistance optimale aux intempéries et une durabilité exceptionnelle. Notre process comprend un état des lieux technique, un devis personnalisé et une réalisation dans le respect des normes en vigueur, avec une attention particulière portée aux spécificités architecturales d&apos;Écully et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expérience
• Interventions rapides et sur-mesure
• Matériaux premium et techniques innovantes
• Devis gratuit et transparent
• Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la toiture. Un diagnostic précis est nécessaire pour établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. La qualité des matériaux, l&apos;exposition et l&apos;entretien régulier sont des facteurs déterminants pour sa longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, le contrôle des joints et des fixations, et l&apos;élimination des éventuelles mousses ou végétations. Nous recommandons une inspection professionnelle tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Écully ?
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
