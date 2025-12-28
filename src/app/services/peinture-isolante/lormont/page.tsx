import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Lormont | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Lormont avec ses solutions de peinture isolante innovantes. Nous transformons vos bâtime',
  keywords: 'peinture isolante lormont, peinture thermique lormont, peinture isolante toiture lormont, thermo reflect lormont, peinture reflechissante lormont, cool roof lormont',
};

export default function PeintureIsolanteLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à Lormont avec ses solutions de peinture isolante innovantes. Nous transformons vos bâtiments en véritables boucliers thermiques, réduisant jusqu&apos;à 30% vos dépenses énergétiques.</p>

        <h2>Nos services de peinture isolante thermique a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution ultime pour optimiser le confort et l&apos;efficacité énergétique de vos locaux à Lormont. Utilisant des technologies de pointe comme le Thermo Reflect, notre peinture réfléchissante crée une barrière thermique intelligente qui régule la température intérieure. Nos experts appliquent un revêtement multicouche spécialement conçu pour bloquer la chaleur en été et conserver la chaleur en hiver, avec une durabilité garantie de 10 ans. Chaque intervention est précédée d&apos;un diagnostic thermique précis pour une application sur mesure, que ce soit pour des toitures, façades ou surfaces industrielles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée intervient exclusivement sur Lormont et ses environs, avec un savoir-faire de plus de 15 ans. Nous garantissons une réduction moyenne de 25% sur vos factures énergétiques, un délai d&apos;intervention de 72h et un devis gratuit sous 24h. Notre engagement qualité fait la différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la surface, le type de support et la technologie utilisée. Pour une maison moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement amorti par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace : elle peut réduire jusqu&apos;à 40% des déperditions thermiques. Les revêtements haute performance comme le Thermo Reflect réfléchissent jusqu&apos;à 90% des rayons solaires, stabilisant significativement la température intérieure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, un ponçage si besoin, l&apos;application d&apos;un primaire d&apos;accrochage, puis 2 couches de peinture spéciale avec un rouleau ou un pistorage professionnel. La préparation et la technique sont essentielles pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Lormont ?
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
