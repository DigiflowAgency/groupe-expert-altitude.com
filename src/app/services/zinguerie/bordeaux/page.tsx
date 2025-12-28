import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Bordeaux | Groupe Expert Altitude Com',
  description: 'Spécialiste des travaux de zinguerie à Bordeaux depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture avec une précision e',
  keywords: 'zinguerie bordeaux, travaux zinguerie bordeaux, toiture zinc bordeaux, zingueur bordeaux, reparation zinc bordeaux, zinco reflect bordeaux',
};

export default function ZinguerieBordeauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Bordeaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des travaux de zinguerie à Bordeaux depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture avec une précision et un savoir-faire d&apos;exception. Notre expertise en zinguerie répond aux exigences les plus techniques de l&apos;habitat bordelais, garantissant des solutions durables et esthétiques.</p>

        <h2>Nos services de travaux de zinguerie a Bordeaux</h2>
        <div className="space-y-4">
          <p>La zinguerie constitue un élément essentiel de la protection et de l&apos;esthétique de votre toiture. Notre équipe de professionnels maîtrise parfaitement les techniques de pose, de réparation et d&apos;entretien des systèmes en zinc, en utilisant des matériaux de haute qualité résistant aux conditions climatiques locales. Nous intervenons sur tous types de bâtiments - maisons individuelles, immeubles, bâtiments historiques - en proposant des solutions sur-mesure. Notre processus inclut un diagnostic précis, un devis détaillé et une réalisation minutieuse, avec une attention particulière à l&apos;étanchéité et à la durabilité. Chaque intervention est réalisée avec des équipements professionnels et selon les normes en vigueur, assurant une performance technique optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Bordeaux, 2) Des techniciens certifiés et formés en permanence, 3) Un engagement qualité garanti par des matériaux premium, 4) Une approche transparente avec des devis précis et sans surprise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie généralement entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Pour un projet à Bordeaux, nous proposons des devis personnalisés après un diagnostic gratuit, avec des prix compétitifs et une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 100 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques. À Bordeaux, nos réalisations bénéficient d&apos;une garantie décennale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des points de fixation. Nous recommandons une inspection professionnelle tous les 5-7 ans pour prévenir tout risque de détérioration et maintenir ses performances techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Bordeaux ?
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
