import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les propriétés de Mandelieu-la-Napoule. Expert Al',
  keywords: 'terrasse bois mandelieu-la-napoule, terrasse sur plot mandelieu-la-napoule, terrasse bois sur plot mandelieu-la-napoule, pose terrasse bois mandelieu-la-napoule, terrasse composite mandelieu-la-napoule, terrasse bois piscine mandelieu-la-napoule',
};

export default function TerrasseBoisMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur mesure pour les propriétés de Mandelieu-la-Napoule. Expert Altitude Com vous propose des solutions durables et élégantes qui valorisent instantanément votre espace extérieur.</p>

        <h2>Nos services de terrasse bois sur plot a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution idéale pour les propriétaires exigeants de la région. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour résister aux conditions climatiques méditerranéennes. Notre processus débute par un diagnostic précis de votre terrain, permettant une pose optimale qui garantit stabilité et durabilité. Chaque projet est personnalisé, en tenant compte de la topographie spécifique de votre terrain à Mandelieu-la-Napoule, avec une attention particulière portée à l&apos;alignement et à la planéité. Nos techniciens maîtrisent parfaitement les techniques de pose sur plots, assurant un résultat impeccable qui allie esthétique et fonctionnalité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence. Nos équipes possèdent plus de 15 ans d&apos;expérience en aménagement extérieur. Nous garantissons un devis précis sous 48h, une installation rapide et professionnelle, et un suivi personnalisé. Nos terrasses bénéficient d&apos;une garantie décennale, et nous utilisons des matériaux eco-responsables certifiés.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour Mandelieu-la-Napoule, notre tarif moyen se situe autour de 120€/m², pose et matériaux compris. Un terrain de 20m² représenterait un investissement d&apos;environ 2 400€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un espace standard de 15-20m², comptez entre 2 et 4 jours ouvrables. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour les terrasses à Mandelieu-la-Napoule. Le composite offre une durabilité exceptionnelle et nécessite peu d&apos;entretien, tandis que l&apos;ipé présente une résistance naturelle aux intempéries et aux agressions marines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Mandelieu-la-Napoule ?
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
