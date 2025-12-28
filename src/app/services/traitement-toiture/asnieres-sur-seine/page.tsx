import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage toiture à Asnières-sur-Seine et ses environs. Spécialistes',
  keywords: 'demoussage toiture asnières-sur-seine, traitement toiture asnières-sur-seine, nettoyage toiture asnières-sur-seine, antimousse toiture asnières-sur-seine, hydrofuge toiture asnières-sur-seine, entretien toiture asnières-sur-seine',
};

export default function TraitementToitureAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage toiture à Asnières-sur-Seine et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et préservons la longévité de vos toitures avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations d&apos;Asnières-sur-Seine. La mousse et les algues peuvent rapidement dégrader vos tuiles et ardoises, causant des infiltrations et réduisant l&apos;étanchéité. Notre processus complet commence par un diagnostic précis, suivi d&apos;un nettoyage haute pression adapté à chaque type de matériau. Nous utilisons des produits antimousses écologiques qui éliminent les végétaux sans agresser la structure. Notre traitement hydrofuge final protège durablement votre toiture contre l&apos;humidité, les moisissures et les futures proliférations, avec une efficacité garantie pendant 5 à 7 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 250 toitures traitées à Asnières-sur-Seine
- Techniciens certifiés et équipements professionnels
- Devis gratuit et personnalisé sous 48h
- Respect des normes environnementales et techniques
- Garantie décennale sur nos interventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon l&apos;accessibilité, l&apos;état de la toiture et la surface. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€, incluant nettoyage, traitement antimousse et hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement tous les 5-7 ans, ou dès que vous observez les premiers signes de mousse, avant qu&apos;elle n&apos;endommage sérieusement vos tuiles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;hydrofugation s&apos;applique avec un pulvérisateur professionnel, en couche fine et uniforme. Le produit doit pénétrer sans ruissellement, par temps sec et sans vent. Nous recommandons deux couches croisées pour une protection maximale, avec un temps de séchage de 24h entre chaque application.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Asnières-sur-Seine ?
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
