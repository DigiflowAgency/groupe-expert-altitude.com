import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a La Ciotat | Groupe Expert Altitude Com',
  description: 'Experts en zinguerie depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture à La Ciotat avec un savoir-faire technique et u',
  keywords: 'zinguerie la ciotat, travaux zinguerie la ciotat, toiture zinc la ciotat, zingueur la ciotat, reparation zinc la ciotat, zinco reflect la ciotat',
};

export default function ZinguerieLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Experts en zinguerie depuis plus de 15 ans, le Groupe Expert Altitude Com transforme vos projets de toiture à La Ciotat avec un savoir-faire technique et une précision chirurgicale. Nous sommes votre partenaire de confiance pour tous vos travaux de zinguerie, garantissant une protection optimale contre les intempéries.</p>

        <h2>Nos services de travaux de zinguerie a La Ciotat</h2>
        <div className="space-y-4">
          <p>La zinguerie représente un élément crucial de la protection de votre habitat, et notre équipe maîtrise parfaitement tous les aspects techniques de cette spécialité. Nous intervenons sur l&apos;installation, la rénovation et la réparation de systèmes de zinguerie, en utilisant des techniques et matériaux de haute qualité adaptés à chaque configuration architecturale. Notre processus commence par un diagnostic précis de votre toiture, permettant d&apos;identifier les zones nécessitant une intervention. Nous travaillons avec des zincs de dernière génération, offrant une durabilité et une résistance exceptionnelles aux conditions climatiques méditerranéennes de La Ciotat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise technique, notre réactivité et notre engagement qualité. Nos zingueurs sont certifiés, formés aux dernières normes techniques. Nous proposons un devis gratuit sous 48h, une intervention rapide et un suivi personnalisé. Notre taux de satisfaction client dépasse les 95%, preuve de notre professionnalisme.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux, la hauteur du bâtiment et l&apos;état initial de la toiture. Pour un projet standard à La Ciotat, comptez environ 80€/m² incluant main-d&apos;œuvre et matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. La qualité de la pose, l&apos;exposition aux intempéries et l&apos;entretien régulier sont des facteurs déterminants pour sa longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des raccords et le traitement préventif contre la corrosion. Nous recommandons un diagnostic professionnel tous les 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a La Ciotat ?
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
