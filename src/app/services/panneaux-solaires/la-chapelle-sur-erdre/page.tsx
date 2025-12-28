import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a La Chapelle-sur-Erdre | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à La Chapelle-sur-Erdre en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire référent en installation d',
  keywords: 'panneaux solaires la chapelle-sur-erdre, installation photovoltaique la chapelle-sur-erdre, panneaux photovoltaiques la chapelle-sur-erdre, installateur panneaux solaires la chapelle-sur-erdre, pose panneaux solaires la chapelle-sur-erdre, photovoltaique maison la chapelle-sur-erdre',
};

export default function PanneauxSolairesLaChapelleSurErdrePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a La Chapelle-sur-Erdre</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à La Chapelle-sur-Erdre en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire référent en installation de panneaux solaires photovoltaïques. Nous concilions performance énergétique et économies durables pour les habitants de notre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a La Chapelle-sur-Erdre</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques clés en main répondent aux exigences techniques et environnementales les plus strictes. Chaque projet débute par un diagnostic personnalisé de votre toiture, évaluant son orientation, sa surface et sa capacité à accueillir des panneaux solaires. Notre équipe d&apos;experts calcule précisément le potentiel de production électrique, garantissant un rendement optimal. Nous sélectionnons uniquement des équipements certifiés, offrant jusqu&apos;à 30% d&apos;autonomie énergétique pour les foyers de La Chapelle-sur-Erdre. L&apos;installation est réalisée avec une précision millimétrique, respectant les normes RGE et les contraintes architecturales de votre propriété.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale avec plus de 10 ans d&apos;expérience
- Techniciens certifiés et habilités
- Accompagnement administratif complet (aides, subventions)
- Matériels garantis 25 ans avec un rendement supérieur à 90%</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour une maison de 100m², le coût d&apos;installation varie entre 9 000€ et 15 000€, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 6 semaines, incluant le diagnostic initial, les démarches administratives, la pose des panneaux (2-3 jours) et le raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez la certification RGE, consultez leurs références clients, demandez un devis détaillé, assurez-vous de leur assurance décennale et vérifiez leur appartenance à des organisations professionnelles reconnues dans le photovoltaïque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a La Chapelle-sur-Erdre ?
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
