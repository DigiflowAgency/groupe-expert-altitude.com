import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a Neuilly-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Neuilly-sur-Seine. Spécialistes reconnus dans la prote',
  keywords: 'etancheite toiture neuilly-sur-seine, etancheite toit terrasse neuilly-sur-seine, etancheite toiture terrasse neuilly-sur-seine, reparation etancheite neuilly-sur-seine, entreprise etancheite neuilly-sur-seine, fuite toiture terrasse neuilly-sur-seine',
};

export default function EtancheiteToitureNeuillySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a Neuilly-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à Neuilly-sur-Seine. Spécialistes reconnus dans la protection de vos bâtiments, nous intervenons rapidement et efficacement pour résoudre tous vos problèmes d&apos;étanchéité.</p>

        <h2>Nos services de étanchéité toiture terrasse a Neuilly-sur-Seine</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité toiture terrasse répond aux exigences les plus strictes de protection immobilière. Nous utilisons des techniques et matériaux de pointe pour garantir une imperméabilité totale, avec une attention particulière aux spécificités architecturales de Neuilly-sur-Seine. Notre processus comprend un diagnostic précis, un traitement personnalisé et une application méticuleuse des membranes d&apos;étanchéité. Nos interventions couvrent la rénovation complète, la réparation localisée et la prévention des infiltrations, en s&apos;adaptant à chaque configuration de toit terrasse.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique de plus de 15 ans dans l&apos;étanchéité
- Équipe certifiée et formée aux dernières normes
- Devis gratuit et transparent
- Garantie décennale sur nos interventions
- Solutions sur-mesure adaptées à chaque structure</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ au m², selon la surface, la complexité et les matériaux utilisés. Pour un appartement à Neuilly-sur-Seine, comptez en moyenne entre 3 000€ et 8 000€ pour une intervention complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour détecter une fuite, observez les signes comme les taches d&apos;humidité, les moisissures, les déformations du plafond ou les traces d&apos;infiltration. Nous recommandons un test d&apos;étanchéité annuel par nos experts pour prévenir tout risque.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité professionnelle dure entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes garanties 20 ans, offrant une protection optimale contre les intempéries et les variations climatiques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a Neuilly-sur-Seine ?
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
