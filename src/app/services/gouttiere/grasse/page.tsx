import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Grasse | Groupe Expert Altitude Com',
  description: 'Situé au cœur de Grasse, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales. Nous p',
  keywords: 'gouttiere grasse, pose gouttiere grasse, reparation gouttiere grasse, nettoyage gouttiere grasse, descente pluviale grasse, gouttiere bouchee grasse',
};

export default function GouttiereGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Situé au cœur de Grasse, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales. Nous protégeons votre habitat contre les risques d&apos;infiltration grâce à un savoir-faire technique précis et des solutions sur mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a Grasse</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;ensemble des besoins des propriétaires grassois, depuis la pose initiale jusqu&apos;à l&apos;entretien régulier. Notre équipe qualifiée intervient avec des matériaux haut de gamme - zinc, aluminium, PVC - parfaitement adaptés au climat méditerranéen. Nous réalisons un diagnostic technique complet avant chaque intervention, permettant d&apos;identifier précisément les points faibles et de proposer des solutions durables. Notre processus inclut un relevé métrique précis, une installation soignée avec des fixations garantissant une parfaite étanchéité, et un test final de ruissellement pour assurer la conformité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Grasse, 2) Un devis gratuit et détaillé sous 48h, 3) Des techniciens certifiés et assurés, 4) Des matériaux garantis 10 ans, avec un engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 50€ au mètre linéaire selon le matériau choisi, la complexité de l&apos;installation et la configuration de votre toiture. Un diagnostic précis nous permet de vous proposer un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à pression modérée. Retirez manuellement les débris végétaux, puis utilisez un produit désinfectant. En cas de difficulté, notre équipe intervient rapidement sur Grasse et ses environs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps après la chute des pollens et à l&apos;automne après la chute des feuilles. Cette fréquence permet de prévenir les engorgements et préserver l&apos;intégrité de votre système pluvial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Grasse ?
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
