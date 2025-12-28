import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Salon-de-Provence en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installati',
  keywords: 'panneaux solaires salon-de-provence, installation photovoltaique salon-de-provence, panneaux photovoltaiques salon-de-provence, installateur panneaux solaires salon-de-provence, pose panneaux solaires salon-de-provence, photovoltaique maison salon-de-provence',
};

export default function PanneauxSolairesSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Salon-de-Provence en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous vous accompagnons pour une transition énergétique performante et économique au cœur de la Provence.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Salon-de-Provence de produire leur propre électricité, réduisant significativement leurs factures énergétiques. Notre expertise technique garantit une installation optimale, avec des panneaux haute performance capables de générer jusqu&apos;à 4000 kWh par an pour une maison moyenne. Chaque projet est étudié individuellement, en analysant l&apos;orientation du toit, la consommation énergétique et le potentiel solaire local. Notre processus comprend un diagnostic précis, un conseil personnalisé, une installation professionnelle et un suivi technique complet pour maximiser votre investissement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Installateur certifié RGE, nous proposons une garantie décennale. Notre équipe locale maîtrise parfaitement les spécificités techniques et réglementaires du photovoltaïque en région PACA. Nous sélectionnons uniquement des matériels de haute qualité avec plus de 25 ans de durée de vie. Notre accompagnement inclut les démarches administratives et le montage des dossiers de subventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent couvrir jusqu&apos;à 30% du budget total, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend de 4 à 8 semaines, incluant le diagnostic initial, les autorisations administratives, la pose des panneaux (1-2 jours) et la mise en service du système photovoltaïque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale. Notre entreprise répond à tous ces critères de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Salon-de-Provence ?
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
