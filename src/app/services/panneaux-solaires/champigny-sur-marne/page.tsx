import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Champigny-sur-Marne | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Champigny-sur-Marne en source d&apos;énergie propre avec Groupe Expert Altitude Com, votre partenaire référence en installation de p',
  keywords: 'panneaux solaires champigny-sur-marne, installation photovoltaique champigny-sur-marne, panneaux photovoltaiques champigny-sur-marne, installateur panneaux solaires champigny-sur-marne, pose panneaux solaires champigny-sur-marne, photovoltaique maison champigny-sur-marne',
};

export default function PanneauxSolairesChampignySurMarnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Champigny-sur-Marne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Champigny-sur-Marne en source d&apos;énergie propre avec Groupe Expert Altitude Com, votre partenaire référence en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui allient performance énergétique et économies durables pour les habitants de notre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Champigny-sur-Marne</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux enjeux écologiques et économiques actuels. Nous proposons une approche complète, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service de votre système solaire. Nos techniciens certifiés réalisent un diagnostic précis de votre toiture, évaluent son orientation et sa capacité à accueillir des panneaux, puis conçoivent une installation optimisée. Avec un rendement moyen de 85% et des technologies de pointe, nous garantissons une production électrique performante qui peut couvrir jusqu&apos;à 70% de vos besoins énergétiques annuels.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certification RGE et qualifications officielles
- Accompagnement administratif complet pour les aides et subventions
- Matériel de haute qualité avec garanties constructeurs
- Équipe technique expérimentée basée en Île-de-France</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant atteindre 5 000€. Un investissement rentabilisé en 8 à 12 ans grâce aux économies d&apos;énergie et au rachat de l&apos;électricité produite.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines : 1 semaine pour l&apos;étude technique, 1 semaine pour les autorisations administratives, et 2 à 3 jours pour la pose effective des panneaux solaires à Champigny-sur-Marne.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez la certification RGE, consultez les avis clients, demandez plusieurs devis détaillés, assurez-vous de la qualification des techniciens et de la qualité des équipements proposés. Notre entreprise répond à tous ces critères de professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Champigny-sur-Marne ?
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
