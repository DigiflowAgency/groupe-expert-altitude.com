import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Tassin-la-Demi-Lune | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Tassin-la-Demi-Lune. Spécialis',
  keywords: 'gouttiere tassin-la-demi-lune, pose gouttiere tassin-la-demi-lune, reparation gouttiere tassin-la-demi-lune, nettoyage gouttiere tassin-la-demi-lune, descente pluviale tassin-la-demi-lune, gouttiere bouchee tassin-la-demi-lune',
};

export default function GouttiereTassinLaDemiLunePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Tassin-la-Demi-Lune</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Tassin-la-Demi-Lune. Spécialistes de la protection de votre habitat contre les intempéries, nous intervenons rapidement et efficacement pour préserver l&apos;intégrité de votre propriété.</p>

        <h2>Nos services de gouttières et descentes pluviales a Tassin-la-Demi-Lune</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;ensemble des besoins des habitants de Tassin-la-Demi-Lune : installation, réparation, nettoyage et maintenance. Nous utilisons uniquement des matériaux de haute qualité - aluminium, zinc, PVC - garantissant une durabilité de 20 à 30 ans. Notre équipe technique réalise un diagnostic précis avant toute intervention, évaluant la configuration de votre toiture et les spécificités de votre environnement. Chaque projet fait l&apos;objet d&apos;un devis détaillé et personnalisé, avec des solutions techniques adaptées à votre budget et à vos contraintes architecturales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale de plus de 15 ans sur Tassin-la-Demi-Lune
✓ Techniciens certifiés et équipements professionnels
✓ Intervention sous 48h après diagnostic
✓ Garantie décennale sur tous nos travaux
✓ Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 45€ au mètre linéaire selon le matériau choisi. Un pavillon standard de 100m² nécessite généralement entre 30 et 50 mètres linéaires, pour un budget total oscillant entre 750€ et 2250€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un dégorgeoir ou un jet à haute pression, retirez manuellement les débris, vérifiez l&apos;écoulement. En cas de difficultés, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Tassin-la-Demi-Lune, nous conseillons un nettoyage trimestriel pour prévenir l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Tassin-la-Demi-Lune ?
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
