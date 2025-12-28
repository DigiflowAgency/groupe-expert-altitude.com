import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à L&apos;Haÿ-les-Roses et ses environs. Nos experts int',
  keywords: 'recherche fuite l'haÿ-les-roses, detection fuite toiture l'haÿ-les-roses, recherche fuite eau l'haÿ-les-roses, fuite toiture l'haÿ-les-roses, detection infiltration l'haÿ-les-roses, entreprise recherche fuite l'haÿ-les-roses',
};

export default function RechercheFuiteLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à L&apos;Haÿ-les-Roses et ses environs. Nos experts interviennent rapidement pour localiser précisément toute infiltration d&apos;eau et protéger efficacement votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des technologies de pointe et une expertise pointue pour identifier avec précision l&apos;origine de vos problèmes d&apos;infiltration. Nous utilisons des équipements non destructifs comme la caméra thermique, le détecteur électronique et le corrélateur acoustique, permettant de localiser une fuite sans dégrader votre habitat. Notre diagnostic complet couvre les toitures, canalisations, caves et murs, avec un taux de réussite de plus de 95% en première intervention. Chaque intervention sur L&apos;Haÿ-les-Roses est réalisée par des techniciens certifiés, garantissant une intervention rapide et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise de 15 ans dans la détection de fuites, Des technologies de diagnostic dernier cri, Une intervention sous 24h en urgence, Une équipe de 12 techniciens spécialisés couvrant tout le Val-de-Marne.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, incluant le diagnostic précis et le rapport détaillé. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou contactez-nous pour un diagnostic précis et non invasif.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à L&apos;Haÿ-les-Roses, contactez directement notre ligne d&apos;astreinte au 01 XX XX XX XX, disponible 7j/7 et 24h/24 pour une intervention rapide et efficace.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a L'Haÿ-les-Roses ?
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
