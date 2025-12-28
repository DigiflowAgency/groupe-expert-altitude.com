import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Nice | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Nice et dans toute la Côte d&apos;Azur. Spécialistes des',
  keywords: 'etancheite toiture nice, etancheite toit terrasse nice, etancheite toiture terrasse nice, reparation etancheite nice, entreprise etancheite nice, fuite toiture terrasse nice',
};

export default function EtancheiteToitureNicePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Nice</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Nice et dans toute la Côte d&apos;Azur. Spécialistes des solutions d&apos;étanchéité sur mesure, nous protégeons votre patrimoine immobilier contre les infiltrations et les dégradations.</p>

        <h2>Nos services de étanchéité toiture terrasse a Nice</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques des bâtiments niçois, exposés à un climat méditerranéen exigeant. Nous intervenons sur tous types de surfaces : résidentielles, commerciales et industrielles. Notre méthode exclusive commence par un diagnostic précis utilisant des technologies de détection thermique et infrarouge, permettant d&apos;identifier les moindres points faibles. Nous utilisons uniquement des membranes d&apos;étanchéité haute performance, garantissant une protection optimale contre l&apos;eau, les UV et les variations climatiques. Notre processus inclut une préparation minutieuse de la surface, l&apos;application de primaires d&apos;accrochage spécifiques et une pose selon les normes les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés avec plus de 15 ans d&apos;expérience. Nous proposons une garantie décennale, un diagnostic gratuit et un suivi personnalisé. Notre taux de satisfaction client dépasse 95% sur Nice et sa région. Nous intervenons sous 48h en cas d&apos;urgence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 80€ et 250€ le m², selon la complexité et les matériaux. Pour un appartement de 50m², comptez un budget moyen de 5 000€ à 12 500€. Un devis personnalisé gratuit permet d&apos;obtenir un tarif précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes révélateurs d&apos;une fuite incluent des taches d&apos;humidité au plafond, des infiltrations, des moisissures, des déformations ou des écoulements anormaux. Un test d&apos;étanchéité par nos experts permet de localiser précisément l&apos;origine des désordres avec une précision de 98%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. Notre garantie décennale couvre les travaux, et nos techniques d&apos;application avancées prolongent systématiquement la durée de vie de votre toiture terrasse.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Nice ?
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
