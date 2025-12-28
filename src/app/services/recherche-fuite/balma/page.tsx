import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Balma | Groupe Expert Altitude Com',
  description: 'Sur Balma et ses environs, Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide de toutes vos fuites. Notre exp',
  keywords: 'recherche fuite balma, detection fuite toiture balma, recherche fuite eau balma, fuite toiture balma, detection infiltration balma, entreprise recherche fuite balma',
};

export default function RechercheFuiteBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Sur Balma et ses environs, Groupe Expert Altitude Com est votre partenaire de confiance pour la détection précise et rapide de toutes vos fuites. Notre expertise technique vous garantit une intervention sur mesure, minimisant les dégâts potentiels et préservant l&apos;intégrité de votre habitat.</p>

        <h2>Nos services de recherche et détection de fuites a Balma</h2>
        <div className="space-y-4">
          <p>Notre service de recherche et détection de fuites représente une solution technologique avancée pour identifier rapidement les points d&apos;infiltration d&apos;eau. Nous utilisons des équipements de pointe comme la caméra thermique et le détecteur électronique, permettant une localisation non destructive et précise à 98% des zones problématiques. Notre méthode commence par un diagnostic complet, incluant un état des lieux détaillé de votre toiture, murs ou canalisations. Chaque intervention est personnalisée, avec un rapport technique précis remis à l&apos;issue du diagnostic, offrant une transparence totale sur les zones à risque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise locale avec plus de 15 ans d&apos;expérience sur Balma, 2) Des techniciens certifiés et formés aux dernières technologies de détection, 3) Un diagnostic rapide sous 24h, 4) Une approche écologique minimisant les travaux invasifs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un diagnostic initial généralement facturé entre 80€ et 150€. Nous proposons un devis gratuit et transparent avant toute intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, utilisez un hygromètre, surveillez les traces d&apos;humidité, les moisissures suspectes et écoutez les bruits d&apos;écoulement. Notre équipe utilise des caméras thermiques permettant de visualiser précisément les zones d&apos;humidité cachées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 05 XX XX XX XX. Nous proposons une permanence 7j/7 et intervenons sous 2h dans un rayon de 30 km autour de Balma pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Balma ?
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
