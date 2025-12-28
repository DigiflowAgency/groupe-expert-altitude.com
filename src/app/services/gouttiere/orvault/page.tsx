import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Orvault | Groupe Expert Altitude Com',
  description: 'Protégez votre habitat des intempéries avec Groupe Expert Altitude Com, votre spécialiste des gouttières et descentes pluviales à Orvault. Nous intervenons',
  keywords: 'gouttiere orvault, pose gouttiere orvault, reparation gouttiere orvault, nettoyage gouttiere orvault, descente pluviale orvault, gouttiere bouchee orvault',
};

export default function GouttiereOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Protégez votre habitat des intempéries avec Groupe Expert Altitude Com, votre spécialiste des gouttières et descentes pluviales à Orvault. Nous intervenons rapidement pour garantir la protection optimale de votre toiture contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a Orvault</h2>
        <div className="space-y-4">
          <p>Nos solutions de gouttières sur-mesure sont conçues pour répondre aux exigences spécifiques de chaque habitation à Orvault. Notre équipe de professionnels qualifiés réalise des installations complètes, des réparations précises et des nettoyages approfondis. Nous utilisons uniquement des matériaux de haute qualité comme l&apos;aluminium et le zinc, résistants à la corrosion et parfaitement adaptés au climat local. Notre processus comprend un diagnostic technique précis, une proposition personnalisée et une mise en œuvre soignée, avec une garantie décennale sur nos interventions.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 15 ans dans le domaine des gouttières, 2) Un diagnostic gratuit et sans engagement, 3) Des techniciens certifiés et assurés, 4) Des délais d&apos;intervention rapides, généralement sous 48h après votre appel.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi et la complexité de l&apos;installation. Pour une maison standard à Orvault, comptez environ 600-800€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir ou un tuyau haute pression, retirez manuellement les débris, vérifiez la pente, et utilisez un produit désinfectant pour éliminer les mousses. En cas de difficulté, faites appel à un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. En zone boisée à Orvault, une intervention supplémentaire peut être nécessaire pour éviter l&apos;accumulation de feuilles et de débris.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Orvault ?
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
