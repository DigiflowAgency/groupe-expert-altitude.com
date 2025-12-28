import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Arles | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise des fuites à Arles et ses environs. Spécialistes en recherche et loc',
  keywords: 'recherche fuite arles, detection fuite toiture arles, recherche fuite eau arles, fuite toiture arles, detection infiltration arles, entreprise recherche fuite arles',
};

export default function RechercheFuiteArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise des fuites à Arles et ses environs. Spécialistes en recherche et localisation d&apos;infiltrations, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Arles</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier avec précision les sources d&apos;infiltration d&apos;eau. Grâce à nos équipements de pointe comme la caméra thermique et le détecteur acoustique, nous réalisons un diagnostic non destructif à 98% de fiabilité. Notre méthode exclusive nous permet de localiser les fuites sur toiture, murs, canalisations et réseaux enterrés sans causer de dommages à votre propriété. Chaque intervention sur Arles est réalisée par des techniciens certifiés, garantissant une expertise professionnelle et un résultat optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une technologie de détection ultramoderne 2) Un diagnostic précis sous 24h 3) Une intervention rapide et sans dommages 4) Une expertise locale reconnue sur tout le territoire arlésien. Nos clients bénéficient d&apos;un service clé en main qui protège efficacement leur patrimoine.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un diagnostic précis inclus. Notre tarification transparente s&apos;adapte à chaque situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous utilisons la thermographie infrarouge qui révèle les variations de température, ainsi que des tests d&apos;humidité précis. Ces méthodes permettent de localiser l&apos;infiltration sans ouvrir les murs.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Arles, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous intervenons sous 2h dans un rayon de 30 km autour d&apos;Arles pour tout problème de fuite nécessitant une action immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Arles ?
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
