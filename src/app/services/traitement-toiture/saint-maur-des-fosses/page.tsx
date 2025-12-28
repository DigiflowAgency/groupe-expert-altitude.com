import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Saint-Maur-des-Fossés | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et à Saint-Maur-des-Fossés, le Groupe Expert Altitude Com est votre partenaire de confiance pour un tra',
  keywords: 'demoussage toiture saint-maur-des-fossés, traitement toiture saint-maur-des-fossés, nettoyage toiture saint-maur-des-fossés, antimousse toiture saint-maur-des-fossés, hydrofuge toiture saint-maur-des-fossés, entretien toiture saint-maur-des-fossés',
};

export default function TraitementToitureSaintMaurDesFossesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Saint-Maur-des-Fossés</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et à Saint-Maur-des-Fossés, le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage toiture impeccable. Nos experts interviennent rapidement pour préserver la longévité et l&apos;esthétique de votre couverture.</p>

        <h2>Nos services de traitement et démoussage toiture a Saint-Maur-des-Fossés</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture sont essentiels pour maintenir l&apos;intégrité de votre habitat. Notre méthode exclusive élimine efficacement les mousses, lichens et salissures qui peuvent dégrader vos tuiles et ardoises. Nous utilisons des techniques écologiques et des produits professionnels qui protègent durablement votre toiture contre l&apos;humidité et les infiltrations. Notre équipe qualifiée réalise un diagnostic précis avant toute intervention, garantissant un résultat optimal adapté aux spécificités de votre toiture à Saint-Maur-des-Fossés. Un traitement préventif et curatif qui préserve votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Saint-Maur-des-Fossés
- Techniciens certifiés et équipements professionnels de dernière génération
- Devis gratuit et transparent sans engagement
- Traitement 100% garanti pendant 3 ans contre la repousse de mousse</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 25€ au m², selon la complexité de la toiture, son accessibilité et l&apos;état des tuiles. Pour une maison standard de 100m², comptez un budget entre 1500€ et 2500€. Nous proposons des devis personnalisés sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après la période estivale et avant les premières gelées. Cette période permet un traitement optimal avec une efficacité maximale contre la prolifération des mousses pendant l&apos;hiver.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge se fait en 3 étapes : nettoyage complet, séchage total de la surface, puis pulvérisation uniforme du produit hydrofuge avec un matériel professionnel. Le produit doit être adapté au type de matériau et appliqué par des professionnels pour garantir une protection durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Saint-Maur-des-Fossés ?
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
