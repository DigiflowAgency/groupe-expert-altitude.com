import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Lyon avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure.',
  keywords: 'panneaux solaires lyon, installation photovoltaique lyon, panneaux photovoltaiques lyon, installateur panneaux solaires lyon, pose panneaux solaires lyon, photovoltaique maison lyon',
};

export default function PanneauxSolairesLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Lyon avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure. Nous transformons votre toiture en source d&apos;énergie propre et économique, en capitalisant sur l&apos;expertise lyonnaise en énergies renouvelables.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;installation de panneaux photovoltaïques répond aux enjeux écologiques et économiques actuels. Nous proposons une approche personnalisée, en analysant précisément l&apos;orientation de votre toiture, sa superficie et votre consommation énergétique. Nos techniciens certifiés réalisent un diagnostic technique complet, garantissant une implantation optimale des modules sur l&apos;ensemble de la région lyonnaise. Chaque installation permet en moyenne de réduire jusqu&apos;à 70% de votre facture électrique et de produire entre 3000 et 4500 kWh par an, selon la configuration de votre habitat.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés RGE avec plus de 10 ans d&apos;expérience à Lyon
- Accompagnement administratif complet pour les aides et subventions
- Matériel de haute qualité avec garantie de 25 ans
- Audit énergétique gratuit avant toute intervention</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour une maison moyenne coûte environ 12 500€, mais permet des économies de 250€ à 500€ par an.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant le diagnostic initial, les démarches administratives, la pose qui dure 2-3 jours, et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIBAT ou QUALIPV, consultez ses références locales à Lyon, demandez plusieurs devis détaillés, et assurez-vous de la présence d&apos;une garantie décennale et d&apos;un accompagnement complet dans les démarches administratives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Lyon ?
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
