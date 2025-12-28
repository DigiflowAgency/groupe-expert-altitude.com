import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Ollioules | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Ollioules et ses environs. Spécialistes en dia',
  keywords: 'recherche fuite ollioules, detection fuite toiture ollioules, recherche fuite eau ollioules, fuite toiture ollioules, detection infiltration ollioules, entreprise recherche fuite ollioules',
};

export default function RechercheFuiteOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Ollioules et ses environs. Spécialistes en diagnostic précis et solutions innovantes, nous intervenons rapidement pour protéger votre habitat contre les risques d&apos;infiltration.</p>

        <h2>Nos services de recherche et détection de fuites a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique complète et non destructive pour identifier précisément l&apos;origine des infiltrations. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur électronique, permettant de localiser avec une précision de 95% les zones problématiques sans travaux invasifs. Notre équipe certifiée intervient sur tous types de structures : toitures, murs, canalisations, terrasses, garantissant une analyse exhaustive et un diagnostic rapide. Chaque intervention à Ollioules est personnalisée, avec un rapport détaillé et des recommandations techniques adaptées.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens hautement qualifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernier cri
- Intervention sous 24h sur Ollioules et alentours
- Devis gratuit et transparent
- Rapport détaillé avec préconisations techniques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 250€ et 650€, selon la complexité et la surface à diagnostiquer. Notre tarif inclut le déplacement, l&apos;expertise technique et le rapport détaillé, sans frais cachés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, écoutez les bruits d&apos;écoulement et observez les décolorations. Notre diagnostic professionnel utilise des caméras thermiques pour identifier précisément l&apos;origine et l&apos;étendue de l&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Ollioules, contactez immédiatement le Groupe Expert Altitude Com au 06 xx xx xx xx. Nous proposons une astreinte 7j/7 pour les situations critiques, avec une intervention sous 2h après votre appel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Ollioules ?
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
