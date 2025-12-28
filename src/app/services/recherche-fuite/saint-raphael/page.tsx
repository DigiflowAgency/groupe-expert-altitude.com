import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Saint-Raphaël | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur tout le territoire de Saint-Raphaël et ses enviro',
  keywords: 'recherche fuite saint-raphaël, detection fuite toiture saint-raphaël, recherche fuite eau saint-raphaël, fuite toiture saint-raphaël, detection infiltration saint-raphaël, entreprise recherche fuite saint-raphaël',
};

export default function RechercheFuiteSaintRaphaelPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Saint-Raphaël</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur tout le territoire de Saint-Raphaël et ses environs. Spécialistes des techniques non destructives, nous intervenons rapidement pour localiser précisément vos problèmes d&apos;infiltration et protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Saint-Raphaël</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente la solution technologique la plus avancée du secteur de Saint-Raphaël. Nous utilisons des équipements de pointe comme la caméra thermique, le détecteur acoustique et le corrélateur numérique, permettant de localiser avec une précision de 95% toute infiltration sans endommager vos structures. Notre processus complet comprend un diagnostic initial gratuit, un repérage technique exhaustif et un rapport détaillé expliquant l&apos;origine et les solutions de résolution. Nos techniciens certifiés interviennent dans un délai maximum de 48h sur tout le département du Var, garantissant une intervention rapide et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts certifiés avec plus de 15 ans d&apos;expérience
• Technologies de détection les plus modernes du marché
• Diagnostic précis à 95% sans destruction
• Interventions rapides sur Saint-Raphaël et ses alentours
• Devis gratuit et transparent
• Solutions adaptées à chaque type de bâtiment</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un tarif moyen de 450€. Ce prix inclut le diagnostic complet, l&apos;utilisation d&apos;équipements high-tech et le rapport détaillé. Notre entreprise propose systématiquement un devis précis avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous recommandons plusieurs techniques : observation des traces d&apos;humidité, utilisation d&apos;une caméra thermique pour repérer les variations de température, mesure de l&apos;humidité avec un détecteur professionnel et analyse acoustique des zones suspectes. Notre diagnostic permet de localiser l&apos;origine exacte sans détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Saint-Raphaël, contactez immédiatement Groupe Expert Altitude Com au 06 xx xx xx xx. Nous proposons une permanence 7j/7 pour les situations critiques, avec un délai d&apos;intervention garanti sous 2h pour éviter l&apos;aggravation des dégâts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Saint-Raphaël ?
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
