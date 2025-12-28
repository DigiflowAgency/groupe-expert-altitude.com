import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a L\'Union | Groupe Expert Altitude Com',
  description: 'Spécialistes des gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat à L&apos;Union depuis plus de 15 ans. Nous intervenons s',
  keywords: 'gouttiere l'union, pose gouttiere l'union, reparation gouttiere l'union, nettoyage gouttiere l'union, descente pluviale l'union, gouttiere bouchee l'union',
};

export default function GouttiereLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialistes des gouttières et descentes pluviales, le Groupe Expert Altitude Com protège votre habitat à L&apos;Union depuis plus de 15 ans. Nous intervenons sur l&apos;ensemble des systèmes d&apos;évacuation des eaux pour garantir la longévité de votre toiture et prévenir les risques d&apos;infiltration.</p>

        <h2>Nos services de gouttières et descentes pluviales a L'Union</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien pour les particuliers et professionnels de L&apos;Union et ses environs. Notre équipe technique hautement qualifiée utilise des matériaux premium en aluminium, zinc et PVC, parfaitement adaptés aux conditions climatiques locales. Chaque intervention commence par un diagnostic précis permettant de définir la solution technique la plus performante. Nous proposons des gouttières sur-mesure, posées avec une précision millimétrique, assurant une évacuation optimale des eaux pluviales et protégeant durablement votre patrimoine immobilier. Notre processus inclut un contrôle qualité systématique garantissant une étanchéité et une résistance maximales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à L&apos;Union
- Techniciens certifiés et formés en continu
- Devis gratuit et transparents sous 48h
- Matériaux haute qualité avec garantie décennale
- Interventions rapides et adaptées à chaque configuration</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Pour une maison moyenne de 100m², comptez un investissement global entre 1200€ et 3500€, installation et fourniture comprises. Nous proposons systématiquement un devis détaillé et personnalisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris. Utilisez un produit dégraissant biodégradable et rincez abondamment. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager votre système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages par an : au printemps après la chute des feuilles et à l&apos;automne avant l&apos;hiver. Pour les zones très boisées, un nettoyage trimestriel peut être nécessaire. Un entretien régulier permet de prévenir les obstructions et les dégradations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a L'Union ?
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
