import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Aubagne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Aubagne. Spécialistes depuis plus de 15 ans, nous pro',
  keywords: 'couverture toiture aubagne, renovation toiture aubagne, reparation toiture aubagne, couvreur aubagne, refection toiture aubagne, entreprise couverture aubagne',
};

export default function CouvertureToitureAubagnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Aubagne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Aubagne. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre habitat avec des solutions techniques sur-mesure adaptées au climat provençal.</p>

        <h2>Nos services de couverture et rénovation toiture a Aubagne</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture s&apos;étend à tous types de bâtiments sur Aubagne et ses environs. Nous intervenons avec une approche complète, diagnostiquant précisément l&apos;état de votre toiture avant de proposer des solutions durables et économiques. Nos techniciens maîtrisent tous les matériaux - tuiles, ardoises, zinc - et utilisent des techniques modernes garantissant une étanchéité optimale. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec des matériaux de haute qualité sélectionnés pour résister aux conditions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Equipe de 12 couvreurs certifiés avec plus de 150 chantiers réalisés à Aubagne
✓ Diagnostic technique gratuit et devis détaillé sous 48h
✓ Garantie décennale et assurance professionnelle
✓ Solutions sur-mesure respectant les normes RT2012</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis détaillés incluent main-d&apos;œuvre, matériaux et déplacement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses importantes. Un diagnostic annuel permet de prévenir les dégradations avant qu&apos;elles ne deviennent critiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur avec plusieurs critères : certification RGE, assurance décennale, références locales vérifiables, devis détaillé, présence d&apos;un interlocuteur technique. Vérifiez également les avis clients et demandez plusieurs propositions pour comparer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Aubagne ?
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
