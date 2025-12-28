import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Champigny-sur-Marne. Avec plus de 15 ans d&apos;expéri',
  keywords: 'ravalement facade champigny-sur-marne, ravalement immeuble champigny-sur-marne, renovation facade champigny-sur-marne, peinture facade champigny-sur-marne, entreprise ravalement champigny-sur-marne, ravalement facade maison champigny-sur-marne',
};

export default function RavalementFacadeChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Champigny-sur-Marne. Avec plus de 15 ans d&apos;expérience, nous transformons l&apos;apparence extérieure de vos bâtiments en alliant expertise technique et esthétique.</p>

        <h2>Nos services de ravalement de façade a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation cosmétique. Nous proposons une approche complète qui protège et embellit votre patrimoine immobilier. Notre équipe de professionnels analyse méticuleusement l&apos;état de votre façade, sélectionne les matériaux les plus adaptés et met en œuvre des techniques de rénovation innovantes. Que ce soit pour une maison individuelle ou un immeuble collectif à Champigny-sur-Marne, nous garantissons une finition impeccable qui résiste aux conditions climatiques locales et préserve la valeur de votre bien. Notre processus inclut un diagnostic précis, un traitement anti-humidité, une préparation de surface rigoureuse et une application de peinture ou d&apos;enduit de haute qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et formés aux dernières normes de rénovation. Nous proposons un devis gratuit et détaillé, une garantie décennale sur nos travaux et un suivi personnalisé. Nos interventions respectent les réglementations thermiques et environnementales, vous garantissant une performance énergétique optimale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 120€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Pour un pavillon moyen de 100m² à Champigny-sur-Marne, comptez un budget global entre 4 000€ et 12 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état, mais en moyenne, notre équipe réalise le chantier entre 2 et 4 semaines. Un immeuble de 4 étages nécessitera environ 15 à 20 jours de travaux, en fonction des conditions météorologiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans dans les copropriétés, selon le Code de la Construction. Il est également recommandé en cas de dégradations visibles, de fissures, d&apos;infiltrations ou pour améliorer la performance énergétique du bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Champigny-sur-Marne ?
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
