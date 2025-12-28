import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste en couverture et rénovation à Saint-Herblain. Nous protégeons votre habitat ',
  keywords: 'couverture toiture saint-herblain, renovation toiture saint-herblain, reparation toiture saint-herblain, couvreur saint-herblain, refection toiture saint-herblain, entreprise couverture saint-herblain',
};

export default function CouvertureToitureSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste en couverture et rénovation à Saint-Herblain. Nous protégeons votre habitat avec des solutions sur-mesure qui garantissent la durabilité et la performance de votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de performance. Nos techniciens hautement qualifiés interviennent sur tous types de structures, qu&apos;il s&apos;agisse d&apos;une rénovation complète ou de réparations ciblées. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour leur résistance aux conditions climatiques de la région nantaise. Notre processus comprend un diagnostic précis, un devis détaillé et une intervention méthodique qui respecte les normes techniques et esthétiques. Chaque chantier à Saint-Herblain est traité avec une attention particulière, en privilégiant des solutions durables et économiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Saint-Herblain
- Équipe de 12 couvreurs certifiés et formés en continu
- Garantie décennale sur tous nos travaux
- Diagnostic et devis gratuits sous 48h
- Solutions techniques innovantes et éco-responsables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison moyenne de 100m², comptez un budget entre 8 000€ et 25 000€. Nos devis détaillés permettent une transparence totale des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes de vétusté comme des fuites, des tuiles cassées, de la mousse, ou des déformations. Un diagnostic précis tous les 10 ans permet d&apos;anticiper les travaux nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur avec une certification RGE, une garantie décennale, des références vérifiables et une immatriculation au registre du commerce. Vérifiez ses assurances professionnelles et demandez plusieurs devis comparatifs avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Saint-Herblain ?
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
