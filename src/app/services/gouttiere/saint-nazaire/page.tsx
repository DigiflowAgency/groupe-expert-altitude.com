import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Saint-Nazaire | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Saint-Nazaire. Nous protégeons vo',
  keywords: 'gouttiere saint-nazaire, pose gouttiere saint-nazaire, reparation gouttiere saint-nazaire, nettoyage gouttiere saint-nazaire, descente pluviale saint-nazaire, gouttiere bouchee saint-nazaire',
};

export default function GouttiereSaintNazairePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Saint-Nazaire</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Saint-Nazaire. Nous protégeons votre habitat contre les risques d&apos;infiltration et de dégradation avec des solutions sur-mesure adaptées à l&apos;environnement maritime local.</p>

        <h2>Nos services de gouttières et descentes pluviales a Saint-Nazaire</h2>
        <div className="space-y-4">
          <p>Nos experts en gouttières interviennent sur l&apos;ensemble du territoire de Saint-Nazaire et sa région, proposant une gamme complète de services : pose, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux de haute qualité résistant à la corrosion marine, garantissant une durabilité exceptionnelle. Notre processus d&apos;intervention débute par un diagnostic précis, permettant d&apos;identifier les points faibles et de proposer une solution technique optimale. Chaque installation est réalisée avec une précision millimétrique, en respectant les normes techniques les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale de plus de 15 ans à Saint-Nazaire 
• Techniciens certifiés et formés en continu 
• Devis gratuit et transparent sous 48h 
• Interventions rapides, dans un délai moyen de 72h après diagnostic 
• Matériaux garantis 10 ans contre les défauts</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi (PVC, zinc, aluminium). Pour une maison standard de 100m², comptez un budget global entre 800€ et 1500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir ou un tuyau haute pression, retirez manuellement les débris, vérifiez la descente pluviale. En cas de difficulté, faites appel à un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons deux nettoyages complets par an : au printemps après la période de chutes de feuilles et à l&apos;automne avant l&apos;hiver. Pour Saint-Nazaire, avec son climat maritime, un contrôle supplémentaire est conseillé en raison des embruns et particules salines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Saint-Nazaire ?
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
