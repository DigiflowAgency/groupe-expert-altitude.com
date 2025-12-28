import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Maisons-Alfort | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour tous vos besoins en gouttières et descentes pluviales à Maisons-Alfort et ses environs',
  keywords: 'gouttiere maisons-alfort, pose gouttiere maisons-alfort, reparation gouttiere maisons-alfort, nettoyage gouttiere maisons-alfort, descente pluviale maisons-alfort, gouttiere bouchee maisons-alfort',
};

export default function GouttiereMaisonsAlfortPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Maisons-Alfort</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour tous vos besoins en gouttières et descentes pluviales à Maisons-Alfort et ses environs. Nous protégeons votre habitat contre les risques d&apos;infiltration avec des solutions sur-mesure et un savoir-faire technique irréprochable.</p>

        <h2>Nos services de gouttières et descentes pluviales a Maisons-Alfort</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble des problématiques liées à l&apos;évacuation des eaux pluviales. Que ce soit pour une installation neuve, une réparation ou un entretien complet, nous garantissons une prestation de haute qualité adaptée à chaque configuration architecturale. Notre équipe maîtrise parfaitement les techniques de pose et de rénovation, en utilisant uniquement des matériaux résistants comme l&apos;aluminium, le zinc ou le PVC. Nous réalisons un diagnostic précis avant toute intervention, permettant d&apos;identifier les points faibles et de proposer la solution technique la plus pertinente pour votre propriété à Maisons-Alfort.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Intervention rapide sous 48h sur Maisons-Alfort et le Val-de-Marne
- Devis gratuit et transparent sans engagement
- Matériaux haute durabilité garantis 10 ans
- Équipe de professionnels certifiés et assurés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi. Un système complet pour une maison moyenne de 100m² coûte environ 800-1200€, installation comprise. Nous proposons des devis personnalisés après un diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un décolmateur haute pression ou un câble métallique flexible. Commencez par retirer les feuilles et débris manuellement, puis nettoyez avec un jet d&apos;eau. En cas de bouchon résistant, faites appel à un professionnel pour éviter d&apos;endommager la gouttière.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer ses gouttières au minimum deux fois par an : au printemps et à l&apos;automne. Dans les zones très boisées de Maisons-Alfort, nous conseillons jusqu&apos;à 3-4 nettoyages annuels pour prévenir les obstructions et les risques d&apos;infiltration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Maisons-Alfort ?
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
