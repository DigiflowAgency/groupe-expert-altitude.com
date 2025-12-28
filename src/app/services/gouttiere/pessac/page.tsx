import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Pessac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Pessac et dans toute la métropole',
  keywords: 'gouttiere pessac, pose gouttiere pessac, reparation gouttiere pessac, nettoyage gouttiere pessac, descente pluviale pessac, gouttiere bouchee pessac',
};

export default function GouttierePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Pessac et dans toute la métropole bordelaise. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et une expertise technique irréprochable.</p>

        <h2>Nos services de gouttières et descentes pluviales a Pessac</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires à Pessac : installation, réparation, nettoyage et maintenance. Notre équipe qualifiée intervient sur tous types de bâtiments, qu&apos;il s&apos;agisse de maisons individuelles, copropriétés ou bâtiments professionnels. Nous utilisons uniquement des matériaux de haute qualité - zinc, aluminium, PVC - garantissant une durabilité et une résistance maximales aux conditions climatiques locales. Notre processus d&apos;intervention comprend un diagnostic précis, une proposition technique détaillée et une réalisation professionnelle, avec un suivi personnalisé après travaux.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans dans le domaine des gouttières, 2) Un devis gratuit et sans engagement, 3) Des techniciens certifiés et assurés, 4) Des interventions rapides sur Pessac et ses environs, avec un délai moyen de 48h après diagnostic.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi, la complexité de l&apos;installation et l&apos;accessibilité de votre toiture. Chez Groupe Expert Altitude Com, nous proposons un devis personnalisé précis sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un décrottoir ou un furet, retirez manuellement les débris, puis rincez à l&apos;eau sous pression. En cas de difficulté ou d&apos;encrassement important, notre équipe à Pessac intervient rapidement avec du matériel professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. Cette fréquence permet d&apos;éviter l&apos;accumulation de feuilles, mousse et autres obstructions qui peuvent causer des dommages structurels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Pessac ?
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
