import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche et détection de fuites a Vitrolles | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Vitrolles et ses environs. Nos techniciens hau',
  keywords: 'recherche fuite vitrolles, detection fuite toiture vitrolles, recherche fuite eau vitrolles, fuite toiture vitrolles, detection infiltration vitrolles, entreprise recherche fuite vitrolles',
};

export default function RechercheFuiteVitrollesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Recherche et détection de fuites a Vitrolles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour la recherche et détection de fuites sur Vitrolles et ses environs. Nos techniciens hautement qualifiés utilisent des technologies de pointe pour localiser précisément toute infiltration, minimisant les dégâts potentiels pour votre propriété.</p>

        <h2>Nos services de recherche et détection de fuites a Vitrolles</h2>
        <div className="space-y-4">
          <p>Notre service de détection de fuites représente une solution complète et innovante pour protéger votre habitat contre les risques d&apos;infiltration. Nous intervenons sur tous types de structures - toitures, murs, canalisations - en utilisant des équipements de détection thermique et acoustique ultramodernes. Notre méthode non destructive permet de localiser avec une précision de 95% l&apos;origine exacte de la fuite, évitant des travaux invasifs et coûteux. À Vitrolles, notre équipe intervient rapidement, généralement sous 24h, pour diagnostiquer et proposer une solution adaptée, garantissant la tranquillité de nos clients.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Technologie de détection de dernière génération 
- Équipe certifiée avec plus de 15 ans d&apos;expérience 
- Intervention rapide sur Vitrolles et alentours 
- Devis gratuit et transparent 
- Diagnostic précis sans travaux destructifs 
- Solutions sur-mesure adaptées à chaque situation</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une recherche de fuite non destructive ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une recherche de fuite non destructive coûte généralement entre 150€ et 500€, selon la complexité du diagnostic. Notre tarif comprend le déplacement, l&apos;expertise technique et le rapport détaillé. Un investissement raisonnable pour éviter des dégâts potentiels de plusieurs milliers d&apos;euros.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une infiltration d&apos;eau dans un mur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une infiltration, nous utilisons une caméra thermique qui révèle les variations de température, un humidimètre professionnel et une écoute acoustique. Ces techniques permettent de localiser précisément l&apos;origine de l&apos;humidité sans percer ni démolir.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Qui contacter pour une recherche de fuite en urgence ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              En cas d&apos;urgence sur Vitrolles, contactez notre ligne directe au 04 XX XX XX XX. Nous proposons une astreinte 7j/7 pour les situations critiques, avec un délai d&apos;intervention maximum de 2h après votre appel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de recherche et détection de fuites a Vitrolles ?
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
