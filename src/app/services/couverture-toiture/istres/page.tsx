import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Istres | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste de la couverture et rénovation à Istres. Nous protégeons votre habitat avec ',
  keywords: 'couverture toiture istres, renovation toiture istres, reparation toiture istres, couvreur istres, refection toiture istres, entreprise couverture istres',
};

export default function CouvertureToitureIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste de la couverture et rénovation à Istres. Nous protégeons votre habitat avec des solutions sur-mesure qui garantissent la longévité et la performance de votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Istres</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation de toiture représentent bien plus qu&apos;un simple travail technique : c&apos;est un engagement total envers la qualité et la durabilité. Notre équipe de professionnels intervient sur tous types de toitures - tuiles, ardoises, zinc - en réalisant un diagnostic précis avant toute intervention. À Istres et ses environs, nous proposons des solutions complètes allant de la réparation ponctuelle à la réfection totale, en utilisant les matériaux les plus performants et aux normes RT2020. Notre processus inclut systématiquement une étude thermique, un relevé technique détaillé et une estimation transparente des travaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la couverture, 2) Des artisans certifiés et formés aux techniques les plus récentes, 3) Une intervention rapide et un devis gratuit sous 48h, 4) Une garantie décennale sur tous nos travaux, assurant votre tranquillité totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Istres coûte généralement entre 80€ et 150€ par m², soit un budget total variant de 8 000€ à 25 000€ selon la surface et les matériaux choisis. Ce prix comprend le démontage, l&apos;isolation, la fourniture et la pose des nouveaux matériaux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, mousses importantes, affaissement de la charpente. Un diagnostic tous les 10 ans permet d&apos;anticiper les réparations nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : la possession de certifications RGE, l&apos;existence de références clients locales, les avis en ligne, la proposition d&apos;un devis détaillé, et l&apos;appartenance à une organisation professionnelle comme la FFB.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Istres ?
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
