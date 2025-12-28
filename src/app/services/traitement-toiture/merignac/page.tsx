import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Mérignac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Mérignac et ses environs. Spécialistes du nettoy',
  keywords: 'demoussage toiture mérignac, traitement toiture mérignac, nettoyage toiture mérignac, antimousse toiture mérignac, hydrofuge toiture mérignac, entretien toiture mérignac',
};

export default function TraitementToitureMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Mérignac et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous garantissons un service professionnel qui préserve la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de traitement et démoussage toiture a Mérignac</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations de la région bordelaise. Nos experts utilisent des techniques innovantes pour éliminer efficacement la mousse, les lichens et les algues qui peuvent dégrader votre couverture. Chaque intervention commence par un diagnostic précis permettant d&apos;identifier les zones sensibles et d&apos;adapter notre approche. Nous utilisons des produits écologiques et homologués qui nettoient en profondeur sans agresser les matériaux. Notre traitement antimousse haute performance offre une protection durable de 5 à 7 ans contre les proliférations végétales, préservant ainsi l&apos;intégrité structurelle de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Mérignac
- Équipe certifiée et assurée pour tous travaux de toiture
- Produits écologiques et techniques respectueuses de l&apos;environnement
- Devis gratuit et personnalisé sous 48h
- Garantie satisfaction totale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 25€ au m², selon la complexité de l&apos;intervention, l&apos;état de la toiture et son accessibilité. Pour une maison de 100m², comptez un budget global entre 1500€ et 2500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur période pour un traitement antimousse se situe entre avril et octobre, avec une préférence pour le printemps. Les conditions météorologiques sèches et des températures entre 10°C et 25°C garantissent une application optimale et une efficacité maximale du traitement contre la prolifération des mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après un démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface. Notre processus inclut un nettoyage haute pression, un traitement antimousse, puis l&apos;application d&apos;un hydrofuge spécial qui protège durablement contre l&apos;humidité. Nous utilisons des produits respirants qui permettent à la toiture de continuer à évacuer l&apos;humidité naturellement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Mérignac ?
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
