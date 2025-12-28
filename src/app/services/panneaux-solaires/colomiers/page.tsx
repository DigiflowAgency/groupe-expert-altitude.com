import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Colomiers | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Colomiers en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pan',
  keywords: 'panneaux solaires colomiers, installation photovoltaique colomiers, panneaux photovoltaiques colomiers, installateur panneaux solaires colomiers, pose panneaux solaires colomiers, photovoltaique maison colomiers',
};

export default function PanneauxSolairesColomiersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Colomiers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Colomiers en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nos solutions innovantes vous permettent de produire votre propre énergie verte et de réduire significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Colomiers</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation de panneaux photovoltaïques couvre tous les aspects techniques et administratifs pour les habitants de Colomiers et ses environs. Nous proposons une solution clé en main, depuis l&apos;étude personnalisée de votre toiture jusqu&apos;à la mise en service complète de votre système solaire. Notre équipe certifiée réalise un diagnostic précis de votre habitat, sélectionne les panneaux les plus performants et optimise leur implantation pour maximiser votre production énergétique. Avec un rendement moyen de 80% sur 25 ans, nos installations garantissent une rentabilité économique et environnementale exceptionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un installateur de panneaux solaires local et certifié RGE. Nos techniciens hautement qualifiés maîtrisent les dernières technologies photovoltaïques. Nous assurons un accompagnement personnalisé, des aides financières aux démarches administratives. Notre engagement qualité se traduit par des installations durables et une assistance technique continue.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance. Pour une maison moyenne à Colomiers, comptez environ 12 500€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Le retour sur investissement s&apos;effectue généralement entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend de 4 à 8 semaines. L&apos;étude technique initiale dure environ 15 jours, suivie de 2-3 semaines de préparation administrative et 1-2 semaines pour l&apos;installation physique des panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son numéro de certification Qualibat, son expérience locale, ses références clients, les garanties proposées et son appartenance à des organisations professionnelles reconnues comme AFPAC ou ENERPLAN.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Colomiers ?
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
