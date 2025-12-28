import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Vallauris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Vallauris, spécialiste des travaux de toiture et d&apos;étanchéité. Nous intervenons',
  keywords: 'zinguerie vallauris, travaux zinguerie vallauris, toiture zinc vallauris, zingueur vallauris, reparation zinc vallauris, zinco reflect vallauris',
};

export default function ZinguerieVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Vallauris, spécialiste des travaux de toiture et d&apos;étanchéité. Nous intervenons sur l&apos;ensemble des chantiers de zinguerie avec une expertise technique reconnue dans toute la région.</p>

        <h2>Nos services de travaux de zinguerie a Vallauris</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en travaux de couverture et de protection. Nous réalisons des installations complètes de systèmes de zinguerie, en utilisant des techniques et matériaux de haute qualité adaptés aux spécificités architecturales de Vallauris. Notre équipe maîtrise parfaitement la pose de gouttières, descentes d&apos;eau, bavettes et habillages de toiture en zinc. Chaque intervention est précédée d&apos;un diagnostic précis permettant une solution sur-mesure. Nous garantissons une étanchéité optimale et une durabilité maximale, avec des matériaux résistant aux conditions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 15 ans sur Vallauris et sa région
• Équipe de zingueurs certifiés et formés aux dernières normes
• Devis gratuit et transparent sous 48h
• Matériaux haute performance avec garantie décennale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les tarifs de zinguerie varient entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;accessibilité. Un diagnostic précis permettra de définir un devis personnalisé adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. La qualité de la pose, l&apos;exposition et l&apos;entretien régulier sont des facteurs déterminants pour sa longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Un professionnel recommande un contrôle tous les 5 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Vallauris ?
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
