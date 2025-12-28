import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Blagnac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Blagnac et ses environs. Spécialistes reconnus dans',
  keywords: 'etancheite toiture blagnac, etancheite toit terrasse blagnac, etancheite toiture terrasse blagnac, reparation etancheite blagnac, entreprise etancheite blagnac, fuite toiture terrasse blagnac',
};

export default function EtancheiteToitureBlagnacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Blagnac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Blagnac et ses environs. Spécialistes reconnus dans la protection de vos bâtiments contre les infiltrations, nous garantissons des solutions durables et sur-mesure pour tous vos projets.</p>

        <h2>Nos services de étanchéité toiture terrasse a Blagnac</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux exigences techniques les plus strictes. Notre équipe intervient sur tous types de surfaces : résidentielles, commerciales et industrielles à Blagnac. Nous utilisons des membranes haute performance en PVC, EPDM ou bitume, adaptées à chaque configuration. Notre processus comprend un diagnostic précis, un nettoyage approfondi, la préparation du support et l&apos;application de systèmes d&apos;étanchéité garantissant une protection optimale contre les infiltrations. Nos techniciens certifiés réalisent des travaux avec une précision millimétrique, assurant une imperméabilité totale et une durabilité supérieure à 15 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Blagnac
- Techniciens hautement qualifiés et certifiés
- Diagnostic gratuit et devis personnalisé sous 48h
- Matériaux premium avec garantie décennale
- Intervention rapide et professionnelle
- Solutions techniques innovantes et économiques</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 50€ et 150€ au m², selon la surface, la complexité et les matériaux choisis. Pour un toit terrasse moyen de 50m², comptez un investissement global entre 2 500€ et 7 500€. Un diagnostic précis permettra de définir un devis détaillé et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, surveillez les signes suivants : traces d&apos;humidité sur les plafonds, moisissures, infiltrations lors de fortes pluies, décoloration des peintures ou matériaux. Un professionnel utilisera des techniques comme la thermographie infrarouge ou des tests d&apos;étanchéité pour localiser précisément l&apos;origine des infiltrations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de vie d&apos;une étanchéité de toiture terrasse dépend des matériaux et de la qualité de pose. Avec une installation professionnelle, vous pouvez obtenir : membrane PVC (15-20 ans), résine liquide (10-15 ans), membrane bitumineuse (15-25 ans). Un entretien régulier permet de prolonger significativement cette durée.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Blagnac ?
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
