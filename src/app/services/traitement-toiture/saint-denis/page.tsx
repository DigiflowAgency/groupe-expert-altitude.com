import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Saint-Denis | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Saint-Denis et ses environs. Nous protégeons vot',
  keywords: 'demoussage toiture saint-denis, traitement toiture saint-denis, nettoyage toiture saint-denis, antimousse toiture saint-denis, hydrofuge toiture saint-denis, entretien toiture saint-denis',
};

export default function TraitementToitureSaintDenisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Saint-Denis</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Saint-Denis et ses environs. Nous protégeons votre patrimoine immobilier avec des solutions techniques innovantes et un savoir-faire certifié.</p>

        <h2>Nos services de traitement et démoussage toiture a Saint-Denis</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de Saint-Denis, confrontées à des conditions climatiques favorisant le développement de mousses et lichens. Notre méthode professionnelle commence par un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un nettoyage haute pression respectant l&apos;intégrité des matériaux. Nous utilisons des produits antimousses écologiques et homologués, garantissant une élimination durable des végétaux parasites. Notre traitement hydrofuge final protège durablement votre toiture contre l&apos;humidité, les infiltrations et limite la repousse de mousse à 80% sur les 5 prochaines années.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : une expertise de plus de 15 ans, des techniciens certifiés, un diagnostic gratuit avant intervention, des produits respectueux de l&apos;environnement, une garantie décennale, et des tarifs transparents adaptés à chaque configuration de toiture à Saint-Denis.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son accessibilité et le type de matériaux. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€, incluant nettoyage, traitement antimousse et hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques permettent un séchage optimal. Idéalement, réalisez ce traitement tous les 5 à 7 ans ou dès l&apos;apparition des premiers signes de prolifération de mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;un hydrofuge après démoussage nécessite : un support parfaitement propre et sec, l&apos;utilisation d&apos;un produit adapté à votre type de toiture (tuiles, ardoises), une application par temps sec avec une température entre 10 et 25°C, et l&apos;utilisation de matériel professionnel comme un pulvérisateur à pression contrôlée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Saint-Denis ?
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
