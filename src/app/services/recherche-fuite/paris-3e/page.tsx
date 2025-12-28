import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites sur Paris 3e et ses environs. Spécialistes en recherche et',
  keywords: 'recherche fuite paris 3e, detection fuite toiture paris 3e, recherche fuite eau paris 3e, fuite toiture paris 3e, detection infiltration paris 3e, entreprise recherche fuite paris 3e',
};

export default function RechercheFuiteParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise de fuites sur Paris 3e et ses environs. Spécialistes en recherche et diagnostic d&apos;infiltrations, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Paris 3e</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des équipements high-tech comme la caméra thermique, le détecteur électronique et le corrélateur acoustique pour localiser précisément l&apos;origine des infiltrations sans travaux destructifs. Notre méthode garantit une intervention ciblée et économique, limitant les impacts sur votre habitat. Notre équipe certifiée intervient sur tous types de surfaces : toitures, murs, canalisations, terrasses, avec une précision chirurgicale. En moyenne, nous résolvons 92% des cas de fuites détectées lors de notre première intervention sur Paris 3e.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de 15 ans, 2) Un diagnostic gratuit et sans engagement, 3) Des techniciens certifiés et assurés, 4) Un délai d&apos;intervention rapide de 24h maximum. Nous sommes reconnus pour notre approche professionnelle et notre transparence totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 750€ selon la complexité, incluant le diagnostic précis et le rapport détaillé. Nous proposons un devis personnalisé gratuit après une première évaluation technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nos experts utilisent la caméra thermique qui révèle les variations de température, le détecteur d&apos;humidité électronique et parfois une inspection endoscopique. Ces techniques permettent de localiser l&apos;infiltration sans créer de dégâts.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne dédiée au 06 XX XX XX XX. Nous proposons une intervention sous 2h pour les situations critiques, 7j/7 et 24h/24, avec une équipe spécialisée toujours prête à intervenir sur Paris 3e.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Paris 3e ?
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
