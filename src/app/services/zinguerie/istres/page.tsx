import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Istres | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Istres, spécialiste des travaux de toiture et de protection contre les intempér',
  keywords: 'zinguerie istres, travaux zinguerie istres, toiture zinc istres, zingueur istres, reparation zinc istres, zinco reflect istres',
};

export default function ZinguerieIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire zinguerie de référence à Istres, spécialiste des travaux de toiture et de protection contre les intempéries. Nous intervenons sur l&apos;ensemble du territoire istréen avec une expertise technique garantissant la qualité et la durabilité de vos installations.</p>

        <h2>Nos services de travaux de zinguerie a Istres</h2>
        <div className="space-y-4">
          <p>Nos services de zinguerie représentent bien plus qu&apos;une simple intervention technique : c&apos;est une protection globale de votre patrimoine immobilier. Nous réalisons des travaux complets incluant la pose, la réparation et l&apos;entretien de tous vos éléments en zinc, depuis les gouttières jusqu&apos;aux habillages de toiture. Notre équipe maîtrise parfaitement les techniques du Zinco Reflect, une technologie permettant une meilleure résistance aux agressions climatiques. Chaque intervention est précédée d&apos;un diagnostic précis, nous permettant d&apos;adapter notre approche aux spécificités de votre bâtiment et aux contraintes locales d&apos;Istres.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence repose sur trois piliers : expertise technique, réactivité et transparence. Nos zingueurs sont certifiés avec plus de 15 ans d&apos;expérience collective. Nous proposons des devis détaillés sous 48h, un délai d&apos;intervention rapide et une garantie décennale sur l&apos;ensemble de nos prestations. 95% de nos clients nous recommandent dans la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 120€ au m², selon la complexité des travaux. Pour une toiture standard à Istres, comptez environ 80€/m² incluant matériaux et main-d&apos;œuvre. Un diagnostic préalable gratuit nous permet de préciser le devis exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 80 ans. Sa durée de vie dépend de la qualité de la pose, de l&apos;exposition aux intempéries et des entretiens réguliers. Notre technique Zinco Reflect permet d&apos;optimiser cette longévité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc nécessite un nettoyage annuel, l&apos;élimination des mousses et végétations, la vérification de l&apos;étanchéité des raccords et le contrôle de l&apos;état général. Nous proposons des contrats d&apos;entretien préventif adaptés à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Istres ?
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
