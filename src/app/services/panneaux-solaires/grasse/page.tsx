import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Grasse | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Grasse en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de ',
  keywords: 'panneaux solaires grasse, installation photovoltaique grasse, panneaux photovoltaiques grasse, installateur panneaux solaires grasse, pose panneaux solaires grasse, photovoltaique maison grasse',
};

export default function PanneauxSolairesGrassePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Grasse</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Grasse en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Profitez du climat ensoleillé de la région pour générer une énergie propre et économique directement depuis votre toiture.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Grasse</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux exigences techniques les plus strictes, en proposant des solutions sur-mesure adaptées à chaque habitation grassoise. Nous réalisons un diagnostic précis de votre toiture, évaluons votre consommation énergétique et concevons un système photovoltaïque optimal qui maximise votre production d&apos;électricité. Notre approche technique intègre les dernières innovations technologiques, garantissant une rentabilité rapide et une performance énergétique maximale. Chaque installation permet en moyenne de réduire jusqu&apos;à 70% de votre facture électrique et de diminuer significativement votre empreinte carbone.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE avec plus de 10 ans d&apos;expérience, nous maîtrisons parfaitement les spécificités techniques des installations solaires sur la région grassoise. Notre équipe d&apos;experts réalise des études personnalisées, utilise uniquement du matériel de haute qualité et assure un suivi technique complet. Nous proposons des financements adaptés et accompagnons nos clients dans l&apos;obtention des aides gouvernementales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface, l&apos;orientation et la puissance désirée. Nos devis détaillés incluent les équipements, la main-d&apos;œuvre et les démarches administratives. Avec les aides de l&apos;État, l&apos;investissement initial peut être réduit jusqu&apos;à 30%.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives, l&apos;installation physique et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour minimiser les délais.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro de certification, son expérience locale, ses références clients et les garanties proposées. Groupe Expert Altitude Com dispose de la certification Qualibat RGE, gage de professionnalisme et de conformité technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Grasse ?
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
