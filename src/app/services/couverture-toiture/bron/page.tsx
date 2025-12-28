import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Bron | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise de Groupe Expert Altitude Com, le spécialiste en couverture et rénovation à Bron et ses environs. Nous protégeons votre pa',
  keywords: 'couverture toiture bron, renovation toiture bron, reparation toiture bron, couvreur bron, refection toiture bron, entreprise couverture bron',
};

export default function CouvertureToitureBronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Bron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise de Groupe Expert Altitude Com, le spécialiste en couverture et rénovation à Bron et ses environs. Nous protégeons votre patrimoine avec des solutions sur-mesure et une qualité irréprochable, garantissant la longévité et l&apos;esthétique de votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Bron</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de performance et de durabilité. Nos experts interviennent sur tous types de structures, qu&apos;il s&apos;agisse d&apos;habitations individuelles ou de bâtiments collectifs à Bron. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour leur résistance aux conditions climatiques locales et leur efficacité thermique. Notre processus comprend un diagnostic précis, une évaluation technique détaillée et une intervention personnalisée, avec une attention méticuleuse portée à chaque détail technique et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans le domaine de la couverture, 2) Une équipe certifiée et formée en permanence aux dernières techniques, 3) Un engagement qualité garanti par des certifications professionnelles, 4) Des devis transparents et des interventions rapides sur Bron et la métropole lyonnaise.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte généralement entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Chez Groupe Expert Altitude Com, nous proposons un diagnostic gratuit permettant un devis précis et personnalisé, sans mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme des fuites récurrentes, des tuiles cassées, de la mousse, ou des infiltrations. Un diagnostic annuel permet de prévenir les dégradations et d&apos;anticiper les travaux nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son ancienneté sur le marché, ses références clients, ses garanties décennales, et ses avis vérifiés. Groupe Expert Altitude Com répond à tous ces critères de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Bron ?
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
