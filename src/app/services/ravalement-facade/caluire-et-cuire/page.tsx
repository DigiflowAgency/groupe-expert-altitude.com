import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement, et le Groupe Expert Altitude Com est votre partenaire de référence pour les ravalements à Caluire-et-Cuire. Spé',
  keywords: 'ravalement facade caluire-et-cuire, ravalement immeuble caluire-et-cuire, renovation facade caluire-et-cuire, peinture facade caluire-et-cuire, entreprise ravalement caluire-et-cuire, ravalement facade maison caluire-et-cuire',
};

export default function RavalementFacadeCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement, et le Groupe Expert Altitude Com est votre partenaire de référence pour les ravalements à Caluire-et-Cuire. Spécialistes du ravalement depuis plus de 15 ans, nous transformons vos bâtiments avec professionnalisme et précision.</p>

        <h2>Nos services de ravalement de façade a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération esthétique : c&apos;est un investissement durable pour votre patrimoine immobilier. Notre équipe intervient sur tous types de bâtiments à Caluire-et-Cuire, des maisons individuelles aux immeubles collectifs, en utilisant des techniques et des matériaux de haute qualité. Nous réalisons un diagnostic précis avant chaque intervention, évaluant l&apos;état des supports, les désordres potentiels et les solutions techniques adaptées. Notre processus comprend le nettoyage, la réparation des supports, l&apos;application de produits spécifiques et une finition soignée qui protègera durablement votre façade contre les intempéries et l&apos;usure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise technique et notre engagement local. Nous sommes certifiés RGE, garantissant une intervention aux normes environnementales. Notre équipe maîtrise parfaitement les spécificités architecturales de Caluire-et-Cuire. Nous proposons des devis transparents, des délais respectés et une garantie décennale sur nos travaux. 95% de nos clients nous recommandent.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ du m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour un pavillon moyen de 100m², comptez entre 3 000€ et 8 000€. Un diagnostic préalable gratuit permettra d&apos;affiner ce budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement d&apos;immeuble dépend de sa taille et de sa complexité. Un immeuble de 4 étages nécessitera généralement entre 3 et 5 semaines. Notre méthode optimisée permet de réduire les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des désordres significatifs comme des fissures, des infiltrations ou une dégradation importante de l&apos;enduit. Les copropriétés doivent particulièrement être vigilantes sur ce point.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Caluire-et-Cuire ?
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
