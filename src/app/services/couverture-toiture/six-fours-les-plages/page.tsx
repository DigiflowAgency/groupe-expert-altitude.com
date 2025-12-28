import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Six-Fours-les-Plages, transforme et protège votre habitat a',
  keywords: 'couverture toiture six-fours-les-plages, renovation toiture six-fours-les-plages, reparation toiture six-fours-les-plages, couvreur six-fours-les-plages, refection toiture six-fours-les-plages, entreprise couverture six-fours-les-plages',
};

export default function CouvertureToitureSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Six-Fours-les-Plages, transforme et protège votre habitat avec des solutions techniques sur-mesure. Nous intervenons rapidement pour garantir la longévité et l&apos;esthétique de votre toiture dans tout le Var.</p>

        <h2>Nos services de couverture et rénovation toiture a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation couvrent l&apos;ensemble des besoins techniques et esthétiques des propriétaires de Six-Fours-les-Plages. Notre équipe de professionnels qualifiés réalise des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale. Nous travaillons avec des matériaux haut de gamme comme les tuiles terres cuites, ardoises et bacs aciers, garantissant une étanchéité optimale et une résistance aux conditions climatiques méditerranéennes. Notre processus inclut systématiquement un audit technique, un devis détaillé et une intervention methodologique minimisant les nuisances pour nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;expertise : notre entreprise dispose de 15 ans d&apos;expérience, une certification RGE, une équipe de 8 professionnels formés en permanence. Nous proposons des délais d&apos;intervention rapides, une garantie décennale et un accompagnement personnalisé. Notre engagement qualité se traduit par des solutions techniques durables et un suivi attentif de chaque chantier.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Six-Fours-les-Plages varie entre 8 000€ et 25 000€, selon la surface (entre 50 et 200m²), les matériaux choisis et la complexité technique. Un diagnostic précis permettra d&apos;établir un devis personnalisé avec des options adaptées à votre budget.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme infiltrations, tuiles cassées, déformations, mousses importantes. À Six-Fours-les-Plages, les conditions climatiques peuvent accélérer la détérioration, nécessitant une vigilance accrue.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement ses certifications RGE, son assurance décennale, ses références clients et son expérience locale. Demandez plusieurs devis détaillés, comparez les propositions techniques et n&apos;hésitez pas à demander des recommandations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Six-Fours-les-Plages ?
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
