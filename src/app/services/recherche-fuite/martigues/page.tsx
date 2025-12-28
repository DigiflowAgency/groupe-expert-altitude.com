import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Martigues | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Martigues et ses environs. Avec notre expertise ',
  keywords: 'recherche fuite martigues, detection fuite toiture martigues, recherche fuite eau martigues, fuite toiture martigues, detection infiltration martigues, entreprise recherche fuite martigues',
};

export default function RechercheFuiteMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites à Martigues et ses environs. Avec notre expertise technique de pointe, nous intervenons rapidement pour localiser précisément toute infiltration d&apos;eau et protéger votre patrimoine immobilier.</p>

        <h2>Nos services de recherche et détection de fuites a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites combine des technologies de pointe et une expertise pointue pour identifier avec précision l&apos;origine de vos problèmes d&apos;infiltration. Nous utilisons des équipements de diagnostic ultramodernes comme la caméra thermique, le détecteur électronique et le corrélateur acoustique, permettant une localisation non destructive à 98% de précision. Notre équipe certifiée intervient sur tous types de structures : toitures, murs, canalisations, terrasses et réseaux enterrés, avec une rapidité d&apos;intervention garantie sous 24h sur Martigues et le département des Bouches-du-Rhône. Chaque diagnostic fait l&apos;objet d&apos;un rapport technique détaillé et d&apos;un devis précis, vous assurant transparence et efficacité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens hautement qualifiés avec plus de 15 ans d&apos;expérience
• Matériel de détection dernier cri
• Intervention rapide et diagnostic précis
• Devis gratuit et transparent
• Couverture sur toute la région de Martigues</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une recherche de fuite non destructive varie entre 250€ et 650€ selon la complexité, avec un tarif moyen de 380€ pour un diagnostic complet. Notre devis gratuit vous permettra d&apos;avoir une estimation précise sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration dans un mur, nous utilisons plusieurs techniques : caméra thermique pour identifier les zones humides, hygromètre pour mesurer le taux d&apos;humidité, et détecteurs électroniques permettant de localiser le point exact de l&apos;infiltration sans créer de dégâts.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence à Martigues, contactez directement notre ligne d&apos;astreinte au 06 XX XX XX XX, disponible 7j/7 et 24h/24. Notre équipe intervient sous 2h pour les situations critiques afin de limiter les dommages potentiels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Martigues ?
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
