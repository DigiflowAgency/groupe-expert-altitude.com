import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Puteaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Puteaux et ses environs. Spécialistes en diagnostic',
  keywords: 'recherche fuite puteaux, detection fuite toiture puteaux, recherche fuite eau puteaux, fuite toiture puteaux, detection infiltration puteaux, entreprise recherche fuite puteaux',
};

export default function RechercheFuitePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Puteaux et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts d&apos;infiltration.</p>

        <h2>Nos services de recherche et détection de fuites a Puteaux</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des technologies de pointe et une expertise technique pointue. Nos techniciens utilisent des caméras thermiques, des détecteurs acoustiques et des appareils de mesure d&apos;humidité pour localiser avec précision l&apos;origine des infiltrations. Chaque intervention sur Puteaux et dans les Hauts-de-Seine est réalisée de manière non destructive, garantissant un diagnostic rapide et économique. Nous intervenons sur tous types de structures : toitures, murs, canalisations, caves, terrasses, avec un taux de réussite de plus de 95% dans nos détections.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Matériel technologique dernier cri
- Diagnostic précis sous 24h
- Intervention rapide et sur-mesure
- Devis gratuit et transparent
- Couverture complète de Puteaux et des communes limitrophes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ pour un diagnostic complet. Notre entreprise propose systématiquement un devis détaillé et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à des experts qui réaliseront un diagnostic précis par thermographie infrarouge.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une permanence 7j/7 et intervenons sous 2h dans Puteaux en cas de fuite critique pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Puteaux ?
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
