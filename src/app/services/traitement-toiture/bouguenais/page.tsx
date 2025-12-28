import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Bouguenais et ses environs. Spécialistes du nett',
  keywords: 'demoussage toiture bouguenais, traitement toiture bouguenais, nettoyage toiture bouguenais, antimousse toiture bouguenais, hydrofuge toiture bouguenais, entretien toiture bouguenais',
};

export default function TraitementToitureBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Bouguenais et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons avec précision pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région nantaise. Nous utilisons des techniques professionnelles qui éliminent efficacement les mousses, lichens et salissures qui détériorent votre couverture. Notre processus comprend un diagnostic précis, un nettoyage haute pression adapté et un traitement antimousse qui protège durablement votre toiture contre les infiltrations et la prolifération végétale. Nos équipes à Bouguenais interviennent avec un équipement de haute technicité, garantissant un résultat impeccable et une protection qui peut durer jusqu&apos;à 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Bouguenais
- Techniciens certifiés et assurés
- Traitement écologique et respectueux de l&apos;environnement
- Devis gratuit et personnalisé sous 48h
- Garantie satisfaction de 2 ans sur nos interventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et le niveau de salissement. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3000€ incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, soit entre avril et octobre. Ces périodes offrent des conditions météorologiques optimales : température entre 10-25°C, faible humidité, pas de risque de gel ni de pluie intense.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Utilisez un produit spécifique adapté à votre type de couverture (tuiles, ardoises), appliquez au rouleau ou par pulvérisation en 2 couches croisées, en respectant les conditions de température et d&apos;humidité recommandées par le fabricant.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Bouguenais ?
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
