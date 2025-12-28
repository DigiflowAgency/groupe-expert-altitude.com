import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peinture isolante thermique a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à La Seyne-sur-Mer avec sa peinture isolante de dernière génération. Nos solutions innovan',
  keywords: 'peinture isolante la seyne-sur-mer, peinture thermique la seyne-sur-mer, peinture isolante toiture la seyne-sur-mer, thermo reflect la seyne-sur-mer, peinture reflechissante la seyne-sur-mer, cool roof la seyne-sur-mer',
};

export default function PeintureIsolanteLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Peinture isolante thermique a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;isolation thermique à La Seyne-sur-Mer avec sa peinture isolante de dernière génération. Nos solutions innovantes permettent aux propriétaires de réduire jusqu&apos;à 30% leurs dépenses énergétiques grâce à des techniques de peinture thermique ultra-performantes.</p>

        <h2>Nos services de peinture isolante thermique a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de peinture isolante thermique représente la solution optimale pour protéger et valoriser votre habitat à La Seyne-sur-Mer. Nous utilisons des technologies Thermo Reflect de pointe qui réfléchissent les rayons solaires et régulent la température intérieure. Notre processus débute par un diagnostic précis des surfaces, suivi d&apos;une préparation minutieuse qui garantit une adhérence parfaite et une durabilité exceptionnelle. Chaque application est personnalisée, que ce soit pour une toiture, une façade ou des murs intérieurs, en privilégiant des produits écologiques et certifiés qui améliorent significativement la performance énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale reconnue sur La Seyne-sur-Mer depuis 15 ans
- Techniciens certifiés et formés aux dernières technologies d&apos;isolation
- Garantie de performance énergétique mesurable
- Solutions 100% personnalisées et adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une peinture isolante thermique au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une peinture isolante thermique varie entre 25€ et 60€ au m², selon la complexité de l&apos;application et le type de surface. Pour une toiture moyenne de 100m², nous proposons des forfaits complets à partir de 2500€, incluant préparation et pose.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">La peinture isolante est-elle vraiment efficace ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La peinture isolante est très efficace : elle peut réduire jusqu&apos;à 40% des déperditions thermiques et diminuer la température intérieure de 5 à 10 degrés en période estivale. Son efficacité dépend de la qualité du produit et de la pose professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer une peinture réfléchissante sur toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;application sur toiture nécessite 4 étapes : nettoyage approfondi, réparation des éventuels défauts, application d&apos;un primaire d&apos;accrochage, puis pose de 2 couches de peinture réfléchissante avec des outils professionnels. La préparation est cruciale pour garantir une isolation optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de peinture isolante thermique a La Seyne-sur-Mer ?
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
