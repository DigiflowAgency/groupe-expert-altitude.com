import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Villeurbanne et ses environs. Spécialistes des travaux de toiture en zinc, no',
  keywords: 'zinguerie villeurbanne, travaux zinguerie villeurbanne, toiture zinc villeurbanne, zingueur villeurbanne, reparation zinc villeurbanne, zinco reflect villeurbanne',
};

export default function ZinguerieVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Villeurbanne et ses environs. Spécialistes des travaux de toiture en zinc, nous intervenons avec précision et expertise pour protéger et embellir votre habitat.</p>

        <h2>Nos services de travaux de zinguerie a Villeurbanne</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial de la protection de votre toiture, garantissant l&apos;étanchéité et la longévité de votre bâtiment. Notre équipe de professionnels maîtrise parfaitement les techniques de pose et de rénovation des éléments en zinc, qu&apos;il s&apos;agisse de gouttières, de bavettes, ou de couvertures complètes. À Villeurbanne, nous adaptons nos interventions aux spécificités architecturales locales, en utilisant des matériaux de haute qualité qui résistent aux conditions climatiques variées. Notre processus comprend un diagnostic précis, une préparation méticuleuse et une réalisation selon les normes techniques les plus exigeantes, avec une attention particulière portée à l&apos;esthétique et à la performance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans en zinguerie 2) Des techniciens certifiés et formés aux dernières innovations 3) Un devis personnalisé et transparent sans frais cachés 4) Une garantie décennale sur tous nos travaux. Nous sommes reconnus comme le partenaire zinguerie de confiance à Villeurbanne.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité du chantier. Un diagnostic précis nous permet de vous proposer un devis détaillé et compétitif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;épaisseur du zinc utilisé (généralement entre 0,6 et 0,8 mm) et des conditions environnementales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses et lichens. Nous recommandons un contrôle professionnel tous les 5 à 7 ans pour garantir sa longévité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Villeurbanne ?
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
