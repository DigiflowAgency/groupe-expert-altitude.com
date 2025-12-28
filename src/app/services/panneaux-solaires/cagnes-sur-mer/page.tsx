import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Cagnes-sur-Mer | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Cagnes-sur-Mer en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pa',
  keywords: 'panneaux solaires cagnes-sur-mer, installation photovoltaique cagnes-sur-mer, panneaux photovoltaiques cagnes-sur-mer, installateur panneaux solaires cagnes-sur-mer, pose panneaux solaires cagnes-sur-mer, photovoltaique maison cagnes-sur-mer',
};

export default function PanneauxSolairesCagnesSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Cagnes-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Cagnes-sur-Mer en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Profitez du potentiel énergétique exceptionnel de la Côte d&apos;Azur pour réduire vos factures et votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Cagnes-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur-mesure permettent aux habitants de Cagnes-sur-Mer de produire leur propre électricité verte et de valoriser leur patrimoine immobilier. Notre expertise technique garantit une installation optimale, en analysant précisément l&apos;orientation de votre toiture, sa résistance structurelle et votre consommation énergétique. Chaque projet est étudié individuellement pour maximiser le rendement : nous utilisons des panneaux haute performance atteignant jusqu&apos;à 22% d&apos;efficacité, avec des garanties de 25 ans. Notre approche complète comprend le conseil, le dimensionnement technique, l&apos;installation et les démarches administratives pour obtenir le raccordement au réseau électrique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous possédons plus de 10 ans d&apos;expérience dans l&apos;installation photovoltaïque. Notre équipe locale maîtrise parfaitement les spécificités techniques du territoire azuréen. Nous proposons un accompagnement personnalisé, des solutions clés en main et un suivi technique après installation. Nos techniciens sont formés aux dernières normes et technologies photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Les aides gouvernementales comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent couvrir jusqu&apos;à 30% du montant total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique préalable, l&apos;obtention des autorisations, la pose et le raccordement électrique. Notre équipe s&apos;engage à respecter un planning précis et transparent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibel&apos;EnR, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la garantie des équipements. Un professionnel certifié vous garantit une installation aux normes et l&apos;éligibilité aux aides financières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Cagnes-sur-Mer ?
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
