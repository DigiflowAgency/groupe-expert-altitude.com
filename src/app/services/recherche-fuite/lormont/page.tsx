import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Lormont | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites sur Lormont et ses environs. Spécialistes des diagnostics ',
  keywords: 'recherche fuite lormont, detection fuite toiture lormont, recherche fuite eau lormont, fuite toiture lormont, detection infiltration lormont, entreprise recherche fuite lormont',
};

export default function RechercheFuiteLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites sur Lormont et ses environs. Spécialistes des diagnostics précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique complète et non destructive pour identifier précisément l&apos;origine des infiltrations. Grâce à nos équipements de pointe comme la caméra thermique et le détecteur acoustique, nous localisons avec une précision de 95% les zones problématiques, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations ou d&apos;infiltrations murales. Notre process complet comprend un diagnostic initial, un repérage technique minutieux et un rapport détaillé avec préconisations de réparation. Pour les habitants de Lormont, nous garantissons une intervention sous 24h et un devis gratuit, limitant ainsi les risques de dommages structurels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, 2) Un matériel de détection dernier cri permettant des diagnostics précis, 3) Une intervention rapide et adaptée à chaque situation spécifique, 4) Un engagement de transparence avec des devis détaillés sans surprises.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive sur Lormont varie entre 250€ et 650€ selon la complexité, avec un tarif moyen de 380€. Ce prix inclut le diagnostic complet, l&apos;utilisation d&apos;équipements technologiques et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures ou les décolorations. Notre équipe utilise la thermographie infrarouge pour révéler les zones humides invisibles à l&apos;œil nu.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Lormont, contactez immédiatement Groupe Expert Altitude Com au 05 XX XX XX XX. Nous proposons une permanence 7j/7 et intervenons dans l&apos;heure suivant votre appel pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Lormont ?
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
