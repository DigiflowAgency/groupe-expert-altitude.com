import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites à Pantin et ses environs. Spécialistes en recherche et loc',
  keywords: 'recherche fuite pantin, detection fuite toiture pantin, recherche fuite eau pantin, fuite toiture pantin, detection infiltration pantin, entreprise recherche fuite pantin',
};

export default function RechercheFuitePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites à Pantin et ses environs. Spécialistes en recherche et localisation d&apos;infiltrations, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Pantin</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des équipements non destructifs comme la caméra thermique, le détecteur électronique et le corrélateur acoustique pour identifier précisément l&apos;origine des infiltrations. Notre processus comprend un diagnostic complet : analyse visuelle, mesures techniques et rapport détaillé. Nos techniciens interviennent sur toitures, canalisations, caves et murs, garantissant une intervention ciblée et efficace à Pantin. Avec plus de 95% de précision de détection, nous évitons les travaux inutiles et minimisons les coûts de réparation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une équipe certifiée avec 15 ans d&apos;expérience, 2) Un matériel de détection dernier cri, 3) Un diagnostic précis sans dommage aux structures, 4) Une intervention rapide sur Pantin et toute la région parisienne. Nous sommes votre bouclier contre les risques d&apos;infiltration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive à Pantin varie entre 250€ et 650€ selon la complexité, incluant le diagnostic complet et le rapport technique. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité ou appelez un professionnel qui réalisera un diagnostic thermique précis révélant les zones humides.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Pantin, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une permanence 7j/7 et intervenons sous 2h pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Pantin ?
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
