import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Aulnay-sous-Bois. Avec plus de 15 ans d&apos;expertise',
  keywords: 'ravalement facade aulnay-sous-bois, ravalement immeuble aulnay-sous-bois, renovation facade aulnay-sous-bois, peinture facade aulnay-sous-bois, entreprise ravalement aulnay-sous-bois, ravalement facade maison aulnay-sous-bois',
};

export default function RavalementFacadeAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Aulnay-sous-Bois. Avec plus de 15 ans d&apos;expertise, nous transformons l&apos;apparence de vos bâtiments en alliant technicité et esthétique.</p>

        <h2>Nos services de ravalement de façade a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences les plus strictes de rénovation immobilière. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et copropriétés - en utilisant des techniques et matériaux innovants. Notre processus débute par un diagnostic précis de l&apos;état des surfaces, suivi d&apos;un nettoyage haute pression, de réparations structurelles éventuelles et d&apos;une application de peinture ou d&apos;enduit adapté. Chaque chantier à Aulnay-sous-Bois est personnalisé, garantissant une finition parfaite et une protection durable contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de 12 professionnels certifiés 
- Devis gratuit et détaillé sous 48h 
- Techniques respectueuses de l&apos;environnement 
- Garantie décennale sur nos travaux 
- Matériaux de haute qualité sélectionnés avec soin</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen d&apos;un ravalement de façade varie entre 50€ et 100€ par m², selon la complexité des travaux, les matériaux choisis et l&apos;état initial du support. Pour une maison de 100m², comptez un budget global entre 5 000€ et 10 000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, un chantier complet prend entre 2 et 4 semaines. Un immeuble de 4 étages nécessitera environ 15 à 20 jours de travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans dans les copropriétés, selon le Code de la construction. Il est également recommandé en cas de dégradations visibles, fissures, infiltrations ou simplement pour redonner de la valeur à votre patrimoine immobilier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Aulnay-sous-Bois ?
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
