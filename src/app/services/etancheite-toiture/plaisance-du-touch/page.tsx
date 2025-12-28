import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Plaisance-du-Touch et ses environs. Avec plus de 15',
  keywords: 'etancheite toiture plaisance-du-touch, etancheite toit terrasse plaisance-du-touch, etancheite toiture terrasse plaisance-du-touch, reparation etancheite plaisance-du-touch, entreprise etancheite plaisance-du-touch, fuite toiture terrasse plaisance-du-touch',
};

export default function EtancheiteToiturePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Plaisance-du-Touch et ses environs. Avec plus de 15 ans d&apos;expertise, nous garantissons des solutions durables pour protéger votre bâtiment contre les infiltrations d&apos;eau.</p>

        <h2>Nos services de étanchéité toiture terrasse a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des constructions locales de Plaisance-du-Touch. Nous intervenons sur tous types de toitures, en utilisant des techniques modernes et des matériaux haute performance comme les membranes synthétiques EPDM et les résines polyuréthanes. Notre processus comprend un diagnostic précis, un nettoyage approfondi, la réparation des points faibles et l&apos;application d&apos;un système d&apos;étanchéité adapté. Chaque intervention est personnalisée, avec une attention méticuleuse aux détails pour assurer une protection maximale contre les infiltrations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec une connaissance approfondie des spécificités climatiques de Plaisance-du-Touch
- Équipe certifiée et formée aux dernières techniques d&apos;étanchéité
- Devis gratuit et transparent sans engagement
- Garantie décennale sur nos travaux d&apos;étanchéité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ par m², selon la surface, l&apos;état actuel et les techniques utilisées. Pour une terrasse moyenne de 30m², comptez un investissement entre 1 500€ et 4 500€. Un diagnostic précalable permet d&apos;affiner ce tarif.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des moisissures, des infiltrations lors de fortes pluies, des déformations ou cloques sur la surface. Un professionnel détecte ces anomalies par inspection visuelle, test d&apos;étanchéité et parfois caméra thermique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité installée par des professionnels peut durer entre 15 et 25 ans. La durée dépend de la qualité des matériaux, de l&apos;installation et de l&apos;entretien régulier. Un contrôle annuel et des petites réparations préventives prolongent significativement sa durée de vie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Plaisance-du-Touch ?
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
