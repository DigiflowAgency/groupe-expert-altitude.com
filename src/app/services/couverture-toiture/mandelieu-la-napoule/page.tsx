import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Besoin d\'un couverture et rénovation toiture a Mandelieu-la-Napoule ? Groupe Expert Altitude Com, specialiste depuis plus de 10 ans. Devis gratuit sous 24h.',
  keywords: 'couverture toiture mandelieu-la-napoule, renovation toiture mandelieu-la-napoule, reparation toiture mandelieu-la-napoule, couvreur mandelieu-la-napoule, refection toiture mandelieu-la-napoule, entreprise couverture mandelieu-la-napoule',
};

export default function CouvertureToitureMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <h2>Nos services de couverture et rénovation toiture a Mandelieu-la-Napoule</h2>
        <p>
          Groupe Expert Altitude Com intervient a Mandelieu-la-Napoule et ses environs pour tous vos besoins en couverture et rénovation toiture.
          Nos experts qualifies vous accompagnent dans vos projets avec professionnalisme et efficacite.
        </p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Contactez-nous pour obtenir une reponse personnalisee a votre question.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Contactez-nous pour obtenir une reponse personnalisee a votre question.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Contactez-nous pour obtenir une reponse personnalisee a votre question.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Mandelieu-la-Napoule ?
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
