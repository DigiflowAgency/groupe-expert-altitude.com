import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites sur Tassin-la-Demi-Lune et ses environs. Nous inte',
  keywords: 'recherche fuite tassin-la-demi-lune, detection fuite toiture tassin-la-demi-lune, recherche fuite eau tassin-la-demi-lune, fuite toiture tassin-la-demi-lune, detection infiltration tassin-la-demi-lune, entreprise recherche fuite tassin-la-demi-lune',
};

export default function RechercheFuiteTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et la détection de fuites sur Tassin-la-Demi-Lune et ses environs. Nous intervenons rapidement pour localiser précisément les infiltrations et protéger votre patrimoine immobilier avec une technologie de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites repose sur une expertise technique pointue et des équipements ultramodernes. Nous réalisons un diagnostic complet en utilisant des caméras thermiques, des détecteurs électroniques et des appareils de mesure d&apos;humidité qui permettent de localiser la source exacte des infiltrations sans aucune détérioration. Notre méthode non destructive garantit une intervention rapide et précise, limitant les dégâts potentiels sur votre toiture, murs ou canalisations. Chaque intervention à Tassin-la-Demi-Lune est personnalisée, avec un rapport détaillé et des recommandations précises pour résoudre durablement les problèmes d&apos;infiltration.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos experts sont certifiés et disposent de plus de 15 ans d&apos;expérience en détection de fuites. Nous proposons un diagnostic gratuit, un devis sous 24h et intervenons rapidement sur Tassin-la-Demi-Lune. Notre taux de réussite dépasse 95% et nous sommes garantis par une assurance professionnelle complète. Nous utilisons les technologies les plus avancées pour une précision millimétrique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, avec un diagnostic initial généralement facturé entre 150€ et 300€. Nous proposons des devis transparents sans frais cachés et adaptons notre tarification à chaque situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons une caméra thermique qui révèle les variations de température, un humidimètre professionnel et parfois une inspection endoscopique. Ces techniques permettent de localiser précisément l&apos;origine de l&apos;infiltration sans percer ni démolir.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez notre ligne directe au 06 xx xx xx xx, disponible 7j/7 et 24h/24. Nos équipes sont mobilisables rapidement sur Tassin-la-Demi-Lune pour une intervention immédiate et sécurisée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Tassin-la-Demi-Lune ?
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
