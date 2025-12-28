import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Mandelieu-la-Napoule en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialisé en installa',
  keywords: 'panneaux solaires mandelieu-la-napoule, installation photovoltaique mandelieu-la-napoule, panneaux photovoltaiques mandelieu-la-napoule, installateur panneaux solaires mandelieu-la-napoule, pose panneaux solaires mandelieu-la-napoule, photovoltaique maison mandelieu-la-napoule',
};

export default function PanneauxSolairesMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Mandelieu-la-Napoule en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialisé en installation de panneaux solaires photovoltaïques. Profitez du potentiel solaire exceptionnel de la Côte d&apos;Azur pour réduire votre facture énergétique et contribuer à la transition environnementale.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Mandelieu-la-Napoule de produire leur propre électricité verte. Notre expertise technique garantit une installation optimale, avec des panneaux à haute performance atteignant jusqu&apos;à 22% de rendement énergétique. Nous réalisons une étude personnalisée de votre toiture, en analysant son orientation, son inclinaison et son potentiel solaire pour maximiser la production électrique. Notre processus comprend un diagnostic précis, un dimensionnement technique adapté et une installation clé en main par des techniciens certifiés, avec un accompagnement administratif complet pour vos demandes de subventions et de raccordement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son engagement qualité : techniciens certifiés RGE, garantie décennale, études thermiques précises. Nous proposons les technologies photovoltaïques les plus récentes, avec un taux de satisfaction client de 98%. Notre approche sur-mesure et notre expertise locale font la différence pour une transition énergétique réussie.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Les aides gouvernementales peuvent couvrir jusqu&apos;à 30% des frais, incluant MaPrimeRénov&apos; et le crédit d&apos;impôt transition énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, comprenant l&apos;étude technique, l&apos;obtention des autorisations, la pose et le raccordement au réseau électrique. La pose effective des panneaux dure entre 1 et 3 jours selon la complexité du projet.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez son immatriculation SIRET, demandez ses certifications Qualibat ou Qualit&apos;EnR, consultez ses références clients et assurez-vous qu&apos;il propose une garantie décennale. Un bon professionnel réalisera gratuitement un diagnostic technique avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Mandelieu-la-Napoule ?
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
