import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vitry-sur-Seine et ses environs. Spécialistes du',
  keywords: 'demoussage toiture vitry-sur-seine, traitement toiture vitry-sur-seine, nettoyage toiture vitry-sur-seine, antimousse toiture vitry-sur-seine, hydrofuge toiture vitry-sur-seine, entretien toiture vitry-sur-seine',
};

export default function TraitementToitureVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Vitry-sur-Seine et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la qualité et la longévité de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques de l&apos;habitat sur le territoire de Vitry-sur-Seine. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, identifiant les zones nécessitant un nettoyage et un traitement. Nous utilisons des techniques et produits écologiques qui éliminent efficacement la mousse et les lichens, tout en protégeant la structure de votre toiture. Notre intervention comprend un nettoyage haute précision, un traitement antimousse et l&apos;application d&apos;un hydrofuge de protection qui garantit une résistance accrue aux intempéries et aux agressions environnementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Vitry-sur-Seine
- Équipe certifiée et assurée
- Techniques respectueuses de l&apos;environnement
- Devis gratuit et personnalisé
- Garantie de satisfaction de 3 ans sur nos traitements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€, incluant nettoyage, traitement antimousse et hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Idéalement, réalisez ce traitement tous les 5-7 ans ou dès que vous observez les premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre protocole inclut un nettoyage, un traitement fongicide, puis l&apos;application d&apos;un hydrofuge respirant à l&apos;aide de pulvérisateurs professionnels, garantissant une protection durable contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Vitry-sur-Seine ?
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
