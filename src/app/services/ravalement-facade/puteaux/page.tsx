import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Puteaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Puteaux et dans toute la région parisienne. Av',
  keywords: 'ravalement facade puteaux, ravalement immeuble puteaux, renovation facade puteaux, peinture facade puteaux, entreprise ravalement puteaux, ravalement facade maison puteaux',
};

export default function RavalementFacadePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Puteaux et dans toute la région parisienne. Avec plus de 15 ans d&apos;expertise, nous transformons vos bâtiments en véritables joyaux architecturaux, en alliant technicité et esthétique.</p>

        <h2>Nos services de ravalement de façade a Puteaux</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous intervenons sur tous types de bâtiments à Puteaux, qu&apos;il s&apos;agisse de maisons individuelles, d&apos;immeubles résidentiels ou de copropriétés. Notre processus commence par un diagnostic technique précis, évaluant l&apos;état des supports, les désordres potentiels et les besoins spécifiques. Nos équipes utilisent uniquement des matériaux haute qualité, garantissant une protection durable contre les intempéries et une finition impeccable. Nous proposons différentes techniques - peinture, enduit, nettoyage haute pression - adaptées à chaque type de façade et respectant les normes environnementales actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre certification RGE, une équipe de 12 professionnels qualifiés, un devis personnalisé sous 48h, et une garantie décennale. Nous intervenons avec des techniques éco-responsables et des produits de dernière génération, assurant une rénovation qui préserve à la fois l&apos;esthétique et la structure de votre bâtiment.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 120€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour un pavillon standard à Puteaux, comptez environ 6 000€ à 12 000€ pour une surface moyenne de 100m². Nos devis détaillés incluent tous les coûts sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. Pour un immeuble de 4 étages à Puteaux, le chantier dure généralement entre 2 et 4 semaines. Nos plannings sont optimisés pour minimiser la gêne pour les résidents, avec des équipes dimensionnées selon la complexité du projet.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans, ou lorsque des dégradations significatives sont constatées. La réglementation impose ce diagnostic pour les copropriétés de plus de 10 ans, afin de garantir la sécurité et la préservation du patrimoine immobilier. Notre expertise permet de réaliser ces travaux en conformité totale avec les normes actuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Puteaux ?
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
