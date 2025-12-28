import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a La Ciotat | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;étanchéité de toiture terrasse à La Ciotat et ses environs. Spécialistes reconnus, nous',
  keywords: 'etancheite toiture la ciotat, etancheite toit terrasse la ciotat, etancheite toiture terrasse la ciotat, reparation etancheite la ciotat, entreprise etancheite la ciotat, fuite toiture terrasse la ciotat',
};

export default function EtancheiteToitureLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour l&apos;étanchéité de toiture terrasse à La Ciotat et ses environs. Spécialistes reconnus, nous protégeons votre patrimoine immobilier contre les infiltrations grâce à des solutions techniques innovantes adaptées au climat méditerranéen.</p>

        <h2>Nos services de étanchéité toiture terrasse a La Ciotat</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité de toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité de votre bâtiment. Notre expertise technique nous permet d&apos;intervenir sur tous types de surfaces, qu&apos;il s&apos;agisse d&apos;immeubles résidentiels, locaux commerciaux ou bâtiments industriels à La Ciotat. Nous utilisons des membranes haute performance en PVC ou résine d&apos;étanchéité garantissant une protection optimale contre l&apos;humidité et les variations climatiques. Notre processus comprend un diagnostic précis, un nettoyage approfondi de la surface, la préparation du support et l&apos;application de systèmes d&apos;étanchéité certifiés, avec une attention particulière aux points singuliers comme les relevés et les évacuations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre approche sur-mesure : chaque intervention est personnalisée selon la configuration de votre toiture. Nous proposons des garanties décennales, intervenons rapidement et disposons de certifications professionnelles. Notre équipe maîtrise parfaitement les techniques modernes d&apos;étanchéité et utilise uniquement des matériaux de haute qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, les matériaux utilisés et l&apos;état initial de votre toiture. Un diagnostic précalable nous permet de vous proposer un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations, des moisissures, des déformations ou des taches. Un professionnel détecte ces désordres via une inspection visuelle, des tests d&apos;infiltrométrie et l&apos;utilisation de caméras thermiques spécialisées.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, moyennant un entretien régulier. Les facteurs déterminants sont la qualité des matériaux, la pose, l&apos;exposition aux intempéries et les maintenances périodiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a La Ciotat ?
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
