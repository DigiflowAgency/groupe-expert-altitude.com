import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la couverture et la rénovation de toiture à L&apos;Haÿ-les-Roses et ses environs. Nos experts ',
  keywords: 'couverture toiture l'haÿ-les-roses, renovation toiture l'haÿ-les-roses, reparation toiture l'haÿ-les-roses, couvreur l'haÿ-les-roses, refection toiture l'haÿ-les-roses, entreprise couverture l'haÿ-les-roses',
};

export default function CouvertureToitureLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la couverture et la rénovation de toiture à L&apos;Haÿ-les-Roses et ses environs. Nos experts interviennent rapidement pour protéger votre habitat avec des solutions sur-mesure et durables.</p>

        <h2>Nos services de couverture et rénovation toiture a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de sécurité. À L&apos;Haÿ-les-Roses, nous proposons un diagnostic précis de votre toiture, évaluant chaque élément structural avec une attention méticuleuse. Nos techniques modernes permettent de réparer, renforcer ou remplacer intégralement votre couverture, en utilisant des matériaux haute performance garantissant une étanchéité optimale. Notre processus comprend un audit technique complet, un devis transparent et une intervention professionnelle minimisant les nuisances pour les habitants.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de 15 ans dans le domaine de la couverture, 2) Des techniciens certifiés et formés aux dernières normes, 3) Un engagement qualité avec garantie décennale, 4) Un service client réactif et personnalisé adapté aux spécificités de L&apos;Haÿ-les-Roses.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux choisis et la complexité des travaux. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€, incluant dépose, matériaux et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformations structurelles, mousses importantes ou vieillissement avancé des matériaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : ses certifications officielles, son ancienneté sur le marché, ses références locales, son assurance décennale, et demandez systématiquement un devis détaillé avec descriptif technique précis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a L'Haÿ-les-Roses ?
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
