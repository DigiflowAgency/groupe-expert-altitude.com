import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Écully | Groupe Expert Altitude Com',
  description: 'À Écully et ses environs, Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade, transformant l&apos;apparence et la protection de v',
  keywords: 'ravalement facade écully, ravalement immeuble écully, renovation facade écully, peinture facade écully, entreprise ravalement écully, ravalement facade maison écully',
};

export default function RavalementFacadeEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">À Écully et ses environs, Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade, transformant l&apos;apparence et la protection de vos bâtiments avec un savoir-faire technique et esthétique unique.</p>

        <h2>Nos services de ravalement de façade a Écully</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles collectifs et bâtiments professionnels - en apportant une expertise technique complète. Notre processus débute par un diagnostic précis de l&apos;état de votre façade, évaluant les pathologies potentielles comme les micro-fissures, l&apos;usure des anciens revêtements ou les problématiques d&apos;étanchéité. Nos équipes utilisent uniquement des matériaux haute performance, garantissant une protection durable contre les intempéries et une finition impeccable. Sur Écully, nous adaptons chaque intervention aux spécificités architecturales locales, en respectant l&apos;harmonie des constructions traditionnelles et contemporaines.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre certification qualité RGE, plus de 15 ans d&apos;expérience en rénovation, des techniciens formés aux dernières normes environnementales, et un engagement de résultat garanti. Nous proposons des devis transparents sans surprise et une intervention sur-mesure, avec des délais respectés et une qualité irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 120€ au m², selon la complexité, les matériaux et les préparatifs nécessaires. Pour une maison moyenne de 100m², comptez un budget global entre 4 000€ et 12 000€. Nos devis détaillés incluent systématiquement le diagnostic, les matériaux, la main-d&apos;œuvre et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et de la complexité. Pour un pavillon standard, nous estimons 5 à 10 jours ouvrables. Un immeuble de plusieurs étages peut nécessiter 2 à 4 semaines. Notre planification précise vous garantit un chantier efficace et rapide, avec un minimum de perturbations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient légalement obligatoire tous les 10-15 ans ou lorsque l&apos;état de la façade présente des désordres significatifs : fissures importantes, infiltrations, dégradation des peintures. Dans les copropriétés, cette obligation est inscrite dans le règlement. À Écully, nous conseillons un diagnostic préventif tous les 8-10 ans pour maintenir la valeur de votre patrimoine immobilier.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Écully ?
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
