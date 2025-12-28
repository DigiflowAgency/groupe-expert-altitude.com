import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Hyères | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture sur Hyères et ses environs. Spéciali',
  keywords: 'couverture toiture hyères, renovation toiture hyères, reparation toiture hyères, couvreur hyères, refection toiture hyères, entreprise couverture hyères',
};

export default function CouvertureToitureHyeresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Hyères</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture sur Hyères et ses environs. Spécialistes de la protection de votre habitat, nous intervenons avec précision et expertise pour garantir la longévité et l&apos;esthétique de votre toiture.</p>

        <h2>Nos services de couverture et rénovation toiture a Hyères</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale, en utilisant des matériaux de haute performance adaptés au climat méditerranéen de Hyères. Notre équipe de professionnels maîtrise parfaitement les techniques modernes de rénovation, qu&apos;il s&apos;agisse de tuiles, ardoises ou toitures terrasses. Chaque chantier fait l&apos;objet d&apos;une étude personnalisée, avec un devis détaillé et transparent, pour vous assurer un résultat optimal et une protection durable de votre patrimoine.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : 15 ans d&apos;expérience en couverture, une équipe certifiée, des interventions rapides sur Hyères, des matériaux garantis 10 ans, et un accompagnement personnalisé de A à Z. Nous sommes reconnus pour notre professionnalisme et notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 80€ et 150€ par m², selon la complexité du chantier, les matériaux choisis et l&apos;état initial de la toiture. Pour une maison de 100m², comptez un investissement global entre 8 000€ et 15 000€. Nous proposons des devis gratuits et détaillés pour une transparence totale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou plus tôt en cas de signes évidents de dégradation comme des infiltrations, tuiles cassées, mousses importantes ou déformations. À Hyères, le climat méditerranéen peut accélérer l&apos;usure, donc une inspection tous les 10 ans est conseillée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours ses certifications (RGE, Qualibat), son expérience, ses références clients, et demandez plusieurs devis détaillés. Un professionnel sérieux propose une visite technique préalable, des garanties écrites et une assurance décennale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Hyères ?
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
