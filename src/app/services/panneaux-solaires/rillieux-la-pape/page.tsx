import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Rillieux-la-Pape | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Rillieux-la-Pape en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en instal',
  keywords: 'panneaux solaires rillieux-la-pape, installation photovoltaique rillieux-la-pape, panneaux photovoltaiques rillieux-la-pape, installateur panneaux solaires rillieux-la-pape, pose panneaux solaires rillieux-la-pape, photovoltaique maison rillieux-la-pape',
};

export default function PanneauxSolairesRillieuxLaPapePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Rillieux-la-Pape</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Rillieux-la-Pape en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nos solutions sur-mesure vous permettent de produire votre propre énergie propre et de réduire significativement votre facture énergétique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Rillieux-la-Pape</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque interviennent sur l&apos;ensemble de la métropole lyonnaise, avec une expertise pointue dans l&apos;installation de systèmes solaires adaptés à chaque configuration de toiture. Nous réalisons un diagnostic précis de votre propriété, évaluant l&apos;orientation, l&apos;inclinaison et l&apos;ensoleillement pour maximiser votre production électrique. Nos panneaux haute performance garantissent un rendement optimal, avec des modules capables de convertir jusqu&apos;à 22% de l&apos;énergie solaire en électricité. Notre processus inclut une étude technique gratuite, le dimensionnement personnalisé de votre installation, les démarches administratives et un accompagnement complet jusqu&apos;à la mise en service.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Certifiés RGE, nous proposons une garantie décennale sur nos installations. Notre équipe technique hautement qualifiée maîtrise les dernières technologies photovoltaïques. Nous sélectionnons uniquement des composants de fabricants européens reconnus. Nos clients bénéficient également d&apos;un suivi personnalisé et de conseils pour optimiser leur production d&apos;énergie renouvelable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Les aides gouvernementales comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation à Rillieux-la-Pape s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIT&apos;EnR, demandez ses références locales, consultez les avis clients et assurez-vous qu&apos;il propose une étude technique personnalisée et gratuite avant tout engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Rillieux-la-Pape ?
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
