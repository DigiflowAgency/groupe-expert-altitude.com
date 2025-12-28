import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Clichy | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de ',
  keywords: 'demoussage toiture clichy, traitement toiture clichy, nettoyage toiture clichy, antimousse toiture clichy, hydrofuge toiture clichy, entretien toiture clichy',
};

export default function TraitementToitureClichyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Clichy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de référence pour le traitement et démoussage de toiture à Clichy et ses environs. Nous protégeons et valorisons votre patrimoine immobilier grâce à des techniques innovantes et un savoir-faire éprouvé.</p>

        <h2>Nos services de traitement et démoussage toiture a Clichy</h2>
        <div className="space-y-4">
          <p>Le démoussage et le traitement de toiture sont essentiels pour préserver l&apos;intégrité et l&apos;esthétique de votre habitation. Notre équipe de professionnels intervient sur tous types de toitures (tuiles, ardoises, béton) avec un diagnostic personnalisé. Nous utilisons des produits écologiques et haute performance qui éliminent la mousse, les algues et les lichens en profondeur. Notre processus comprend un nettoyage haute précision, un traitement antimousse et une protection hydrofuge qui garantit une durabilité de 5 à 7 ans. À Clichy, nous intervenons rapidement pour protéger votre toiture contre les dégradations et les infiltrations, tout en améliorant son aspect visuel.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient avec du matériel professionnel, nos techniciens sont formés aux dernières normes de sécurité, nous proposons un devis gratuit sous 48h, et nous garantissons une intervention sans risque pour votre toiture. Plus de 95% de nos clients sont satisfaits de nos services à Clichy.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est généralement entre avril et septembre, pendant la période sèche. Idéalement, réalisez ce traitement tous les 5 à 7 ans, ou dès que vous observez les premiers signes de développement de mousse. Un entretien préventif permet de réduire les coûts à long terme.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite un nettoyage préalable et un séchage complet. Utilisez un produit adapté à votre type de toiture, appliquez-le uniformément avec un pulvérisateur basse pression, en respectant les conditions météorologiques (température entre 10-25°C, sans risque de pluie).
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Clichy ?
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
