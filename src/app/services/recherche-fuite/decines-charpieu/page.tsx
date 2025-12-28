import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Décines-Charpieu et ses environs. Spécialistes de',
  keywords: 'recherche fuite décines-charpieu, detection fuite toiture décines-charpieu, recherche fuite eau décines-charpieu, fuite toiture décines-charpieu, detection infiltration décines-charpieu, entreprise recherche fuite décines-charpieu',
};

export default function RechercheFuiteDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Décines-Charpieu et ses environs. Spécialistes des solutions techniques innovantes, nous intervenons rapidement pour protéger votre patrimoine immobilier contre les risques d&apos;infiltration.</p>

        <h2>Nos services de recherche et détection de fuites a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites combine des technologies de pointe et une expertise technique pointue. Nous utilisons des équipements de détection ultramodernes comme la caméra thermique, le détecteur acoustique et l&apos;hygromètre professionnel pour localiser précisément l&apos;origine des infiltrations. Notre méthode non destructive permet d&apos;identifier les fuites sans dégrader votre habitat, qu&apos;il s&apos;agisse de toiture, de canalisations ou de murs. Notre équipe certifiée intervient sur Décines-Charpieu et la métropole lyonnaise avec une précision chirurgicale, garantissant une intervention rapide et efficace.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Diagnostic précis à 98% grâce à nos technologies de pointe
✓ Intervention sous 24h en urgence
✓ Techniciens certifiés et expérimentés
✓ Devis gratuit et transparent
✓ Solutions adaptées à chaque type de bâtiment</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 500€ selon la complexité, avec un tarif moyen de 250€. Notre devis détaillé vous permettra de comprendre précisément les coûts sans mauvaise surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs ou odeurs musquées. Utilisez un hygromètre professionnel ou contactez un expert qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une intervention rapide 7j/7, notamment sur Décines-Charpieu, pour limiter les dégâts et sécuriser votre patrimoine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Décines-Charpieu ?
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
