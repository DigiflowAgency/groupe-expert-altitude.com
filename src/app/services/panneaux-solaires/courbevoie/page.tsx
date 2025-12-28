import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Courbevoie | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Courbevoie avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur-m',
  keywords: 'panneaux solaires courbevoie, installation photovoltaique courbevoie, panneaux photovoltaiques courbevoie, installateur panneaux solaires courbevoie, pose panneaux solaires courbevoie, photovoltaique maison courbevoie',
};

export default function PanneauxSolairesCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Courbevoie avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur-mesure. Nos experts accompagnent les habitants des Hauts-de-Seine vers une production d&apos;énergie propre et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Courbevoie</h2>
        <div className="space-y-4">
          <p>Spécialistes de l&apos;installation photovoltaïque, nous proposons des solutions clés en main adaptées à chaque habitat de Courbevoie et ses environs. Notre approche technique garantit une intégration parfaite des panneaux solaires, maximisant votre production énergétique et réduisant significativement votre facture électrique. Nos techniciens certifiés réalisent un diagnostic précis de votre toiture, sélectionnent les panneaux les plus performants et assurent une pose professionnelle respectant les normes environnementales. Avec un rendement moyen de 20-25%, nos installations permettent non seulement de réduire votre empreinte carbone mais également de générer des revenus complémentaires grâce au rachat de l&apos;électricité excédentaire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec 15 ans d&apos;expérience à Courbevoie
- Techniciens certifiés RGE et formés aux dernières technologies
- Accompagnement administratif complet (demandes de subventions, raccordement)
- Garantie de performance et SAV premium</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une maison individuelle moyenne de 100m², le coût d&apos;installation varie entre 9 000€ et 15 000€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend de 4 à 6 semaines, incluant le diagnostic initial, les démarches administratives, la pose technique et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat ou Qualit&apos;EnR, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la présence d&apos;une garantie décennale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Courbevoie ?
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
