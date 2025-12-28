import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Carquefou | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Carquefou et ses environs. Spécialistes des travaux de zinguerie, nous interven',
  keywords: 'zinguerie carquefou, travaux zinguerie carquefou, toiture zinc carquefou, zingueur carquefou, reparation zinc carquefou, zinco reflect carquefou',
};

export default function ZinguerieCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Carquefou et ses environs. Spécialistes des travaux de zinguerie, nous intervenons sur l&apos;ensemble des projets de toiture et de protection contre l&apos;eau pour les particuliers et professionnels de la région.</p>

        <h2>Nos services de travaux de zinguerie a Carquefou</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;une simple intervention technique. Nous proposons des solutions sur-mesure pour protéger durablement votre habitat contre les infiltrations et les dégradations. Notre expertise couvre l&apos;installation, la rénovation et la maintenance de systèmes de zinguerie, en utilisant des techniques et matériaux de haute qualité. Chaque intervention à Carquefou est précédée d&apos;un diagnostic précis, permettant d&apos;identifier les besoins spécifiques de votre toiture. Notre équipe maîtrise parfaitement les techniques de pose de zinc, garantissant une étanchéité optimale et une esthétique irréprochable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche professionnelle et nos compétences techniques. Nous disposons de 15 ans d&apos;expérience en zinguerie, une équipe certifiée, un matériel professionnel et un engagement qualité total. Nos interventions sont rapides, précises et respectent les normes les plus exigeantes du bâtiment.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour un projet à Carquefou, nous proposons systématiquement un devis gratuit et détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 70 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Carquefou ?
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
