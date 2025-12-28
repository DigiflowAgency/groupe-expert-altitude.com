import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Arles | Groupe Expert Altitude Com',
  description: 'Dans la magnifique région d&apos;Arles, où l&apos;histoire et la modernité se rencontrent, le ravalement de façade devient essentiel pour préserver l&apos;esthétique et l',
  keywords: 'ravalement facade arles, ravalement immeuble arles, renovation facade arles, peinture facade arles, entreprise ravalement arles, ravalement facade maison arles',
};

export default function RavalementFacadeArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la magnifique région d&apos;Arles, où l&apos;histoire et la modernité se rencontrent, le ravalement de façade devient essentiel pour préserver l&apos;esthétique et la valeur de votre patrimoine immobilier. Notre expertise technique garantit une rénovation impeccable qui met en valeur votre bien.</p>

        <h2>Nos services de ravalement de façade a Arles</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération de peinture. C&apos;est un processus complet de rénovation qui protège et embellit votre bâtiment contre les agressions climatiques. Notre équipe du Groupe Expert Altitude Com intervient sur tous types de surfaces à Arles : maisons individuelles, immeubles et bâtiments historiques. Nous réalisons un diagnostic précis, préparons soigneusement les surfaces par un décapage et un traitement adapté, puis appliquons des techniques de peinture et d&apos;imperméabilisation de dernière génération. Notre objectif : une façade durablement protégée, aux couleurs harmonieuses qui respectent l&apos;environnement architectural arlésien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique et le professionnalisme. Nos équipes sont certifiées RGE, garantissant une intervention de haute qualité. Nous proposons des devis transparents sans surprise, utilisons des matériaux écologiques et offrons une garantie décennale. Nos 15 ans d&apos;expérience dans la région nous permettent de comprendre les spécificités architecturales locales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 30€ et 80€ au m², selon la complexité du chantier, l&apos;état initial du support et les matériaux choisis. Pour une maison moyenne de 100m², comptez un budget global entre 3 000€ et 8 000€. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et de la complexité. Pour un pavillon standard à Arles, notre équipe réalise généralement le chantier en 5 à 10 jours ouvrables. Un immeuble de plusieurs étages peut nécessiter 2 à 4 semaines. Nous optimisons toujours les délais sans compromettre la qualité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 ans selon le Code de la Construction, ou lorsque l&apos;état de la façade présente des dégradations significatives. Dans les copropriétés arlésiennes, une décision d&apos;assemblée générale peut déclencher un ravalement. Des aides financières existent pour la rénovation énergétique et l&apos;amélioration de l&apos;habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Arles ?
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
