import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Créteil | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Créteil avec notre solution de peinture isolante thermique de pointe. Groupe Expert Altitude Com vous propose une technologie i',
  keywords: 'peinture isolante créteil, peinture thermique créteil, peinture isolante toiture créteil, thermo reflect créteil, peinture reflechissante créteil, cool roof créteil',
};

export default function PeintureIsolanteCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Créteil avec notre solution de peinture isolante thermique de pointe. Groupe Expert Altitude Com vous propose une technologie innovante qui réduit jusqu&apos;à 30% de vos dépenses énergétiques, en protégeant efficacement vos murs et toitures contre les variations de température.</p>

        <h2>Nos services de peinture isolante thermique a Créteil</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne et écologique pour l&apos;isolation de votre habitat à Créteil. Utilisant des technologies Thermo Reflect de dernière génération, nous appliquons des peintures réfléchissantes qui créent une barrière thermique intelligente. Ces revêtements spécialisés permettent de réguler la température intérieure, en réfléchissant jusqu&apos;à 85% des rayons solaires et en minimisant les déperditions thermiques. Notre processus comprend une évaluation précise de votre bâtiment, une préparation de surface méticuleuse et une application professionnelle garantissant une performance optimale sur le long terme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux à Créteil depuis plus de 15 ans, nous maîtrisons parfaitement les techniques d&apos;isolation thermique. Nos équipes sont certifiées RGE, utilisant uniquement des matériaux écologiques et conformes aux normes environnementales. Nous proposons un diagnostic thermique gratuit, une garantie décennale et un service après-vente personnalisé. Notre engagement : performance, économies et respect de l&apos;environnement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une maison moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est réellement efficace, avec des études démontrant jusqu&apos;à 35% de réduction des déperditions thermiques. Sa technologie réfléchissante bloque les rayonnements solaires en été et conserve la chaleur en hiver, agissant comme une couche isolante supplémentaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une réparation des éventuels défauts, un primaire d&apos;accrochage spécifique, puis l&apos;application de 2 couches de peinture Thermo Reflect au rouleau ou par projection. Un séchage de 24h est recommandé entre chaque couche.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Créteil ?
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
