import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Rezé, transforme et protège votre habitat avec une expertis',
  keywords: 'couverture toiture rezé, renovation toiture rezé, reparation toiture rezé, couvreur rezé, refection toiture rezé, entreprise couverture rezé',
};

export default function CouvertureToitureRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Rezé, transforme et protège votre habitat avec une expertise technique irréprochable. Nous intervenons sur l&apos;ensemble des toitures résidentielles et professionnelles de l&apos;agglomération nantaise.</p>

        <h2>Nos services de couverture et rénovation toiture a Rezé</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes de qualité et de durabilité. Notre équipe de professionnels qualifiés analyse précisément l&apos;état de votre toiture pour proposer des solutions sur-mesure. Nous travaillons avec des matériaux de haute performance - tuiles, ardoises, zinc - garantissant une étanchéité optimale et une résistance aux conditions climatiques de la région. Notre processus inclut un diagnostic complet, un devis détaillé et une intervention minutieuse respectant les normes techniques et environnementales actuelles. Plus de 85% de nos clients nous recommandent après intervention grâce à notre approche professionnelle et nos finitions impeccables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Rezé, 2) Une équipe certifiée avec des techniciens hautement qualifiés, 3) Des interventions rapides et un délai de réalisation garanti, 4) Une transparence totale sur les coûts et techniques utilisées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 6 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Notre diagnostic gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes de détérioration comme des fuites, des tuiles cassées, des infiltrations ou une déformation de la charpente. Un diagnostic annuel peut prévenir des dégradations importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications professionnelles, une assurance décennale, des références vérifiables et une expertise technique démontrée. Vérifiez ses avis clients, ses certifications et demandez systématiquement un devis détaillé avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Rezé ?
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
