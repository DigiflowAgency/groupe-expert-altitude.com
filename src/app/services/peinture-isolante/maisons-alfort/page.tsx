import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Maiso',
  keywords: 'peinture isolante maisons-alfort, peinture thermique maisons-alfort, peinture isolante toiture maisons-alfort, thermo reflect maisons-alfort, peinture reflechissante maisons-alfort, cool roof maisons-alfort',
};

export default function PeintureIsolanteMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Découvrez la solution ultime contre les déperditions énergétiques avec Groupe Expert Altitude Com, votre spécialiste en peinture isolante thermique à Maisons-Alfort. Nos solutions innovantes transforment vos toitures et murs en boucliers thermiques performants, garantissant confort et économies.</p>

        <h2>Nos services de peinture isolante thermique a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la technologie de pointe en isolation énergétique. Grâce à des formules réfléchissantes comme Thermo Reflect, nous créons une barrière hautement efficace contre la chaleur et le froid. Nos experts interviennent sur tous types de surfaces - toitures, façades, murs intérieurs - en utilisant des techniques précises d&apos;application qui assurent une protection durable. Les peintures que nous proposons permettent de réduire jusqu&apos;à 30% des déperditions thermiques, offrant une solution écologique et économique parfaitement adaptée aux habitations de Maisons-Alfort et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience à Maisons-Alfort
- Techniciens certifiés et formés aux dernières technologies d&apos;isolation
- Garantie de performance thermique de 10 ans
- Devis personnalisé et gratuit sous 48h
- Matériaux écologiques et certifiés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de la surface et la technologie utilisée. Pour une toiture moyenne de 100m², comptez un investissement global entre 2500€ et 6000€, amortissable en 3-5 ans par les économies d&apos;énergie générées.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est réellement efficace, avec des études démontrant des réductions de température jusqu&apos;à 15°C en été et une diminution des déperditions thermiques de 25-35% en hiver. Son efficacité dépend de la qualité du produit, de son application et de la surface traitée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application d&apos;une peinture réfléchissante sur toiture nécessite : un nettoyage approfondi, une préparation de surface, l&apos;utilisation de rouleaux spéciaux, 2 couches minimum et un séchage entre 24-48h. Nos professionnels garantissent une pose optimale pour une performance maximale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a Maisons-Alfort ?
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
