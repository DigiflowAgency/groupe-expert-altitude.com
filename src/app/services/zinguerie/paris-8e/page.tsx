import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Paris 8e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Paris 8e, proposant des solutions techniques innovantes pour protéger et v',
  keywords: 'zinguerie paris 8e, travaux zinguerie paris 8e, toiture zinc paris 8e, zingueur paris 8e, reparation zinc paris 8e, zinco reflect paris 8e',
};

export default function ZinguerieParis8ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Paris 8e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Paris 8e, proposant des solutions techniques innovantes pour protéger et valoriser vos toitures. Notre expertise en travaux de zinguerie garantit des interventions précises et durables au cœur de la capitale.</p>

        <h2>Nos services de travaux de zinguerie a Paris 8e</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et protection de toiture. Nous intervenons avec des techniques de pointe pour installer, réparer et entretenir vos systèmes de couverture en zinc, en utilisant des matériaux haute qualité résistant aux conditions climatiques parisiennes. Notre équipe maîtrise parfaitement les techniques de zingage, du relevé technique précis jusqu&apos;à la pose finale, en garantissant une étanchéité optimale et une esthétique impeccable. Nous proposons également des solutions Zinco Reflect permettant une meilleure réflexion thermique et une durabilité accrue.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de 15 ans dans le domaine de la zinguerie parisienne, 2) Des techniciens certifiés et formés aux dernières normes techniques, 3) Un devis gratuit et détaillé sous 48h, 4) Une intervention rapide et professionnelle sur Paris 8e et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité du chantier. Un diagnostic précis nous permet de vous proposer un devis personnalisé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa longévité dépend de la qualité de pose, de l&apos;épaisseur du zinc utilisé et des conditions environnementales. Notre garantie décennale vous assure une tranquillité totale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de corrosion ou de déformation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Paris 8e ?
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
