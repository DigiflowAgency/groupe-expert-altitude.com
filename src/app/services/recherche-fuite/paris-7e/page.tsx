import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Paris 7e et ses environs. Spécialistes des diagno',
  keywords: 'recherche fuite paris 7e, detection fuite toiture paris 7e, recherche fuite eau paris 7e, fuite toiture paris 7e, detection infiltration paris 7e, entreprise recherche fuite paris 7e',
};

export default function RechercheFuiteParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Paris 7e et ses environs. Spécialistes des diagnostics précis et non destructifs, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts liés aux infiltrations.</p>

        <h2>Nos services de recherche et détection de fuites a Paris 7e</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des détecteurs électroniques, des caméras thermiques et des appareils acoustiques permettant de localiser avec une précision de 95% l&apos;origine exacte des infiltrations. Notre processus débute par un diagnostic complet : nous réalisons un état des lieux détaillé, identifions les zones sensibles et proposons une intervention sur-mesure adaptée à chaque situation. Nos techniciens certifiés interviennent sur tous types de structures : toitures, murs, canalisations, terrasses, avec une méthodologie rigoureuse garantissant un résultat optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : une intervention rapide sous 24h, des techniciens hautement qualifiés, un diagnostic non destructif, une transparence totale des coûts, et une expertise reconnue sur Paris 7e. Nous sommes assurés et agréés, avec plus de 500 interventions réussies chaque année.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€ selon la complexité, incluant le diagnostic précis et le rapport détaillé. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les auréoles d&apos;humidité, les moisissures, les décollements de papier peint ou les déformations. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à nos experts qui réalisent un diagnostic thermique et acoustique complet.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Paris 7e, contactez immédiatement notre ligne directe au 01 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique pour limiter les dégâts et sécuriser votre bien.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Paris 7e ?
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
