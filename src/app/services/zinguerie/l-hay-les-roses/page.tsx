import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur L&apos;Haÿ-les-Roses et ses environs. Spécialistes des travaux de zinguerie, no',
  keywords: 'zinguerie l'haÿ-les-roses, travaux zinguerie l'haÿ-les-roses, toiture zinc l'haÿ-les-roses, zingueur l'haÿ-les-roses, reparation zinc l'haÿ-les-roses, zinco reflect l'haÿ-les-roses',
};

export default function ZinguerieLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur L&apos;Haÿ-les-Roses et ses environs. Spécialistes des travaux de zinguerie, nous protégeons et sublimez vos toitures avec un savoir-faire technique et une précision chirurgicale.</p>

        <h2>Nos services de travaux de zinguerie a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;intégralité des besoins en rénovation et protection de toiture. Nous intervenons sur tous types de bâtiments, des pavillons aux immeubles collectifs, en utilisant des techniques et matériaux de haute qualité. Notre expertise technique nous permet de réaliser des travaux durables, avec une attention particulière à l&apos;étanchéité et à la résistance des ouvrages. Chaque intervention est précédée d&apos;un diagnostic précis permettant d&apos;identifier les points faibles et de proposer des solutions sur-mesure adaptées à votre configuration à L&apos;Haÿ-les-Roses.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : Un bureau d&apos;études intégré garantissant des solutions techniques innovantes, Une équipe de zingueurs certifiés avec plus de 15 ans d&apos;expérience, Un engagement qualité avec une garantie décennale, Des interventions rapides et un devis personnalisé sous 48h.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, l&apos;accessibilité et les matériaux utilisés. Un diagnostic précis nous permet de vous proposer un devis transparent sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement posée et entretenue peut durer entre 50 et 80 ans. Sa durabilité exceptionnelle en fait un matériau particulièrement recommandé pour les constructions à L&apos;Haÿ-les-Roses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et le traitement préventif contre les mousses et lichens. Nous proposons des contrats de maintenance adaptés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a L'Haÿ-les-Roses ?
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
