import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Aulnay-sous-Bois | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Aulnay-sous-Bois. Avec plus de 15 ',
  keywords: 'couverture toiture aulnay-sous-bois, renovation toiture aulnay-sous-bois, reparation toiture aulnay-sous-bois, couvreur aulnay-sous-bois, refection toiture aulnay-sous-bois, entreprise couverture aulnay-sous-bois',
};

export default function CouvertureToitureAulnaySousBoisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Aulnay-sous-Bois</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de couverture et rénovation toiture à Aulnay-sous-Bois. Avec plus de 15 ans d&apos;expérience, nous protégeons et valorisons votre habitat grâce à des solutions techniques sur-mesure et un savoir-faire artisanal.</p>

        <h2>Nos services de couverture et rénovation toiture a Aulnay-sous-Bois</h2>
        <div className="space-y-4">
          <p>Notre service de couverture et rénovation toiture répond aux besoins spécifiques de chaque bâtiment. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc ou bacs acier - en réalisant un diagnostic précis avant toute intervention. Notre équipe de professionnels qualifiés assure un travail méticuleux, depuis le désamiantage jusqu&apos;à la pose de nouveaux matériaux, en garantissant une étanchéité optimale et une durabilité maximale. Chaque chantier à Aulnay-sous-Bois est traité avec la même exigence de qualité, en respectant les normes techniques et esthétiques les plus récentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec des techniciens diplômés
- Devis gratuit et transparent sans surprise
- Interventions rapides dans un délai de 48h
- Garantie décennale sur tous nos travaux
- Matériaux haute performance et éco-responsables</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte en moyenne entre 120€ et 250€ par m², soit un budget total variant de 8 000€ à 25 000€ selon la surface et la complexité. Nos devis détaillés vous permettront d&apos;avoir une visibilité précise sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 30-40 ans, ou en cas de signes comme des infiltrations, tuiles cassées, mousses importantes, ou après des événements climatiques majeurs. Un diagnostic précis tous les 10 ans permet d&apos;anticiper les réparations nécessaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez sa certification RGE, ses références clients, son assurance décennale, et demandez plusieurs devis comparatifs. Chez Groupe Expert Altitude Com, nous mettons à votre disposition nos attestations et recommandations de clients à Aulnay-sous-Bois.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Aulnay-sous-Bois ?
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
