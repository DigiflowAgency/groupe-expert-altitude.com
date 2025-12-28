import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Istres | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites sur Istres et ses environs. Spécialistes en recherche d',
  keywords: 'recherche fuite istres, detection fuite toiture istres, recherche fuite eau istres, fuite toiture istres, detection infiltration istres, entreprise recherche fuite istres',
};

export default function RechercheFuiteIstresPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Istres</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites sur Istres et ses environs. Spécialistes en recherche de fuites non destructives, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Istres</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites combine technologie de pointe et expertise technique pour identifier avec précision l&apos;origine des infiltrations. Nos techniciens hautement qualifiés utilisent des équipements de détection ultramodernes comme la thermographie infrarouge et la corrélation acoustique, permettant de localiser les fuites sans endommager vos structures. Sur Istres, nous intervenons aussi bien pour les particuliers que les professionnels, avec une moyenne de 95% de détections réussies dès la première intervention. Notre approche méthodologique nous permet de traiter tous types de fuites : toiture, canalisations, caves, terrasses, garantissant une intervention rapide et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, 2) Un diagnostic précis sans travaux destructifs, 3) Une intervention rapide sous 24h sur Istres et sa région, 4) Un devis gratuit et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 150€ et 500€, selon la complexité et la superficie à diagnostiquer. Notre tarif inclut le déplacement, le diagnostic précis et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous recommandons : observer les traces d&apos;humidité, mesurer l&apos;hygrométrie avec un détecteur professionnel, utiliser une caméra thermique pour identifier les zones de température anormales et réaliser des tests d&apos;infiltrométrie.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement le Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une permanence 7j/7 pour les situations critiques, avec un délai d&apos;intervention maximum de 2h sur Istres.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Istres ?
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
