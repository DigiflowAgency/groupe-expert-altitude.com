import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Colomiers | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Colomiers et ses environs. Spécialistes des diag',
  keywords: 'recherche fuite colomiers, detection fuite toiture colomiers, recherche fuite eau colomiers, fuite toiture colomiers, detection infiltration colomiers, entreprise recherche fuite colomiers',
};

export default function RechercheFuiteColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Colomiers et ses environs. Spécialistes des diagnostics précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Colomiers</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine des technologies de pointe et une expertise technique pointue. Nos techniciens utilisent des équipements de détection ultramodernes comme la caméra thermique et le détecteur acoustique, permettant de localiser précisément l&apos;origine des infiltrations sans destruction. Sur Colomiers, nous intervenons aussi bien pour les particuliers que les professionnels, avec une moyenne de 98% de détections réussies. Chaque intervention commence par un diagnostic complet, suivi d&apos;un rapport détaillé et de recommandations techniques adaptées à votre situation spécifique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection non invasive garantissant zéro dommage 
- Équipe certifiée avec plus de 15 ans d&apos;expérience 
- Intervention rapide sous 24h sur Colomiers et zone toulousaine 
- Devis gratuit et transparent avant toute intervention</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€, selon la complexité et les équipements nécessaires. Notre tarif inclut le diagnostic complet, l&apos;utilisation de matériel technologique et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles, moisissures, ou écarts de température. Utilisez un détecteur d&apos;humidité ou contactez un professionnel qui réalisera un diagnostic thermique précis révélant les zones d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement le Groupe Expert Altitude Com au 05 XX XX XX XX. Nous proposons une astreinte 7j/7 pour les situations critiques nécessitant une intervention immédiate à Colomiers et alentours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Colomiers ?
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
