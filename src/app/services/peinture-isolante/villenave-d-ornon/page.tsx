import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Villenave-d\'Ornon | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Villenave-d&apos;Ornon avec notre solution innovante de peinture isolante thermique. Groupe Expert Altitude Com vous propose une tec',
  keywords: 'peinture isolante villenave-d'ornon, peinture thermique villenave-d'ornon, peinture isolante toiture villenave-d'ornon, thermo reflect villenave-d'ornon, peinture reflechissante villenave-d'ornon, cool roof villenave-d'ornon',
};

export default function PeintureIsolanteVillenaveDOrnonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Villenave-d'Ornon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Villenave-d&apos;Ornon avec notre solution innovante de peinture isolante thermique. Groupe Expert Altitude Com vous propose une technologie de pointe qui réduit jusqu&apos;à 30% vos déperditions énergétiques tout en protégeant durablement vos surfaces.</p>

        <h2>Nos services de peinture isolante thermique a Villenave-d'Ornon</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution moderne pour l&apos;isolation de votre habitat. Nous utilisons des technologies Thermo Reflect dernier cri qui créent une barrière réfléchissante contre la chaleur et le froid. Notre processus commence par un diagnostic précis de vos surfaces - toitures, murs extérieurs ou intérieurs - pour déterminer l&apos;approche technique optimale. Nos experts appliquent une peinture spécialement formulée qui agit comme un bouclier thermique, réduisant considérablement les ponts thermiques et améliorant significativement le confort énergétique de votre propriété à Villenave-d&apos;Ornon.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience en isolation thermique
- Techniques d&apos;application certifiées et conformes aux normes environnementales
- Matériaux haute performance garantissant une efficacité énergétique jusqu&apos;à 40%
- Devis personnalisé et gratuit, intervention rapide sur Villenave-d&apos;Ornon et ses environs</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ par m², selon la complexité de la surface, le type de support et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, rapidement rentabilisé par les économies d&apos;énergie.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est scientifiquement prouvée efficace. Les revêtements réfléchissants comme Thermo Reflect peuvent réduire jusqu&apos;à 80% de l&apos;absorption thermique, stabilisant la température intérieure et diminuant significativement la consommation énergétique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, un ponçage si besoin, l&apos;application d&apos;un primaire d&apos;accrochage, puis 2 couches de peinture spéciale avec un rouleau ou un pistorage professionnel. La préparation et la technique sont cruciales pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Villenave-d'Ornon ?
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
