import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre référence en zinguerie sur Sanary-sur-Mer, propose des solutions professionnelles pour protéger et embellir vos toitures.',
  keywords: 'zinguerie sanary-sur-mer, travaux zinguerie sanary-sur-mer, toiture zinc sanary-sur-mer, zingueur sanary-sur-mer, reparation zinc sanary-sur-mer, zinco reflect sanary-sur-mer',
};

export default function ZinguerieSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre référence en zinguerie sur Sanary-sur-Mer, propose des solutions professionnelles pour protéger et embellir vos toitures. Spécialistes du zinc depuis plus de 15 ans, nous intervenons sur l&apos;ensemble du littoral varois avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et la longévité de votre habitat. Nos interventions couvrent l&apos;installation, la rénovation et la maintenance de systèmes de zinguerie adaptés à chaque configuration architecturale. Nous utilisons des techniques précises et des matériaux haute qualité pour garantir une étanchéité parfaite et une résistance optimale aux conditions climatiques méditerranéennes. Notre équipe maîtrise tous les aspects techniques : gouttières, descentes d&apos;eau, bavettes, habillages de cheminées et protection des souches. Chaque chantier à Sanary-sur-Mer bénéficie d&apos;un diagnostic personnalisé et d&apos;une mise en œuvre selon les normes les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans dans le domaine de la zinguerie
- Techniciens certifiés et formés aux dernières innovations
- Devis gratuit et transparent sous 48h
- Matériaux garantis et travaux assurés
- Intervention rapide sur l&apos;ensemble du territoire de Sanary-sur-Mer et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², selon la complexité du chantier, l&apos;accessibilité et les matériaux utilisés. Pour une estimation précise, nous recommandons un diagnostic sur place qui permettra de définir un devis personnalisé adapté à votre projet spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose initiale, de l&apos;environnement et des conditions climatiques. Le zinc développe naturellement une patine protectrice qui le rend particulièrement résistant.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris végétaux, la vérification de l&apos;étanchéité des joints et le contrôle de l&apos;état général. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour prévenir tout risque de détérioration et prolonger la durée de vie de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Sanary-sur-Mer ?
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
