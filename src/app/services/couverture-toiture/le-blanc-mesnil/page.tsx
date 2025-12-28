import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Le Blanc-Mesnil | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Le Blanc-Mesnil et ses environs. Avec plus de 15 an',
  keywords: 'couverture toiture le blanc-mesnil, renovation toiture le blanc-mesnil, reparation toiture le blanc-mesnil, couvreur le blanc-mesnil, refection toiture le blanc-mesnil, entreprise couverture le blanc-mesnil',
};

export default function CouvertureToitureLeBlancMesnilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Le Blanc-Mesnil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Le Blanc-Mesnil et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons votre habitat grâce à des solutions techniques sur-mesure et un savoir-faire artisanal.</p>

        <h2>Nos services de couverture et rénovation toiture a Le Blanc-Mesnil</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences techniques les plus strictes, en proposant une intervention complète et personnalisée. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en réalisant un diagnostic précis avant toute intervention. Notre équipe de professionnels qualifiés utilise uniquement des matériaux de haute qualité, garantissant une étanchéité optimale et une durabilité maximale. Chaque chantier fait l&apos;objet d&apos;un suivi technique rigoureux, avec des solutions adaptées à la structure spécifique de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique reconnue sur Le Blanc-Mesnil, 2) Des artisans certifiés et formés en permanence, 3) Des devis transparents sans frais cachés, 4) Une intervention rapide et professionnelle, avec un délai moyen de 72h après diagnostic.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m² selon les matériaux, la complexité et l&apos;état initial. Pour un pavillon standard de 100m², comptez entre 8 000€ et 25 000€. Nous proposons des financements et des étalements de paiement adaptés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précis : infiltrations récurrentes, tuiles cassées sur plus de 30%, déformation structurelle, mousses et infiltrations importantes. Un diagnostic gratuit permet de confirmer la nécessité des travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : la possession de certifications (RGE, Qualibat), l&apos;expérience prouvée, les avis clients vérifiables, la présentation d&apos;une assurance décennale, et un devis détaillé avec descriptif technique précis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Le Blanc-Mesnil ?
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
