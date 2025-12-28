import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un démoussage et traitement imp',
  keywords: 'demoussage toiture caluire-et-cuire, traitement toiture caluire-et-cuire, nettoyage toiture caluire-et-cuire, antimousse toiture caluire-et-cuire, hydrofuge toiture caluire-et-cuire, entretien toiture caluire-et-cuire',
};

export default function TraitementToitureCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un démoussage et traitement impeccable à Caluire-et-Cuire. Nous protégeons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture sont essentiels pour préserver la longévité et l&apos;esthétique de votre habitat. Notre méthode exclusive permet d&apos;éliminer intégralement les mousses, lichens et salissures qui fragilisent vos tuiles et ardoises. À Caluire-et-Cuire, nous intervenons avec des produits écologiques et des techniques respectueuses de l&apos;environnement, garantissant un résultat optimal sans dégrader la structure de votre toiture. Notre processus comprend un diagnostic précis, un nettoyage haute précision, un traitement antimousse et une protection hydrofuge qui peut prolonger la durée de vie de votre toiture de 10 à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience sur Caluire-et-Cuire
- Équipe certifiée et assurée pour tous travaux de toiture
- Devis gratuit et transparent sans engagement
- Techniques éco-responsables et produits de traitement haute performance</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de l&apos;intervention, l&apos;accessibilité et l&apos;état de votre toiture. Un diagnostic précis permet de définir un tarif personnalisé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Idéalement, réalisez ce traitement tous les 5 à 7 ans pour maintenir une protection efficace.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge nécessite un démoussage préalable et un séchage complet. Utilisez un produit adapté à votre type de toiture, appliquez-le uniformément avec un pulvérisateur basse pression, en respectant les conditions météorologiques (température entre 10-25°C, absence de pluie imminente).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Caluire-et-Cuire ?
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
