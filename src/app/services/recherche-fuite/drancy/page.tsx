import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Drancy | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites sur Drancy et ses environs. Spécialistes reconnus, nous',
  keywords: 'recherche fuite drancy, detection fuite toiture drancy, recherche fuite eau drancy, fuite toiture drancy, detection infiltration drancy, entreprise recherche fuite drancy',
};

export default function RechercheFuiteDrancyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Drancy</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites sur Drancy et ses environs. Spécialistes reconnus, nous intervenons rapidement pour protéger votre habitat contre les dégâts potentiels causés par les infiltrations d&apos;eau.</p>

        <h2>Nos services de recherche et détection de fuites a Drancy</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution technologique avancée pour identifier précisément l&apos;origine des infiltrations sans détériorer votre propriété. Utilisant des équipements de pointe comme la caméra thermique et le détecteur électronique, nous localisons avec une précision de 95% les zones problématiques, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations ou de murs. Notre équipe certifiée intervient sur Drancy et le département 93, en garantissant une analyse complète et non destructive. Chaque intervention fait l&apos;objet d&apos;un diagnostic détaillé et d&apos;un rapport technique précis.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 15 ans dans la détection de fuites 
• Matériel de diagnostic dernier cri avec précision à 95% 
• Intervention rapide sous 24h sur Drancy 
• Devis gratuit et transparent 
• Équipe certifiée et assurée</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ pour une intervention complète. Nous proposons un devis personnalisé gratuit après diagnostic initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les auréoles d&apos;humidité, moisissures, décoloration des murs ou sensation de fraîcheur anormale. Utilisez un détecteur d&apos;humidité ou contactez un professionnel pour un diagnostic précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence fuite à Drancy, contactez immédiatement notre ligne d&apos;astreinte au 01 XX XX XX XX, disponible 7j/7 et 24h/24. Nous intervenons sous 2h pour limiter les dégâts potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Drancy ?
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
