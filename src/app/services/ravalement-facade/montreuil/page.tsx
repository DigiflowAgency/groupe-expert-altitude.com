import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Montreuil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour les ravalements de façade à Montreuil et ses environs. Spécialistes depuis plus de 15 ans, n',
  keywords: 'ravalement facade montreuil, ravalement immeuble montreuil, renovation facade montreuil, peinture facade montreuil, entreprise ravalement montreuil, ravalement facade maison montreuil',
};

export default function RavalementFacadeMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour les ravalements de façade à Montreuil et ses environs. Spécialistes depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec précision et expertise.</p>

        <h2>Nos services de ravalement de façade a Montreuil</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade répond aux exigences techniques et esthétiques les plus pointues. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - en utilisant des techniques innovantes et des matériaux haute performance. Notre processus débute par un diagnostic complet de votre façade, évaluant l&apos;état des supports, les potentiels désordres structurels et les besoins spécifiques. Nos équipes qualifiées à Montreuil réalisent ensuite un travail minutieux : préparation des surfaces, réparations éventuelles, application de primaires d&apos;accrochage, et finition par des peintures ou enduits garantissant une protection durable contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale maîtrisée, 2) Des techniciens certifiés et formés annuellement, 3) Des matériaux écologiques et haute durabilité, 4) Un devis détaillé et transparent sans surprise. Nous sommes reconnus pour notre approche professionnelle et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ par m², selon la complexité, les matériaux et l&apos;état initial du support. Pour un pavillon standard à Montreuil, comptez entre 5 000€ et 15 000€ pour une prestation complète et de qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble oscille généralement entre 2 et 4 semaines, en fonction de la surface, de l&apos;accessibilité et des travaux préparatoires nécessaires. Un immeuble de 4 étages demandera environ 15 à 20 jours de travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des désordres significatifs compromettant l&apos;isolation ou la structure. À Montreuil, nous recommandons une inspection professionnelle tous les 8-10 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Montreuil ?
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
