import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 6e | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Paris 6e. Spécialistes de la ré',
  keywords: 'couverture toiture paris 6e, renovation toiture paris 6e, reparation toiture paris 6e, couvreur paris 6e, refection toiture paris 6e, entreprise couverture paris 6e',
};

export default function CouvertureToitureParis6ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 6e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Paris 6e. Spécialistes de la réfection de toitures depuis plus de 15 ans, nous intervenons sur les bâtiments résidentiels et professionnels avec une expertise technique garantie.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 6e</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de sécurité. Nous proposons un diagnostic précis de l&apos;état de votre toiture, suivi d&apos;un plan de rénovation personnalisé. Notre équipe utilise uniquement des matériaux haute performance, adaptés à l&apos;architecture parisienne et aux normes environnementales actuelles. Chaque intervention commence par un audit complet permettant d&apos;identifier les zones endommagées, les risques potentiels d&apos;infiltration et les solutions techniques optimales. Nous travaillons avec des techniques modernes qui assurent une étanchéité maximale et une durabilité exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise certifiée avec plus de 500 chantiers réalisés à Paris, 2) Des techniciens hautement qualifiés et formés en continu, 3) Une garantie décennale sur tous nos travaux, 4) Un devis transparent sans frais cachés. Notre engagement qualité fait de nous le partenaire idéal pour vos projets de rénovation de toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris 6e varie entre 8 000€ et 25 000€, selon la surface, les matériaux et la complexité technique. Un diagnostic précis permet d&apos;établir un budget exact. Nos devis détaillés incluent la main-d&apos;œuvre, les matériaux et les finitions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans ou en cas de signes visibles de dégradation : infiltrations, tuiles cassées, mousses, déformations. Dans le contexte parisien, l&apos;usure peut être plus rapide due aux conditions climatiques et à la densité urbaine.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : la certification RGE, l&apos;assurance décennale, les références clients, les avis en ligne. Demandez plusieurs devis comparatifs et assurez-vous que le professionnel propose un diagnostic technique approfondi avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 6e ?
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
