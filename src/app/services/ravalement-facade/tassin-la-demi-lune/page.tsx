import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Le ravalement de façade est votre solution ultime pour redonner vie et élégance à votre patrimoine immobilier à Tassin-la-Demi-Lune. Expert Altitude Com vo',
  keywords: 'ravalement facade tassin-la-demi-lune, ravalement immeuble tassin-la-demi-lune, renovation facade tassin-la-demi-lune, peinture facade tassin-la-demi-lune, entreprise ravalement tassin-la-demi-lune, ravalement facade maison tassin-la-demi-lune',
};

export default function RavalementFacadeTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le ravalement de façade est votre solution ultime pour redonner vie et élégance à votre patrimoine immobilier à Tassin-la-Demi-Lune. Expert Altitude Com vous propose un service sur-mesure qui transformera l&apos;apparence extérieure de votre bien tout en protégeant sa structure.</p>

        <h2>Nos services de ravalement de façade a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple rénovation esthétique. Nos experts interviennent méticuleusement pour restaurer et protéger vos murs extérieurs contre les agressions climatiques. Nous réalisons un diagnostic précis avant toute intervention, identifiant les zones nécessitant un traitement spécifique. Notre processus comprend un nettoyage haute pression, la réparation des fissures, l&apos;application d&apos;un enduit technique et une finition peinture garantissant une protection durable de 10 à 15 ans. Sur Tassin-la-Demi-Lune, nous adaptons chaque chantier aux spécificités architecturales locales, en respectant les normes environnementales et techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence du ravalement de façade. Nos équipes certifiées interviennent avec un matériel de dernière génération. Nous garantissons une intervention propre, rapide et sans surprise. Notre devis détaillé et transparent vous assure une prestation sans frais cachés. Nos réalisations bénéficient d&apos;une garantie décennale, gage de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 80€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la façade. Pour une maison moyenne de 100m² à Tassin-la-Demi-Lune, comptez un budget global entre 4 000€ et 8 000€. Nous proposons un diagnostic gratuit pour un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa surface et de sa configuration. Pour un immeuble de 300m², notre équipe réalise généralement le chantier entre 10 et 15 jours ouvrables. Nous optimisons chaque étape pour minimiser la gêne pour les occupants.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement de façade devient obligatoire tous les 10 ans selon le code de la construction. Il est également nécessaire en cas de dégradations visibles, de fissures, d&apos;infiltrations ou avant une vente immobilière. À Tassin-la-Demi-Lune, nous vous conseillons de programmer cette opération dès les premiers signes de vieillissement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Tassin-la-Demi-Lune ?
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
