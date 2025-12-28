import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Menton | Groupe Expert Altitude Com',
  description: 'Situé au cœur de Menton, le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse. Nous protégeons vos bâtimen',
  keywords: 'etancheite toiture menton, etancheite toit terrasse menton, etancheite toiture terrasse menton, reparation etancheite menton, entreprise etancheite menton, fuite toiture terrasse menton',
};

export default function EtancheiteToitureMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Situé au cœur de Menton, le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse. Nous protégeons vos bâtiments contre les infiltrations avec des solutions techniques innovantes adaptées au climat méditerranéen.</p>

        <h2>Nos services de étanchéité toiture terrasse a Menton</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des constructions mentonnaises, soumises à des variations climatiques importantes. Nous intervenons sur tous types de surfaces, en utilisant des membranes synthétiques haute performance garantissant une protection optimale contre l&apos;eau et l&apos;humidité. Notre processus comprend un diagnostic précis, un nettoyage approfondi, la préparation du support et l&apos;application de systèmes d&apos;étanchéité dernière génération. Chaque intervention est personnalisée, avec une attention particulière portée à la structure existante et aux contraintes environnementales locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons des garanties décennales, un diagnostic gratuit et une intervention rapide sur Menton et ses environs. Notre taux de satisfaction client dépasse 95%, témoignant de notre engagement qualité.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ au m², selon la complexité du chantier et les matériaux utilisés. Pour une surface moyenne de 50m², comptez un investissement global entre 4 000€ et 12 500€, incluant diagnostic, matériaux et main-d&apos;œuvre.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes comme les taches d&apos;humidité, les infiltrations, les moisissures ou les déformations du plafond. Utilisez un test à l&apos;eau ou une caméra thermique. Notre équipe propose un diagnostic précis avec un équipement professionnel, permettant de localiser la source exacte de l&apos;infiltration.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de l&apos;exposition aux intempéries et de l&apos;entretien régulier. Nous recommandons une visite de contrôle tous les 5 ans pour maintenir une protection optimale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Menton ?
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
