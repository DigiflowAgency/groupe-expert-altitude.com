import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ravalement de façade a Pantin | Groupe Expert Altitude Com',
  description: 'Votre façade mérite le meilleur traitement possible, et à Pantin, le Groupe Expert Altitude Com est votre partenaire de référence en matière de ravalement.',
  keywords: 'ravalement facade pantin, ravalement immeuble pantin, renovation facade pantin, peinture facade pantin, entreprise ravalement pantin, ravalement facade maison pantin',
};

export default function RavalementFacadePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ravalement de façade a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre façade mérite le meilleur traitement possible, et à Pantin, le Groupe Expert Altitude Com est votre partenaire de référence en matière de ravalement. Nous transformons vos murs extérieurs en véritable carte de visite esthétique et protectrice pour votre propriété.</p>

        <h2>Nos services de ravalement de façade a Pantin</h2>
        <div className="space-y-4">
          <p>Le ravalement de façade est bien plus qu&apos;une simple opération cosmétique : c&apos;est un investissement durable pour la valorisation et la protection de votre bien immobilier. Notre équipe à Pantin intervient avec une expertise technique précise, en utilisant des techniques et matériaux de dernière génération. Nous réalisons un diagnostic approfondi avant toute intervention, évaluant l&apos;état structural, l&apos;usure des surfaces et les besoins spécifiques de votre bâtiment. Notre processus comprend le nettoyage haute pression, le traitement des fissures, l&apos;application de sous-couches techniques et la finition par des peintures ou enduits haute performance, garantissant une protection optimale contre les intempéries et l&apos;usure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos techniciens sont certifiés et possèdent plus de 15 ans d&apos;expérience. Nous proposons des devis transparents sans surprise, utilisons uniquement des matériaux écologiques et normatifs, et garantissons nos interventions pendant 10 ans. Notre engagement qualité fait de nous le leader du ravalement de façade à Pantin et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix au m² d&apos;un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un ravalement de façade varie entre 40€ et 120€ au m², selon la complexité, les matériaux et les traitements nécessaires. Pour un pavillon standard à Pantin, comptez entre 3 500€ et 8 000€. Un diagnostic précis permettra d&apos;établir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure un ravalement de façade d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée d&apos;un ravalement de façade d&apos;immeuble dépend de sa taille et de son état. En moyenne, pour un immeuble de 4 étages à Pantin, le chantier dure entre 10 et 20 jours ouvrés. Notre planification rigoureuse permet de minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand est-il obligatoire de faire un ravalement de façade ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un ravalement devient obligatoire tous les 10-15 ans selon le Code de la Construction. Il est légalement requis lorsque la façade présente des dégradations significatives, des fissures supérieures à 0,5 mm, ou des signes d&apos;infiltration. À Pantin, nous recommandons une inspection professionnelle tous les 8 ans pour prévenir tout désordre.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de ravalement de façade a Pantin ?
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
