import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Mérignac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Mérignac avec des solutions photovoltaïques innovantes et sur-mesure. Nos experts en installati',
  keywords: 'panneaux solaires mérignac, installation photovoltaique mérignac, panneaux photovoltaiques mérignac, installateur panneaux solaires mérignac, pose panneaux solaires mérignac, photovoltaique maison mérignac',
};

export default function PanneauxSolairesMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Mérignac avec des solutions photovoltaïques innovantes et sur-mesure. Nos experts en installation de panneaux solaires transforment votre habitat en centrale électrique écologique et économique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Mérignac</h2>
        <div className="space-y-4">
          <p>Nous proposons des installations de panneaux solaires photovoltaïques clés en main, adaptées à chaque configuration de maison à Mérignac et ses environs. Notre approche technique garantit une production électrique optimale, avec des rendements pouvant atteindre 85% pendant plus de 25 ans. Nos techniciens certifiés réalisent un diagnostic précis de votre toiture, étudient votre consommation énergétique et conçoivent un système personnalisé qui maximise vos économies. Chaque installation comprend un accompagnement complet : étude technique gratuite, conseils sur les aides gouvernementales, raccordement au réseau électrique et suivi de performance.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise 100% locale à Mérignac, nous garantissons une expertise technique de pointe. Nos installateurs sont certifiés RGE, nos matériels bénéficient de 25 ans de garantie. Nous proposons un financement sans apport et une économie moyenne de 60% sur vos factures d&apos;électricité. Notre engagement : transparence, qualité et satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour une maison moyenne coûte environ 12 500€, mais permet des économies de 250€ à 500€ par an.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines : 1 semaine pour l&apos;étude technique, 1-2 semaines de préparation administrative, et 2-3 jours pour la pose effective des panneaux photovoltaïques sur votre toiture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, demandez ses références locales à Mérignac, consultez ses avis clients, et assurez-vous qu&apos;il propose un accompagnement complet incluant études techniques, administratives et financières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Mérignac ?
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
