import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Antibes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur toute la région d&apos;Antibes et ses environs. Nos',
  keywords: 'recherche fuite antibes, detection fuite toiture antibes, recherche fuite eau antibes, fuite toiture antibes, detection infiltration antibes, entreprise recherche fuite antibes',
};

export default function RechercheFuiteAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur toute la région d&apos;Antibes et ses environs. Nos experts interviennent rapidement pour localiser précisément vos problèmes d&apos;infiltration avec des technologies de pointe.</p>

        <h2>Nos services de recherche et détection de fuites a Antibes</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente la solution professionnelle et non destructive pour identifier rapidement les sources d&apos;infiltration d&apos;eau. Nous utilisons des équipements high-tech comme la caméra thermique et le détecteur électronique qui nous permettent de localiser avec une précision de 95% les zones problématiques, qu&apos;il s&apos;agisse de fuites de toiture, de canalisations ou de murs. Notre approche méthodique nous permet d&apos;intervenir sur tous types de bâtiments - maisons individuelles, copropriétés et locaux professionnels à Antibes et dans tout le département des Alpes-Maritimes. Chaque intervention fait l&apos;objet d&apos;un diagnostic complet et d&apos;un rapport détaillé transmis au client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel de détection dernier cri garantissant 95% de précision
- Intervention rapide sous 24h dans toute la région d&apos;Antibes
- Devis gratuit et transparent sans engagement
- Service couvert par une assurance professionnelle complète</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 250€ et 600€ selon la complexité, avec un tarif moyen de 380€ pour une intervention standard à Antibes. Notre devis est toujours gratuit et détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous recommandons : observer les traces d&apos;humidité, mesurer l&apos;hygrométrie avec un appareil spécialisé, utiliser une caméra thermique pour identifier les zones de différence de température et réaliser un test d&apos;humidité précis.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez directement notre ligne d&apos;astreinte au 06 xx xx xx xx, disponible 7j/7. Nous intervenons sous 2h dans la zone d&apos;Antibes pour tous problèmes de fuites nécessitant une action immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Antibes ?
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
