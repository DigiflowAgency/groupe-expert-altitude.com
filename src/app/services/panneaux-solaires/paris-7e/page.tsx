import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris 7e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Paris 7e avec des solutions photovoltaïques sur-mesure. Nos installations innovantes permettent',
  keywords: 'panneaux solaires paris 7e, installation photovoltaique paris 7e, panneaux photovoltaiques paris 7e, installateur panneaux solaires paris 7e, pose panneaux solaires paris 7e, photovoltaique maison paris 7e',
};

export default function PanneauxSolairesParis7ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris 7e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Paris 7e avec des solutions photovoltaïques sur-mesure. Nos installations innovantes permettent aux habitants du 7e arrondissement de produire leur propre électricité verte et de réduire significativement leur empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris 7e</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux solaires accompagnent chaque projet photovoltaïque de manière personnalisée. Nous étudions précisément l&apos;orientation de votre toiture, les possibilités techniques et votre consommation énergétique pour proposer une solution 100% adaptée. Notre process comprend un diagnostic gratuit, des simulations de rendement et un devis détaillé. Nos panneaux photovoltaïques dernière génération atteignent un rendement de 22,5%, garantissant une production électrique optimale. Nous travaillons uniquement avec des équipements certifiés, éligibles aux aides gouvernementales et bénéficiant de 25 ans de garantie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Experts certifiés RGE spécialisés à Paris 7e
✓ Diagnostics et études techniques offerts
✓ Installations clés en main sans contrainte
✓ Accompagnement dans les démarches administratives et demandes de subventions
✓ Plus de 150 installations réussies en Île-de-France</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 9 000€ et 18 000€ selon la surface et la puissance. Avec les aides gouvernementales, le reste à charge peut descendre jusqu&apos;à 30% du coût total. Nous proposons également des solutions de financement et des crédits d&apos;impôts attractifs.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques varie entre 4 et 8 semaines. Notre process comprend : étude technique (2 semaines), obtention des autorisations (2-3 semaines), installation physique (1-2 semaines) et mise en service.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez : certification officielle, années d&apos;expérience, références clients, garanties proposées, avis vérifiés et appartenance à des organismes professionnels. Nous recommandons de demander plusieurs devis et de comparer les propositions techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris 7e ?
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
