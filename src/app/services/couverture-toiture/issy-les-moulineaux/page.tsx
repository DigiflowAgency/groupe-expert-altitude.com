import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste de la rénovation et couverture à Issy-les-Moulineaux. Nous protégeons votre ',
  keywords: 'couverture toiture issy-les-moulineaux, renovation toiture issy-les-moulineaux, reparation toiture issy-les-moulineaux, couvreur issy-les-moulineaux, refection toiture issy-les-moulineaux, entreprise couverture issy-les-moulineaux',
};

export default function CouvertureToitureIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite l&apos;expertise du Groupe Expert Altitude Com, le spécialiste de la rénovation et couverture à Issy-les-Moulineaux. Nous protégeons votre habitat avec des solutions sur-mesure qui garantissent la longévité et la performance de votre patrimoine immobilier.</p>

        <h2>Nos services de couverture et rénovation toiture a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation de toiture répond aux exigences les plus strictes de qualité et de durabilité. Nos experts interviennent sur tous types de structures - tuiles, ardoises, zinc ou bac acier - en réalisant un diagnostic précis avant toute intervention. Chaque chantier à Issy-les-Moulineaux est traité avec une attention méticuleuse, en privilégiant des matériaux haute performance et des techniques d&apos;isolation innovantes. Notre processus comprend une évaluation technique complète, un devis détaillé transparent et une réalisation respectant les normes environnementales et de sécurité actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides et sur-mesure
- Garantie décennale sur tous nos travaux
- Solutions techniques adaptées à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour une maison moyenne de 100m², comptez un budget global entre 8 000€ et 25 000€. Un diagnostic gratuit permet d&apos;affiner précisément le devis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses importantes ou isolation défectueuse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Choisissez un couvreur certifié RGE, disposant d&apos;une assurance décennale, avec des références vérifiables. Demandez systématiquement plusieurs devis détaillés, comparez les prestations et vérifiez l&apos;appartenance à une fédération professionnelle reconnue.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Issy-les-Moulineaux ?
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
