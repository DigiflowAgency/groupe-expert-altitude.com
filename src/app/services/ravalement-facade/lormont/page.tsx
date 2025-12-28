import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Lormont | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Lormont et dans toute la métropole bordelaise.',
  keywords: 'ravalement facade lormont, ravalement immeuble lormont, renovation facade lormont, peinture facade lormont, entreprise ravalement lormont, ravalement facade maison lormont',
};

export default function RavalementFacadeLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Lormont et dans toute la métropole bordelaise. Nous transformons l&apos;apparence de vos bâtiments avec un savoir-faire technique et une précision chirurgicale.</p>

        <h2>Nos services de ravalement de façade a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche complète qui protège et valorise votre patrimoine immobilier. Notre équipe de professionnels qualifiés analyse précisément l&apos;état de votre façade, sélectionne les techniques et matériaux adaptés, et met en œuvre un traitement sur-mesure. Que ce soit pour une maison individuelle ou un immeuble collectif à Lormont, nous garantissons une intervention qui allie performance technique et résultat visuel remarquable. Nos techniques respectent les normes environnementales et permettent d&apos;améliorer l&apos;isolation thermique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le ravalement de façades 2) Des techniciens certifiés et formés aux dernières innovations 3) Un diagnostic technique gratuit avant intervention 4) Des matériaux haute qualité garantissant une durabilité de 10 à 15 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ par m², selon la complexité, les matériaux et l&apos;état initial. Pour une maison moyenne de 100m² à Lormont, comptez un budget global entre 3 000€ et 8 000€. Nos devis détaillés vous permettront d&apos;avoir une visibilité précise sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et de la complexité. Pour un pavillon standard, prévoir 5 à 10 jours ouvrables. Un immeuble de plusieurs étages peut nécessiter 2 à 4 semaines. Notre planning vous sera communiqué précisément dès la phase de diagnostic.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans ou en cas de dégradations visibles (fissures, infiltrations, écaillements). La réglementation impose également un ravalement dans les copropriétés tous les 10 ans. À Lormont, nous conseillons une inspection professionnelle tous les 7-8 ans pour prévenir les désordres potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Lormont ?
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
