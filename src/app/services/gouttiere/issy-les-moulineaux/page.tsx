import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en gouttières et descentes pluviales à Issy-les-Moulineaux, protège votre habitat depuis plus de ',
  keywords: 'gouttiere issy-les-moulineaux, pose gouttiere issy-les-moulineaux, reparation gouttiere issy-les-moulineaux, nettoyage gouttiere issy-les-moulineaux, descente pluviale issy-les-moulineaux, gouttiere bouchee issy-les-moulineaux',
};

export default function GouttiereIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en gouttières et descentes pluviales à Issy-les-Moulineaux, protège votre habitat depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble des systèmes d&apos;évacuation des eaux pluviales avec une expertise technique et un engagement de qualité.</p>

        <h2>Nos services de gouttières et descentes pluviales a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires d&apos;Issy-les-Moulineaux et des environs. Nous proposons une installation précise et durable, en utilisant uniquement des matériaux haut de gamme comme l&apos;aluminium et le zinc. Notre processus comprend un diagnostic initial gratuit, un devis détaillé et une intervention sur-mesure, avec une attention particulière à l&apos;étanchéité et à la résistance. Nos techniciens certifiés garantissent une pose parfaitement alignée, avec une pente optimale pour un écoulement efficace, réduisant les risques d&apos;infiltration et de dégradation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans
- Interventions rapides sous 48h
- Techniciens certifiés et assurés
- Matériaux de haute qualité
- Devis gratuit et transparent
- Satisfaction client garantie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi (PVC, zinc, aluminium) et la complexité de l&apos;installation. Pour une maison moyenne à Issy-les-Moulineaux, comptez environ 500-1200€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un déboucheur à ventouse, un tuyau haute pression ou un câble flexible. Retirez manuellement les feuilles et débris. En cas de blocage persistant, faites appel à un professionnel pour éviter d&apos;endommager le système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières deux fois par an : au printemps et à l&apos;automne. Dans des zones avec beaucoup d&apos;arbres à Issy-les-Moulineaux, une intervention supplémentaire peut être nécessaire, idéalement en novembre et février.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Issy-les-Moulineaux ?
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
