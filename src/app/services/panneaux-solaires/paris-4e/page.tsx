import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris 4e | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat parisien en source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photov',
  keywords: 'panneaux solaires paris 4e, installation photovoltaique paris 4e, panneaux photovoltaiques paris 4e, installateur panneaux solaires paris 4e, pose panneaux solaires paris 4e, photovoltaique maison paris 4e',
};

export default function PanneauxSolairesParis4ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris 4e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat parisien en source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques dans le 4e arrondissement. Nous convertissons la lumière urbaine en électricité propre, pour des maisons plus durables et économes.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris 4e</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Paris 4e de produire leur propre électricité et de réduire significativement leur empreinte carbone. Notre équipe d&apos;experts analyse précisément l&apos;orientation de votre toiture, calcule le potentiel énergétique et dimensionne un système adapté à vos besoins. Nous travaillons uniquement avec des panneaux haute performance garantissant un rendement optimal, même dans les conditions parisiennes. Notre processus inclut un diagnostic technique complet, une étude personnalisée et une installation clé en main respectant les normes environnementales les plus strictes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification RGE garantissant une expertise technique reconnue
• Plus de 15 ans d&apos;expérience dans l&apos;installation photovoltaïque
• Accompagnement administratif complet pour les aides et subventions
• Solutions sur-mesure adaptées à chaque configuration d&apos;habitat parisien</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; peuvent réduire jusqu&apos;à 30% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant le diagnostic initial, l&apos;étude technique, l&apos;obtention des autorisations et la pose effective des panneaux solaires photovoltaïques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5182, demandez ses références, consultez les avis clients et assurez-vous qu&apos;il propose un accompagnement complet incluant études techniques, installation et démarches administratives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris 4e ?
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
