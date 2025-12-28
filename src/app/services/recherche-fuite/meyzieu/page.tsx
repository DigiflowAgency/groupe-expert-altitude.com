import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Meyzieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Meyzieu et ses environs. Nos experts intervien',
  keywords: 'recherche fuite meyzieu, detection fuite toiture meyzieu, recherche fuite eau meyzieu, fuite toiture meyzieu, detection infiltration meyzieu, entreprise recherche fuite meyzieu',
};

export default function RechercheFuiteMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Meyzieu et ses environs. Nos experts interviennent rapidement pour localiser précisément toute source d&apos;infiltration, en préservant l&apos;intégrité de votre habitat.</p>

        <h2>Nos services de recherche et détection de fuites a Meyzieu</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier avec précision les points d&apos;infiltration dans votre toiture, murs ou canalisations. Grâce à des équipements de détection ultramodernes comme la thermographie infrarouge et les détecteurs acoustiques, nous intervenons de manière non destructive. Notre méthode permet de localiser le moindre point faible avec une précision de 95%, limitant ainsi les travaux invasifs et coûteux. Notre équipe certifiée réalise un diagnostic complet, établissant un rapport détaillé des zones à risque et proposant des solutions de réparation adaptées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens hautement qualifiés avec plus de 15 ans d&apos;expérience sur Meyzieu
- Matériel de détection dernière génération garantissant une précision maximale
- Intervention rapide sous 24h en cas d&apos;urgence
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, avec un tarif moyen de 380€. Ce prix inclut le diagnostic complet, les technologies de détection avancées et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou gonflements. Utilisez un détecteur d&apos;humidité professionnel ou contactez un expert qui réalisera un diagnostic précis avec des outils thermiques et acoustiques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une astreinte 7j/7 pour les situations critiques, avec une intervention sous 2h sur Meyzieu et la métropole lyonnaise.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Meyzieu ?
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
