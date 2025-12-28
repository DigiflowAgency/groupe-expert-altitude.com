import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Puteaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Puteaux et ses environs. Nous intervenons depuis plus de 15',
  keywords: 'couverture toiture puteaux, renovation toiture puteaux, reparation toiture puteaux, couvreur puteaux, refection toiture puteaux, entreprise couverture puteaux',
};

export default function CouvertureToiturePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Puteaux et ses environs. Nous intervenons depuis plus de 15 ans pour protéger et valoriser votre patrimoine immobilier avec des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Puteaux</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation de toiture répondent aux exigences les plus strictes de qualité et de durabilité. Notre équipe de professionnels hautement qualifiés analyse précisément l&apos;état de votre toiture avant d&apos;intervenir, en utilisant les techniques et matériaux les plus performants. Nous proposons des solutions complètes, depuis le diagnostic initial jusqu&apos;à la réfection totale, en passant par les réparations ponctuelles. Notre approche sur Puteaux privilégie systématiquement la prevention et la longévité, avec des interventions qui garantissent l&apos;étanchéité et l&apos;isolation de votre toiture pendant plusieurs décennies.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 250 chantiers réalisés par an
- Équipe de 12 couvreurs expérimentés et formés aux dernières normes
- Devis gratuit et transparents sous 48h
- Interventions rapides et adaptées à chaque configuration de toiture</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 120€ et 350€ au m², selon les matériaux choisis et la complexité du chantier. Pour une maison moyenne de 100m², comptez un budget global entre 12 000€ et 35 000€. Nos devis détaillés vous permettront d&apos;avoir une vision précise et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes précurseurs comme des infiltrations, tuiles cassées, mousses importantes, ou après des événements climatiques majeurs. Un diagnostic annuel permet de prévenir les dégradations et prolonger significativement la durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : ses certifications professionnelles, son assurance décennale, ses références clients locales, ses avis en ligne, et sa capacité à fournir un devis détaillé. Groupe Expert Altitude Com dispose de tous ces critères et intervient principalement sur Puteaux et les Hauts-de-Seine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Puteaux ?
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
