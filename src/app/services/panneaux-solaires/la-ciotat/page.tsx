import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a La Ciotat | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à La Ciotat en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de pan',
  keywords: 'panneaux solaires la ciotat, installation photovoltaique la ciotat, panneaux photovoltaiques la ciotat, installateur panneaux solaires la ciotat, pose panneaux solaires la ciotat, photovoltaique maison la ciotat',
};

export default function PanneauxSolairesLaCiotatPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a La Ciotat</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à La Ciotat en une centrale électrique écologique avec Groupe Expert Altitude Com, votre spécialiste local en installation de panneaux solaires photovoltaïques. Nous sommes le partenaire de confiance pour valoriser votre patrimoine et réduire significativement votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a La Ciotat</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de La Ciotat de produire leur propre électricité verte et de réaliser des économies substantielles. Notre équipe d&apos;experts réalise une étude personnalisée de votre toiture, en évaluant son orientation, son inclinaison et son potentiel solaire pour maximiser la production énergétique. Nous utilisons uniquement des panneaux de haute qualité certifiés, garantissant une efficacité énergétique supérieure à 22% et une durée de vie de plus de 25 ans. Notre processus comprend un diagnostic technique précis, un accompagnement administratif complet et une installation professionnelle respectant les normes environnementales les plus exigeantes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts certifiés RGE avec plus de 10 ans d&apos;expérience
• Solutions 100% personnalisées adaptées à chaque habitat
• Accompagnement dans les démarches de financement et aides gouvernementales
• Garantie de performance et SAV complet</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides de l&apos;État comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 40% du coût total.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose qui dure 2-3 jours.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, demandez plusieurs devis détaillés, consultez ses références locales et assurez-vous qu&apos;il propose une garantie décennale complète.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a La Ciotat ?
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
