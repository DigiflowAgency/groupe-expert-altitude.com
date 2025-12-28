import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en zinguerie, transforme les toitures du 3e arrondissement parisien avec un savoir-faire technique et une pré',
  keywords: 'zinguerie paris 3e, travaux zinguerie paris 3e, toiture zinc paris 3e, zingueur paris 3e, reparation zinc paris 3e, zinco reflect paris 3e',
};

export default function ZinguerieParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en zinguerie, transforme les toitures du 3e arrondissement parisien avec un savoir-faire technique et une précision chirurgicale. Nous sommes les experts qui protègent et subliment votre patrimoine immobilier grâce à des solutions sur-mesure en travaux de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Paris 3e</h2>
        <div className="space-y-4">
          <p>Nos interventions de zinguerie couvrent l&apos;intégralité des besoins des propriétaires parisiens, depuis les rénovations complexes jusqu&apos;aux installations neuves. Notre équipe maîtrise parfaitement les techniques de pose et de réparation des éléments en zinc, garantissant une étanchéité optimale et une durabilité exceptionnelle. Nous utilisons uniquement des matériaux de haute qualité, conformes aux normes françaises, qui résistent aux conditions climatiques spécifiques de Paris. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention minutieuse, avec un suivi personnalisé pour chaque projet de zinguerie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos zingueurs sont certifiés et disposent de plus de 15 ans d&apos;expérience dans le 3e arrondissement. Nous proposons une garantie décennale, un délai d&apos;intervention rapide de 48h et un taux de satisfaction client de 98%. Notre engagement qualité fait la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 80€ et 250€ au m², selon la complexité du chantier, l&apos;accessibilité et les matériaux utilisés. Pour un projet à Paris 3e, comptez en moyenne 150€/m² pour une intervention complète et professionnelle.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Les systèmes modernes avec traitement Zinco Reflect peuvent même atteindre 100 ans de durée de vie, avec un entretien régulier et des interventions préventives.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de dégradation et maintenir les performances du système.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 3e ?
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
