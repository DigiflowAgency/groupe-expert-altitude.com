import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a La Ciotat | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites à La Ciotat et ses environs. Spécialistes en di',
  keywords: 'recherche fuite la ciotat, detection fuite toiture la ciotat, recherche fuite eau la ciotat, fuite toiture la ciotat, detection infiltration la ciotat, entreprise recherche fuite la ciotat',
};

export default function RechercheFuiteLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites à La Ciotat et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a La Ciotat</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des détecteurs thermiques, acoustiques et électroniques permettant une localisation précise sans destruction. Notre méthode garantit une intervention minimale et un diagnostic rapide, limitant ainsi les coûts et les travaux. Pour les habitants de La Ciotat, nous proposons un service sur-mesure adapté aux spécificités de l&apos;habitat local, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations ou d&apos;infiltrations complexes. Nos techniciens interviennent avec un équipement de haute précision, réalisant un diagnostic complet en moins de 2 heures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour : 1) Une expertise de plus de 15 ans dans la détection de fuites 2) Un diagnostic non destructif garanti 3) Un taux de résolution de 98% des problèmes détectés 4) Une intervention rapide sous 24h sur La Ciotat et ses alentours.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic précis inclus. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, les moisissures ou la décoloration des murs. Nos appareils thermiques permettent de localiser précisément l&apos;origine de l&apos;infiltration sans faire de trous.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à La Ciotat, contactez notre ligne directe au 04 XX XX XX XX, disponible 7j/7. Nous intervenons sous 2h pour les situations critiques afin de limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a La Ciotat ?
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
