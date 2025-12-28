import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Écully | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Écully pour un traitement et démou',
  keywords: 'demoussage toiture écully, traitement toiture écully, nettoyage toiture écully, antimousse toiture écully, hydrofuge toiture écully, entretien toiture écully',
};

export default function TraitementToitureEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance à Écully pour un traitement et démoussage toiture impeccable. Nous protégeons votre patrimoine immobilier contre les dégradations dues aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a Écully</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une intervention technique essentielle pour préserver l&apos;intégrité de votre couverture. Sur Écully et ses environs, notre équipe utilise des techniques innovantes pour éliminer efficacement les mousses, lichens et algues qui s&apos;installent progressivement. Notre processus comprend un diagnostic précis, un nettoyage haute précision sans endommager les tuiles, puis l&apos;application d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture. En moyenne, un traitement bien réalisé peut prolonger la durée de vie de votre toiture de 10 à 15 ans, tout en améliorant son aspect esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre approche personnalisée et notre engagement qualité. Notre équipe est certifiée, dispose d&apos;équipements professionnels et intervient avec une assurance décennale. Nous proposons un diagnostic gratuit, des tarifs transparents et un suivi personnalisé. 95% de nos clients recommandent nos services après intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage de toiture varie entre 15€ et 30€ au m², selon la superficie, l&apos;accessibilité et l&apos;état de la toiture. Pour une maison standard à Écully, comptez environ 800€ à 1500€ pour un traitement complet. Un devis précis sera établi après un diagnostic sur place.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe généralement entre avril et septembre, période où les conditions météorologiques sont optimales. Il est recommandé de traiter sa toiture tous les 5 à 7 ans, ou dès que vous observez les premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre processus comprend un nettoyage, un traitement antimousse, puis l&apos;application d&apos;un hydrofuge spécial à l&apos;aide de pulvérisateurs professionnels, garantissant une protection uniforme et durable contre l&apos;humidité.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Écully ?
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
