import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Marseille | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Marseille en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installat',
  keywords: 'panneaux solaires marseille, installation photovoltaique marseille, panneaux photovoltaiques marseille, installateur panneaux solaires marseille, pose panneaux solaires marseille, photovoltaique maison marseille',
};

export default function PanneauxSolairesMarseillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Marseille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Marseille en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Profitez de l&apos;ensoleillement exceptionnel de la région pour produire votre propre énergie et réduire significativement vos factures.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Marseille</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque proposent une solution complète et personnalisée pour équiper votre maison à Marseille de panneaux solaires performants. Notre démarche débute par un diagnostic précis de votre toiture, évaluant son orientation, son inclinaison et sa capacité à accueillir des modules photovoltaïques. Nous sélectionnons uniquement des équipements de haute qualité garantissant un rendement optimal, avec des panneaux atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Notre équipe certifiée réalise une installation sur mesure, en minimisant l&apos;impact visuel et en maximisant la production électrique, vous permettant de réduire jusqu&apos;à 70% de votre consommation énergétique traditionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son expertise locale et son engagement total. Nous sommes certifiés RGE, garantissant une installation aux normes les plus strictes. Notre bureau à Marseille nous permet une intervention rapide et un suivi personnalisé. Nos techniciens bénéficient de plus de 10 ans d&apos;expérience et proposent une garantie de performance de 25 ans sur l&apos;ensemble de nos installations photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3kWc pour une maison marseillaise moyenne coûte environ 12 500€, mais permet des économies de 300€ à 600€ par an sur les factures d&apos;électricité.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines. La pose effective des panneaux ne durant que 2-3 jours, le reste du temps est consacré à l&apos;étude technique, l&apos;obtention des autorisations et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro de certification, sa présence sur les plateformes officielles, ses références clients locaux, et demandez plusieurs devis détaillés. Un bon installateur propose un diagnostic gratuit, présente clairement les équipements, et vous conseille sur les aides financières disponibles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Marseille ?
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
