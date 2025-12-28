import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a La Garde | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à La Garde avec ses solutions de peinture isolante de dernière génération. Nos technologie',
  keywords: 'peinture isolante la garde, peinture thermique la garde, peinture isolante toiture la garde, thermo reflect la garde, peinture reflechissante la garde, cool roof la garde',
};

export default function PeintureIsolanteLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à La Garde avec ses solutions de peinture isolante de dernière génération. Nos technologies innovantes permettent aux propriétaires de réduire significativement leurs dépenses énergétiques tout en améliorant le confort de leur habitat.</p>

        <h2>Nos services de peinture isolante thermique a La Garde</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour optimiser l&apos;efficacité énergétique de votre bâtiment. Grâce à nos revêtements haute performance comme le Thermo Reflect, nous créons une barrière thermique qui réfléchit jusqu&apos;à 85% des rayons solaires. Notre processus d&apos;application professionnelle garantit une protection durable contre les variations de température, que ce soit pour les toitures, façades ou surfaces intérieures à La Garde. Nos techniques permettent de réduire jusqu&apos;à 30% des coûts de climatisation et de chauffage, transformant votre espace en un environnement écologique et économique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux à La Garde, nous maîtrisons parfaitement les techniques de peinture isolante. Notre équipe certifiée intervient avec du matériel de pointe. Nous proposons des garanties de performance et un suivi personnalisé. Nos solutions sont écologiques, conformes aux dernières normes environnementales, et adaptées à tous types de bâtiments.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 45€ au m², selon la surface, la complexité et le type de revêtement. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 4500€, rapidement amorti par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Des études démontrent qu&apos;elle peut réduire la température de surface jusqu&apos;à 20°C et diminuer les déperditions thermiques de 25-35%. Son efficacité dépend de la qualité du produit et de son application professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une préparation de surface, l&apos;utilisation de primaires adaptés, et une application en couches uniformes avec du matériel spécialisé. Notre équipe garantit une pose parfaite en 1-2 jours selon la surface.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a La Garde ?
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
