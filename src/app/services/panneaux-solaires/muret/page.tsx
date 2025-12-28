import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Muret | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Muret en une source d&apos;énergie propre et économique grâce à Groupe Expert Altitude Com, votre partenaire spécialiste en installa',
  keywords: 'panneaux solaires muret, installation photovoltaique muret, panneaux photovoltaiques muret, installateur panneaux solaires muret, pose panneaux solaires muret, photovoltaique maison muret',
};

export default function PanneauxSolairesMuretPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Muret</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Muret en une source d&apos;énergie propre et économique grâce à Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nous vous accompagnons dans la transition énergétique pour réduire votre empreinte carbone et vos factures d&apos;électricité.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Muret</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Muret et ses environs de produire leur propre électricité verte. Notre équipe d&apos;experts réalise des installations clés en main, en analysant précisément l&apos;orientation de votre toiture, votre consommation énergétique et les potentialités solaires de votre propriété. Nous utilisons uniquement des panneaux de haute performance garantissant un rendement optimal, avec des modules certifiés offrant jusqu&apos;à 25 ans de production électrique. Notre processus comprend un diagnostic technique gratuit, un dimensionnement personnalisé et une installation professionnelle respectant les normes environnementales et électriques françaises.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour un installateur local certifié RGE, maîtrisant parfaitement les spécificités techniques du photovoltaïque. Nous proposons des solutions 100% personnalisées, un accompagnement administratif complet pour vos demandes de subventions, et une garantie décennale sur nos installations. Notre engagement qualité et notre expertise technique font la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides gouvernementales comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines, incluant le diagnostic initial, les démarches administratives, la préparation du site et la pose des panneaux. Notre équipe s&apos;engage à respecter un planning précis et transparent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIT&apos;EnR, demandez ses références locales, consultez les avis clients et assurez-vous qu&apos;il propose un accompagnement complet incluant études techniques, installation et suivi de production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Muret ?
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
