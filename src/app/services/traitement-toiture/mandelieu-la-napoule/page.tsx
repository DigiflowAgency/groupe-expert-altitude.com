import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Mandelieu-la-Napoule et ses environs. Spécial',
  keywords: 'demoussage toiture mandelieu-la-napoule, traitement toiture mandelieu-la-napoule, nettoyage toiture mandelieu-la-napoule, antimousse toiture mandelieu-la-napoule, hydrofuge toiture mandelieu-la-napoule, entretien toiture mandelieu-la-napoule',
};

export default function TraitementToitureMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Mandelieu-la-Napoule et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région. Grâce à une méthodologie précise, nous éliminons méticuleusement la mousse, les algues et les lichens qui détériorent votre couverture. Notre équipe utilise des techniques professionnelles et des produits écologiques garantissant un résultat optimal sans endommager les matériaux. Le traitement comprend un nettoyage haute pression adapté, l&apos;application d&apos;un antimousse puissant et une protection hydrofuge qui préservera votre toiture pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec 15 ans d&apos;expérience à Mandelieu-la-Napoule
- Techniciens certifiés et équipements professionnels
- Devis gratuit et personnalisé sous 48h
- Traitement respectueux de l&apos;environnement
- Garantie satisfaction de 2 ans sur nos interventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ au m², selon l&apos;état de la toiture, son accessibilité et la surface totale. Pour une maison moyenne de 100m², comptez un investissement entre 1500€ et 2500€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de faire un traitement antimousse tous les 5 à 7 ans, ou dès que vous observez les premiers signes de prolifération. À Mandelieu-la-Napoule, l&apos;humidité et la végétation favorisent la pousse, donc une vigilance annuelle est conseillée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;hydrofugation s&apos;effectue avec un produit spécifique pulvérisé uniformément. On attend le séchage complet (24-48h), en veillant à une température entre 10 et 25°C. L&apos;application doit être réalisée par des professionnels pour garantir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Mandelieu-la-Napoule ?
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
