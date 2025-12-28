import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Neuilly-sur-Seine, protégeant efficacement vo',
  keywords: 'demoussage toiture neuilly-sur-seine, traitement toiture neuilly-sur-seine, nettoyage toiture neuilly-sur-seine, antimousse toiture neuilly-sur-seine, hydrofuge toiture neuilly-sur-seine, entretien toiture neuilly-sur-seine',
};

export default function TraitementToitureNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Neuilly-sur-Seine, protégeant efficacement votre patrimoine immobilier contre les dégradations dues aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux exigences spécifiques de l&apos;habitat haut de gamme de Neuilly-sur-Seine. Notre équipe technique intervient avec des techniques précises et des produits professionnels, éliminant intégralement les mousses, lichens et algues qui fragilisent vos tuiles et ardoises. Nous réalisons un diagnostic technique complet avant toute intervention, évaluant l&apos;état de votre toiture et ses besoins spécifiques. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge de protection qui garantit une durabilité maximale de votre couverture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise technique certifiée avec plus de 15 ans d&apos;expérience sur Neuilly-sur-Seine
✓ Techniques respectueuses de l&apos;environnement et conformes aux normes écologiques
✓ Devis gratuit et personnalisé sous 48h
✓ Garantie décennale et satisfaction client</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;un démoussage de toiture varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de la toiture. Pour une maison moyenne de 100m² à Neuilly-sur-Seine, comptez un budget entre 1500€ et 3500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, lors de températures modérées entre 10°C et 25°C. Il est recommandé d&apos;intervenir tous les 5 à 7 ans ou dès que les premières proliférations de mousse apparaissent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. On utilise un produit spécifique pulvérisé uniformément, en 2 couches croisées, avec un temps de séchage de 4 à 6 heures entre chaque application, par température supérieure à 12°C.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Neuilly-sur-Seine ?
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
