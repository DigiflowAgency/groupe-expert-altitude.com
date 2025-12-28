import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Gradignan | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Gradignan et ses environs. Nos',
  keywords: 'gouttiere gradignan, pose gouttiere gradignan, reparation gouttiere gradignan, nettoyage gouttiere gradignan, descente pluviale gradignan, gouttiere bouchee gradignan',
};

export default function GouttiereGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos travaux de gouttières et descentes pluviales à Gradignan et ses environs. Nos experts protègent votre habitat contre les risques d&apos;infiltration et de dégradation avec un savoir-faire technique précis.</p>

        <h2>Nos services de gouttières et descentes pluviales a Gradignan</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins : installation, réparation, nettoyage et maintenance. À Gradignan, nous intervenons sur tous types de bâtiments, qu&apos;il s&apos;agisse de maisons individuelles ou de copropriétés. Notre équipe utilise des matériaux de haute qualité - zinc, aluminium, PVC - garantissant une durabilité optimale et une parfaite étanchéité. Chaque intervention commence par un diagnostic technique précis permettant de proposer la solution la plus adaptée à votre configuration. Nos techniciens certifiés réalisent des poses sur-mesure, en respectant les normes techniques et esthétiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Intervention rapide sous 48h à Gradignan et alentours
- Devis gratuit et transparent sans engagement
- Équipe de 12 professionnels qualifiés
- Garantie décennale sur nos installations
- Matériels et techniques dernier cri
- Plus de 15 ans d&apos;expérience locale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 25€ et 50€ au mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un pavillon standard de 100m² nécessite généralement entre 150€ et 500€ de travaux. Nous proposons un devis personnalisé après diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez l&apos;intérieur du conduit. En cas de bouchon résistant, utilisez un produit désobstruant adapté. Pour les cas complexes, notre intervention professionnelle reste recommandée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est conseillé de nettoyer ses gouttières deux fois par an : au printemps et à l&apos;automne. Ces périodes correspondent aux chutes de feuilles et aux premiers risques de gel. Un nettoyage régulier permet de prévenir les engorgements, les infiltrations et préserve la durée de vie de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Gradignan ?
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
