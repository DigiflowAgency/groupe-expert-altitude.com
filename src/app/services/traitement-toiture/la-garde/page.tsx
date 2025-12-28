import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a La Garde | Groupe Expert Altitude Com',
  description: 'Protégez et valorisez votre patrimoine immobilier avec Groupe Expert Altitude Com, votre spécialiste en traitement et démoussage de toiture à La Garde. Nos',
  keywords: 'demoussage toiture la garde, traitement toiture la garde, nettoyage toiture la garde, antimousse toiture la garde, hydrofuge toiture la garde, entretien toiture la garde',
};

export default function TraitementToitureLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez et valorisez votre patrimoine immobilier avec Groupe Expert Altitude Com, votre spécialiste en traitement et démoussage de toiture à La Garde. Nos experts interviennent rapidement pour préserver la longévité et l&apos;esthétique de vos toitures dans toute la région.</p>

        <h2>Nos services de traitement et démoussage toiture a La Garde</h2>
        <div className="space-y-4">
          <p>Le démoussage et le traitement de toiture sont essentiels pour maintenir l&apos;intégrité de votre couverture. Notre équipe professionnelle utilise des techniques innovantes pour éliminer la mousse, les lichens et les algues qui peuvent dégrader vos tuiles. Nous réalisons un diagnostic précis avant toute intervention, en évaluant l&apos;état de votre toiture et en proposant un traitement personnalisé adapté à La Garde et ses conditions climatiques. Notre processus comprend un nettoyage haute précision, un traitement antimousse écologique et une protection hydrofuge qui garantit une résistance optimale pendant 8 à 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Des techniciens certifiés et assurés, 3) Un traitement 100% respectueux de l&apos;environnement, 4) Une intervention rapide et sans dérangement. Nous intervenons sur tous types de toitures et proposons une garantie de résultat unique dans la région.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité et l&apos;accessibilité de votre toiture. Un diagnostic gratuit vous permettra d&apos;obtenir un devis précis et transparent adapté à votre situation à La Garde.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avant les périodes d&apos;humidité intense. Idéalement tous les 5-7 ans ou dès que vous observez les premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons des produits professionnels appliqués au pulvérisateur, en 2 couches croisées, garantissant une protection maximale contre l&apos;humidité et les infiltrations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a La Garde ?
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
