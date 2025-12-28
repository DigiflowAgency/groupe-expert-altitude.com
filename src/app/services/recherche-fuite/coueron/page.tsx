import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Couëron | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites sur Couëron et ses environs. Nos experts en recherche de f',
  keywords: 'recherche fuite couëron, detection fuite toiture couëron, recherche fuite eau couëron, fuite toiture couëron, detection infiltration couëron, entreprise recherche fuite couëron',
};

export default function RechercheFuiteCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites sur Couëron et ses environs. Nos experts en recherche de fuites interviennent rapidement pour protéger votre habitat contre les dégâts potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Couëron</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier avec précision les sources d&apos;infiltration. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur électronique, permettant une localisation non destructive des fuites. Notre processus débute par un diagnostic complet, suivi d&apos;un rapport détaillé indiquant l&apos;emplacement exact et la nature de la fuite. Notre équipe qualifiée intervient aussi bien sur les toitures, canalisations que les murs, avec une efficacité garantie à 95%. Nous intervenons sur Couëron et tout le département, proposant une expertise rapide et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une technologie de détection de dernière génération 2) Des techniciens certifiés avec plus de 15 ans d&apos;expérience 3) Un diagnostic précis sans travaux destructifs 4) Une intervention rapide, généralement sous 24h. Notre engagement qualité fait de nous le leader local en recherche de fuites.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive sur Couëron varie entre 180€ et 450€ selon la complexité, incluant le diagnostic complet et le rapport détaillé. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, ou dégradation de peinture. Utilisez un détecteur d&apos;humidité professionnel ou contactez un expert qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Couëron, contactez immédiatement notre service d&apos;astreinte disponible 7j/7. Nous intervenons sous 2h en situation critique pour limiter les dégâts potentiels et sécuriser votre habitat.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Couëron ?
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
