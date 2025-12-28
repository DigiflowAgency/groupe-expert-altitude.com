import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Spécialiste des gouttières et descentes pluviales sur Mandelieu-la-Napoule, le Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans contr',
  keywords: 'gouttiere mandelieu-la-napoule, pose gouttiere mandelieu-la-napoule, reparation gouttiere mandelieu-la-napoule, nettoyage gouttiere mandelieu-la-napoule, descente pluviale mandelieu-la-napoule, gouttiere bouchee mandelieu-la-napoule',
};

export default function GouttiereMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Spécialiste des gouttières et descentes pluviales sur Mandelieu-la-Napoule, le Groupe Expert Altitude Com protège votre habitat depuis plus de 15 ans contre les risques d&apos;infiltration. Notre expertise technique garantit des solutions durables adaptées au climat méditerranéen de la région.</p>

        <h2>Nos services de gouttières et descentes pluviales a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Nos services de gouttières couvrent l&apos;intégralité des besoins : installation, réparation, nettoyage et maintenance préventive. Nous utilisons uniquement des matériaux haute qualité comme l&apos;aluminium et le zinc, résistants à la corrosion et parfaitement adaptés aux conditions climatiques locales de Mandelieu-la-Napoule. Notre équipe de professionnels réalise un diagnostic précis avant toute intervention, évaluant la structure, les pentes et les points critiques pour proposer une solution sur-mesure. Chaque pose de gouttière fait l&apos;objet d&apos;un accompagnement technique complet, avec des fixations renforcées garantissant une étanchéité maximale et une durabilité de 20 ans minimum.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous proposons des interventions rapides sous 48h. Notre équipe dispose de plus de 15 ans d&apos;expérience sur la Côte d&apos;Azur. Devis gratuit et précis, sans surprise. Nous sommes spécialisés dans les solutions techniques adaptées à l&apos;habitat méditerranéen.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix de pose d&apos;une gouttière varie entre 30€ et 80€ du mètre linéaire selon le matériau choisi (PVC, aluminium, zinc). Pour une maison moyenne à Mandelieu-la-Napoule, comptez un budget entre 600€ et 1500€ pour une installation complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière : utilisez un furet métallique, nettoyez avec un jet haute pression, retirez manuellement les débris. En cas de difficultés, contactez un professionnel pour éviter d&apos;endommager la structure.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage des gouttières est recommandé 2 fois par an : au printemps et à l&apos;automne. Dans la région de Mandelieu-la-Napoule, avec la végétation locale, nous conseillons un curage tous les 6 mois pour garantir un écoulement optimal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Mandelieu-la-Napoule ?
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
