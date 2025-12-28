import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Marignane | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne votre consommation énergétique à Marignane grâce à des solutions photovoltaïques innovantes et sur-mesure. Spéci',
  keywords: 'panneaux solaires marignane, installation photovoltaique marignane, panneaux photovoltaiques marignane, installateur panneaux solaires marignane, pose panneaux solaires marignane, photovoltaique maison marignane',
};

export default function PanneauxSolairesMarignanePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Marignane</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne votre consommation énergétique à Marignane grâce à des solutions photovoltaïques innovantes et sur-mesure. Spécialistes de l&apos;installation de panneaux solaires, nous transformons votre habitat en une source d&apos;énergie propre et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Marignane</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;installation de panneaux solaires photovoltaïques répond aux enjeux écologiques et économiques actuels. À Marignane, nous proposons une approche complète, depuis l&apos;étude technique jusqu&apos;à la mise en service. Nos experts réalisent un diagnostic précis de votre toiture, sélectionnent les panneaux les plus performants et garantissent une installation conforme aux normes en vigueur. Avec un rendement moyen de 85% et des économies pouvant atteindre 70% sur vos factures d&apos;électricité, notre solution photovoltaïque est un investissement intelligent pour votre patrimoine. Notre équipe maîtrise les dernières technologies et s&apos;engage à vous fournir un système clé en main, personnalisé et parfaitement intégré à votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise certifiée RGE garantissant la qualité de nos interventions, 2) Un accompagnement personnalisé de A à Z, 3) Des technologies photovoltaïques de dernière génération, 4) Un service après-vente réactif et des garanties étendues.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, l&apos;orientation et la puissance désirée. Nos solutions incluent des aides gouvernementales et des crédits d&apos;impôts pouvant réduire jusqu&apos;à 30% de l&apos;investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 à 8 semaines, comprenant l&apos;étude technique, l&apos;obtention des autorisations, la pose et le raccordement. Notre équipe à Marignane optimise chaque étape pour une mise en service rapide.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification officielle, son expérience, ses références clients, et demandez un devis détaillé. Le Groupe Expert Altitude Com dispose de tous les agréments nécessaires et met à votre disposition nos attestations de qualification.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Marignane ?
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
