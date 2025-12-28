import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Créteil et dans tout le Val-de-Marne. Nos experts',
  keywords: 'ravalement facade créteil, ravalement immeuble créteil, renovation facade créteil, peinture facade créteil, entreprise ravalement créteil, ravalement facade maison créteil',
};

export default function RavalementFacadeCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Créteil et dans tout le Val-de-Marne. Nos experts transforment vos bâtiments avec des solutions sur-mesure qui allient esthétique, durabilité et performance énergétique.</p>

        <h2>Nos services de ravalement de façade a Créteil</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation cosmétique. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et copropriétés - avec une expertise technique pointue. Notre processus commence par un diagnostic précis de l&apos;état des surfaces, permettant de définir la meilleure stratégie de rénovation. Nous utilisons uniquement des matériaux de haute qualité, respectueux de l&apos;environnement, qui garantissent une protection optimale contre les intempéries et l&apos;usure. Notre équipe certifiée maîtrise parfaitement les techniques modernes d&apos;isolation et de décoration, assurant un résultat esthétique et fonctionnel qui valorisera durablement votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos atouts incluent : une expertise de plus de 15 ans dans le ravalement à Créteil, des techniciens formés aux dernières normes réglementaires, un devis gratuit et détaillé, une garantie décennale, et des solutions personnalisées adaptées à chaque type de bâtiment. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie généralement entre 30€ et 100€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la surface. Pour une maison moyenne à Créteil, comptez entre 5 000€ et 15 000€. Nos devis détaillés permettent une transparence totale des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4 étages à Créteil, le chantier prend entre 3 et 6 semaines. Notre planification précise minimise les perturbations et garantit un travail de qualité dans les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de dégradation présente des risques pour la structure ou l&apos;environnement. À Créteil, nous recommandons une inspection professionnelle tous les 8-10 ans pour maintenir la valeur et la sécurité de votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Créteil ?
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
