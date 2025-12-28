import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Situés au cœur de La Chapelle-sur-Erdre, les experts du Groupe Expert Altitude Com sont votre solution complète pour tous vos besoins en gouttières et desc',
  keywords: 'gouttiere la chapelle-sur-erdre, pose gouttiere la chapelle-sur-erdre, reparation gouttiere la chapelle-sur-erdre, nettoyage gouttiere la chapelle-sur-erdre, descente pluviale la chapelle-sur-erdre, gouttiere bouchee la chapelle-sur-erdre',
};

export default function GouttiereLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Situés au cœur de La Chapelle-sur-Erdre, les experts du Groupe Expert Altitude Com sont votre solution complète pour tous vos besoins en gouttières et descentes pluviales. Notre équipe professionnelle protège votre habitat contre les risques d&apos;infiltration et de dégradation.</p>

        <h2>Nos services de gouttières et descentes pluviales a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité de vos besoins, depuis l&apos;installation jusqu&apos;à la maintenance. Nous utilisons uniquement des matériaux de haute qualité - aluminium, zinc et PVC - garantissant une durabilité exceptionnelle. Notre processus débute par un diagnostic précis de votre toiture, suivi d&apos;une installation sur-mesure parfaitement adaptée à l&apos;architecture de votre habitation. Chaque intervention est réalisée avec une précision millimétrique, assurant une évacuation optimale des eaux pluviales et prévenant tout risque d&apos;infiltration ou de stagnation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à La Chapelle-sur-Erdre
- Techniciens certifiés et formés aux dernières normes
- Devis gratuit et transparent sous 48h
- Interventions rapides et garanties 5 ans sur nos installations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire, selon le matériau et la complexité de l&apos;installation. Pour une maison standard de 100m², comptez un budget global entre 600€ et 1500€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un nettoyeur haute pression, un furet de plombier ou un aspirateur spécial. Retirez manuellement les feuilles et débris, puis rincez à l&apos;eau. En cas de bouchon persistant, contactez un professionnel pour éviter tout dommage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage complet de vos gouttières deux fois par an : au printemps et à l&apos;automne. Ces périodes critiques permettent d&apos;éliminer les feuilles mortes et prévenir les obstructions potentielles qui pourraient causer des dégâts structurels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a La Chapelle-sur-Erdre ?
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
