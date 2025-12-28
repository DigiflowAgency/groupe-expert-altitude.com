import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Montreuil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Montreuil et ses environs. Spé',
  keywords: 'gouttiere montreuil, pose gouttiere montreuil, reparation gouttiere montreuil, nettoyage gouttiere montreuil, descente pluviale montreuil, gouttiere bouchee montreuil',
};

export default function GouttiereMontreuilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Montreuil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Montreuil et ses environs. Spécialistes de la protection de votre habitat, nous intervenons avec précision et expertise pour garantir un système d&apos;évacuation des eaux optimal.</p>

        <h2>Nos services de gouttières et descentes pluviales a Montreuil</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Montreuil : installation, réparation, nettoyage et maintenance. Notre équipe qualifiée utilise des techniques modernes et des matériaux haute durabilité pour assurer une protection maximale contre les infiltrations et les dégradations. Chaque intervention commence par un diagnostic précis de votre système d&apos;évacuation, permettant de proposer une solution sur-mesure. Nous travaillons avec différents matériaux - zinc, aluminium, PVC - en garantissant une pose parfaitement étanche et esthétique. Notre objectif : protéger durablement votre patrimoine contre les risques d&apos;humidité et d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Montreuil
- Techniciens certifiés et formés en continu
- Devis gratuit et transparent
- Interventions rapides (48h maximum)
- Matériaux de qualité professionnelle
- Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic précis sur site nous permet de vous proposer un devis détaillé et personnalisé, sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet d&apos;eau à haute pression. Retirez manuellement les feuilles et débris, puis nettoyez avec un produit adapté. En cas de difficulté, notre équipe à Montreuil intervient rapidement pour un débouchage professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. Cette fréquence permet d&apos;éviter l&apos;accumulation de débris et de prévenir les obstructions potentielles qui pourraient endommager votre système d&apos;évacuation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Montreuil ?
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
