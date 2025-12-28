import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur toute la région de Villenave-d&apos;Ornon. Nous protégeons v',
  keywords: 'gouttiere villenave-d'ornon, pose gouttiere villenave-d'ornon, reparation gouttiere villenave-d'ornon, nettoyage gouttiere villenave-d'ornon, descente pluviale villenave-d'ornon, gouttiere bouchee villenave-d'ornon',
};

export default function GouttiereVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur toute la région de Villenave-d&apos;Ornon. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions techniques précises et un savoir-faire local reconnu.</p>

        <h2>Nos services de gouttières et descentes pluviales a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Villenave-d&apos;Ornon : installation, réparation et maintenance. Notre équipe qualifiée intervient sur tous types de bâtiments, en proposant des solutions sur-mesure adaptées à chaque configuration architecturale. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, garantissant une durabilité minimale de 15 ans. Notre processus comprend un diagnostic technique précis, une proposition personnalisée et une intervention rapide et professionnelle, avec un engagement de résultat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 12 ans à Villenave-d&apos;Ornon
✓ Techniciens certifiés et formés aux dernières normes
✓ Devis gratuit et transparent
✓ Intervention sous 48h
✓ Matériaux garantis 15 ans
✓ SAV et suivi personnalisé</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des tarifs compétitifs avec un devis détaillé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un débourbeur manuel ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis utilisez un flexible avec un embout spécial pour éliminer les obstructions profondes. En cas de difficulté, faites appel à un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : un au printemps et un à l&apos;automne. Ces périodes correspondent aux chutes de feuilles et permettent d&apos;éviter l&apos;accumulation de débris qui peut provoquer des engorgements et des infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Villenave-d'Ornon ?
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
