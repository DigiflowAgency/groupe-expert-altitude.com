import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Salon-de-Provence. Spécialistes depuis plus de 1',
  keywords: 'demoussage toiture salon-de-provence, traitement toiture salon-de-provence, nettoyage toiture salon-de-provence, antimousse toiture salon-de-provence, hydrofuge toiture salon-de-provence, entretien toiture salon-de-provence',
};

export default function TraitementToitureSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Salon-de-Provence. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux défis spécifiques de l&apos;habitat provençal. Nous intervenons méticuleusement pour éliminer les mousses, lichens et salissures qui fragilisent vos tuiles et ardoises. Notre processus comprend un diagnostic précis, un nettoyage haute pression à basse pression, un traitement antimousse écologique et une application d&apos;hydrofuge de protection. Nos techniciens qualifiés utilisent des produits respectueux de l&apos;environnement, garantissant une efficacité maximale sans impact négatif sur votre écosystème local. Chaque intervention à Salon-de-Provence est personnalisée selon la nature et l&apos;état de votre toiture.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux avec 15 ans d&apos;expérience sur Salon-de-Provence
- Techniques certifiées et matériel professionnel
- Devis gratuit et transparent
- Traitement écologique et durable
- Garantie décennale sur nos interventions</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et son état. Un diagnostic précis permettra de vous proposer un tarif exact. Pour une maison moyenne de 100m², comptez un budget entre 1500€ et 3500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin printemps ou début automne, avec des températures entre 10°C et 25°C. Idéalement tous les 3-5 ans ou dès que vous observez les premiers signes de prolifération de mousse. À Salon-de-Provence, le climat humide favorise la croissance rapide des mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, appliquez l&apos;hydrofuge par pulvérisation uniforme, par temps sec et température entre 15-20°C. Utilisez un produit adapté à votre type de toiture, en deux couches croisées. Laissez sécher complètement entre chaque application, soit environ 4-6 heures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Salon-de-Provence ?
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
