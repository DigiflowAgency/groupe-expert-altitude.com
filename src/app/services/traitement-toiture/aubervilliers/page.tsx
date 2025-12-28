import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Aubervilliers et ses environs. Spécialistes du n',
  keywords: 'demoussage toiture aubervilliers, traitement toiture aubervilliers, nettoyage toiture aubervilliers, antimousse toiture aubervilliers, hydrofuge toiture aubervilliers, entretien toiture aubervilliers',
};

export default function TraitementToitureAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour le traitement et démoussage de toiture à Aubervilliers et ses environs. Spécialistes du nettoyage et de la protection des toitures, nous intervenons rapidement pour préserver la durabilité et l&apos;esthétique de votre patrimoine immobilier.</p>

        <h2>Nos services de traitement et démoussage toiture a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Notre service de démoussage et traitement de toiture répond aux problématiques spécifiques des habitations d&apos;Aubervilliers, confrontées à des conditions climatiques favorisant le développement de mousse et de lichens. Notre équipe technique utilise des techniques professionnelles et des produits écologiques pour éliminer intégralement les végétaux parasites. Nous réalisons un diagnostic précis avant intervention, évaluant l&apos;état de votre toiture et les zones nécessitant un traitement. Le processus comprend un nettoyage haute précision, un traitement antimousse ciblé et une protection hydrofuge qui garantit une résistance optimale aux intempéries pendant 5 à 7 ans. Notre approche préventive permet de prolonger la durée de vie de votre toiture de 30% et de maintenir sa valeur esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans, 2) Des techniciens certifiés et équipés des dernières technologies, 3) Un devis gratuit et personnalisé sous 48h, 4) Des produits de traitement 100% écologiques respectant l&apos;environnement et les normes sanitaires actuelles.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 35€ au m², selon la complexité de la toiture, son accessibilité et le type de traitement requis. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 3500€. Nous proposons un diagnostic précis et un devis détaillé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse se situe idéalement au printemps ou à l&apos;automne, lorsque les températures sont douces (entre 10°C et 25°C). Ces périodes permettent un séchage optimal et une pénétration efficace des produits de traitement, avant les périodes de fortes intempéries.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite : 1) Un nettoyage complet et sec de la surface, 2) L&apos;utilisation d&apos;un produit adapté à votre type de matériau (tuiles, ardoises), 3) Une application par pulvérisation uniforme, 4) Un temps de séchage de 24h. Notre équipe professionnelle réalise cette étape avec une précision garantissant une protection durable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Aubervilliers ?
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
