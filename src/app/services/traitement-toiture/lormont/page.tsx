import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Lormont | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en traitement et démoussage de toiture sur Lormont et ses environs. Spécialistes du nettoyage ',
  keywords: 'demoussage toiture lormont, traitement toiture lormont, nettoyage toiture lormont, antimousse toiture lormont, hydrofuge toiture lormont, entretien toiture lormont',
};

export default function TraitementToitureLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en traitement et démoussage de toiture sur Lormont et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous garantissons un service professionnel qui préserve la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région bordelaise. Nous intervenons avec des techniques professionnelles qui éliminent intégralement la mousse, les lichens et les salissures qui détériorent votre couverture. Notre processus comprend un diagnostic précis, un nettoyage haute pression adapté, puis l&apos;application d&apos;un traitement antimousse et hydrofuge qui protège durablement votre toiture contre les agressions climatiques. Notre équipe utilise des produits écologiques et homologués, garantissant un résultat efficace à 98% et une protection qui peut durer jusqu&apos;à 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service sur-mesure. Nos techniciens sont formés aux dernières normes de traitement, nous disposons d&apos;une assurance décennale, et intervenons rapidement sur Lormont et l&apos;agglomération bordelaise. Notre approche combine expertise technique et respect de l&apos;environnement, avec des tarifs transparents et compétitifs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage de toiture varie entre 15€ et 30€ au m², selon la superficie, l&apos;accessibilité et l&apos;état de votre toiture. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3000€. Un devis personnalisé gratuit permet de préciser le coût exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et septembre, durant les saisons plus sèches. Il est recommandé d&apos;intervenir tous les 5-7 ans, ou dès que les premiers signes de prolifération de mousse apparaissent, pour éviter des dégradations structurelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après le démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement propre et sec. On utilise un produit adapté au matériau (tuiles, ardoises), appliqué uniformément au pulvérisateur ou au rouleau, en 2 couches croisées pour une protection optimale. Le séchage complet prend entre 24 et 48 heures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Lormont ?
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
