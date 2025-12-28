import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Tournefeuille | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Tournefeuille en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pan',
  keywords: 'panneaux solaires tournefeuille, installation photovoltaique tournefeuille, panneaux photovoltaiques tournefeuille, installateur panneaux solaires tournefeuille, pose panneaux solaires tournefeuille, photovoltaique maison tournefeuille',
};

export default function PanneauxSolairesTournefeuillePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Tournefeuille</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Tournefeuille en centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous convertissons l&apos;énergie solaire en solution économique et durable pour votre maison.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Tournefeuille</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux enjeux énergétiques actuels. Nous proposons des solutions sur-mesure adaptées à chaque configuration de toiture à Tournefeuille, garantissant une production électrique optimale. Nos techniciens certifiés réalisent un diagnostic précis de votre propriété, évaluant l&apos;orientation, l&apos;inclinaison et l&apos;ensoleillement pour maximiser le rendement. Chaque projet bénéficie d&apos;un accompagnement complet : étude technique, dimensionnement des panneaux, raccordement au réseau électrique et démarches administratives.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Installateurs certifiés RGE avec plus de 10 ans d&apos;expérience
- Solutions personnalisées avec garantie de performance de 25 ans
- Financement flexible et accompagnement dans les demandes de subventions
- Matériel de haute qualité provenant des meilleurs fabricants européens</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose effective des panneaux photovoltaïques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibel, consultez ses références locales, demandez un devis détaillé et assurez-vous de sa garantie décennale et des certifications officielles.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Tournefeuille ?
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
