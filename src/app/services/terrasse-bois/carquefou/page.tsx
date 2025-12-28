import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Carquefou | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par les experts du Groupe Altitude Com à Carquefou. No',
  keywords: 'terrasse bois carquefou, terrasse sur plot carquefou, terrasse bois sur plot carquefou, pose terrasse bois carquefou, terrasse composite carquefou, terrasse bois piscine carquefou',
};

export default function TerrasseBoisCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par les experts du Groupe Altitude Com à Carquefou. Nos solutions innovantes allient esthétique et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Carquefou</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre équipe à Carquefou maîtrise parfaitement cette technique qui permet une installation précise et durable. Nous travaillons principalement avec des matériaux composites et bois nobles, garantissant une résistance optimale aux intempéries. Chaque projet fait l&apos;objet d&apos;un diagnostic précis du terrain, avec une étude technique permettant une pose parfaitement nivelée. Nos professionnels utilisent des plots réglables de haute qualité, assurant une stabilité et une ventilation optimales sous la terrasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Carquefou, 2) Un devis personnalisé et gratuit, 3) Des matériaux certifiés et écologiques, 4) Une équipe de professionnels qualifiés et passionnés par leur métier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite) et la complexité de l&apos;installation. Pour un projet moyen de 20m², comptez un budget global entre 1600€ et 5000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface, mais en moyenne, notre équipe réalise 10 à 15 m² par jour. Un projet standard de 30m² sera donc terminé en 2-3 jours ouvrables, installation et finitions comprises.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le red cedar, l&apos;ipé et le padouk, offrant durabilité et résistance. Pour un budget plus accessible, nous recommandons le douglas traité ou les composites aspect bois, garantissant 20-25 ans de durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Carquefou ?
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
