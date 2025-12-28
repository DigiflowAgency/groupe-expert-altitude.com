import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Boulogne-Billancourt et ses environs. Avec plus de 15 ',
  keywords: 'couverture toiture boulogne-billancourt, renovation toiture boulogne-billancourt, reparation toiture boulogne-billancourt, couvreur boulogne-billancourt, refection toiture boulogne-billancourt, entreprise couverture boulogne-billancourt',
};

export default function CouvertureToitureBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en couverture et rénovation toiture sur Boulogne-Billancourt et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons les toitures des particuliers et professionnels de l&apos;ouest parisien.</p>

        <h2>Nos services de couverture et rénovation toiture a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>Notre service de rénovation de toiture représente bien plus qu&apos;un simple rafraîchissement. Nous proposons une expertise complète allant du diagnostic précis à la réalisation technique, en garantissant une intervention sur-mesure adaptée à chaque type d&apos;habitat. Nos équipes maîtrisent tous les matériaux - tuiles, ardoises, zinc, bac acier - et interviennent avec un équipement professionnel dernier cri. À Boulogne-Billancourt, nous comprenons les contraintes architecturales spécifiques et adaptons nos solutions en conséquence. Notre processus inclut un diagnostic gratuit, un devis détaillé et une intervention minutieuse respectant les normes de sécurité et d&apos;étanchéité les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour une entreprise certifiée RGE avec une assurance décennale complète. Nos techniciens sont formés annuellement aux dernières techniques de couverture. Nous proposons des délais d&apos;intervention rapides, généralement sous 72h. Notre engagement qualité se traduit par des matériaux haut de gamme et des finitions impeccables qui garantissent la durabilité de votre toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 120€ et 350€ au m² selon les matériaux et la complexité. Pour une maison moyenne de 100m², comptez un budget global entre 12 000€ et 35 000€. Nous proposons des financements et des aides adaptés pour alléger ce coût.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-50 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées à plus de 20%, déformation structurelle, mousses et végétations importantes. Un diagnostic précis permet de déterminer le moment optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours sa certification RGE, son assurance décennale, ses références clients et son ancienneté sur le marché. Exigez un devis détaillé, comparez plusieurs propositions et n&apos;hésitez pas à demander des recommandations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Boulogne-Billancourt ?
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
