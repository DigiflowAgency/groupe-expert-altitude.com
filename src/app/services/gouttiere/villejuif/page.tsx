import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Villejuif | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Villejuif et ses environs. Nous protégeons efficacement',
  keywords: 'gouttiere villejuif, pose gouttiere villejuif, reparation gouttiere villejuif, nettoyage gouttiere villejuif, descente pluviale villejuif, gouttiere bouchee villejuif',
};

export default function GouttiereVillejuifPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Villejuif</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en gouttières et descentes pluviales sur Villejuif et ses environs. Nous protégeons efficacement votre habitat contre les risques d&apos;infiltration et de dégradation grâce à des solutions sur-mesure.</p>

        <h2>Nos services de gouttières et descentes pluviales a Villejuif</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins des propriétaires de Villejuif : installation, réparation et entretien. Notre équipe qualifiée intervient avec du matériel haut de gamme, proposant des gouttières en zinc, aluminium ou PVC, parfaitement adaptées à chaque type de toiture. Nous réalisons un diagnostic précis avant toute intervention, garantissant une pose optimale et un écoulement efficace des eaux pluviales. Notre approche technique permet de prévenir les risques d&apos;humidité et de protéger durablement votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons un devis gratuit sous 48h, une intervention rapide et un service après-vente garanti. Notre engagement qualité se traduit par des solutions durables et un conseil personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ au mètre linéaire selon le matériau choisi. Pour une maison moyenne à Villejuif, comptez entre 800€ et 2000€ pour une installation complète, matériel et main-d&apos;œuvre compris.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet métallique ou un jet haute pression. Commencez par retirer les feuilles et débris manuellement, puis nettoyez en profondeur. En cas de difficulté, faites appel à un professionnel pour éviter tout risque de détérioration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières deux fois par an : au printemps et à l&apos;automne. Dans les zones boisées de Villejuif, une intervention supplémentaire peut être nécessaire pour éviter l&apos;accumulation de feuilles et de mousse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Villejuif ?
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
