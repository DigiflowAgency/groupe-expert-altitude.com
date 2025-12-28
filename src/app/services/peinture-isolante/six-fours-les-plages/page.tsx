import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur à Six-Fours-les-Plages : la peinture isolante thermique du Groupe Expert Altitude Com. Nos solutions innovan',
  keywords: 'peinture isolante six-fours-les-plages, peinture thermique six-fours-les-plages, peinture isolante toiture six-fours-les-plages, thermo reflect six-fours-les-plages, peinture reflechissante six-fours-les-plages, cool roof six-fours-les-plages',
};

export default function PeintureIsolanteSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur à Six-Fours-les-Plages : la peinture isolante thermique du Groupe Expert Altitude Com. Nos solutions innovantes transforment vos toitures et façades en boucliers thermiques, garantissant un confort optimal et des économies d&apos;énergie significatives.</p>

        <h2>Nos services de peinture isolante thermique a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation. Spécialisés sur Six-Fours-les-Plages, nous utilisons des peintures réfléchissantes Thermo Reflect capables de réduire jusqu&apos;à 80% des gains thermiques. Nos experts appliquent des revêtements multicouches hautement performants qui créent une barrière thermique efficace, protégeant vos bâtiments contre les fortes chaleurs méditerranéennes. Chaque intervention est personnalisée, avec une analyse précise de votre toiture ou façade pour un résultat optimal.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés, notre matériel est de dernière génération et nous garantissons une intervention propre et rapide. Nous proposons une analyse thermique gratuite, un devis détaillé et une intervention sur mesure adaptée à chaque configuration architecturale de Six-Fours-les-Plages.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une peinture isolante thermique coûte entre 25€ et 45€ au m², selon la complexité de l&apos;application et la surface traitée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement rentabilisé par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire jusqu&apos;à 40% des déperditions thermiques et abaisser la température intérieure de 5 à 7°C en période estivale, générant des économies substantielles sur la climatisation.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuelles imperfections, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture Thermo Reflect avec des outils professionnels spécifiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Six-Fours-les-Plages ?
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
