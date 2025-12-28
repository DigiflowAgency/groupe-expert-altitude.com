import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Maisons-Alfort. Spécialistes depuis plus de 15 ans, n',
  keywords: 'couverture toiture maisons-alfort, renovation toiture maisons-alfort, reparation toiture maisons-alfort, couvreur maisons-alfort, refection toiture maisons-alfort, entreprise couverture maisons-alfort',
};

export default function CouvertureToitureMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Maisons-Alfort. Spécialistes depuis plus de 15 ans, nous transformons et protégeons votre habitat avec un savoir-faire technique et une expertise reconnue dans le Val-de-Marne.</p>

        <h2>Nos services de couverture et rénovation toiture a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc ou bac acier - en proposant des solutions sur-mesure adaptées à chaque configuration. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, identifiant les points faibles et proposant les réparations ou réfections nécessaires. Nous utilisons uniquement des matériaux de haute qualité, garantissant une étanchéité optimale et une résistance aux conditions climatiques de la région parisienne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale avec une connaissance parfaite des normes de construction à Maisons-Alfort, 2) Une équipe de couvreurs certifiés et formés en continu, 3) Des interventions rapides et un devis gratuit sous 48h, 4) Une garantie décennale sur tous nos travaux de couverture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m² selon les matériaux, soit un budget total variant de 5 000€ à 25 000€ pour une maison moyenne. Nos devis détaillés permettent une transparence totale des coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans ou en cas de signes précurseurs : infiltrations, tuiles cassées, mousses, déformations. Un diagnostic annuel permet de prévenir les dégradations importantes et coûteuses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : la certification RGE, l&apos;immatriculation au registre du commerce, les avis clients, les garanties proposées et demandez plusieurs devis comparatifs avec descriptifs techniques précis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Maisons-Alfort ?
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
