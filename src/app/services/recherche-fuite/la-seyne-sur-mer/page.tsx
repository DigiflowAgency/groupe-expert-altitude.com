import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com est votre partenaire spécialisé en recherche et détection de fuites sur tout le territoire de La Seyne-sur-Mer et ses environs. Avec pl',
  keywords: 'recherche fuite la seyne-sur-mer, detection fuite toiture la seyne-sur-mer, recherche fuite eau la seyne-sur-mer, fuite toiture la seyne-sur-mer, detection infiltration la seyne-sur-mer, entreprise recherche fuite la seyne-sur-mer',
};

export default function RechercheFuiteLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com est votre partenaire spécialisé en recherche et détection de fuites sur tout le territoire de La Seyne-sur-Mer et ses environs. Avec plus de 15 ans d&apos;expérience, nous intervenons rapidement pour localiser précisément vos problèmes d&apos;infiltration et protéger durablement votre patrimoine.</p>

        <h2>Nos services de recherche et détection de fuites a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des technologies de pointe et une expertise technique pointue pour identifier avec précision l&apos;origine de vos infiltrations. Nous utilisons des équipements ultramodernes comme la caméra thermique, le détecteur acoustique et l&apos;hygromètre professionnel, permettant une localisation non destructive à 98% des sources de fuites. Notre méthode garantit une intervention ciblée, minimisant les travaux et préservant l&apos;intégrité de votre bâtiment. Que ce soit pour une toiture, des canalisations ou des murs, notre équipe intervient sur La Seyne-sur-Mer avec réactivité et professionnalisme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Diagnostic précis et rapide avec technologies de pointe
- Équipe certifiée et formée en recherche de fuites
- Intervention garantie sous 24h sur La Seyne-sur-Mer
- Devis gratuit et transparent
- Plus de 500 fuites détectées avec succès ces 5 dernières années</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 750€, selon la complexité et la surface à analyser. Notre tarif inclut le diagnostic complet, l&apos;utilisation d&apos;équipements professionnels et un rapport détaillé. Un investissement raisonnable pour éviter des dégâts potentiellement bien plus coûteux.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou plafonds. Utilisez un détecteur d&apos;humidité professionnel, écoutez les bruits d&apos;écoulement et surveillez toute augmentation anormale de votre consommation d&apos;eau. Un diagnostic professionnel reste le plus fiable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à La Seyne-sur-Mer, contactez immédiatement Expert Altitude Com au 06 XX XX XX XX. Nous proposons une permanence 7j/7 pour les situations critiques, avec une intervention possible sous 2h après votre appel pour limiter les dommages potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a La Seyne-sur-Mer ?
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
