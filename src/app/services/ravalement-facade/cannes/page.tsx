import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Cannes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Cannes et dans toute la Côte d&apos;Azur. Spécial',
  keywords: 'ravalement facade cannes, ravalement immeuble cannes, renovation facade cannes, peinture facade cannes, entreprise ravalement cannes, ravalement facade maison cannes',
};

export default function RavalementFacadeCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Cannes et dans toute la Côte d&apos;Azur. Spécialistes depuis 15 ans, nous transformons l&apos;apparence et la protection de vos bâtiments avec un savoir-faire technique et esthétique.</p>

        <h2>Nos services de ravalement de façade a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche complète qui combine expertise technique, respect des normes et valorisation patrimoniale. Notre équipe intervient sur tous types de bâtiments - maisons individuelles, immeubles résidentiels et copropriétés - en utilisant des techniques et matériaux adaptés à chaque configuration architecturale. Nos interventions garantissent non seulement un aspect visuel impeccable mais aussi une protection durable contre les agressions climatiques méditerranéennes, fréquentes dans la région cannoise.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise certifiée avec plus de 250 chantiers réalisés à Cannes, 2) Des techniciens formés aux dernières normes de rénovation, 3) Un diagnostic technique gratuit avant intervention, 4) Des matériaux écologiques et haute performance garantissant une durabilité de 15 ans minimum.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 45€ et 90€ au m², selon la complexité du support, les matériaux choisis et l&apos;état initial. Pour un pavillon standard à Cannes, comptez un budget global entre 5 000€ et 12 000€. Nos devis détaillés incluent systématiquement une analyse précise des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble moyen de 300 m², notre équipe réalise généralement le chantier entre 10 et 15 jours ouvrés. Nous optimisons toujours les délais sans compromettre la qualité d&apos;exécution.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient légalement obligatoire tous les 10 ans dans les copropriétés, ou lorsque la façade présente des désordres significatifs comme des fissures, infiltrations ou dégradations importantes. À Cannes, compte tenu du climat maritime, nous recommandons une inspection professionnelle tous les 8 à 12 ans pour maintenir la qualité de votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Cannes ?
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
