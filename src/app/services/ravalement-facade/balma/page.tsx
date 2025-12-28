import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Balma | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade sur Balma et ses environs. Spécialistes depuis plus de 15 ans, nous tr',
  keywords: 'ravalement facade balma, ravalement immeuble balma, renovation facade balma, peinture facade balma, entreprise ravalement balma, ravalement facade maison balma',
};

export default function RavalementFacadeBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référence en ravalement de façade sur Balma et ses environs. Spécialistes depuis plus de 15 ans, nous transformons l&apos;apparence extérieure de vos bâtiments avec professionnalisme et expertise technique.</p>

        <h2>Nos services de ravalement de façade a Balma</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une approche complète qui protège et valorise votre patrimoine immobilier. Notre équipe réalise un diagnostic précis avant intervention, évaluant l&apos;état des supports, les pathologies potentielles et les solutions techniques adaptées. Nous utilisons uniquement des matériaux de haute qualité garantissant une durabilité maximale, avec des techniques respectueuses de l&apos;environnement. Notre process inclut le nettoyage haute pression, le traitement des fissures, l&apos;application de primaires et de peintures spécifiques, assurant une finition impeccable qui résistera aux conditions climatiques de la région toulousaine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale maîtrisée à Balma, 2) Des techniciens certifiés et formés annuellement, 3) Un devis détaillé et transparent sans surprise, 4) Une garantie décennale sur nos travaux. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité, les matériaux et l&apos;état initial. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic précalable permet un chiffrage exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa complexité. Pour un immeuble de 3-4 étages, notre équipe réalise généralement les travaux en 10-15 jours ouvrables, en fonction des conditions météorologiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou en cas de dégradations significatives. La réglementation impose cette rénovation pour maintenir la salubrité et la sécurité des bâtiments, particulièrement dans les copropriétés et immeubles collectifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Balma ?
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
