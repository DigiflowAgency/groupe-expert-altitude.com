import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Menton | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Menton en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux s',
  keywords: 'panneaux solaires menton, installation photovoltaique menton, panneaux photovoltaiques menton, installateur panneaux solaires menton, pose panneaux solaires menton, photovoltaique maison menton',
};

export default function PanneauxSolairesMentonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Menton</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Menton en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Profitez du climat ensoleillé de la Côte d&apos;Azur pour produire une énergie propre et économique directement depuis votre toiture.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Menton</h2>
        <div className="space-y-4">
          <p>Nous proposons des solutions photovoltaïques sur-mesure adaptées à chaque habitation mentonnaise, avec des systèmes alliant performance technique et esthétique. Notre approche complète comprend un diagnostic précis de votre toiture, le choix des panneaux les plus performants et une installation réalisée par des techniciens certifiés. Nos solutions permettent de réduire jusqu&apos;à 70% de votre facture énergétique et de valoriser votre patrimoine immobilier. Chaque projet est étudié individuellement pour maximiser la production d&apos;électricité solaire et minimiser votre empreinte carbone.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés RGE avec plus de 10 ans d&apos;expérience sur la région mentonnaise
- Accompagnement administratif complet pour les demandes de subventions
- Matériel garanti 25 ans avec rendement optimal
- Installation rapide et propre, sans modification structurelle invasive</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une maison individuelle moyenne de 100m², le coût d&apos;installation varie entre 9 000€ et 15 000€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques est généralement de 4 à 6 semaines, incluant l&apos;étude technique préalable, les autorisations administratives et la pose qui ne dure que 2-3 jours pour une installation standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement : son numéro de certification, ses références locales, les avis clients, la qualité des équipements proposés et la transparence de son devis détaillé. Un professionnel RGE garantit une installation aux normes et l&apos;éligibilité aux aides gouvernementales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Menton ?
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
