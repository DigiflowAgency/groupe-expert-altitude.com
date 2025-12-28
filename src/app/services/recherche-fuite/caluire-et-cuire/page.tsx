import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Caluire-et-Cuire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites à Caluire-et-Cuire et ses environs. Spécialistes e',
  keywords: 'recherche fuite caluire-et-cuire, detection fuite toiture caluire-et-cuire, recherche fuite eau caluire-et-cuire, fuite toiture caluire-et-cuire, detection infiltration caluire-et-cuire, entreprise recherche fuite caluire-et-cuire',
};

export default function RechercheFuiteCaluireEtCuirePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Caluire-et-Cuire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites à Caluire-et-Cuire et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dommages potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Caluire-et-Cuire</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur électronique, permettant une localisation non destructive des fuites. Notre équipe certifiée intervient sur toutes les structures - toitures, murs, canalisations - avec une précision chirurgicale. En moyenne, nos diagnostics permettent de réduire les coûts de réparation de 40% grâce à notre intervention précoce et ciblée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale de plus de 15 ans à Caluire-et-Cuire, 2) Un diagnostic garanti sous 24h, 3) Des techniciens certifiés et formés aux dernières technologies de détection, 4) Un devis gratuit et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 750€, selon la complexité et la surface à analyser. Notre tarification inclut le diagnostic complet, l&apos;utilisation d&apos;équipements de haute technologie et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous recommandons l&apos;utilisation d&apos;une caméra thermique qui révèle les variations de température, ainsi qu&apos;un détecteur d&apos;humidité qui mesure précisément le taux d&apos;humidité à travers les matériaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Caluire-et-Cuire, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX. Nous intervenons 7j/7 pour tout diagnostic de fuite nécessitant une action immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Caluire-et-Cuire ?
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
