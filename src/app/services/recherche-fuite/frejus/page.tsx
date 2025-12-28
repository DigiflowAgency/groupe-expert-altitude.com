import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Fréjus | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Fréjus et ses environs. Spécialistes en diagnosti',
  keywords: 'recherche fuite fréjus, detection fuite toiture fréjus, recherche fuite eau fréjus, fuite toiture fréjus, detection infiltration fréjus, entreprise recherche fuite fréjus',
};

export default function RechercheFuiteFrejusPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Fréjus</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Fréjus et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dommages liés aux infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Fréjus</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine les technologies les plus avancées et une expertise technique pointue. Nous utilisons des équipements de détection ultramodernes comme la thermographie infrarouge et l&apos;hydro-détection acoustique, permettant de localiser précisément l&apos;origine des infiltrations sans destruction. Notre méthode garantit une intervention chirurgicale, minimisant les travaux et les coûts pour nos clients. Sur Fréjus, nous intervenons aussi bien pour les particuliers que pour les professionnels, avec une moyenne de 95% de résolution complète dès la première intervention.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 10 ans d&apos;expérience
- Matériel de détection dernier cri
- Diagnostic précis sous 24h
- Devis gratuit et transparent
- Intervention sur tout le secteur de Fréjus et la Côte d&apos;Azur</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 600€, selon la complexité et la surface à analyser. Notre tarif inclut le diagnostic complet, l&apos;utilisation d&apos;équipements high-tech et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles, moisissures, décoloration ou boursoufflures. Utilisez un détecteur d&apos;humidité ou contactez un professionnel qui réalisera un diagnostic précis par thermographie infrarouge.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Fréjus, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une permanence 7j/7 pour les interventions urgentes et limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Fréjus ?
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
