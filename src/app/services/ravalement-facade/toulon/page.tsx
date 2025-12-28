import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Toulon | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Toulon et dans tout le Var. Nous transfor',
  keywords: 'ravalement facade toulon, ravalement immeuble toulon, renovation facade toulon, peinture facade toulon, entreprise ravalement toulon, ravalement facade maison toulon',
};

export default function RavalementFacadeToulonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Toulon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des ravalements de façade de haute qualité à Toulon et dans tout le Var. Nous transformons l&apos;apparence de votre bien avec des solutions sur-mesure qui protègent et valorisent votre patrimoine immobilier.</p>

        <h2>Nos services de ravalement de façade a Toulon</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nous proposons une expertise technique complète qui combine protection, durabilité et embellissement. Notre équipe de professionnels analyse précisément l&apos;état de votre façade, sélectionne les matériaux les plus adaptés et met en œuvre des techniques de rénovation innovantes. Chaque chantier à Toulon est traité avec une attention particulière, en prenant en compte les spécificités architecturales locales et les conditions climatiques méditerranéennes. Nous garantissons une intervention propre, rapide et respectueuse des normes environnementales, avec des délais de réalisation généralement entre 5 et 15 jours selon la superficie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expertise en ravalement sur Toulon et la région PACA
✓ Équipe de 12 professionnels qualifiés et certifiés
✓ Devis gratuit et détaillé sous 48h
✓ Techniques écologiques et économiques
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité, les matériaux et les finitions choisies. Pour une maison moyenne de 100m² à Toulon, comptez un budget global entre 3 000€ et 8 000€. Nos devis sont toujours transparents et détaillés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la taille du bâtiment. Pour un immeuble standard, notre équipe réalise généralement les travaux entre 10 et 20 jours ouvrables. Un petit immeuble de 3 étages prendra environ 10 jours, tandis qu&apos;un immeuble de 6 étages nécessitera plutôt 15-20 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 15-20 ans, ou lorsque des signes de dégradation apparaissent : fissures, infiltrations, écaillage de peinture. Pour les copropriétés à Toulon, la loi impose un ravalement tous les 10 ans. Notre diagnostic gratuit vous aidera à déterminer le moment opportun.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Toulon ?
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
