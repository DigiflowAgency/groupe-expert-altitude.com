import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Pessac | Groupe Expert Altitude Com',
  description: 'Votre toiture terrasse mérite une protection optimale contre les infiltrations, et le Groupe Expert Altitude Com est votre partenaire local à Pessac pour d',
  keywords: 'etancheite toiture pessac, etancheite toit terrasse pessac, etancheite toiture terrasse pessac, reparation etancheite pessac, entreprise etancheite pessac, fuite toiture terrasse pessac',
};

export default function EtancheiteToiturePessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture terrasse mérite une protection optimale contre les infiltrations, et le Groupe Expert Altitude Com est votre partenaire local à Pessac pour des solutions d&apos;étanchéité professionnelles et durables. Nous intervenons sur l&apos;ensemble de la métropole bordelaise avec une expertise technique reconnue.</p>

        <h2>Nos services de étanchéité toiture terrasse a Pessac</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité de votre bâtiment. Notre équipe spécialisée réalise des interventions complètes, depuis le diagnostic précis jusqu&apos;à la réalisation de travaux sur mesure. Nous utilisons uniquement des membranes haute performance garantissant une protection contre l&apos;eau pendant 15 à 20 ans. Notre processus inclut un audit technique détaillé, le choix des matériaux adaptés à votre structure, et une application rigoureuse selon les normes en vigueur. À Pessac et ses environs, nous traitons chaque chantier avec une attention méticuleuse, en privilégiant des techniques innovantes qui assurent une étanchéité parfaite et durable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique : notre équipe certifiée dispose de plus de 15 ans d&apos;expérience, nous proposons des garanties décennales, nos interventions sont rapides et précises, et nous utilisons des matériaux de haute qualité. Nous sommes également reconnus pour notre transparence tarifaire et notre accompagnement personnalisé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité des travaux et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis adapté à votre situation spécifique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, infiltrations, moisissures, décoloration des peintures ou matériaux. Utilisez un test à l&apos;eau ou faites appel à un professionnel qui utilisera une caméra thermique pour identifier précisément les zones de faiblesse et les points de passage potentiels.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse bien réalisée oscille entre 15 et 25 ans. Cette longévité dépend de plusieurs facteurs : qualité des matériaux, conditions climatiques, entretien régulier et technique de pose. Un suivi annuel et des réparations ponctuelles peuvent significativement prolonger cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Pessac ?
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
