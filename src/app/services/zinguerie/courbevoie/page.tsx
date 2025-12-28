import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Courbevoie | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Courbevoie et ses environs. Spécialistes des travaux de toiture et de prot',
  keywords: 'zinguerie courbevoie, travaux zinguerie courbevoie, toiture zinc courbevoie, zingueur courbevoie, reparation zinc courbevoie, zinco reflect courbevoie',
};

export default function ZinguerieCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Courbevoie et ses environs. Spécialistes des travaux de toiture et de protection, nous intervenons avec précision pour tous vos projets de zinguerie professionnels et résidentiels.</p>

        <h2>Nos services de travaux de zinguerie a Courbevoie</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément essentiel de la protection et de l&apos;esthétique de votre toiture. Nos experts maîtrisent parfaitement les techniques de pose et de rénovation des éléments en zinc, garantissant une étanchéité optimale et une durabilité exceptionnelle. Notre processus d&apos;intervention commence par un diagnostic technique précis, permettant d&apos;identifier les besoins spécifiques de chaque structure à Courbevoie. Nous utilisons uniquement des matériaux de haute qualité, conformes aux normes françaises, et mettons en œuvre des techniques innovantes comme le zinco reflect pour maximiser la performance et l&apos;esthétique de vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Équipe de zingueurs hautement qualifiés et formés en continu
- Devis gratuit et transparent sans engagement
- Interventions rapides et adaptées à chaque configuration architecturale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour un projet précis à Courbevoie, nous recommandons un diagnostic personnalisé pour un devis exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc bien posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier. Nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des fixations. Nous préconisons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration et maintenir ses performances.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Courbevoie ?
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
