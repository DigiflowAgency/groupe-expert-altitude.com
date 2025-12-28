import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com, le spécialiste des aménagements extérieurs ',
  keywords: 'terrasse bois salon-de-provence, terrasse sur plot salon-de-provence, terrasse bois sur plot salon-de-provence, pose terrasse bois salon-de-provence, terrasse composite salon-de-provence, terrasse bois piscine salon-de-provence',
};

export default function TerrasseBoisSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot élégante et durable par Groupe Expert Altitude Com, le spécialiste des aménagements extérieurs à Salon-de-Provence. Nos solutions sur-mesure s&apos;adaptent parfaitement à tous vos espaces, garantissant un résultat esthétique et fonctionnel.</p>

        <h2>Nos services de terrasse bois sur plot a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente la solution idéale pour valoriser vos espaces extérieurs avec style et technicité. Notre expertise nous permet de réaliser des terrasses parfaitement nivelées, offrant une stabilité optimale grâce à un système de plots réglables. Nous travaillons principalement avec des matériaux nobles comme le bois composite et le bois exotique, sélectionnés pour leur résistance aux intempéries et leur durabilité. Chaque projet à Salon-de-Provence et ses environs bénéficie d&apos;un diagnostic précis, permettant une adaptation parfaite à la configuration du terrain, avec une pose qui respecte les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe dispose de plus de 15 ans d&apos;expérience, une garantie décennale, un devis personnalisé sous 48h et des matériaux certifiés. Nous proposons des solutions 100% adaptées à vos besoins, avec un accompagnement technique complet et une réactivité qui fait notre réputation dans toute la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis et la complexité de l&apos;installation. Pour un projet standard à Salon-de-Provence, comptez environ 120€/m² avec pose comprise, incluant le bois composite et les plots techniques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne, notre équipe réalise un chantier de 20-30 m² en 2-3 jours ouvrables. Un projet complexe peut nécessiter jusqu&apos;à 5 jours pour un résultat irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (très résistant), l&apos;ipé (bois exotique très dense), ou le robinier (bois local imputrescible). Chaque essence présente des avantages : le composite offre une maintenance minimale, l&apos;ipé une durabilité exceptionnelle, et le robinier une alternative écologique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Salon-de-Provence ?
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
