import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Martigues | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour tous vos travaux de gouttières et descentes pluviales sur Martigues et ses environs. Prot',
  keywords: 'gouttiere martigues, pose gouttiere martigues, reparation gouttiere martigues, nettoyage gouttiere martigues, descente pluviale martigues, gouttiere bouchee martigues',
};

export default function GouttiereMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour tous vos travaux de gouttières et descentes pluviales sur Martigues et ses environs. Protégez efficacement votre habitat contre les infiltrations et les dégradations liées à l&apos;eau grâce à notre expertise technique.</p>

        <h2>Nos services de gouttières et descentes pluviales a Martigues</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance. Chaque intervention est réalisée avec une précision chirurgicale, en utilisant des matériaux de haute qualité adaptés à l&apos;environnement maritime de Martigues. Notre équipe de professionnels évalue méticuleusement la configuration de votre toiture pour proposer une solution sur-mesure, garantissant une évacuation optimale des eaux pluviales. Nous travaillons avec des matériaux durables comme l&apos;aluminium, le zinc et le PVC, offrant une résistance maximale aux conditions climatiques locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Martigues
✓ Techniciens certifiés et formés en permanence
✓ Diagnostic gratuit et devis détaillé sans engagement
✓ Interventions rapides, généralement sous 48h
✓ Garantie décennale sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Pour une maison moyenne à Martigues, comptez environ 600-1200€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, un jet haute pression ou un aspirateur spécial. Portez des gants et sécurisez votre échelle. En cas de difficulté, faites appel à un professionnel pour éviter tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans la région de Martigues, avec ses pins et sa végétation, une vérification supplémentaire peut être nécessaire, idéalement tous les 4-6 mois.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Martigues ?
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
