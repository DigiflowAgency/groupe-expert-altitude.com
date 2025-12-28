import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Villejuif | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage toiture à Villejuif et ses environs. Spécialistes du netto',
  keywords: 'demoussage toiture villejuif, traitement toiture villejuif, nettoyage toiture villejuif, antimousse toiture villejuif, hydrofuge toiture villejuif, entretien toiture villejuif',
};

export default function TraitementToitureVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage toiture à Villejuif et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Villejuif</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage toiture répond aux problématiques spécifiques des habitations de Villejuif, où l&apos;humidité favorise le développement rapide des mousses et lichens. Notre équipe technique utilise des techniques professionnelles garantissant un nettoyage en profondeur et une protection durable. Nous réalisons un diagnostic précis avant intervention, permettant de déterminer le traitement antimousse le plus adapté à votre toiture. Notre processus comprend un nettoyage haute précision, l&apos;application d&apos;un traitement biologique anti-prolifération et une finition hydrofuge qui protège durablement les tuiles et ardoises contre l&apos;humidité et les agressions extérieures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un service sur-mesure. Nos techniciens sont certifiés, notre intervention garantie 5 ans, un devis gratuit sous 48h, et une expertise reconnue dans le traitement des toitures. Nous utilisons uniquement des produits écologiques et respectueux de l&apos;environnement, avec un taux de satisfaction client de 98%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage au m² varie entre 15€ et 35€ selon l&apos;état de la toiture, sa superficie et son accessibilité. Pour une maison moyenne à Villejuif (120m²), comptez un budget global entre 450€ et 900€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement tous les 3-5 ans, ou dès que vous observez les premiers signes de prolifération de mousse et lichen.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. On utilise un produit spécifique pulvérisé uniformément, en 2 couches croisées, permettant une imperméabilisation totale et une protection contre les UV et les intempéries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Villejuif ?
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
