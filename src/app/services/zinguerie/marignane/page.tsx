import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Marignane | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Marignane, spécialiste des travaux de toiture et de protection contre les infil',
  keywords: 'zinguerie marignane, travaux zinguerie marignane, toiture zinc marignane, zingueur marignane, reparation zinc marignane, zinco reflect marignane',
};

export default function ZinguerieMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Marignane, spécialiste des travaux de toiture et de protection contre les infiltrations depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble des chantiers de zinguerie avec une expertise technique et un engagement de qualité.</p>

        <h2>Nos services de travaux de zinguerie a Marignane</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en protection et finition de toiture pour les particuliers et professionnels de Marignane et ses environs. Notre équipe maîtrise parfaitement la pose, la rénovation et la réparation d&apos;équipements en zinc, garantissant une étanchéité optimale et une durabilité maximale. Nous utilisons uniquement des matériaux haute qualité, conformes aux normes techniques les plus exigeantes, pour assurer une protection durable contre les intempéries. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation minutieuse, avec un suivi personnalisé pour chaque projet.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de pointe avec plus de 95% de clients satisfaits, 2) Des interventions rapides et précises, généralement sous 72h, 3) Un tarif transparent et compétitif, sans frais cachés, 4) Une garantie décennale sur tous nos travaux de zinguerie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif moyen d&apos;un zingueur varie entre 50€ et 120€ du m², selon la complexité du chantier, l&apos;état initial de la toiture et les matériaux utilisés. Pour un projet à Marignane, nous proposons un diagnostic gratuit pour un devis personnalisé précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 70 ans. La durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des entretiens réguliers. Notre technique Zinco Reflect permet d&apos;optimiser cette longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des raccords et le traitement préventif contre la corrosion. Nous recommandons un contrôle professionnel tous les 5 à 7 ans pour garantir sa performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Marignane ?
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
