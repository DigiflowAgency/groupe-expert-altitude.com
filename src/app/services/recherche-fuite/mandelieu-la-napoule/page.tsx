import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Mandelieu-la-Napoule et ses environs. Nos experts',
  keywords: 'recherche fuite mandelieu-la-napoule, detection fuite toiture mandelieu-la-napoule, recherche fuite eau mandelieu-la-napoule, fuite toiture mandelieu-la-napoule, detection infiltration mandelieu-la-napoule, entreprise recherche fuite mandelieu-la-napoule',
};

export default function RechercheFuiteMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Mandelieu-la-Napoule et ses environs. Nos experts interviennent rapidement pour localiser précisément toute source d&apos;infiltration, en utilisant des technologies de pointe qui garantissent une intervention non destructive.</p>

        <h2>Nos services de recherche et détection de fuites a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente la solution technologique la plus avancée pour identifier rapidement et efficacement les infiltrations d&apos;eau dans votre habitat. Grâce à nos appareils de thermographie infrarouge et détecteurs acoustiques haute précision, nous localisons avec une exactitude de 95% l&apos;origine des fuites, qu&apos;elles concernent une toiture, des canalisations ou des murs. Notre méthode non invasive permet d&apos;intervenir sans causer de dommages supplémentaires, préservant ainsi l&apos;intégrité de votre bien immobilier. Chaque intervention sur Mandelieu-la-Napoule est réalisée par des techniciens certifiés, garantissant un diagnostic rapide et une résolution efficace de vos problèmes d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique unique, notre réactivité immédiate et notre engagement qualité. Nos techniciens possèdent plus de 15 ans d&apos;expérience en recherche de fuites, notre taux de satisfaction client atteint 98%, et nous proposons un diagnostic précis sous 24h. De plus, nous sommes assurés et agréés, offrant une tranquillité totale à nos clients.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic précis inclus. Notre tarification transparente comprend le déplacement, les tests techniques et un rapport détaillé, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons plusieurs techniques : caméra thermique pour identifier les zones humides, hygromètre pour mesurer l&apos;humidité, et détecteurs acoustiques pour localiser précisément la source. Notre approche permet de repérer l&apos;infiltration sans démolir les parois.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Mandelieu-la-Napoule, contactez notre ligne directe au 04 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique, 7j/7 et 24h/24, avec une équipe d&apos;astreinte toujours prête à intervenir rapidement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Mandelieu-la-Napoule ?
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
