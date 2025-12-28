import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales à Neuilly-sur-Seine. Protégez efficacement votre habitat co',
  keywords: 'gouttiere neuilly-sur-seine, pose gouttiere neuilly-sur-seine, reparation gouttiere neuilly-sur-seine, nettoyage gouttiere neuilly-sur-seine, descente pluviale neuilly-sur-seine, gouttiere bouchee neuilly-sur-seine',
};

export default function GouttiereNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales à Neuilly-sur-Seine. Protégez efficacement votre habitat contre les risques d&apos;infiltration avec nos solutions sur-mesure adaptées à l&apos;architecture de votre région.</p>

        <h2>Nos services de gouttières et descentes pluviales a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des propriétés de Neuilly-sur-Seine, des pavillons aux immeubles résidentiels. Nous proposons une gamme complète incluant l&apos;installation, la réparation et l&apos;entretien de systèmes de récupération des eaux pluviales. Notre approche technique garantit une étanchéité optimale, en utilisant des matériaux haut de gamme comme l&apos;aluminium et le zinc, résistants aux conditions climatiques locales. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis, avec un devis détaillé et transparent.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Intervention rapide sous 48h à Neuilly-sur-Seine
- Matériels professionnels dernière génération
- Garantie décennale sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Pour une maison moyenne à Neuilly-sur-Seine, comptez environ 1200€ à 2500€ pour un système complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un dégorgeoir ou un furet, retirez manuellement les débris, et rincez à l&apos;eau sous pression. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager le système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an, idéalement au printemps et à l&apos;automne. Dans les zones avec beaucoup de végétation à Neuilly-sur-Seine, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Neuilly-sur-Seine ?
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
