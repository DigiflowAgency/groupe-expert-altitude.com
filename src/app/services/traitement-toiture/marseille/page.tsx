import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Marseille | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance pour le traitement et démoussage de toiture à Marseille, protège votre patrimoine immobilier cont',
  keywords: 'demoussage toiture marseille, traitement toiture marseille, nettoyage toiture marseille, antimousse toiture marseille, hydrofuge toiture marseille, entretien toiture marseille',
};

export default function TraitementToitureMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance pour le traitement et démoussage de toiture à Marseille, protège votre patrimoine immobilier contre les agressions climatiques méditerranéennes. Nos solutions sur-mesure garantissent la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de traitement et démoussage toiture a Marseille</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux spécificités des habitations marseillaises, soumises à un environnement salin et humide. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer efficacement les mousses, lichens et algues qui détériorent vos tuiles. Nous réalisons un diagnostic précis avant intervention, avec un nettoyage haute pression respectant l&apos;intégrité de votre toiture. Notre traitement antimousse professionnel protège durablement contre les développements fongiques, avec une garantie de 5 ans. Plus de 95% de nos clients constatent une amélioration significative de l&apos;aspect et de la durabilité de leur toiture après notre intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise locale marseillaise, intervention rapide sous 48h, techniciens certifiés, produits écologiques et homologués, devis gratuit et sans engagement. Notre connaissance unique des toitures provençales nous permet de proposer des solutions parfaitement adaptées aux contraintes climatiques régionales. Plus de 15 ans d&apos;expérience dans le traitement et l&apos;entretien des toitures.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ au m², selon la surface, l&apos;accessibilité et l&apos;état de la toiture. Pour une maison moyenne de 100m² à Marseille, comptez un budget global entre 1500€ et 3000€, incluant nettoyage et traitement préventif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après la période estivale et avant les premières pluies automnales. À Marseille, nous recommandons une intervention tous les 3-5 ans pour maintenir une protection optimale contre l&apos;humidité et les développements fongiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un séchage complet de la surface (48h minimum). Nous utilisons des produits spécifiques à base de siloxane, appliqués uniformément au pulvérisateur, créant un bouclier invisible qui repousse l&apos;eau tout en laissant la toiture respirer naturellement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Marseille ?
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
