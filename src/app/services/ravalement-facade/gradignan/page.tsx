import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Gradignan | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Gradignan et dans toute la métropole bordelais',
  keywords: 'ravalement facade gradignan, ravalement immeuble gradignan, renovation facade gradignan, peinture facade gradignan, entreprise ravalement gradignan, ravalement facade maison gradignan',
};

export default function RavalementFacadeGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Gradignan et dans toute la métropole bordelaise. Avec plus de 15 ans d&apos;expérience, nous transformons l&apos;apparence de vos bâtiments grâce à des techniques innovantes et un savoir-faire artisanal.</p>

        <h2>Nos services de ravalement de façade a Gradignan</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences les plus strictes de qualité et d&apos;esthétique. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - en utilisant des techniques adaptées à chaque support. Notre processus démarre par un diagnostic précis de l&apos;état de votre façade, suivi d&apos;un nettoyage haute pression, de réparations éventuelles et d&apos;une application de peinture ou d&apos;enduit haute performance. À Gradignan, nous comprenons les spécificités climatiques locales qui influencent la durabilité des traitements.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec un matériel de pointe, nos produits sont écologiques et garantis 10 ans, nous proposons des devis transparents sans surprise et notre réactivité est reconnue dans toute la région bordelaise. Nous sommes également spécialisés dans les techniques de ravalement respectueuses de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ le m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial du support. Pour une maison moyenne de 100m², comptez entre 3000€ et 8000€. Nos devis détaillés permettent une transparence totale des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état, mais en moyenne, notre équipe réalise le chantier entre 5 et 15 jours ouvrés. Un immeuble de 4 étages nécessitera environ 10 jours de travaux, hors intempéries.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans dans les copropriétés, selon le code de la construction. Il est également recommandé en cas de dégradations visibles, de fissures, ou pour améliorer la performance énergétique et la valeur patrimoniale de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Gradignan ?
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
