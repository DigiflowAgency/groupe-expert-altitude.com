import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Spécialiste des gouttières et descentes pluviales à Aix-en-Provence, le Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans contre les r',
  keywords: 'gouttiere aix-en-provence, pose gouttiere aix-en-provence, reparation gouttiere aix-en-provence, nettoyage gouttiere aix-en-provence, descente pluviale aix-en-provence, gouttiere bouchee aix-en-provence',
};

export default function GouttiereAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des gouttières et descentes pluviales à Aix-en-Provence, le Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans contre les risques d&apos;infiltration. Notre expertise technique garantit des solutions durables pour tous vos systèmes d&apos;évacuation des eaux de pluie.</p>

        <h2>Nos services de gouttières et descentes pluviales a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité du processus, depuis le diagnostic précis jusqu&apos;à l&apos;installation et la maintenance. À Aix-en-Provence et ses environs, nous proposons des solutions sur-mesure adaptées à chaque type de bâtiment, qu&apos;il s&apos;agisse d&apos;une maison individuelle ou d&apos;un immeuble. Notre équipe utilise uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, offrant une résistance optimale aux conditions climatiques locales. Nous réalisons des poses de gouttières parfaitement étanches, avec un alignement précis et des fixations robustes qui garantissent une évacuation efficace des eaux pluviales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés et expérimentés
✓ Diagnostic gratuit avant intervention
✓ Devis détaillé sans engagement
✓ Interventions rapides dans un délai de 48h
✓ Matériaux professionnels garantis 10 ans
✓ Service après-vente réactif</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi, la configuration du bâtiment et l&apos;accessibilité. Un pavillon standard de 100m² nécessite généralement entre 15 et 25 mètres linéaires, pour un budget total oscillant entre 450€ et 2000€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer manuellement les feuilles et débris, puis nettoyez l&apos;intérieur avec un outil adapté. En cas de bouchon tenace, utilisez un produit désobstruant spécifique. Pour plus de sécurité, nous recommandons l&apos;intervention d&apos;un professionnel.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est conseillé de nettoyer ses gouttières deux fois par an : au printemps après la période des pollens et à l&apos;automne après la chute des feuilles. Dans les zones boisées d&apos;Aix-en-Provence, nous préconisons jusqu&apos;à 3 nettoyages annuels pour éviter tout risque d&apos;obstruction.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Aix-en-Provence ?
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
