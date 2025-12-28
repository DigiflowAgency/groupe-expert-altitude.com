import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Noisy-le-Grand, spécialiste des travaux de toiture et de protection contre les inf',
  keywords: 'zinguerie noisy-le-grand, travaux zinguerie noisy-le-grand, toiture zinc noisy-le-grand, zingueur noisy-le-grand, reparation zinc noisy-le-grand, zinco reflect noisy-le-grand',
};

export default function ZinguerieNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Noisy-le-Grand, spécialiste des travaux de toiture et de protection contre les infiltrations. Nous intervenons sur l&apos;ensemble du territoire de Seine-Saint-Denis avec une expertise technique irréprochable.</p>

        <h2>Nos services de travaux de zinguerie a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la préservation et la longévité de votre toiture. Nos professionnels maîtrisent parfaitement les techniques de pose et de réparation des éléments en zinc, garantissant une étanchéité optimale et une protection durable contre les intempéries. Nous utilisons uniquement des matériaux de haute qualité, conformes aux normes en vigueur, qui résistent aux variations climatiques de la région parisienne. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation méticuleuse, avec une attention particulière portée aux points singuliers comme les gouttières, les chéneaux et les raccords.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la zinguerie, 2) Des techniciens certifiés et formés en continu, 3) Un engagement qualité avec une garantie décennale, 4) Un service sur-mesure adapté à chaque configuration de toiture à Noisy-le-Grand.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, les matériaux utilisés et l&apos;accessibilité du chantier. Un diagnostic précalable est toujours recommandé pour obtenir un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé et des conditions environnementales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des raccords et le traitement préventif contre la corrosion. Un professionnel recommande un contrôle tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Noisy-le-Grand ?
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
