import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Nanterre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé dans la recherche et détection de fuites sur Nanterre et ses environs. Avec notre expertise tech',
  keywords: 'recherche fuite nanterre, detection fuite toiture nanterre, recherche fuite eau nanterre, fuite toiture nanterre, detection infiltration nanterre, entreprise recherche fuite nanterre',
};

export default function RechercheFuiteNanterrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Nanterre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé dans la recherche et détection de fuites sur Nanterre et ses environs. Avec notre expertise technique de pointe, nous intervenons rapidement pour localiser précisément les infiltrations et protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Nanterre</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des technologies de pointe et une expertise technique pointue. Nos techniciens utilisent des caméras thermiques, des détecteurs électroniques et des appareils de mesure ultramodernes pour identifier avec précision l&apos;origine des infiltrations. Que ce soit pour une fuite de toiture, un problème de canalisations ou une infiltration dans un mur, nous réalisons un diagnostic complet sans aucune destruction. Notre méthode non invasive permet de localiser le point exact de la fuite avec un taux de précision de 95%, limitant ainsi les travaux et les coûts pour nos clients. Sur Nanterre, nous intervenons dans les délais les plus courts, généralement sous 24h après votre appel.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, 2) Un matériel de détection dernier cri garantissant une précision millimétrique, 3) Une intervention rapide et professionnelle sur Nanterre, 4) Un devis gratuit et transparent sans engagement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, mais notre diagnostic précis permet souvent de réduire significativement les coûts de réparation ultérieurs. Un investissement intelligent pour protéger votre bien.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nos experts utilisent la thermographie infrarouge qui révèle les variations de température, les caméras d&apos;inspection et des hygromètres qui mesurent précisément l&apos;humidité. Ces techniques permettent de localiser l&apos;infiltration sans aucune détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Nanterre, contactez directement notre ligne d&apos;astreinte au 01 XX XX XX XX. Nous proposons une intervention sous 2h en situation critique pour limiter les dégâts potentiels et sécuriser votre propriété.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Nanterre ?
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
