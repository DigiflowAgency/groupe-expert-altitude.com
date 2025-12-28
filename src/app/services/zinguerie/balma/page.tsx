import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Balma | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Balma et ses environs. Spécialistes des travaux de toiture et de protectio',
  keywords: 'zinguerie balma, travaux zinguerie balma, toiture zinc balma, zingueur balma, reparation zinc balma, zinco reflect balma',
};

export default function ZinguerieBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Balma et ses environs. Spécialistes des travaux de toiture et de protection, nous intervenons avec précision et expertise pour tous vos projets de zinguerie.</p>

        <h2>Nos services de travaux de zinguerie a Balma</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie couvrent l&apos;ensemble des besoins en protection et finition de toiture. Nous réalisons des travaux sur mesure, en utilisant des techniques modernes et des matériaux de haute qualité. Notre équipe maîtrise parfaitement les techniques de pose et de rénovation, garantissant une étanchéité optimale et une durabilité exceptionnelle. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant de proposer la solution la plus adaptée à votre bâtiment. Nos zingueurs certifiés interviennent sur Balma et tout le sud-ouest, avec un engagement de résultat et de qualité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : 1) Un savoir-faire de plus de 15 ans dans le domaine de la zinguerie, 2) Des techniciens hautement qualifiés et formés aux dernières normes, 3) Un engagement qualité garanti par un suivi personnalisé, 4) Des tarifs transparents et compétitifs adaptés à chaque projet local.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, le type de toiture et les matériaux utilisés. Un diagnostic préalable gratuit nous permet de vous proposer un devis précis et détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa longévité exceptionnelle dépend de la qualité de la pose, de l&apos;exposition et de l&apos;entretien régulier.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des débris, la vérification des joints et des raccords. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir sa parfaite conservation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Balma ?
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
