import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Champigny-sur-Marne et ses environs. Spéciali',
  keywords: 'demoussage toiture champigny-sur-marne, traitement toiture champigny-sur-marne, nettoyage toiture champigny-sur-marne, antimousse toiture champigny-sur-marne, hydrofuge toiture champigny-sur-marne, entretien toiture champigny-sur-marne',
};

export default function TraitementToitureChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Champigny-sur-Marne et ses environs. Spécialistes du nettoyage et de la protection de vos toitures, nous intervenons avec une expertise technique précise pour préserver la longévité de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Champigny-sur-Marne. Notre processus complet commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute précision qui élimine mousses, lichens et salissures. Nous utilisons des techniques professionnelles et des produits écologiques qui respectent l&apos;intégrité de vos tuiles ou ardoises. Notre traitement antimousse haute performance permet de protéger durablement votre toiture contre les infiltrations et la détérioration, avec une efficacité garantie pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Intervention rapide sur Champigny-sur-Marne et secteur
- Devis gratuit et personnalisé sous 48h
- Techniques respectueuses de l&apos;environnement
- Garantie qualité de 3 ans sur nos traitements</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3000€. Un devis précis sera établi après diagnostic sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement tous les 5-7 ans ou dès que vous observez des signes de développement de mousse et de végétation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge se fait en 3 étapes : nettoyage complet, séchage total de la surface, puis pulvérisation uniforme du produit hydrofuge avec un matériel professionnel. Le produit doit être adapté au type de matériau et appliqué par des professionnels pour garantir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Champigny-sur-Marne ?
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
