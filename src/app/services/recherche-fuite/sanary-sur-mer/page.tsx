import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Sanary-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en recherche et détection de fuites sur tout le littoral varois, intervient spécifiquement à Sana',
  keywords: 'recherche fuite sanary-sur-mer, detection fuite toiture sanary-sur-mer, recherche fuite eau sanary-sur-mer, fuite toiture sanary-sur-mer, detection infiltration sanary-sur-mer, entreprise recherche fuite sanary-sur-mer',
};

export default function RechercheFuiteSanarySurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Sanary-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en recherche et détection de fuites sur tout le littoral varois, intervient spécifiquement à Sanary-sur-Mer avec une expertise technique de pointe. Nos techniciens hautement qualifiés garantissent une détection précise et rapide de toutes vos problématiques d&apos;infiltration.</p>

        <h2>Nos services de recherche et détection de fuites a Sanary-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution professionnelle et non destructive pour protéger votre habitat. Nous utilisons des technologies de diagnostic avancées comme la thermographie infrarouge et la détection acoustique, permettant de localiser avec une précision de 95% l&apos;origine exacte des infiltrations. Notre processus complet comprend un diagnostic initial gratuit, un repérage technique minutieux et un rapport détaillé expliquant les causes précises de la fuite. Que ce soit pour une toiture, un mur ou une canalisation à Sanary-sur-Mer, notre équipe intervient rapidement pour limiter les dégâts potentiels et vous proposer des solutions durables.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique certifiée avec plus de 15 ans d&apos;expérience, 2) Un matériel de détection dernier cri garantissant une précision maximale, 3) Une intervention rapide sur Sanary-sur-Mer et ses environs, 4) Un diagnostic non destructif préservant votre habitat, 5) Des tarifs transparents et compétitifs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic initial généralement gratuit. Nous proposons un devis personnalisé après une première évaluation technique sur site.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration d&apos;eau dans un mur, nous utilisons plusieurs techniques : thermographie infrarouge pour visualiser les zones humides, détection acoustique pour identifier les fuites cachées, et mesure précise du taux d&apos;humidité avec des appareils spécialisés.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Sanary-sur-Mer, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX, disponible 7j/7 et 24h/24. Notre équipe intervient sous 2h en situation critique pour limiter les dommages potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Sanary-sur-Mer ?
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
