import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Cannes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur la région cannoise. Avec plus de 15 ans d&apos;expert',
  keywords: 'couverture toiture cannes, renovation toiture cannes, reparation toiture cannes, couvreur cannes, refection toiture cannes, entreprise couverture cannes',
};

export default function CouvertureToitureCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture sur la région cannoise. Avec plus de 15 ans d&apos;expertise, nous protégeons et valorisons votre patrimoine immobilier grâce à des solutions techniques sur-mesure adaptées au climat méditerranéen.</p>

        <h2>Nos services de couverture et rénovation toiture a Cannes</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture couvrent l&apos;ensemble des besoins des propriétaires à Cannes et ses environs. Notre équipe de professionnels qualifiés réalise des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réfection totale. Nous travaillons avec des matériaux haute performance comme les tuiles terre cuite, ardoises et bacs acier, garantissant une étanchéité optimale et une durabilité exceptionnelle. Chaque chantier fait l&apos;objet d&apos;un suivi personnalisé, avec un devis détaillé et transparent, respectant les normes techniques et environnementales actuelles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale reconnue sur Cannes depuis 2008
• Équipe de 12 couvreurs certifiés et formés
• Garantie décennale sur tous nos travaux
• Interventions rapides sous 48h
• Diagnostic technique gratuit avant travaux
• Solutions techniques adaptées à l&apos;habitat méditerranéen</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité du chantier. Pour une maison moyenne de 100m², le budget global oscille entre 8 000€ et 25 000€. Nous proposons des financements et facilités de paiement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformations structurelles, mousses et végétations, isolation dégradée. Un diagnostic annuel est recommandé pour prévenir les désordres.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : certification professionnelle, assurance décennale, avis clients, ancienneté de l&apos;entreprise, références locales. Exigez un devis détaillé, des garanties écrites et une visite technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Cannes ?
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
