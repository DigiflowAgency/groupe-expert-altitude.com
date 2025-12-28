import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Vénissieux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites sur Vénissieux et ses environs. Spécialistes du diagnostic',
  keywords: 'recherche fuite vénissieux, detection fuite toiture vénissieux, recherche fuite eau vénissieux, fuite toiture vénissieux, detection infiltration vénissieux, entreprise recherche fuite vénissieux',
};

export default function RechercheFuiteVenissieuxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Vénissieux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance en recherche et détection de fuites sur Vénissieux et ses environs. Spécialistes du diagnostic précis, nous intervenons rapidement pour protéger votre habitat contre les dégâts d&apos;infiltration.</p>

        <h2>Nos services de recherche et détection de fuites a Vénissieux</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et technologiquement avancée pour identifier précisément l&apos;origine de vos problèmes d&apos;infiltration. Grâce à des équipements de pointe comme la caméra thermique et le détecteur acoustique, nous localisons avec une précision de 95% les zones de fuite sans destruction. Notre méthode non invasive permet d&apos;intervenir rapidement sur les toitures, canalisations et murs de votre propriété à Vénissieux, limitant ainsi les dégâts potentiels et les coûts de réparation. Nos techniciens certifiés réalisent un diagnostic complet incluant un rapport détaillé et des recommandations sur-mesure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Vénissieux
- Équipement technologique de dernière génération
- Interventions rapides sous 24h
- Diagnostic précis garanti à 95%
- Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive varie entre 150€ et 350€ selon la complexité, avec un tarif moyen de 250€. Notre diagnostic inclut le repérage précis et un rapport détaillé, offrant un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, observez les signes comme les traces d&apos;humidité, moisissures, décoloration des murs. Utilisez un détecteur d&apos;humidité professionnel ou appelez un expert qui utilisera une caméra thermique pour identifier précisément la zone d&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence, contactez immédiatement Groupe Expert Altitude Com au 06 XX XX XX XX. Nous proposons une permanence 7j/7 pour les situations critiques nécessitant une intervention rapide à Vénissieux et ses alentours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Vénissieux ?
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
