import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Paris 1er | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Paris 1er. Spécialistes de la réfe',
  keywords: 'couverture toiture paris 1er, renovation toiture paris 1er, reparation toiture paris 1er, couvreur paris 1er, refection toiture paris 1er, entreprise couverture paris 1er',
};

export default function CouvertureToitureParis1erPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Paris 1er</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Paris 1er. Spécialistes de la réfection et de la protection de votre patrimoine immobilier, nous intervenons avec expertise et précision sur l&apos;ensemble des toitures parisiennes.</p>

        <h2>Nos services de couverture et rénovation toiture a Paris 1er</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous réalisons des interventions complètes, depuis le diagnostic technique jusqu&apos;à la réfection finale, en utilisant des matériaux haute performance adaptés à l&apos;architecture parisienne. Notre équipe de couvreurs certifiés évalue méticuleusement chaque structure pour proposer une solution sur-mesure, qu&apos;il s&apos;agisse de réparations ponctuelles ou d&apos;une rénovation totale. Nous garantissons une étanchéité parfaite, une isolation thermique optimale et une esthétique respectant le cachet architectural de votre bien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans la rénovation de toitures parisiennes, 2) Des techniciens hautement qualifiés et certifiés, 3) Des interventions rapides et précises, avec un diagnostic gratuit sous 48h, 4) Des solutions personnalisées garantissant une durabilité maximale de votre toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Paris 1er varie entre 8 000€ et 25 000€, selon la superficie, les matériaux et la complexité des travaux. Notre devis détaillé et transparent vous permettra d&apos;avoir une vision précise des coûts sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes comme des infiltrations, des tuiles cassées, des déformations ou une perte d&apos;étanchéité. Un diagnostic annuel permet de prévenir les dégradations majeures.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez ses certifications (RGE, Qualibat), son expérience locale, ses références à Paris, ses assurances professionnelles et demandez systématiquement un devis détaillé avec description précise des travaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Paris 1er ?
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
