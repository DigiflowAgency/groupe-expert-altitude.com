import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Paris 6e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Paris 6e, garantissant la protection et la lo',
  keywords: 'demoussage toiture paris 6e, traitement toiture paris 6e, nettoyage toiture paris 6e, antimousse toiture paris 6e, hydrofuge toiture paris 6e, entretien toiture paris 6e',
};

export default function TraitementToitureParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Paris 6e, garantissant la protection et la longévité de votre patrimoine immobilier. Spécialistes du nettoyage et de l&apos;entretien de toitures, nous intervenons avec précision sur l&apos;ensemble du 6e arrondissement parisien.</p>

        <h2>Nos services de traitement et démoussage toiture a Paris 6e</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations parisiennes, exposées à des conditions climatiques variées. Notre processus comprend un diagnostic précis, un nettoyage haute précision et un traitement antimousse haute performance. Nos techniciens utilisent des techniques écologiques et des produits respectueux de l&apos;environnement, éliminant jusqu&apos;à 98% des mousses et lichens. Chaque intervention est personnalisée, avec un protocole adapté à la nature de votre toiture (tuiles, ardoises, zinc) et garantissant une protection durable contre les infiltrations et la détérioration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans dans le traitement de toiture à Paris
• Équipe certifiée et assurée, intervention rapide dans le 6e arrondissement
• Techniques éco-responsables et produits professionnels de dernière génération
• Devis gratuit et transparent, sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et l&apos;état de la mousse. Pour une maison moyenne de 100 m² à Paris 6e, comptez un budget global entre 1500€ et 3500€, incluant nettoyage et traitement antimousse.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et septembre, avec des températures entre 10°C et 25°C. Idéalement, intervenez tous les 3-5 ans ou dès que vous observez plus de 30% de surface recouverte de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;hydrofuge nécessite un séchage complet de la surface. Utilisez un produit adapté à votre matériau, appliquez uniformément au rouleau ou par pulvérisation, en 2 couches croisées, par temps sec et température entre 12-22°C.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Paris 6e ?
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
