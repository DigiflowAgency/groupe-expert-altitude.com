import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Tassin-la-Demi-Lune, spécialiste des travaux de toiture et d&apos;étanchéité. Nous inte',
  keywords: 'zinguerie tassin-la-demi-lune, travaux zinguerie tassin-la-demi-lune, toiture zinc tassin-la-demi-lune, zingueur tassin-la-demi-lune, reparation zinc tassin-la-demi-lune, zinco reflect tassin-la-demi-lune',
};

export default function ZinguerieTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Tassin-la-Demi-Lune, spécialiste des travaux de toiture et d&apos;étanchéité. Nous intervenons sur l&apos;ensemble du territoire rhodanien avec une expertise technique reconnue dans le traitement professionnel des systèmes de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et installation de systèmes d&apos;évacuation. Notre équipe maîtrise parfaitement les techniques de pose et de réparation des gouttières, descentes d&apos;eau, et habillages de toiture en zinc. Nous utilisons uniquement des matériaux haute qualité garantissant une durabilité maximale, avec une attention particulière portée à l&apos;étanchéité et à l&apos;esthétique. Sur Tassin-la-Demi-Lune, nous proposons des solutions personnalisées adaptées à chaque configuration architecturale, en respectant les normes techniques les plus exigeantes. Notre approche combine précision technique et conseil sur-mesure pour des réalisations parfaitement intégrées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de 15 ans dans le domaine de la zinguerie 2) Un diagnostic précis et gratuit avant intervention 3) Des matériaux certifiés et une garantie décennale 4) Une équipe de professionnels formés en permanence aux dernières techniques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur, et les matériaux utilisés. Un devis personnalisé permet de définir précisément le coût exact de votre projet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Un professionnel recommande une inspection tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Tassin-la-Demi-Lune ?
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
