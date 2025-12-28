import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Noisy-le-Grand et ses environs. Avec plus de 15 ans ',
  keywords: 'demoussage toiture noisy-le-grand, traitement toiture noisy-le-grand, nettoyage toiture noisy-le-grand, antimousse toiture noisy-le-grand, hydrofuge toiture noisy-le-grand, entretien toiture noisy-le-grand',
};

export default function TraitementToitureNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en traitement et démoussage de toiture à Noisy-le-Grand et ses environs. Avec plus de 15 ans d&apos;expertise, nous protégeons et valorisons votre patrimoine immobilier grâce à des techniques innovantes de nettoyage et de traitement.</p>

        <h2>Nos services de traitement et démoussage toiture a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques des habitations de Noisy-le-Grand, confrontées à des conditions climatiques favorisant le développement de mousses et lichens. Notre processus complet commence par un diagnostic précis de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine les végétaux sans endommager les matériaux. Nous utilisons des produits professionnels respectueux de l&apos;environnement, garantissant une élimination durable de la mousse. Notre traitement antimousse et hydrofuge permet de protéger votre toiture contre l&apos;humidité, les infiltrations et la prolifération future de végétaux, prolongeant ainsi sa durée de vie de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale maîtrisée à Noisy-le-Grand
✓ Techniciens certifiés et équipements professionnels
✓ Diagnostic gratuit avant intervention
✓ Traitement écologique et garanti 5 ans
✓ Devis personnalisé sous 48h
✓ Plus de 500 toitures traitées avec succès</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et le type de traitement nécessaire. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Un devis précis sera établi après diagnostic personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, périodes où la croissance des mousses est moins active. Idéalement, réalisez un traitement tous les 3 à 5 ans, ou dès que vous observez les premiers signes de prolifération végétale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Utilisez un produit adapté à votre type de toiture (tuiles, ardoises), appliquez au pulvérisateur en couche uniforme, par température entre 10 et 25°C, sans risque de pluie dans les 24h suivantes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Noisy-le-Grand ?
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
