import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Maisons-Alfort et ses environs. Spécialistes en dia',
  keywords: 'recherche fuite maisons-alfort, detection fuite toiture maisons-alfort, recherche fuite eau maisons-alfort, fuite toiture maisons-alfort, detection infiltration maisons-alfort, entreprise recherche fuite maisons-alfort',
};

export default function RechercheFuiteMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Maisons-Alfort et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les risques d&apos;infiltrations et de dégâts structurels.</p>

        <h2>Nos services de recherche et détection de fuites a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Notre service de recherche de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des appareils de détection ultramodernes comme la caméra thermique et le corrélateur acoustique, permettant de localiser précisément l&apos;origine des infiltrations sans destruction. Notre équipe certifiée intervient sur toutes les structures : toitures, canalisations, murs et fondations. Chaque diagnostic comprend un rapport détaillé avec localisation exacte, analyse des causes et recommandations de réparation. Nous couvrons Maisons-Alfort et le Val-de-Marne avec un taux de précision de 98% dans nos détections.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens hautement qualifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernière génération
- Intervention rapide sous 24h
- Devis gratuit et transparents
- Garantie de résultat et assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ pour une intervention complète à Maisons-Alfort. Ce prix inclut le diagnostic précis, l&apos;utilisation d&apos;équipements spécialisés et un rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, écaillage de peinture ou déformation du mur. Utilisez un détecteur d&apos;humidité professionnel ou faites appel à un expert qui utilisera une caméra thermique pour identifier précisément la zone d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Maisons-Alfort, contactez immédiatement Groupe Expert Altitude Com au 01 XX XX XX XX. Nous proposons une astreinte 7j/7 et intervenons dans les plus brefs délais pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Maisons-Alfort ?
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
