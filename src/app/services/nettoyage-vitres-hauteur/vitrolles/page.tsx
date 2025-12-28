import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Vitrolles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vitrolles, en proposant des solutions professionnelles et sécurisées pour to',
  keywords: 'nettoyage vitres hauteur vitrolles, lavage vitres immeuble vitrolles, nettoyage facade vitree vitrolles, cordiste vitre vitrolles, entreprise nettoyage vitres vitrolles, nettoyage verriere vitrolles',
};

export default function NettoyageVitresHauteurVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Vitrolles, en proposant des solutions professionnelles et sécurisées pour tous vos bâtiments. Spécialistes du nettoyage de surfaces vitrées complexes, nous intervenons sur l&apos;ensemble du territoire de Vitrolles et ses environs.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur combine technicité et sécurité maximale. Nos techniciens cordistes, formés aux dernières normes de sécurité, utilisent des techniques d&apos;accès sur cordes permettant d&apos;atteindre les surfaces les plus difficiles. Que ce soit pour des immeubles, des façades vitrées ou des vérandas, nous garantissons un nettoyage impeccable sans échafaudage ni nacelle. Nos équipements haute technologie et nos produits écologiques assurent une brillance incomparable, tout en respectant l&apos;environnement et les surfaces traitées. Chaque intervention est personnalisée, avec un diagnostic précis et un devis détaillé adapté à vos besoins spécifiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec des techniques innovantes, un matériel de pointe et une assurance responsabilité professionnelle complète. Nous sommes spécialisés dans les interventions complexes à Vitrolles, avec plus de 15 ans d&apos;expérience et 98% de clients satisfaits. Notre engagement qualité se traduit par des résultats impeccables et une transparence totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon la difficulté d&apos;accès, la hauteur et la fréquence. Pour un immeuble standard à Vitrolles, comptez un budget global entre 500€ et 2500€. Un devis personnalisé gratuit vous permettra d&apos;avoir un tarif précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les bâtiments en centre-ville ou proche des zones industrielles nécessiteront un nettoyage plus fréquent, tandis que les immeubles moins exposés pourront se contenter de deux interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage de vitres en hauteur impose des normes de sécurité strictes : utilisation de harnais, formation CACES, équipements homologués, assurance professionnelle. Nos techniciens sont certifiés travaux en hauteur et suivent des protocoles rigoureux garantissant zéro risque pour eux-mêmes et votre propriété.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Vitrolles ?
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
