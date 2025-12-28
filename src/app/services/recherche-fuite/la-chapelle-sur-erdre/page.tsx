import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur La Chapelle-sur-Erdre et ses environs. Grâce à no',
  keywords: 'recherche fuite la chapelle-sur-erdre, detection fuite toiture la chapelle-sur-erdre, recherche fuite eau la chapelle-sur-erdre, fuite toiture la chapelle-sur-erdre, detection infiltration la chapelle-sur-erdre, entreprise recherche fuite la chapelle-sur-erdre',
};

export default function RechercheFuiteLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur La Chapelle-sur-Erdre et ses environs. Grâce à notre expertise technologique de pointe, nous intervenons rapidement pour localiser précisément toute infiltration d&apos;eau avant qu&apos;elle ne cause des dégâts structurels importants.</p>

        <h2>Nos services de recherche et détection de fuites a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des techniques non destructives et des technologies de diagnostic avancées pour identifier avec précision l&apos;origine de vos problèmes d&apos;infiltration. Notre équipe utilise des caméras thermiques, des détecteurs électroniques et un matériel de pointe permettant de localiser les fuites sans endommager vos murs, toitures ou canalisations. Sur La Chapelle-sur-Erdre, nous intervenons aussi bien pour les particuliers que les professionnels, avec une moyenne de 95% de détection réussie dès la première intervention. Notre processus complet comprend un diagnostic initial, une localisation précise, un rapport détaillé et des recommandations de réparation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et formés aux dernières technologies de détection
- Intervention rapide sous 24h dans toute la région nantaise
- Matériel de diagnostic dernier cri garantissant une précision à 99%
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ incluant le diagnostic complet et le rapport détaillé. Nos prix sont transparents et sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou odeurs musquées. Utilisez un détecteur d&apos;humidité ou faites appel à des professionnels qui utiliseront des caméras thermiques pour identifier précisément la zone d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur La Chapelle-sur-Erdre, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une astreinte 7j/7 et intervenons dans l&apos;heure suivant votre appel pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a La Chapelle-sur-Erdre ?
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
