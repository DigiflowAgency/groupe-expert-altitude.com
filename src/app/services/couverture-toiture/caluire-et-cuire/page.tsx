import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Situé au cœur de Caluire-et-Cuire, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toitur',
  keywords: 'couverture toiture caluire-et-cuire, renovation toiture caluire-et-cuire, reparation toiture caluire-et-cuire, couvreur caluire-et-cuire, refection toiture caluire-et-cuire, entreprise couverture caluire-et-cuire',
};

export default function CouvertureToitureCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Situé au cœur de Caluire-et-Cuire, le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture. Nous protégeons et valorisons votre patrimoine immobilier avec des solutions sur-mesure adaptées aux spécificités de l&apos;habitat local.</p>

        <h2>Nos services de couverture et rénovation toiture a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Notre expertise en rénovation de toiture couvre l&apos;ensemble des besoins résidentiels et professionnels à Caluire-et-Cuire et ses environs. Nous intervenons sur tous types de charpentes et matériaux, en proposant un diagnostic précis et des solutions techniques innovantes. Notre processus débute par un audit complet de votre toiture, permettant d&apos;identifier les désordres potentiels et de proposer un plan de rénovation optimal. Nos équipes qualifiées utilisent uniquement des matériaux de haute qualité, garantissant une étanchéité parfaite et une durabilité maximale. Chaque intervention fait l&apos;objet d&apos;un suivi personnalisé et d&apos;un engagement de résultat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Artisans certifiés avec plus de 15 ans d&apos;expérience
- Devis gratuit et détaillé sous 48h
- Interventions rapides et sur-mesure
- Garantie décennale sur tous nos travaux
- Techniques respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité des travaux. Notre expertise permet de vous proposer des solutions financièrement optimisées avec des options de financement adaptées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes visibles de dégradation comme des infiltrations, tuiles cassées, ou déformations structurelles. Un diagnostic précis tous les 10 ans est fortement conseillé.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement sa certification RGE, ses références clients, son assurance décennale, et demandez plusieurs devis comparatifs. Un professionnel sérieux proposera systématiquement un diagnostic technique détaillé avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Caluire-et-Cuire ?
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
