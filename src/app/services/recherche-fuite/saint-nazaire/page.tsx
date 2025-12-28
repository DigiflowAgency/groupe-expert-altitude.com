import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Saint-Nazaire et ses environs. Spécialistes en diag',
  keywords: 'recherche fuite saint-nazaire, detection fuite toiture saint-nazaire, recherche fuite eau saint-nazaire, fuite toiture saint-nazaire, detection infiltration saint-nazaire, entreprise recherche fuite saint-nazaire',
};

export default function RechercheFuiteSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Saint-Nazaire et ses environs. Spécialistes en diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites combine technologie de pointe et expertise technique pour identifier précisément l&apos;origine de vos problèmes d&apos;infiltration. Grâce à des équipements ultramodernes comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les fuites sans destruction. Notre équipe intervient sur tous types de structures : toitures, murs, canalisations, terrasses à Saint-Nazaire et dans la région nazairienne. Nous réalisons un diagnostic complet, établissons un rapport détaillé et proposons des solutions techniques adaptées à chaque situation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés avec plus de 15 ans d&apos;expérience
• Matériel de détection dernière génération
• Intervention sous 24h en urgence
• Devis gratuit et transparent
• Garantie de résultat et suivi personnalisé</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 200€ et 600€ selon la complexité, avec un tarif moyen de 350€ à Saint-Nazaire. Le prix inclut le déplacement, le diagnostic précis et le rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou appelez un expert qui réalisera un diagnostic thermique précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Saint-Nazaire, contactez immédiatement Groupe Expert Altitude Com au 02 XX XX XX XX. Nous proposons une permanence 7j/7 pour les situations critiques nécessitant une intervention rapide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Saint-Nazaire ?
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
