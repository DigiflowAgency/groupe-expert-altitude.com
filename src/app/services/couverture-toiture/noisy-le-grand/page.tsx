import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Noisy-le-Grand | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Noisy-le-Grand. Spécialistes reconnus, nous protégeon',
  keywords: 'couverture toiture noisy-le-grand, renovation toiture noisy-le-grand, reparation toiture noisy-le-grand, couvreur noisy-le-grand, refection toiture noisy-le-grand, entreprise couverture noisy-le-grand',
};

export default function CouvertureToitureNoisyLeGrandPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Noisy-le-Grand</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Noisy-le-Grand. Spécialistes reconnus, nous protégeons et valorisons votre patrimoine immobilier avec des solutions techniques sur mesure dans toute la région parisienne.</p>

        <h2>Nos services de couverture et rénovation toiture a Noisy-le-Grand</h2>
        <div className="space-y-4">
          <p>Notre expertise en couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de structures : tuiles, ardoises, zinc ou bac acier, en rénovation complète ou réparation ponctuelle. Notre équipe de couvreurs certifiés analyse précisément l&apos;état de votre toiture, diagnostique les désordres potentiels et propose un plan d&apos;intervention technique adapté. Chaque chantier fait l&apos;objet d&apos;un devis détaillé et transparent, avec des matériaux de haute performance garantissant une étanchéité optimale et une résistance jusqu&apos;à 30 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée avec plus de 15 ans d&apos;expérience, nous garantissons : un diagnostic technique gratuit, des interventions rapides sur Noisy-le-Grand, des matériaux premium, une équipe de professionnels qualifiés, et des solutions personnalisées respectant les normes RT2012. Notre engagement qualité inclut une garantie décennale et un suivi technique après travaux.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour un pavillon standard de 100m², prévoyez un budget entre 8 000€ et 25 000€ TTC. Un diagnostic précis permettra d&apos;affiner ce premier estimatif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 25-30 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses et végétation. Un diagnostic annuel permet de prévenir les dégradations avant qu&apos;elles ne deviennent critiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, avec des références vérifiables, une immatriculation au registre du commerce, une assurance décennale et des avis clients positifs. Exigez systématiquement un devis détaillé, des délais de réalisation précis et comparez plusieurs propositions techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Noisy-le-Grand ?
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
