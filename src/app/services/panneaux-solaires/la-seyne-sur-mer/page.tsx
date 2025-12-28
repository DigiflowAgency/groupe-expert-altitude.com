import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à La Seyne-sur-Mer en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de ',
  keywords: 'panneaux solaires la seyne-sur-mer, installation photovoltaique la seyne-sur-mer, panneaux photovoltaiques la seyne-sur-mer, installateur panneaux solaires la seyne-sur-mer, pose panneaux solaires la seyne-sur-mer, photovoltaique maison la seyne-sur-mer',
};

export default function PanneauxSolairesLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à La Seyne-sur-Mer en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Profitez du potentiel solaire exceptionnel du sud de la France pour réduire drastiquement votre facture énergétique.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque proposent une solution sur-mesure adaptée à chaque configuration de toiture à La Seyne-sur-Mer. Nous réalisons un diagnostic précis de votre propriété, évaluons votre consommation énergétique et concevons un système photovoltaïque optimisé. Notre approche technique garantit un rendement maximal : nos installations permettent de couvrir jusqu&apos;à 70% des besoins électriques d&apos;un foyer standard. Chaque projet fait l&apos;objet d&apos;une étude personnalisée, intégrant les contraintes architecturales et les normes environnementales en vigueur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une installation professionnelle et éligible aux aides gouvernementales. Notre équipe dispose de plus de 12 ans d&apos;expérience dans le photovoltaïque. Nous proposons un accompagnement complet : étude technique gratuite, financement, démarches administratives et suivi de production énergétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ pour une maison de 100m², avec un retour sur investissement estimé entre 8 et 12 ans. Les aides de l&apos;État peuvent réduire ce coût jusqu&apos;à 30%, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 6 semaines, incluant l&apos;étude technique préalable, les autorisations administratives et la pose effective des panneaux photovoltaïques. Notre équipe optimise chaque étape pour minimiser les désagréments.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement sa certification Qualibel&apos;EnR, son expérience locale, ses références clients et ses garanties. Un professionnel certifié vous assure une installation aux normes et l&apos;obtention des aides financières.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a La Seyne-sur-Mer ?
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
