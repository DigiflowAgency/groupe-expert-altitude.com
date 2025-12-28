import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Bègles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de qualité à Bègles et ses environs. Spécialistes de la rénovat',
  keywords: 'ravalement facade bègles, ravalement immeuble bègles, renovation facade bègles, peinture facade bègles, entreprise ravalement bègles, ravalement facade maison bègles',
};

export default function RavalementFacadeBeglesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Bègles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de qualité à Bègles et ses environs. Spécialistes de la rénovation depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec professionnalisme et expertise.</p>

        <h2>Nos services de ravalement de façade a Bègles</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération esthétique. Pour les propriétaires à Bègles, nous proposons une intervention complète qui protège et valorise votre patrimoine immobilier. Notre processus débute par un diagnostic précis de l&apos;état de votre façade, permettant d&apos;identifier les pathologies potentielles comme les micro-fissures ou l&apos;usure des supports. Nous utilisons uniquement des matériaux de haute qualité garantissant une protection contre l&apos;humidité, les chocs thermiques et la pollution urbaine. Notre équipe technique maîtrise parfaitement les techniques contemporaines d&apos;application, qu&apos;il s&apos;agisse de peinture, d&apos;enduit ou de rénovation complète.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos atouts incluent : une expertise locale précise, des techniciens certifiés, un devis gratuit et détaillé, des délais de réalisation courts et une garantie décennale. Nous sommes engagés dans une démarche éco-responsable en sélectionnant des produits respectueux de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial du support. Pour une maison moyenne de 100m² à Bègles, comptez un budget global entre 5 000€ et 12 000€. Nous proposons systématiquement un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et des travaux nécessaires. Pour un pavillon standard, nous estimons 5 à 10 jours ouvrés. Un immeuble collectif peut nécessiter 2 à 4 semaines. Notre planning précis vous sera communiqué dès la phase d&apos;étude préalable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10 ans selon le Code de la Construction. À Bègles, les copropriétés doivent légalement entretenir leurs façades pour garantir la salubrité et la sécurité. Des signes comme des fissures, des infiltrations ou un aspect délabré justifient une intervention rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Bègles ?
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
