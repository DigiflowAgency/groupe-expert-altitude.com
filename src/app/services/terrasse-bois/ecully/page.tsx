import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Écully | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Écully. Nos solutions',
  keywords: 'terrasse bois écully, terrasse sur plot écully, terrasse bois sur plot écully, pose terrasse bois écully, terrasse composite écully, terrasse bois piscine écully',
};

export default function TerrasseBoisEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure par Groupe Expert Altitude Com à Écully. Nos solutions haut de gamme allient esthétique et durabilité pour sublimer vos espaces extérieurs.</p>

        <h2>Nos services de terrasse bois sur plot a Écully</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente bien plus qu&apos;un simple aménagement : c&apos;est la création d&apos;un espace de vie supplémentaire. Notre expertise nous permet de réaliser des terrasses adaptées à tous les reliefs et configurations, en privilégiant des matériaux de haute qualité comme le bois composite et le bois exotique. Chaque projet est étudié méticuleusement pour garantir une parfaite stabilité, avec une pose précise sur plots permettant une excellente isolation et une ventilation optimale. Nos équipes maîtrisent parfaitement les techniques de nivellement et d&apos;adaptation, assurant un résultat impeccable même sur des surfaces complexes à Écully et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans dans l&apos;aménagement extérieur, 2) Des matériaux certifiés et écologiques, 3) Un devis personnalisé et gratuit, 4) Une réalisation clé en main avec des délais maîtrisés. Notre engagement qualité fait la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ le m², selon les matériaux choisis (bois exotique, composite) et la complexité de l&apos;installation. Pour un projet à Écully, comptez en moyenne 120€/m² pour une pose professionnelle et des matériaux de qualité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la configuration, mais en moyenne, notre équipe réalise 20 à 30 m² par jour. Un projet standard de 40 m² sera donc terminé en 1-2 jours ouvrables, avec un résultat clé en main.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une terrasse sur plot, nous recommandons le bois composite (garantie 25 ans), l&apos;ipé (très résistant), ou le red cedar (aspect naturel). Le choix dépend de votre budget, de l&apos;exposition et de l&apos;usage prévu, notre conseil personnalisé vous guidera vers le meilleur matériau.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Écully ?
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
