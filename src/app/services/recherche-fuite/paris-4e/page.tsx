import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Paris 4e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites dans tout Paris 4e et ses environs. Spécialistes en d',
  keywords: 'recherche fuite paris 4e, detection fuite toiture paris 4e, recherche fuite eau paris 4e, fuite toiture paris 4e, detection infiltration paris 4e, entreprise recherche fuite paris 4e',
};

export default function RechercheFuiteParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites dans tout Paris 4e et ses environs. Spécialistes en diagnostic précis et interventions rapides, nous protégeons votre patrimoine contre les dégâts potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Paris 4e</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier rapidement et précisément l&apos;origine des infiltrations. Grâce à des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons les fuites sans destruction, préservant ainsi votre habitat. Notre méthode garantit une intervention ciblée et économique, limitant les travaux invasifs. Nos techniciens hautement qualifiés interviennent sur tous types de structures : toitures, murs, canalisations, caves et terrasses, avec une précision chirurgicale. Plus de 92% de nos détections permettent une réparation immédiate et définitive.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Équipe certifiée avec plus de 15 ans d&apos;expertise
• Matériel de détection dernière génération
• Diagnostic sous 24h dans Paris 4e
• Devis gratuit et transparent
• Intervention non destructive garantie
• Suivi personnalisé après intervention</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un diagnostic précis inclus. Notre tarification transparente comprend le déplacement, le diagnostic et un rapport détaillé, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les auréoles, moisissures, décoloration des murs ou sensation d&apos;humidité. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à nos experts qui utilisent la thermographie infrarouge pour localiser précisément l&apos;infiltration sans ouvrir les murs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Paris 4e, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nos équipes sont disponibles 7j/7, avec un délai d&apos;intervention garanti sous 2h pour limiter les dégâts potentiels et sécuriser votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Paris 4e ?
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
