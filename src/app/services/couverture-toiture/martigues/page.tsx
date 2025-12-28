import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Martigues | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en couverture et rénovation toiture à Martigues, transforme et protège votre habitat avec des solutions techn',
  keywords: 'couverture toiture martigues, renovation toiture martigues, reparation toiture martigues, couvreur martigues, refection toiture martigues, entreprise couverture martigues',
};

export default function CouvertureToitureMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en couverture et rénovation toiture à Martigues, transforme et protège votre habitat avec des solutions techniques sur-mesure. Depuis plus de 15 ans, nous intervenons sur tous types de toitures dans la région maritime de Martigues et ses environs.</p>

        <h2>Nos services de couverture et rénovation toiture a Martigues</h2>
        <div className="space-y-4">
          <p>Notre expertise en rénovation de toiture couvre l&apos;ensemble des besoins résidentiels et professionnels. Nous réalisons des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale, en utilisant uniquement des matériaux de haute qualité garantissant durabilité et performance énergétique. Notre équipe de couvreurs certifiés analyse méticuleusement chaque structure pour proposer une solution adaptée, qu&apos;il s&apos;agisse de tuiles, ardoises ou toiture terrasse. Nous maîtrisons les techniques modernes d&apos;isolation et de rénovation, permettant à nos clients de réduire jusqu&apos;à 30% leurs déperditions thermiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un service premium : des techniciens hautement qualifiés, un diagnostic gratuit, des matériaux certifiés, une intervention rapide et des garanties décennales. Nous sommes reconnus comme le partenaire de confiance des propriétaires de Martigues pour tous travaux de couverture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 8 000€ et 25 000€ selon la superficie, les matériaux et la complexité des travaux. Notre devis personnalisé permet de définir précisément le budget avec transparence et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans ou en cas de signes visibles de dégradation : fuites, tuiles cassées, infiltrations, mousses importantes. Un diagnostic annuel permet de prévenir les désordres potentiels et prolonger la durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Un couvreur qualifié doit posséder des certifications officielles, une assurance décennale, des références clients vérifiables et une expertise technique récente. Vérifiez ses labels professionnels, consultez ses avis et demandez systématiquement un devis détaillé avant intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Martigues ?
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
