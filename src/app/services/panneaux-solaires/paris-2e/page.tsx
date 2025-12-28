import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris 2e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour l&apos;installation de panneaux solaires photovoltaïques à Paris 2e, vous accompagne dans la tran',
  keywords: 'panneaux solaires paris 2e, installation photovoltaique paris 2e, panneaux photovoltaiques paris 2e, installateur panneaux solaires paris 2e, pose panneaux solaires paris 2e, photovoltaique maison paris 2e',
};

export default function PanneauxSolairesParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour l&apos;installation de panneaux solaires photovoltaïques à Paris 2e, vous accompagne dans la transition énergétique. Transformez votre habitat en une source d&apos;énergie propre et économique au cœur de la capitale.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris 2e</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque proposent une solution clé en main adaptée à chaque configuration immobilière parisienne. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les panneaux les plus performants et garantissons une intégration esthétique et technique optimale. Notre processus comprend une étude personnalisée, un dimensionnement technique précis et une installation réalisée par des techniciens certifiés. Avec un rendement moyen de 20% et une durée de vie de 25-30 ans, nos systèmes photovoltaïques représentent un investissement écologique et économique intelligent pour les habitants de Paris 2e.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une expertise technique irréprochable. Notre équipe maîtrise parfaitement les spécificités de l&apos;installation photovoltaïque en milieu urbain dense. Nous proposons un accompagnement complet, des aides financières jusqu&apos;au raccordement électrique. Notre engagement qualité se traduit par des installations sur-mesure, un suivi personnalisé et des performances énergétiques optimales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques à Paris 2e s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, demandez plusieurs devis détaillés, consultez ses références clients et assurez-vous qu&apos;il propose une garantie décennale. Groupe Expert Altitude Com répond à tous ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris 2e ?
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
