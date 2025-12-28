import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Villejuif | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Villejuif et ses environs. Spécialistes depuis plus de 1',
  keywords: 'couverture toiture villejuif, renovation toiture villejuif, reparation toiture villejuif, couvreur villejuif, refection toiture villejuif, entreprise couverture villejuif',
};

export default function CouvertureToitureVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture à Villejuif et ses environs. Spécialistes depuis plus de 15 ans, nous protégeons et valorisons votre habitat avec des solutions techniques sur-mesure et une expertise reconnue.</p>

        <h2>Nos services de couverture et rénovation toiture a Villejuif</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nos équipes interviennent sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en réalisant un diagnostic précis avant toute intervention. Nous proposons des solutions adaptées à chaque configuration, en privilégiant des matériaux haute performance et une isolation thermique optimale. Notre processus comprend un état des lieux technique complet, un devis détaillé et transparent, puis une réalisation professionnelle avec des matériaux certifiés. À Villejuif, nous garantissons une intervention rapide et un résultat esthétique et fonctionnel.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans 2) Des artisans certifiés et formés en permanence 3) Des matériaux de qualité avec garantie décennale 4) Un engagement écologique avec des solutions énergétiquement performantes. Notre réputation locale à Villejuif repose sur la qualité et la fiabilité de nos interventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture varie entre 5 000€ et 25 000€ selon la surface, les matériaux et la complexité. Un diagnostic précis permet d&apos;établir un devis personnalisé sans surprise. Comptez environ 80-120€ au m² pour une rénovation complète de qualité professionnelle.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses importantes. Un diagnostic annuel permet de prévenir les dégradations et prolonger la durée de vie de votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez : 1) Les certifications professionnelles 2) L&apos;expérience sur des chantiers similaires 3) Les avis clients 4) La garantie décennale 5) Un devis détaillé. À Villejuif, nous recommandons toujours de demander plusieurs devis comparatifs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Villejuif ?
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
