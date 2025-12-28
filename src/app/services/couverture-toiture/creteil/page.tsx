import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Créteil et dans le Val-de-Marne. Spécialistes depuis ',
  keywords: 'couverture toiture créteil, renovation toiture créteil, reparation toiture créteil, couvreur créteil, refection toiture créteil, entreprise couverture créteil',
};

export default function CouvertureToitureCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Créteil et dans le Val-de-Marne. Spécialistes depuis plus de 15 ans, nous transformons et protégeons votre habitat avec des solutions sur-mesure et une expertise technique inégalée.</p>

        <h2>Nos services de couverture et rénovation toiture a Créteil</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en proposant un diagnostic précis et personnalisé. Notre équipe de couvreurs hautement qualifiés évalue méticuleusement chaque structure pour identifier les zones nécessitant des réparations ou un remplacement complet. Nous utilisons uniquement des matériaux de haute qualité, garantissant une étanchéité optimale et une résistance aux conditions climatiques variées de la région parisienne. Notre processus inclut un audit technique complet, des recommandations détaillées et une intervention rapide et efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale reconnue à Créteil depuis plus de 15 ans
- Équipe de 12 couvreurs certifiés et formés en permanence
- Devis gratuit et détaillé sous 48h
- Garantie décennale sur tous nos travaux
- Solutions techniques innovantes et écologiques
- Interventions rapides et adaptées à chaque budget</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Pour une maison moyenne de 100m² à Créteil, comptez environ 15 000€ tout compris, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou avant si vous observez des signes comme des fuites récurrentes, des tuiles cassées, une déformation de la charpente ou des infiltrations importantes. Un diagnostic précis tous les 10 ans est recommandé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son numéro SIRET, ses références clients, ses garanties décennales, et demandez plusieurs devis détaillés. Privilégiez une entreprise locale comme Groupe Expert Altitude Com, avec une réputation établie sur Créteil.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Créteil ?
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
