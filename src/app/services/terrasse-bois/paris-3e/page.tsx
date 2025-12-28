import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Paris 3e | Groupe Expert Altitude Com',
  description: 'Transformez votre espace extérieur à Paris 3e avec une terrasse bois sur plot élégante et durable, conçue par les experts en aménagement du Groupe Expert A',
  keywords: 'terrasse bois paris 3e, terrasse sur plot paris 3e, terrasse bois sur plot paris 3e, pose terrasse bois paris 3e, terrasse composite paris 3e, terrasse bois piscine paris 3e',
};

export default function TerrasseBoisParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre espace extérieur à Paris 3e avec une terrasse bois sur plot élégante et durable, conçue par les experts en aménagement du Groupe Expert Altitude Com. Nos solutions sur-mesure valorisent instantanément votre propriété avec un design contemporain et fonctionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Paris 3e</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est une véritable extension de votre habitat. Notre expertise technique nous permet de réaliser des terrasses parfaitement nivelées, garantissant une stabilité optimale grâce à un système de plots réglables. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, offrant une résistance exceptionnelle aux intempéries parisiennes. Notre processus comprend une étude précise du terrain, une préparation minutieuse du support et une pose selon les normes les plus strictes, avec une attention particulière portée à l&apos;esthétique et à la durabilité. Chaque projet à Paris 3e est unique et personnalisé, s&apos;adaptant parfaitement à la configuration de votre espace extérieur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée cumule plus de 15 ans d&apos;expérience en aménagement extérieur, nous garantissons une intervention rapide sur Paris 3e, nos devis sont précis et transparents, et nous proposons une garantie décennale sur tous nos travaux. Nos réalisations allient technicité et créativité pour des terrasses qui subliment votre patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ au m², selon les matériaux choisis. Pour un projet standard de 20m² à Paris 3e, comptez un budget global entre 2 400€ et 5 000€. Les facteurs influençant le prix incluent le type de bois, la complexité de l&apos;installation et les finitions souhaitées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne, notre équipe réalise un chantier de 20m² en 2 à 4 jours ouvrés. Pour un projet à Paris 3e, nous optimisons chaque étape : préparation du terrain, pose des plots, installation des lames, et finitions.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, le bois exotique comme l&apos;ipé pour son esthétique, ou le mélèze pour son prix attractif. Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu. À Paris 3e, nous conseillons des essences résistantes aux variations climatiques et faciles d&apos;entretien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Paris 3e ?
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
