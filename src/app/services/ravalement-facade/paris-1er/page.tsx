import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Paris 1er | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables au cœur de Paris 1er. Spécialistes de la rénovation',
  keywords: 'ravalement facade paris 1er, ravalement immeuble paris 1er, renovation facade paris 1er, peinture facade paris 1er, entreprise ravalement paris 1er, ravalement facade maison paris 1er',
};

export default function RavalementFacadeParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables au cœur de Paris 1er. Spécialistes de la rénovation urbaine, nous transformons vos bâtiments avec un savoir-faire technique et esthétique unique.</p>

        <h2>Nos services de ravalement de façade a Paris 1er</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation : c&apos;est une expertise complète qui protège et valorise votre patrimoine immobilier. Nos équipes interviennent sur tous types de surfaces - pierre, crépi, béton - avec des techniques adaptées à chaque architecture parisienne. Nous commençons par un diagnostic précis, évaluant l&apos;état structural et les besoins spécifiques de votre façade. Notre processus inclut un nettoyage haute précision, la réparation des zones endommagées, l&apos;application de traitements anti-humidité et une finition esthétique qui respecte le cachet architectural de Paris 1er. Nos matériaux haute performance garantissent une durabilité de 10 à 15 ans, protégeant efficacement votre bien contre les agressions climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée compte plus de 15 ans d&apos;expérience, nous sommes assurés pour tous nos chantiers, et nous proposons des devis transparents sans frais cachés. Nos interventions respectent scrupuleusement les normes environnementales et techniques en vigueur à Paris. Nous intervenons rapidement, avec un délai moyen de 5 jours pour les chantiers de ravalement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la complexité et les matériaux. Pour un immeuble parisien typique de 200m², comptez un budget global entre 10 000€ et 24 000€. Nos devis détaillés incluent toujours une analyse précise et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble à Paris 1er oscille généralement entre 10 et 20 jours ouvrables. Ce délai dépend de la surface, de l&apos;état initial de la façade, des conditions météorologiques et des techniques de rénovation choisies. Notre planning est toujours établi avec précision et communiqué à l&apos;avance.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des désordres significatifs : fissures, infiltrations, dégradations importantes. À Paris 1er, les copropriétés sont particulièrement vigilantes sur l&apos;entretien des façades pour préserver le patrimoine architectural.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Paris 1er ?
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
