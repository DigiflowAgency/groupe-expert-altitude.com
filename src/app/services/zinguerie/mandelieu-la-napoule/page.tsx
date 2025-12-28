import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux de zinguerie a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Mandelieu-la-Napoule et ses environs. Spécialistes des travaux de zingueri',
  keywords: 'zinguerie mandelieu-la-napoule, travaux zinguerie mandelieu-la-napoule, toiture zinc mandelieu-la-napoule, zingueur mandelieu-la-napoule, reparation zinc mandelieu-la-napoule, zinco reflect mandelieu-la-napoule',
};

export default function ZinguerieMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux de zinguerie a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence en zinguerie sur Mandelieu-la-Napoule et ses environs. Spécialistes des travaux de zinguerie, nous intervenons avec précision et expertise pour protéger et valoriser votre toiture dans le respect des normes techniques les plus exigeantes.</p>

        <h2>Nos services de travaux de zinguerie a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Notre service de zinguerie répond aux besoins spécifiques de chaque habitat, qu&apos;il s&apos;agisse de rénovation, de réparation ou d&apos;installation complète. Nos équipes maîtrisent parfaitement les techniques de pose et de soudure du zinc, garantissant une étanchéité optimale et une durabilité exceptionnelle. Nous utilisons uniquement des matériaux de haute qualité, comme le zinc Zinco Reflect, qui offre une résistance supérieure à la corrosion et une excellente réflectivité thermique. Notre processus d&apos;intervention comprend un diagnostic précis, un devis détaillé et une réalisation professionnelle, avec une attention constante aux spécificités architecturales de Mandelieu-la-Napoule.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir notre entreprise, c&apos;est opter pour l&apos;excellence technique : notre équipe certifiée dispose de plus de 15 ans d&apos;expérience, nos interventions sont garanties 10 ans, nous proposons des solutions sur-mesure et notre réactivité est reconnue. Nous intervenons rapidement et efficacement, avec un engagement total de qualité et de satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un zingueur au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un zingueur varie entre 50€ et 150€ au m², selon la complexité des travaux, la qualité des matériaux et l&apos;accessibilité de la toiture. Pour un projet précis à Mandelieu-la-Napoule, nous recommandons un diagnostic personnalisé permettant un devis exact.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps dure une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une toiture en zinc correctement installée et entretenue peut durer entre 50 et 100 ans. Sa durée de vie exceptionnelle dépend de la qualité de la pose, de l&apos;environnement et des conditions climatiques locales. Notre zinc Zinco Reflect offre une durabilité maximale grâce à ses propriétés anticorrosion.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment entretenir une toiture en zinc ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              L&apos;entretien d&apos;une toiture en zinc implique un nettoyage annuel, l&apos;élimination des débris, la vérification de l&apos;étanchéité des joints et le traitement préventif contre les mousses. Nous recommandons une inspection professionnelle tous les 5 à 7 ans pour garantir la longévité de votre installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux de zinguerie a Mandelieu-la-Napoule ?
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
