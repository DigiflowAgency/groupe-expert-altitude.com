import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Arles | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaï',
  keywords: 'panneaux solaires arles, installation photovoltaique arles, panneaux photovoltaiques arles, installateur panneaux solaires arles, pose panneaux solaires arles, photovoltaique maison arles',
};

export default function PanneauxSolairesArlesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Arles</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat en une source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques à Arles. Nous vous accompagnons vers une transition énergétique performante et économique au cœur de la Camargue.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Arles</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants d&apos;Arles de réduire significativement leur empreinte carbone tout en générant des économies substantielles. Notre expertise technique garantit une installation optimale, en parfaite adéquation avec l&apos;orientation et la structure de votre toiture. Nous proposons des systèmes photovoltaïques dernière génération, avec des rendements atteignant jusqu&apos;à 22%, qui transforment chaque m² en une source d&apos;énergie propre et rentable. Notre processus comprend un diagnostic précis, un dimensionnement personnalisé, l&apos;obtention des autorisations administratives et une installation clé en main par nos techniciens certifiés.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts locaux avec plus de 10 ans d&apos;expérience en installation photovoltaïque
- Certifications RGE et qualifications officielles
- Accompagnement personnalisé de A à Z, de l&apos;étude à la mise en service
- Garantie décennale et suivi technique complet</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ selon la puissance (3-9 kWc), avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement estimé entre 7 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend de 4 à 8 semaines, incluant le diagnostic technique, les démarches administratives et la pose effective qui dure généralement 2-3 jours pour une maison individuelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez impérativement la certification RGE, consultez leurs références, demandez plusieurs devis détaillés, et assurez-vous de leur expérience locale avec des réalisations récentes dans la région d&apos;Arles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Arles ?
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
