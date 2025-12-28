import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 5e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Paris 5e. Forts de plus de 15 a',
  keywords: 'couverture toiture paris 5e, renovation toiture paris 5e, reparation toiture paris 5e, couvreur paris 5e, refection toiture paris 5e, entreprise couverture paris 5e',
};

export default function CouvertureToitureParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Paris 5e. Forts de plus de 15 ans d&apos;expérience, nous intervenons sur les toitures les plus complexes de l&apos;arrondissement avec une expertise technique irréprochable.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 5e</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires parisiens. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale, en utilisant des matériaux de haute qualité adaptés à chaque type d&apos;habitat. Notre équipe de couvreurs professionnels maîtrise parfaitement les techniques traditionnelles et modernes, garantissant une étanchéité optimale et une durabilité maximale. Nous proposons des solutions personnalisées qui respectent l&apos;architecture historique du 5e arrondissement tout en apportant des performances thermiques et énergétiques contemporaines.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec des artisans hautement qualifiés, 2) Des interventions rapides et précises, avec un délai moyen de réalisation de 3-5 jours, 3) Un devis détaillé et transparent sans frais cachés, 4) Une garantie décennale sur l&apos;ensemble de nos travaux de couverture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris 5e varie entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Nos experts réalisent un diagnostic précis pour un devis sur-mesure sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme des infiltrations, tuiles cassées, mousses, déformations ou fuites récurrentes. Un diagnostic annuel permet de prévenir les dégradations importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : la certification RGE, l&apos;expérience locale, les avis clients, la garantie décennale, et demandez plusieurs devis détaillés comparatifs avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 5e ?
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
