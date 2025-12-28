import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Protégez votre habitat contre les risques d&apos;infiltration avec Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Caluire-',
  keywords: 'gouttiere caluire-et-cuire, pose gouttiere caluire-et-cuire, reparation gouttiere caluire-et-cuire, nettoyage gouttiere caluire-et-cuire, descente pluviale caluire-et-cuire, gouttiere bouchee caluire-et-cuire',
};

export default function GouttiereCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre habitat contre les risques d&apos;infiltration avec Groupe Expert Altitude Com, votre spécialiste en gouttières et descentes pluviales à Caluire-et-Cuire. Nous intervenons sur l&apos;ensemble des systèmes d&apos;évacuation des eaux pluviales pour garantir la longévité et la performance de votre toiture.</p>

        <h2>Nos services de gouttières et descentes pluviales a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières proposent une solution complète adaptée à chaque configuration architecturale de Caluire-et-Cuire. Nous réalisons la pose, la réparation et l&apos;entretien de systèmes de récupération d&apos;eau performants, en aluminium, zinc ou PVC. Notre approche technique commence par un diagnostic précis de vos besoins, suivi d&apos;une intervention sur-mesure qui prend en compte l&apos;orientation de votre habitation et les contraintes climatiques locales. Chaque intervention comprend un dimensionnement optimal, une fixation sécurisée et un test d&apos;étanchéité garantissant une protection maximale contre les risques d&apos;humidité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans à Caluire-et-Cuire
✓ Techniciens certifiés et équipements professionnels
✓ Devis gratuit et transparent
✓ Interventions rapides sous 48h
✓ Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ par mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard nécessite généralement 20 à 30 mètres linéaires, pour un budget total entre 500€ et 1350€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un furet métallique. Commencez par retirer les feuilles et débris manuellement, puis nettoyez avec un jet d&apos;eau à pression modérée. En cas de blocage persistant, faites appel à un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières deux fois par an : au printemps après la chute des bourgeons et à l&apos;automne après la chute des feuilles. Dans les zones très boisées de Caluire-et-Cuire, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Caluire-et-Cuire ?
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
