import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Balma | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Balma et ses environs. Nos experts interviennent',
  keywords: 'demoussage toiture balma, traitement toiture balma, nettoyage toiture balma, antimousse toiture balma, hydrofuge toiture balma, entretien toiture balma',
};

export default function TraitementToitureBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Balma et ses environs. Nos experts interviennent rapidement pour protéger et restaurer la qualité de votre couverture, garantissant durabilité et esthétique pour votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Balma</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture représente bien plus qu&apos;un simple nettoyage. Notre méthode professionnelle élimine intégralement les mousses, lichens et salissures qui détériorent votre toiture. Nous utilisons des produits écologiques et haute performance, adaptés à tous types de matériaux (tuiles, ardoises, fibrociment). Notre technique brevetée permet un traitement en profondeur qui préserve l&apos;intégrité de vos tuiles tout en les protégeant contre les futures proliférations. Sur Balma et la région toulousaine, nous intervenons avec un équipement spécialisé qui assure sécurité et efficacité maximale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience
- Techniciens certifiés et assurés
- Traitement 100% garanti pendant 5 ans
- Devis gratuit et personnalisé sous 48h
- Respect des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon l&apos;état et l&apos;accessibilité de votre toiture. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3000€. Un diagnostic précis vous permettra d&apos;obtenir un devis détaillé et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour traiter votre toiture se situe entre avril et octobre, période où les conditions météorologiques sont optimales. Idéalement, réalisez un traitement tous les 3-5 ans, ou dès que vous observez les premiers signes de mousse et de détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Nous utilisons un produit spécifique pulvérisé uniformément, qui forme un film protecteur invisible. Cette étape cruciale empêche la pénétration d&apos;humidité et limite le développement de nouvelles mousses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Balma ?
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
