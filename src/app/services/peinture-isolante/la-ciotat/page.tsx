import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a La Ciotat | Groupe Expert Altitude Com',
  description: 'Dans la région de La Ciotat, où le soleil et les températures estivales peuvent être intenses, la peinture isolante thermique devient une solution intellig',
  keywords: 'peinture isolante la ciotat, peinture thermique la ciotat, peinture isolante toiture la ciotat, thermo reflect la ciotat, peinture reflechissante la ciotat, cool roof la ciotat',
};

export default function PeintureIsolanteLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région de La Ciotat, où le soleil et les températures estivales peuvent être intenses, la peinture isolante thermique devient une solution intelligente pour protéger et valoriser votre habitat. Le Groupe Expert Altitude Com vous propose des solutions innovantes de peinture réfléchissante qui transforment vos murs et toitures en boucliers thermiques efficaces.</p>

        <h2>Nos services de peinture isolante thermique a La Ciotat</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la dernière génération de solutions de protection et d&apos;économie d&apos;énergie. Grâce à des technologies comme Thermo Reflect, nous appliquons des revêtements spécialement conçus qui réfléchissent jusqu&apos;à 90% des rayons solaires. Cette technique permet de réduire significativement la température intérieure, avec des gains pouvant atteindre 7 à 10°C. Pour les habitants de La Ciotat, cela signifie des économies substantielles sur la climatisation et une amélioration du confort thermique. Notre processus comprend un diagnostic précis, une préparation des surfaces, et une application professionnelle qui garantit une protection durable et esthétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique et un service sur-mesure. Nos techniciens sont certifiés, notre matériel est de pointe, et nous maîtrisons parfaitement les techniques de peinture isolante. Nous proposons des garanties jusqu&apos;à 10 ans, un devis personnalisé sans engagement, et une intervention rapide sur toute la région de La Ciotat.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 50€ au m², selon la surface, l&apos;accessibilité et le type de support. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 5000€, mais avec un retour sur investissement rapide grâce aux économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Les peintures réfléchissantes comme Thermo Reflect peuvent réduire jusqu&apos;à 40% des gains thermiques, diminuer la température de surface de 30°C et améliorer significativement la performance énergétique d&apos;un bâtiment.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite plusieurs étapes : nettoyage et préparation de la surface, réparation des éventuels défauts, application d&apos;un primaire adapté, puis pose de 2 à 3 couches de peinture avec des outils professionnels comme un rouleau spécial ou un pistolet airless.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a La Ciotat ?
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
