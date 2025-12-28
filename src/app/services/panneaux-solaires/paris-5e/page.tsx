import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Paris 5e | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat parisien en source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photov',
  keywords: 'panneaux solaires paris 5e, installation photovoltaique paris 5e, panneaux photovoltaiques paris 5e, installateur panneaux solaires paris 5e, pose panneaux solaires paris 5e, photovoltaique maison paris 5e',
};

export default function PanneauxSolairesParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat parisien en source d&apos;énergie verte avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques dans le 5e arrondissement. Nous sommes les experts qui donnent vie à votre transition énergétique au cœur de Paris.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Paris 5e</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants du 5e arrondissement de produire leur propre électricité propre et économique. Notre processus d&apos;installation commence par un diagnostic personnalisé de votre toiture, évaluant précisément son orientation, son inclinaison et son potentiel solaire. Nos techniciens hautement qualifiés utilisent uniquement des panneaux de dernière génération garantissant un rendement énergétique optimal, avec des modules atteignant jusqu&apos;à 22% d&apos;efficacité. Nous prenons en charge l&apos;intégralité du projet, de l&apos;étude technique aux démarches administratives, en passant par le raccordement au réseau électrique, pour une transition clés en main.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une expertise technique irréprochable. Nos installations bénéficient de 25 ans de garantie constructeur. Nous accompagnons nos clients dans l&apos;obtention des aides gouvernementales et crédit d&apos;impôt, pouvant couvrir jusqu&apos;à 70% de votre investissement. Notre équipe locale intervient rapidement sur Paris et ses environs.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, mais avec les aides actuelles, l&apos;investissement peut être réduit de 5 000€ à 12 000€. Un système de 3kWc pour une maison moyenne coûte environ 11 500€, avec un retour sur investissement estimé entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines. La pose effective des panneaux ne durant que 1-2 jours, le reste du temps est consacré à l&apos;étude technique, aux autorisations administratives et au raccordement électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son inscription sur les registres officiels, ses certifications QUALIBAT ou QUALIPV, ses références client, ses garanties décennales, et la présence d&apos;avis vérifiés. Un bon professionnel proposera systématiquement un diagnostic technique gratuit et détaillé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Paris 5e ?
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
