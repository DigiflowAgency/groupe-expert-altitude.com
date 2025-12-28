import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en ravalement de façade à Saint-Herblain, transforme vos bâtiments avec une expertise technique e',
  keywords: 'ravalement facade saint-herblain, ravalement immeuble saint-herblain, renovation facade saint-herblain, peinture facade saint-herblain, entreprise ravalement saint-herblain, ravalement facade maison saint-herblain',
};

export default function RavalementFacadeSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en ravalement de façade à Saint-Herblain, transforme vos bâtiments avec une expertise technique et esthétique inégalée. Nous sommes spécialisés dans la rénovation complète des façades, en apportant une solution sur-mesure à chaque projet immobilier de notre région.</p>

        <h2>Nos services de ravalement de façade a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service de ravalement de façade représente bien plus qu&apos;une simple opération cosmétique. Nous proposons une intervention technique complète qui protège durablement vos murs contre les intempéries et l&apos;usure. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, évaluant l&apos;état structural de votre façade et définissant le traitement optimal. À Saint-Herblain, nous utilisons uniquement des matériaux haute performance garantissant une protection et une esthétique irréprochables. Notre processus inclut le nettoyage haute pression, le traitement des fissures, l&apos;application de primaires d&apos;accrochage et la finition par des peintures ou enduits techniques adaptés à votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et formés aux dernières normes de rénovation. Nous garantissons un devis transparent sans frais cachés. Notre entreprise dispose de plus de 15 ans d&apos;expérience sur le territoire de Saint-Herblain. Nous proposons systématiquement une garantie décennale sur nos travaux de ravalement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 50€ et 120€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de la surface. Pour une maison moyenne de 100m² à Saint-Herblain, comptez un budget global entre 5 000€ et 12 000€. Nous réalisons un diagnostic précis pour un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade dépend de la surface et de la complexité. Pour un pavillon standard, notre équipe réalise généralement les travaux entre 5 et 10 jours ouvrables. Un immeuble de plusieurs étages peut nécessiter 2 à 4 semaines. Nous établissons toujours un planning détaillé avant le démarrage du chantier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le ravalement devient obligatoire tous les 10 à 15 ans selon l&apos;arrêté municipal, ou en cas de dégradations significatives (fissures, infiltrations, moisissures). À Saint-Herblain, les copropriétés doivent notamment respecter les normes de conservation du patrimoine architectural. Notre expertise vous guide dans cette démarche réglementaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Saint-Herblain ?
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
