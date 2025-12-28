import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Décines-Charpieu pour un traitemen',
  keywords: 'demoussage toiture décines-charpieu, traitement toiture décines-charpieu, nettoyage toiture décines-charpieu, antimousse toiture décines-charpieu, hydrofuge toiture décines-charpieu, entretien toiture décines-charpieu',
};

export default function TraitementToitureDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Décines-Charpieu pour un traitement et démoussage toiture impeccable. Nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Le démoussage et traitement de toiture sont essentiels pour préserver la longévité et l&apos;esthétique de votre couverture. Notre équipe spécialisée utilise des techniques éprouvées pour éliminer efficacement la mousse, les lichens et les algues qui détériorent vos tuiles et ardoises. Nous intervenons sur tous types de toitures - tuiles, ardoises, béton - avec un protocole personnalisé adapté à chaque support. Notre traitement comprend un nettoyage haute précision, un traitement antimousse écologique et une application d&apos;hydrofuge de protection qui garantit une résistance maximale aux intempéries pendant 8 à 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos avantages différenciants : une expertise locale de plus de 15 ans, des techniciens certifiés, un matériel professionnel dernière génération, des produits respectueux de l&apos;environnement, et une garantie de résultat. Nous sommes le partenaire de référence à Décines-Charpieu pour la préservation de votre patrimoine immobilier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et son accessibilité. Un diagnostic gratuit permet de vous fournir un devis précis et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et octobre, avec une préférence pour les périodes sèches. Un traitement tous les 5-7 ans est recommandé pour maintenir une protection optimale contre les proliférations fongiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;hydrofugation s&apos;effectue avec un produit spécifique pulvérisé uniformément, en 2 couches croisées. La surface doit être parfaitement sèche, et l&apos;application nécessite un équipement professionnel garantissant une protection durable et homogène.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Décines-Charpieu ?
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
