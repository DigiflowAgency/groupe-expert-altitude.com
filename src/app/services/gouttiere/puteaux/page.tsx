import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Puteaux | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Puteaux et ses environs. Nous protégeons votre habit',
  keywords: 'gouttiere puteaux, pose gouttiere puteaux, reparation gouttiere puteaux, nettoyage gouttiere puteaux, descente pluviale puteaux, gouttiere bouchee puteaux',
};

export default function GouttierePuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Puteaux et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration et de dégradation avec des solutions sur-mesure adaptées à chaque type de bâtiment.</p>

        <h2>Nos services de gouttières et descentes pluviales a Puteaux</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des problématiques liées à l&apos;évacuation des eaux pluviales. Nous proposons une gamme complète de services : installation, réparation, nettoyage et maintenance de gouttières pour les particuliers et professionnels de Puteaux. Notre approche technique garantit une protection optimale de votre toiture et de vos façades contre l&apos;humidité. Chaque intervention commence par un diagnostic précis, permettant d&apos;identifier les points faibles et de proposer des solutions durables. Nos techniciens utilisent des matériaux haute qualité (zinc, aluminium, PVC) et mettent en œuvre des techniques d&apos;installation conformes aux normes en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Puteaux
- Équipe de techniciens certifiés et formés en permanence
- Devis gratuit et transparents sous 48h
- Interventions rapides et sur-mesure
- Matériel professionnel de dernière génération
- Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi (PVC : 30-40€, zinc : 50-80€) et la complexité de l&apos;installation. Pour une maison moyenne à Puteaux, comptez entre 500€ et 1500€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un tuyau haute pression. Commencez par retirer manuellement les feuilles et débris. Utilisez un produit désinfectant biodégradable et rincez soigneusement. En cas de difficulté, faites appel à un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières au minimum deux fois par an : au printemps et à l&apos;automne. En zone avec beaucoup d&apos;arbres, une intervention trimestrielle peut être nécessaire. Un nettoyage régulier permet de prévenir l&apos;obstruction et les risques d&apos;infiltration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Puteaux ?
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
