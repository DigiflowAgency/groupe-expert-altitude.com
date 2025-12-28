import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a Issy-les-Moulineaux | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et à Issy-les-Moulineaux, le Groupe Expert Altitude Com est votre partenaire de confiance en traitement',
  keywords: 'demoussage toiture issy-les-moulineaux, traitement toiture issy-les-moulineaux, nettoyage toiture issy-les-moulineaux, antimousse toiture issy-les-moulineaux, hydrofuge toiture issy-les-moulineaux, entretien toiture issy-les-moulineaux',
};

export default function TraitementToitureIssyLesMoulineauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a Issy-les-Moulineaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et à Issy-les-Moulineaux, le Groupe Expert Altitude Com est votre partenaire de confiance en traitement et démoussage. Nous protégeons efficacement vos bâtiments contre les dégradations liées aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a Issy-les-Moulineaux</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une intervention cruciale pour préserver l&apos;intégrité et l&apos;esthétique de votre couverture. Notre équipe hautement qualifiée utilise des techniques et des produits écologiques pour éliminer complètement les mousses, lichens et algues qui s&apos;installent progressivement. Nous intervenons sur tous types de matériaux - tuiles terre cuite, ardoises, béton - avec un protocole adapté à chaque situation. Notre processus comprend un diagnostic précis, un nettoyage haute précision sans endommagement des tuiles, puis un traitement préventif antimousse qui protège durablement votre toiture contre les futures proliférations. Pour les habitants d&apos;Issy-les-Moulineaux, nous garantissons une intervention rapide et un résultat impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique : notre équipe possède plus de 15 ans d&apos;expérience, nous utilisons du matériel professionnel dernier cri, nos produits sont 100% écologiques et nos interventions sont garanties 5 ans. Nous sommes certifiés RGE et proposons des devis gratuits sous 48h. Notre connaissance précise des problématiques locales fait de nous le partenaire idéal pour l&apos;entretien de votre toiture.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen du démoussage varie entre 15€ et 30€ au m², selon la complexité de la toiture, son état et son accessibilité. Pour une maison standard à Issy-les-Moulineaux de 100m², comptez un budget global entre 1500€ et 3000€. Nous proposons systématiquement un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse se situe entre avril et septembre, période où les conditions météorologiques permettent un séchage optimal. Il est recommandé d&apos;intervenir tous les 3 à 5 ans, ou dès que vous observez les premiers signes de prolifération de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Nous utilisons un produit spécifique pulvérisé uniformément, qui forme un film protecteur invisible limitant la pénétration de l&apos;eau et empêchant la fixation future des mousses. Le séchage complet prend environ 24h et offre une protection de 5 à 7 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a Issy-les-Moulineaux ?
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
