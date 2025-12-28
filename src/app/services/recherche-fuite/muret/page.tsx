import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Muret | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Muret et ses environs. Nos experts interviennent ',
  keywords: 'recherche fuite muret, detection fuite toiture muret, recherche fuite eau muret, fuite toiture muret, detection infiltration muret, entreprise recherche fuite muret',
};

export default function RechercheFuiteMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Muret et ses environs. Nos experts interviennent rapidement pour localiser précisément toute infiltration d&apos;eau et protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Muret</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente la solution technologique ultime pour identifier sans destruction les sources d&apos;infiltrations. Nous utilisons des équipements de pointe comme la caméra thermique, le détecteur acoustique et le corrélateur de précision, permettant une localisation à moins de 10 cm près. Notre méthode non invasive garantit l&apos;intégrité de votre toiture, mur ou réseau hydraulique, avec un taux de réussite de 98%. Sur Muret et la région toulousaine, nous intervenons aussi bien pour les particuliers que les professionnels, en assurant un diagnostic rapide et une solution technique adaptée.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de 15 ans dans la détection de fuites 2) Un matériel de diagnostic dernier cri 3) Une intervention sous 24h en urgence 4) Un devis gratuit et transparent sans engagement. Nous sommes certifiés RGE et proposons des solutions écologiques de réparation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, avec un diagnostic précis inclus. Nous proposons des devis détaillés sans frais cachés et adaptons nos tarifs à chaque situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons la caméra thermique qui révèle les variations de température, le détecteur d&apos;humidité électronique et l&apos;analyse acoustique. Ces techniques permettent de localiser l&apos;infiltration sans créer de dégâts.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne dédiée au 05 XX XX XX XX. Nous intervenons 7j/7 sur Muret et l&apos;agglomération toulousaine, avec un délai de réponse maximum de 2h pour les situations critiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Muret ?
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
