import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à La Chapelle-sur-Erdre et ses envir',
  keywords: 'couverture toiture la chapelle-sur-erdre, renovation toiture la chapelle-sur-erdre, reparation toiture la chapelle-sur-erdre, couvreur la chapelle-sur-erdre, refection toiture la chapelle-sur-erdre, entreprise couverture la chapelle-sur-erdre',
};

export default function CouvertureToitureLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à La Chapelle-sur-Erdre et ses environs. Forts de 15 ans d&apos;expérience, nous intervenons rapidement pour protéger et valoriser votre patrimoine immobilier avec des solutions sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale, en utilisant uniquement des matériaux de haute performance. Chaque chantier à La Chapelle-sur-Erdre est traité avec une attention méticuleuse, en respectant les normes techniques et esthétiques actuelles. Notre équipe de professionnels maîtrise parfaitement les techniques traditionnelles et innovantes, garantissant une protection optimale contre les intempéries et une valorisation de votre bien immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec une connaissance approfondie des spécificités climatiques de La Chapelle-sur-Erdre
✓ Diagnostic gratuit et devis détaillé sans engagement
✓ Équipe certifiée et assurée pour tous travaux de couverture
✓ Délais d&apos;intervention rapides et planning respecté à 100%</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Chez Groupe Expert Altitude Com, nous proposons un devis précis après un diagnostic technique complet, sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes visibles de détérioration comme des infiltrations, tuiles cassées, mousses importantes ou déformations structurelles. Un diagnostic annuel permet de prévenir les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours ses certifications RGE, son assurance décennale, ses références clients et demandez plusieurs devis comparatifs. Chez nous, tous nos techniciens possèdent les qualifications professionnelles les plus exigeantes du marché.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a La Chapelle-sur-Erdre ?
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
