import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Ollioules | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Ollioules en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneau',
  keywords: 'panneaux solaires ollioules, installation photovoltaique ollioules, panneaux photovoltaiques ollioules, installateur panneaux solaires ollioules, pose panneaux solaires ollioules, photovoltaique maison ollioules',
};

export default function PanneauxSolairesOllioulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Ollioules</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Ollioules en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine et réduisent significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Ollioules</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux exigences techniques les plus pointues. À Ollioules et ses environs, nous proposons une approche complète : diagnostic personnalisé, conception technique, installation professionnelle et suivi énergétique. Nos panneaux solaires haute performance permettent de produire jusqu&apos;à 70% de votre consommation électrique annuelle, avec un rendement garanti. Notre processus inclut une étude précise de l&apos;orientation de votre toiture, l&apos;analyse de votre consommation et le choix des équipements les plus adaptés, pour une rentabilité optimale.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Installateur certifié RGE, nous garantissons une qualité technique irréprochable. Notre équipe maîtrise les dernières technologies photovoltaïques et propose des solutions clés en main. Nous accompagnons nos clients dans leurs démarches administratives et leurs demandes de subventions, avec un taux de satisfaction de 98%. Notre connaissance du territoire d&apos;Ollioules nous permet de proposer des solutions parfaitement adaptées.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent réduire jusqu&apos;à 30% du coût total, rendant le projet plus accessible.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations et la pose effective. Notre équipe optimise chaque étape pour minimiser les perturbations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez plusieurs devis détaillés et assurez-vous de la garantie des équipements. Notre entreprise répond à tous ces critères avec plus de 10 ans d&apos;expérience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Ollioules ?
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
