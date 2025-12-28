import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Cannes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Cannes, en proposant des solutions photovoltaïques innovantes et sur-mesure pour particulier',
  keywords: 'panneaux solaires cannes, installation photovoltaique cannes, panneaux photovoltaiques cannes, installateur panneaux solaires cannes, pose panneaux solaires cannes, photovoltaique maison cannes',
};

export default function PanneauxSolairesCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Cannes, en proposant des solutions photovoltaïques innovantes et sur-mesure pour particuliers et entreprises. Nos installations de panneaux solaires transforment votre toiture en une source d&apos;énergie propre et économique, adaptée au climat ensoleillé de la Côte d&apos;Azur.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Cannes</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque maîtrisent chaque étape de la transformation énergétique de votre propriété. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les panneaux solaires les plus performants et garantissons une intégration esthétique et technique optimale. Notre approche à Cannes privilégie des modules à haut rendement atteignant jusqu&apos;à 22% d&apos;efficacité, permettant de couvrir 60-70% de vos besoins énergétiques annuels. Chaque projet est personnalisé, en tenant compte de l&apos;orientation, de l&apos;inclinaison et des spécificités architecturales de votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une qualité d&apos;installation irréprochable. Notre équipe dispose de plus de 10 ans d&apos;expérience sur la région cannoise. Nous proposons un accompagnement complet : étude gratuite, financement, démarches administratives et raccordement. Nos partenariats avec des fabricants premium assurent une durabilité et une performance maximales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un système de 3kW pour une maison moyenne représente un investissement d&apos;environ 12 500€, amortissable en 8-10 ans grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines : 1-2 semaines pour l&apos;étude et les autorisations, puis 2-3 jours pour la pose effective des panneaux. Notre équipe optimise chaque étape pour minimiser la gêne et garantir une mise en service rapide.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5919, demandez plusieurs devis détaillés, consultez ses références locales à Cannes et exigez une garantie décennale. Nos experts sont accrédités et respectent les normes les plus strictes du marché photovoltaïque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Cannes ?
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
