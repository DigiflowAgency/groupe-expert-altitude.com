import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en recherche et détection de fuites sur Plaisance-du-Touch et ses environs. Nous intervenons rapide',
  keywords: 'recherche fuite plaisance-du-touch, detection fuite toiture plaisance-du-touch, recherche fuite eau plaisance-du-touch, fuite toiture plaisance-du-touch, detection infiltration plaisance-du-touch, entreprise recherche fuite plaisance-du-touch',
};

export default function RechercheFuitePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en recherche et détection de fuites sur Plaisance-du-Touch et ses environs. Nous intervenons rapidement pour localiser précisément toute source d&apos;infiltration et protéger votre habitat.</p>

        <h2>Nos services de recherche et détection de fuites a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre expertise en détection de fuites repose sur des technologies de pointe permettant une intervention non destructive et précise. Nous utilisons des caméras thermiques, des détecteurs acoustiques et des appareils de mesure d&apos;humidité qui nous permettent de localiser instantanément l&apos;origine des infiltrations. Notre processus complet comprend un diagnostic technique détaillé, un rapport précis et des recommandations de réparation adaptées. Que ce soit pour une fuite de toiture, un problème de canalisation ou une infiltration dans un mur, notre équipe intervient sur tout type de bâtiment à Plaisance-du-Touch et dans le sud-ouest toulousain.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés et formés aux dernières technologies de détection
✓ Matériel de diagnostic high-tech garantissant 98% de précision
✓ Intervention rapide sous 24h
✓ Devis gratuit et transparent
✓ Plus de 15 ans d&apos;expérience dans la recherche de fuites</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 350€. Notre diagnostic précis permet de limiter les coûts ultérieurs de réparation en identifiant exactement la source du problème.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, décoloration des murs ou sensation de fraîcheur anormale. Nos techniciens utilisent des caméras thermiques qui révèlent instantanément les zones d&apos;humidité cachées sans aucune détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne spéciale intervention 7j/7 au 05 XX XX XX XX. Nous intervenons rapidement sur Plaisance-du-Touch et garantissons un diagnostic sous 2h en situation critique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Plaisance-du-Touch ?
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
