import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Pessac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Pessac et ses environs. Spécialistes de la rénova',
  keywords: 'ravalement facade pessac, ravalement immeuble pessac, renovation facade pessac, peinture facade pessac, entreprise ravalement pessac, ravalement facade maison pessac',
};

export default function RavalementFacadePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade impeccables à Pessac et ses environs. Spécialistes de la rénovation depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec un professionnalisme et un savoir-faire inégalés.</p>

        <h2>Nos services de ravalement de façade a Pessac</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Nous proposons une expertise complète qui protège et valorise votre patrimoine immobilier. Notre équipe qualifiée réalise un diagnostic précis avant intervention, évaluant l&apos;état des supports, les désordres potentiels et les solutions techniques adaptées. Nous utilisons uniquement des matériaux de haute qualité, garantissant une finition impeccable et une durabilité maximale. Notre processus inclut le nettoyage haute pression, le traitement des fissures, l&apos;application de primaires d&apos;accrochage et de peintures spécifiques adaptées à chaque type de support à Pessac.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale reconnue avec plus de 500 chantiers réalisés, 2) Des techniciens certifiés et formés aux dernières techniques de ravalement, 3) Un devis détaillé et transparent sans surprise, 4) Une garantie décennale sur nos interventions, offrant une tranquillité totale à nos clients.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité du support, les matériaux utilisés et l&apos;état initial. Pour une maison de 100m² à Pessac, comptez en moyenne entre 3 000€ et 8 000€. Un diagnostic préalable gratuit permettra de préciser un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 300m², notre équipe réalise généralement le chantier entre 10 et 15 jours ouvrables. Les étapes incluent préparation, réparations, application des enduits et peintures, avec des délais de séchage entre chaque étape.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction. Les signes indiquant sa nécessité sont : décoloration, fissures, infiltrations, mousses ou salissures importantes. À Pessac, notre climat océanique accélère la dégradation des façades, rendant l&apos;entretien régulier essentiel pour préserver la valeur immobilière.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Pessac ?
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
