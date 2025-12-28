import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Orvault | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Orvault et ses environs. Nos experts intervien',
  keywords: 'recherche fuite orvault, detection fuite toiture orvault, recherche fuite eau orvault, fuite toiture orvault, detection infiltration orvault, entreprise recherche fuite orvault',
};

export default function RechercheFuiteOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites sur Orvault et ses environs. Nos experts interviennent rapidement pour localiser précisément toute infiltration, protégeant ainsi votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Orvault</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des équipements de diagnostic ultramodernes comme la thermographie infrarouge et la détection acoustique, permettant de localiser avec une précision de 95% les sources d&apos;infiltration sans destruction. Nos techniciens hautement qualifiés analysent chaque situation spécifiquement, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations enterrées ou de problèmes d&apos;infiltration muraux. Notre approche méthodologique garantit une intervention rapide et efficace, minimisant les potentiels dégâts structurels et les coûts de réparation pour nos clients d&apos;Orvault et de la métropole nantaise.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, Un diagnostic précis sans travaux destructifs, Une intervention rapide sous 24h, Des technologies de détection dernier cri garantissant une localisation exacte des fuites. Notre engagement qualité et notre réactivité font de nous le partenaire idéal pour tous vos problèmes d&apos;infiltration.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic précis inclus. Nous proposons un devis gratuit et transparent avant toute intervention sur Orvault.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nos experts utilisent la thermographie infrarouge qui révèle les variations de température, la détection acoustique qui capte les bruits d&apos;écoulement et l&apos;humidimétrie pour mesurer le taux d&apos;humidité dans les matériaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX, disponible 7j/7. Notre équipe intervient rapidement sur Orvault pour limiter les dégâts et sécuriser votre bâtiment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Orvault ?
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
