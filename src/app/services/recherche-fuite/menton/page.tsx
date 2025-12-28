import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Menton | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites à Menton et ses environs. Avec notre expertise ',
  keywords: 'recherche fuite menton, detection fuite toiture menton, recherche fuite eau menton, fuite toiture menton, detection infiltration menton, entreprise recherche fuite menton',
};

export default function RechercheFuiteMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites à Menton et ses environs. Avec notre expertise technique de pointe, nous intervenons rapidement pour localiser et résoudre tous vos problèmes d&apos;infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Menton</h2>
        <div className="space-y-4">
          <p>Nos techniciens spécialisés utilisent des technologies de détection non destructives pour identifier précisément l&apos;origine de vos fuites, qu&apos;il s&apos;agisse de toitures, murs, canalisations ou sous-sols. Sur la région mentonnaise, nous réalisons en moyenne 95% de nos interventions sans aucune démolition préalable, grâce à des équipements de géolocalisation et caméras thermiques haute résolution. Notre diagnostic complet comprend une analyse technique détaillée, un rapport précis et des recommandations adaptées à votre situation spécifique. Nous intervenons aussi bien pour les particuliers que les professionnels, avec une réactivité garantie sous 24h.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés avec plus de 15 ans d&apos;expérience sur Menton et la Côte d&apos;Azur
- Matériel de détection ultramoderne et non invasif
- Devis gratuit et transparent sans engagement
- Intervention rapide et sur-mesure adaptée à chaque type de bâtiment</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un tarif moyen de 450€ pour une intervention complète. Nous proposons systématiquement un devis détaillé avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures et écoutez les bruits d&apos;écoulement. Notre diagnostic professionnel combine caméra thermique et détecteurs électroniques pour une précision maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une urgence fuite à Menton, contactez immédiatement notre ligne d&apos;astreinte au 06 XX XX XX XX, disponible 7j/7 et 24h/24. Notre équipe intervient sous 2h en cas de sinistre nécessitant une action immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Menton ?
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
