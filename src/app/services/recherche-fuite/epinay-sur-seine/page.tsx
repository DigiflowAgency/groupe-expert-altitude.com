import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites à Épinay-sur-Seine et ses environs. Spécialiste',
  keywords: 'recherche fuite épinay-sur-seine, detection fuite toiture épinay-sur-seine, recherche fuite eau épinay-sur-seine, fuite toiture épinay-sur-seine, detection infiltration épinay-sur-seine, entreprise recherche fuite épinay-sur-seine',
};

export default function RechercheFuiteEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la détection et la recherche de fuites à Épinay-sur-Seine et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les dégâts potentiels.</p>

        <h2>Nos services de recherche et détection de fuites a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique de pointe pour identifier précisément l&apos;origine des infiltrations. Nous utilisons des équipements de haute technologie comme la caméra thermique, le détecteur acoustique et le corrélateur, permettant une localisation non destructive des fuites. Notre équipe d&apos;experts intervient sur tous types de structures : toitures, canalisations, murs et sols, avec une précision garantie à 95%. Chaque intervention commence par un diagnostic complet et se termine par un rapport détaillé, offrant une transparence totale à nos clients d&apos;Épinay-sur-Seine et de la région parisienne.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés et formés aux dernières technologies de détection
✓ Intervention rapide sous 24h en cas d&apos;urgence
✓ Matériel de diagnostic dernier cri
✓ Devis gratuit et transparent
✓ Plus de 15 ans d&apos;expérience dans la recherche de fuites</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, mais représente un investissement crucial pour éviter des dommages potentiels pouvant atteindre plusieurs milliers d&apos;euros. Notre diagnostic précis permet de limiter les travaux et les coûts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons plusieurs techniques : caméra thermique pour identifier les variations de température, hygromètre pour mesurer l&apos;humidité, et détection acoustique pour localiser précisément la source de la fuite sans détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 01 XX XX XX XX. Nous intervenons 7j/7 à Épinay-sur-Seine et dans toute la région parisienne pour des situations critiques nécessitant une détection immédiate de fuite.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Épinay-sur-Seine ?
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
