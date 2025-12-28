import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à La Teste-de-Buch. Avec plus de 15 ans d&apos;expertise, nou',
  keywords: 'etancheite toiture la teste-de-buch, etancheite toit terrasse la teste-de-buch, etancheite toiture terrasse la teste-de-buch, reparation etancheite la teste-de-buch, entreprise etancheite la teste-de-buch, fuite toiture terrasse la teste-de-buch',
};

export default function EtancheiteToitureLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à La Teste-de-Buch. Avec plus de 15 ans d&apos;expertise, nous protégeons vos bâtiments contre les infiltrations d&apos;eau grâce à des solutions techniques innovantes et durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Notre service d&apos;étanchéité de toiture terrasse répond aux défis spécifiques de l&apos;habitat en Gironde. Nous réalisons un diagnostic précis avant toute intervention, identifiant les zones fragiles et les potentielles sources d&apos;infiltration. Notre équipe utilise des membranes synthétiques haute performance, garantissant une protection optimale contre l&apos;humidité. Chaque chantier à La Teste-de-Buch fait l&apos;objet d&apos;un traitement personnalisé, en respectant les normes techniques les plus exigeantes. Nos techniques d&apos;application permettent une étanchéité durable, avec une résistance aux conditions climatiques locales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux avec une connaissance approfondie des problématiques d&apos;étanchéité en Gironde
- Diagnostic gratuit et devis détaillé sous 48h
- Techniques certifiées et matériaux de haute qualité
- Plus de 95% de clients satisfaits et recommandations</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toit terrasse varie entre 80€ et 250€ par m², selon la surface, l&apos;état actuel et les matériaux choisis. Pour une terrasse moyenne de 30m², comptez un investissement global entre 2 400€ et 7 500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de pluies, des zones de décoloration, ou des moisissures. Un professionnel détectera précisément l&apos;origine avec des tests d&apos;infiltrométrie et une inspection thermique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans, avec un entretien régulier. Nos solutions utilisent des membranes garanties 10 ans, avec possibilité d&apos;extensions selon les matériaux.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a La Teste-de-Buch ?
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
