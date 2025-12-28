import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Pessac | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Pessac en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de ',
  keywords: 'panneaux solaires pessac, installation photovoltaique pessac, panneaux photovoltaiques pessac, installateur panneaux solaires pessac, pose panneaux solaires pessac, photovoltaique maison pessac',
};

export default function PanneauxSolairesPessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Pessac en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous concevons des solutions énergétiques sur-mesure qui allient performance technologique et économies durables.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Pessac</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux besoins croissants des habitants de Pessac en matière de transition énergétique. Nous proposons une approche complète, depuis l&apos;étude personnalisée jusqu&apos;à la pose finale des panneaux, en garantissant une performance optimale. Notre équipe technique sélectionne rigoureusement des modules photovoltaïques haute efficacité, atteignant des rendements jusqu&apos;à 22%, adaptés aux toitures pessacaises. Chaque installation est pensée pour maximiser la production électrique, avec des systèmes intelligents de monitoring permettant de suivre votre production en temps réel et de réaliser jusqu&apos;à 70% d&apos;économies sur vos factures énergétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Installateur certifié RGE, nous maîtrisons tous les aspects techniques de l&apos;installation solaire. Notre bureau d&apos;études local à Pessac personnalise chaque projet. Nous proposons des financements adaptés avec des partenaires bancaires et une assistance administrative complète. Notre engagement qualité se traduit par des garanties jusqu&apos;à 25 ans sur nos installations.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 50% de votre investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La phase concrète de pose des panneaux dure généralement 2 à 3 jours pour une maison individuelle standard à Pessac.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIT&apos;EnR, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale. Notre entreprise répond à tous ces critères.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Pessac ?
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
