import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Vallauris | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Vallauris en centrale électrique solaire grâce au Groupe Expert Altitude Com, votre partenaire local spécialisé en installation',
  keywords: 'panneaux solaires vallauris, installation photovoltaique vallauris, panneaux photovoltaiques vallauris, installateur panneaux solaires vallauris, pose panneaux solaires vallauris, photovoltaique maison vallauris',
};

export default function PanneauxSolairesVallaurisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Vallauris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Vallauris en centrale électrique solaire grâce au Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux photovoltaïques. Nous métamorphosons vos toitures en sources d&apos;énergie propre et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Vallauris</h2>
        <div className="space-y-4">
          <p>Nos solutions d&apos;installation de panneaux solaires sur Vallauris sont pensées sur-mesure pour maximiser votre production énergétique. Notre expertise technique nous permet de réaliser des systèmes photovoltaïques parfaitement adaptés à l&apos;architecture de votre propriété, avec des rendements pouvant atteindre 22% grâce à nos panneaux haute performance. Nous accompagnons chaque client depuis le diagnostic initial jusqu&apos;à la mise en service, en garantissant une installation conforme aux normes RGE et une optimisation de votre investissement. Notre approche intègre une étude personnalisée de votre consommation énergétique, un dimensionnement précis de l&apos;installation et un conseil sur les aides financières disponibles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour un installateur local certifié avec plus de 15 ans d&apos;expérience. Nos techniciens sont formés aux dernières technologies photovoltaïques et disposent des certifications RGE les plus exigeantes. Nous proposons une garantie de performance de 25 ans et un suivi technique complet de votre installation solaire.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de votre investissement. Un système de 3 kWc pour une maison individuelle à Vallauris représente en moyenne un budget de 12 500€ avant subventions.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose et le raccordement. La phase de pose concrète dure habituellement 2 à 3 jours pour une installation résidentielle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement son numéro de certification, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence de garanties écrites. Un bon professionnel propose une étude technique complète et transparente avant tout engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Vallauris ?
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
