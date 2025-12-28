import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste référent en couverture et rénovation à Champigny-sur-Marne. Nous protégeons ',
  keywords: 'couverture toiture champigny-sur-marne, renovation toiture champigny-sur-marne, reparation toiture champigny-sur-marne, couvreur champigny-sur-marne, refection toiture champigny-sur-marne, entreprise couverture champigny-sur-marne',
};

export default function CouvertureToitureChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste référent en couverture et rénovation à Champigny-sur-Marne. Nous protégeons votre habitat avec des solutions sur-mesure, alliant technicité et performance pour chaque projet de réfection.</p>

        <h2>Nos services de couverture et rénovation toiture a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture représentent bien plus qu&apos;un simple travail de réparation. Notre équipe de professionnels intervient sur tous types de structures, qu&apos;il s&apos;agisse d&apos;habitations individuelles, d&apos;immeubles ou de bâtiments commerciaux à Champigny-sur-Marne. Nous réalisons un diagnostic précis avant toute intervention, utilisant des techniques modernes et des matériaux haute durabilité. Notre processus comprend une évaluation technique complète, un devis détaillé transparent, et une réalisation respectant les normes en vigueur. Nos couvreurs qualifiés garantissent une intervention rapide et efficace, minimisant les désagréments pour nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Champigny-sur-Marne
• Équipe de 12 couvreurs certifiés
• Garantie décennale sur tous nos travaux
• Devis gratuit et sans engagement
• Matériaux premium sélectionnés avec soin</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 5 000€ et 25 000€, selon la surface, les matériaux et la complexité du chantier. Notre diagnostic précis vous permettra d&apos;obtenir un devis détaillé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes comme des fuites, des tuiles cassées, des infiltrations récurrentes ou une déformation de la charpente. Un diagnostic annuel peut prévenir des dégradations majeures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur disposant de certifications RGE, d&apos;une assurance décennale, de références vérifiables et proposant un devis détaillé. Vérifiez ses avis clients et sa présence locale à Champigny-sur-Marne.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Champigny-sur-Marne ?
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
