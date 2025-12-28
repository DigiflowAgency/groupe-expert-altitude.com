import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a La Teste-de-Buch | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en couverture et rénovation toiture sur La Teste-de-Buch et ses environs. Forts de plus de 15 ',
  keywords: 'couverture toiture la teste-de-buch, renovation toiture la teste-de-buch, reparation toiture la teste-de-buch, couvreur la teste-de-buch, refection toiture la teste-de-buch, entreprise couverture la teste-de-buch',
};

export default function CouvertureToitureLaTesteDeBuchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a La Teste-de-Buch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en couverture et rénovation toiture sur La Teste-de-Buch et ses environs. Forts de plus de 15 ans d&apos;expertise, nous garantissons des interventions de qualité pour protéger et valoriser votre habitat.</p>

        <h2>Nos services de couverture et rénovation toiture a La Teste-de-Buch</h2>
        <div className="space-y-4">
          <p>Nos services de couverture et rénovation toiture répondent aux exigences techniques les plus strictes. Nous intervenons sur tous types de toitures - tuiles, ardoises, zinc - avec une précision chirurgicale. Notre équipe de professionnels qualifiés évalue systématiquement l&apos;état de votre couverture, diagnostique les désordres potentiels et propose des solutions sur-mesure. À La Teste-de-Buch, nous comprenons les contraintes climatiques spécifiques et adaptons nos techniques en conséquence, privilégiant des matériaux résistants à l&apos;humidité et aux embruns.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Diagnostic technique gratuit et précis
- Devis détaillé sans engagement
- Interventions rapides et professionnelles
- Matériaux haute performance garantis 10 ans</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 8 000€ et 25 000€ selon la surface, les matériaux et la complexité des travaux. Pour une maison de 100m² à La Teste-de-Buch, comptez en moyenne 12 500€ avec une pose de tuiles neuves et reprise complète de la charpente.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il faut envisager une réfection totale de toiture tous les 30-40 ans, ou en cas de signes précis : infiltrations récurrentes, tuiles cassées sur plus de 20% de la surface, déformation de la charpente, mousses et infiltrations importantes.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez systématiquement : certification RGE, assurance décennale, avis clients, ancienneté de l&apos;entreprise, qualité des références et proposition d&apos;un diagnostic technique préalable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a La Teste-de-Buch ?
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
