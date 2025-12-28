import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Aix-en-Provence, transforme et protège votre habitat avec d',
  keywords: 'couverture toiture aix-en-provence, renovation toiture aix-en-provence, reparation toiture aix-en-provence, couvreur aix-en-provence, refection toiture aix-en-provence, entreprise couverture aix-en-provence',
};

export default function CouvertureToitureAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en couverture et rénovation toiture à Aix-en-Provence, transforme et protège votre habitat avec des solutions sur-mesure. Depuis plus de 15 ans, nous intervenons sur tous types de toitures dans le département des Bouches-du-Rhône.</p>

        <h2>Nos services de couverture et rénovation toiture a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre expertise en rénovation et couverture couvre l&apos;ensemble des besoins résidentiels et professionnels. Nous réalisons des interventions complètes, depuis le diagnostic technique jusqu&apos;à la réfection totale, en utilisant les matériaux les plus performants. Notre méthode intègre un audit précis de votre toiture, l&apos;identification des désordres structurels et une proposition technique détaillée. Chaque chantier est personnalisé, avec une attention particulière à l&apos;isolation thermique et à l&apos;étanchéité, garantissant une protection optimale contre les conditions climatiques provençales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe de 12 couvreurs certifiés à Aix-en-Provence
• Devis gratuit et précis sous 48h
• Matériaux haute qualité avec garantie décennale
• Interventions rapides et professionnelles
• Solutions techniques innovantes adaptées au climat local</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ par m², selon les matériaux et la complexité. Pour une maison de 100m², comptez un budget global de 10 000€ à 25 000€. Notre expertise permet d&apos;optimiser ce coût avec des solutions durables.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture nécessite une réfection totale tous les 25-30 ans, ou en cas de signes comme infiltrations récurrentes, tuiles cassées sur plus de 30%, déformation de la charpente ou isolation défectueuse. Un diagnostic professionnel permet de déterminer précisément vos besoins.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, ses références clients locales, son assurance décennale, et demandez plusieurs devis détaillés. Chez Groupe Expert Altitude Com, nous mettons à votre disposition nos références et attestations sur simple demande.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Aix-en-Provence ?
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
