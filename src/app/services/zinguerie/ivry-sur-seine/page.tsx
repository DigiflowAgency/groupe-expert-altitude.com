import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référent en zinguerie sur Ivry-sur-Seine et ses environs. Spécialistes des travaux de toiture et de prot',
  keywords: 'zinguerie ivry-sur-seine, travaux zinguerie ivry-sur-seine, toiture zinc ivry-sur-seine, zingueur ivry-sur-seine, reparation zinc ivry-sur-seine, zinco reflect ivry-sur-seine',
};

export default function ZinguerieIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référent en zinguerie sur Ivry-sur-Seine et ses environs. Spécialistes des travaux de toiture et de protection contre l&apos;eau, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial dans la protection et l&apos;étanchéité de votre habitat. Nos professionnels maîtrisent parfaitement les techniques de pose et de rénovation des éléments en zinc, garantissant une protection optimale contre les infiltrations. Sur Ivry-sur-Seine, nous proposons des solutions sur-mesure adaptées à chaque configuration de toiture, en utilisant des matériaux de haute qualité et des techniques modernes. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention minutieuse, avec un taux de satisfaction de plus de 95% auprès de nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans 2) Des techniciens certifiés et formés aux dernières normes 3) Un engagement qualité avec une garantie décennale 4) Un suivi personnalisé et une transparence totale sur les travaux réalisés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur, et l&apos;état initial de la toiture. Pour Ivry-sur-Seine, notre moyenne se situe autour de 75€/m², incluant main-d&apos;œuvre et matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc bien posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales. Nos réalisations bénéficient d&apos;une garantie de 30 ans.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des raccords. Nous recommandons une inspection professionnelle tous les 5 ans pour prévenir tout risque de détérioration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Ivry-sur-Seine ?
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
