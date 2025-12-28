import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Saint-Denis, spécialiste des travaux de toiture et de protection contre les inf',
  keywords: 'zinguerie saint-denis, travaux zinguerie saint-denis, toiture zinc saint-denis, zingueur saint-denis, reparation zinc saint-denis, zinco reflect saint-denis',
};

export default function ZinguerieSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Saint-Denis, spécialiste des travaux de toiture et de protection contre les infiltrations. Nous intervenons sur l&apos;ensemble des projets de zinguerie avec une expertise technique reconnue dans toute la région parisienne.</p>

        <h2>Nos services de travaux de zinguerie a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en rénovation et protection de toiture. Notre équipe maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, garantissant une étanchéité optimale et une durabilité maximale. Nous utilisons uniquement des matériaux de haute qualité, conformes aux normes professionnelles, pour assurer une protection durable contre les intempéries. Notre processus débute par un diagnostic précis de votre toiture, suivi d&apos;un devis détaillé et transparent. Chaque intervention à Saint-Denis est personnalisée, avec une attention particulière portée à la préservation de l&apos;esthétique et de la structure de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en zinguerie 2) Une équipe certifiée et formée aux dernières techniques 3) Un engagement qualité avec garantie décennale 4) Un service sur-mesure adapté à chaque configuration architecturale à Saint-Denis</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité de la toiture. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales à Saint-Denis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour prévenir tout risque de dégradation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Saint-Denis ?
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
