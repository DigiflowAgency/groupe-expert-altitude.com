import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Nice | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation de toiture à Nice et dans toute la région az',
  keywords: 'couverture toiture nice, renovation toiture nice, reparation toiture nice, couvreur nice, refection toiture nice, entreprise couverture nice',
};

export default function CouvertureToitureNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation de toiture à Nice et dans toute la région azuréenne. Avec plus de 15 ans d&apos;expertise, nous garantissons des solutions sur-mesure pour protéger durablement votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a Nice</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation de toiture représentent bien plus qu&apos;un simple rafraîchissement esthétique. Notre équipe de professionnels hautement qualifiés analyse précisément l&apos;état de votre toiture pour proposer des solutions techniques adaptées. Nous intervenons sur tous types de structures - tuiles, ardoises, bacs acier - en utilisant des matériaux de haute qualité garantissant une durabilité minimale de 30 ans. Notre processus comprend un diagnostic complet, un devis détaillé et transparent, et une intervention minutieuse respectant les normes techniques et environnementales actuelles. À Nice, nous comprenons les spécificités climatiques qui impactent directement la longévité des toitures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : une équipe certifiée RGE, un diagnostic gratuit sous 48h, des matériaux sélectionnés avec le plus grand soin, une intervention rapide et propre, et surtout une garantie décennale qui sécurise votre investissement. 95% de nos clients nous recommandent après leur intervention.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture à Nice varie entre 8 000€ et 25 000€ selon la surface, les matériaux choisis et la complexité des travaux. Nous proposons systématiquement un devis détaillé et des financements adaptés pour éviter toute mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes précurseurs comme des infiltrations, des tuiles cassées, une déformation de la charpente ou des mousses/verdissements importants. Un diagnostic annuel permet d&apos;anticiper ces situations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours ses certifications RGE, son assurance décennale, ses références clients, et demandez plusieurs devis comparatifs. Chez Groupe Expert Altitude Com, nous mettons à votre disposition tous nos justificatifs et recommandations de clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Nice ?
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
