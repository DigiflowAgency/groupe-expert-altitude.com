import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Gradignan | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Gradignan et ses environs. Spécialistes en dia',
  keywords: 'recherche fuite gradignan, detection fuite toiture gradignan, recherche fuite eau gradignan, fuite toiture gradignan, detection infiltration gradignan, entreprise recherche fuite gradignan',
};

export default function RechercheFuiteGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Gradignan et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Gradignan</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites repose sur des technologies de pointe et une expertise technique pointue. Nous utilisons des équipements ultramodernes comme la thermographie infrarouge et des détecteurs acoustiques permettant de localiser précisément l&apos;origine des infiltrations sans destruction. Notre méthode garantit une intervention ciblée et économique, minimisant les travaux invasifs. Chaque diagnostic est personnalisé, avec un rapport détaillé identifiant les zones sensibles et recommandations de réparation. Notre équipe intervient sur toitures, murs, canalisations et tous types de bâtiments à Gradignan.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés avec plus de 15 ans d&apos;expérience
• Matériel de détection dernier cri
• Intervention sous 24h en urgence
• Devis gratuit et transparent
• Couverture sur Gradignan et toute la Gironde</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte entre 150€ et 450€ selon la complexité, avec un diagnostic précis inclus. Nous proposons un devis personnalisé après évaluation initiale sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité ou contactez un professionnel qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Gradignan, contactez immédiatement Groupe Expert Altitude Com au 05 XX XX XX XX. Nous intervenons 7j/7 pour limiter les dégâts et sécuriser votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Gradignan ?
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
