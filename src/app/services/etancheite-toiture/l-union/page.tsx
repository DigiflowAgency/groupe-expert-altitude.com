import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Étanchéité toiture terrasse a L\'Union | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à L&apos;Union et ses environs. Spécialistes reconnus, nous p',
  keywords: 'etancheite toiture l'union, etancheite toit terrasse l'union, etancheite toiture terrasse l'union, reparation etancheite l'union, entreprise etancheite l'union, fuite toiture terrasse l'union',
};

export default function EtancheiteToitureLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Étanchéité toiture terrasse a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour l&apos;étanchéité de toiture terrasse à L&apos;Union et ses environs. Spécialistes reconnus, nous protégeons vos bâtiments contre les infiltrations avec des solutions techniques sur-mesure et durables.</p>

        <h2>Nos services de étanchéité toiture terrasse a L'Union</h2>
        <div className="space-y-4">
          <p>L&apos;étanchéité d&apos;une toiture terrasse est un enjeu crucial pour préserver l&apos;intégrité structurelle de votre bâtiment. Notre équipe intervient sur tous types de toitures, qu&apos;il s&apos;agisse de surfaces commerciales, industrielles ou résidentielles à L&apos;Union. Nous utilisons des techniques de pointe comme les membranes synthétiques, les résines polymères et les systèmes d&apos;étanchéité liquide, garantissant une protection maximale contre les infiltrations. Notre processus comprend un diagnostic précis, un traitement adapté et une intervention minimalement invasive, avec un taux de réussite de 98% sur nos chantiers.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 15 ans d&apos;expérience sur L&apos;Union et la Haute-Garonne
- Équipe certifiée et formée aux dernières technologies d&apos;étanchéité
- Devis gratuit et diagnostic complet avant intervention
- Garantie décennale sur tous nos travaux d&apos;étanchéité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une étanchéité de toit terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;une étanchéité de toiture terrasse varie entre 50€ et 150€ au m², selon la complexité du chantier, le type de matériau et la surface à traiter. Pour une terrasse moyenne de 30m², comptez un investissement global entre 1500€ et 4500€.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment détecter une fuite sur une toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les signes de fuite incluent des traces d&apos;humidité sur les plafonds, des infiltrations lors de fortes pluies, des zones de décoloration, des moisissures ou des gonflements. Un professionnel détecte précisément l&apos;origine des infiltrations grâce à des tests d&apos;étanchéité et une inspection thermographique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelle est la durée de vie d&apos;une étanchéité de toiture terrasse ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une étanchéité de qualité réalisée par des professionnels peut durer entre 15 et 25 ans. La durée dépend des matériaux utilisés, de la qualité de la pose et de l&apos;entretien régulier. Nos solutions intègrent des garanties allant jusqu&apos;à 10 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de étanchéité toiture terrasse a L'Union ?
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
