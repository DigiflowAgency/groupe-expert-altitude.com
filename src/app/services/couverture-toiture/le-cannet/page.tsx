import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture sur Le Cannet et ses environs. Avec ',
  keywords: 'couverture toiture le cannet, renovation toiture le cannet, reparation toiture le cannet, couvreur le cannet, refection toiture le cannet, entreprise couverture le cannet',
};

export default function CouvertureToitureLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos projets de couverture et rénovation toiture sur Le Cannet et ses environs. Avec plus de 15 ans d&apos;expertise, nous transformons et protégeons votre habitat grâce à des solutions techniques sur-mesure.</p>

        <h2>Nos services de couverture et rénovation toiture a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux exigences les plus strictes de qualité et de durabilité. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - en réalisant un diagnostic précis avant toute intervention. Notre équipe de professionnels qualifiés analyse chaque élément structural, évalue les désordres potentiels et propose une solution technique adaptée à votre bâtiment. Nous utilisons uniquement des matériaux haute performance garantissant une étanchéité optimale et une résistance aux conditions climatiques méditerranéennes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique reconnue avec certification RGE, 2) Un devis détaillé et transparent sans surprise, 3) Des interventions rapides sur Le Cannet et la région, 4) Une garantie décennale sur tous nos travaux. Nous plaçons la satisfaction client au cœur de notre engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour un pavillon standard de 100m², comptez un budget global entre 8 000€ et 25 000€. Nos devis détaillés incluent main-d&apos;œuvre, matériaux et dépose de l&apos;ancienne couverture.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précurseurs : infiltrations récurrentes, tuiles cassées, déformation de la charpente, mousses et infiltrations. Un diagnostic précis par un professionnel permet d&apos;évaluer l&apos;urgence et la nécessité des travaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez impérativement : la certification RGE, l&apos;assurance décennale, les avis clients, l&apos;ancienneté de l&apos;entreprise. Demandez systématiquement un devis détaillé, des références locales et assurez-vous que le professionnel propose une visite technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Le Cannet ?
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
