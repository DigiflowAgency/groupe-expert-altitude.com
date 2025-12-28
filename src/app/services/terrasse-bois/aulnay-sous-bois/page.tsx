import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com, votre partenaire ré',
  keywords: 'terrasse bois aulnay-sous-bois, terrasse sur plot aulnay-sous-bois, terrasse bois sur plot aulnay-sous-bois, pose terrasse bois aulnay-sous-bois, terrasse composite aulnay-sous-bois, terrasse bois piscine aulnay-sous-bois',
};

export default function TerrasseBoisAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par le Groupe Expert Altitude Com, votre partenaire référence à Aulnay-sous-Bois. Nos solutions innovantes allient esthétique et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie harmonieux et fonctionnel. Notre expertise nous permet de réaliser des terrasses adaptées à tous les environnements, qu&apos;il s&apos;agisse d&apos;une surface plane ou en légère pente. Nous sélectionnons rigoureusement des matériaux haut de gamme, comme les bois composites résistants aux intempéries ou les essences naturelles durables. Notre processus comprend une étude précise du terrain, un nivellement méticuleux et une pose technique utilisant des plots réglables garantissant une stabilité optimale. À Aulnay-sous-Bois, nous intervenons avec un savoir-faire reconnu, en respectant les normes environnementales et esthétiques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans dans l&apos;aménagement extérieur, 2) Un devis personnalisé et transparent sans frais cachés, 3) Des matériaux sélectionnés pour leur qualité et leur durabilité, 4) Une équipe de professionnels certifiés intervenant sur tout Aulnay-sous-Bois et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite, pin traité) et la complexité de l&apos;installation. Un projet moyen de 20m² représente un investissement entre 1 600€ et 5 000€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité, mais en moyenne, comptez 2 à 5 jours pour un projet de 20-30m². Notre équipe optimise chaque étape pour une réalisation rapide et précise.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le bois composite (très résistant), l&apos;ipé (très dense), le cedre rouge (naturellement imputrescible) et le pin traité autoclave. Chaque essence présente des avantages en termes de durabilité, d&apos;entretien et de budget.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Aulnay-sous-Bois ?
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
