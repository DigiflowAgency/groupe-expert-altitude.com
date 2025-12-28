import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Épinay-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Épinay-sur-Seine en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de',
  keywords: 'panneaux solaires épinay-sur-seine, installation photovoltaique épinay-sur-seine, panneaux photovoltaiques épinay-sur-seine, installateur panneaux solaires épinay-sur-seine, pose panneaux solaires épinay-sur-seine, photovoltaique maison épinay-sur-seine',
};

export default function PanneauxSolairesEpinaySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Épinay-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Épinay-sur-Seine en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nous vous accompagnons vers une transition énergétique performante et économique, adaptée aux spécificités de votre propriété.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Épinay-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur Épinay-sur-Seine représentent bien plus qu&apos;une simple installation. Nous proposons une approche complète, depuis l&apos;étude technique personnalisée jusqu&apos;à la mise en service de votre système solaire. Nos experts réalisent un diagnostic précis de votre toiture, évaluent son orientation et sa capacité à produire de l&apos;électricité, puis conçoivent un projet sur-mesure. Avec des rendements atteignant jusqu&apos;à 22%, nos panneaux haute performance garantissent une production électrique optimale, réduisant significativement vos factures énergétiques de 40% en moyenne. Chaque installation est conçue pour maximiser votre autonomie énergétique tout en contribuant à la réduction des émissions de CO2.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nous sommes certifiés RGE, garantissant une qualité d&apos;intervention irréprochable. Notre équipe dispose de plus de 10 ans d&apos;expérience dans l&apos;installation photovoltaïque. Nous proposons des financements adaptés, des garanties jusqu&apos;à 25 ans et un accompagnement administratif complet pour vos demandes de subventions.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;installation de panneaux solaires coûte entre 8 000€ et 15 000€ pour une maison individuelle, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire ce coût jusqu&apos;à 30%.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation varie entre 4 et 8 semaines, comprenant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux (généralement 2-3 jours) et le raccordement au réseau électrique. Notre équipe s&apos;engage à respecter scrupuleusement les délais convenus.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification sur le site officiel, demandez ses références, étudiez les avis clients, et assurez-vous qu&apos;il propose un accompagnement complet incluant étude technique, installation, raccordement et suivi de production.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Épinay-sur-Seine ?
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
