import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Le Cannet | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre la chaleur et les déperditions énergétiques avec notre service de peinture isolante thermique au Cannet. Groupe Expert ',
  keywords: 'peinture isolante le cannet, peinture thermique le cannet, peinture isolante toiture le cannet, thermo reflect le cannet, peinture reflechissante le cannet, cool roof le cannet',
};

export default function PeintureIsolanteLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre la chaleur et les déperditions énergétiques avec notre service de peinture isolante thermique au Cannet. Groupe Expert Altitude Com vous propose des technologies innovantes pour transformer vos toitures et murs en boucliers thermiques performants.</p>

        <h2>Nos services de peinture isolante thermique a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique révolutionne l&apos;isolation des bâtiments sur Le Cannet et sa région. Nous utilisons des technologies Thermo Reflect de dernière génération qui réfléchissent jusqu&apos;à 85% des rayons solaires, réduisant significativement la température intérieure. Notre processus débute par un diagnostic précis de votre toiture ou façade, suivi d&apos;une préparation de surface minutieuse qui garantit une adhérence parfaite. L&apos;application se fait avec des équipements professionnels, assurant une couverture uniforme et une protection durable contre les variations climatiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et formés aux dernières innovations en isolation thermique. Nous garantissons une réduction jusqu&apos;à 30% de vos factures énergétiques. Notre intervention sur Le Cannet s&apos;accompagne d&apos;un devis personnalisé et d&apos;un suivi technique complet.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 15€ et 35€ au m², selon la surface, l&apos;accessibilité et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 1500€ et 3500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études montrent une réduction jusqu&apos;à 15°C de la température de surface et une diminution de 25-35% des besoins en climatisation. La technologie réfléchissante bloque les rayonnements infrarouges, créant un bouclier thermique performant.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante nécessite 4 étapes : nettoyage haute pression, réparation des imperfections, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture avec un rouleau spécial ou un pistolet professionnel. La température idéale est entre 10°C et 30°C, sans risque de pluie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Le Cannet ?
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
