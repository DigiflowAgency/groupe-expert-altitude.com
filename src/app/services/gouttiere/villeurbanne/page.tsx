import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Villeurbanne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;installation et l&apos;entretien de gouttières à Villeurbanne et ses environs. Spécialistes ',
  keywords: 'gouttiere villeurbanne, pose gouttiere villeurbanne, reparation gouttiere villeurbanne, nettoyage gouttiere villeurbanne, descente pluviale villeurbanne, gouttiere bouchee villeurbanne',
};

export default function GouttiereVilleurbannePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Villeurbanne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;installation et l&apos;entretien de gouttières à Villeurbanne et ses environs. Spécialistes des descentes pluviales depuis plus de 15 ans, nous protégeons efficacement votre habitat contre les risques d&apos;infiltration.</p>

        <h2>Nos services de gouttières et descentes pluviales a Villeurbanne</h2>
        <div className="space-y-4">
          <p>Nos solutions de gouttières sur-mesure répondent aux spécificités architecturales de chaque bâtiment à Villeurbanne. Nous proposons une gamme complète allant de la pose neuve au nettoyage et à la réparation. Notre équipe qualifiée utilise uniquement des matériaux haute durabilité (zinc, aluminium, PVC) garantissant une protection optimale contre les intempéries. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis et d&apos;un devis détaillé, avec une attention particulière portée à l&apos;étanchéité et à l&apos;évacuation efficace des eaux de pluie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 500 chantiers réalisés
- Interventions rapides sous 48h dans toute la métropole lyonnaise
- Techniciens formés et équipés des dernières technologies
- Garantie décennale et SAV complet sur tous nos travaux</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi. Un devis gratuit permettra de définir précisément votre budget avec nos experts.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez en profondeur. En cas de difficulté, notre équipe peut intervenir rapidement.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps et à l&apos;automne. Pour Villeurbanne, avec son climat variable, un contrôle supplémentaire après de fortes précipitations est conseillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Villeurbanne ?
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
