import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Neuilly-sur-Seine. Forts de plus d',
  keywords: 'couverture toiture neuilly-sur-seine, renovation toiture neuilly-sur-seine, reparation toiture neuilly-sur-seine, couvreur neuilly-sur-seine, refection toiture neuilly-sur-seine, entreprise couverture neuilly-sur-seine',
};

export default function CouvertureToitureNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture à Neuilly-sur-Seine. Forts de plus de 15 ans d&apos;expertise, nous garantissons des solutions sur-mesure pour protéger et valoriser votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences les plus strictes des propriétaires de Neuilly-sur-Seine et des environs. Notre équipe de professionnels intervient sur tous types de toitures - tuiles, ardoises, zinc - en assurant une expertise technique complète. Nous réalisons un diagnostic précis avant chaque intervention, évaluant l&apos;état structural, les potentiels points de faiblesse et les solutions de rénovation optimales. Notre approche combine technicité et respect des normes environnementales, avec des matériaux hautement performants et durables. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, de la conception jusqu&apos;à la réalisation finale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Interventions rapides et sur-mesure
- Garantie décennale sur tous nos travaux
- Solutions techniques innovantes et écologiques
- Références solides à Neuilly-sur-Seine</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison moyenne de 100m², prévoyez un budget entre 8 000€ et 25 000€. Nos experts réalisent un diagnostic précis pour un devis personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations et éviter des réparations coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec références vérifiables. Vérifiez son assurance décennale, demandez plusieurs devis détaillés, et assurez-vous de sa maîtrise technique et de ses certifications professionnelles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Neuilly-sur-Seine ?
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
