import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a La Garde | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à La Garde en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation d',
  keywords: 'panneaux solaires la garde, installation photovoltaique la garde, panneaux photovoltaiques la garde, installateur panneaux solaires la garde, pose panneaux solaires la garde, photovoltaique maison la garde',
};

export default function PanneauxSolairesLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à La Garde en centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous vous accompagnons vers une énergie propre et économique, adaptée aux spécificités de votre maison.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a La Garde</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur La Garde représentent bien plus qu&apos;une simple installation. Nous proposons une approche complète, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service de votre système solaire. Notre équipe d&apos;experts analyse précisément l&apos;orientation de votre toiture, calcule le potentiel énergétique et dimensionne l&apos;installation pour maximiser votre production électrique. Avec des panneaux haute performance atteignant 22% de rendement, nous garantissons une production d&apos;énergie optimale qui peut couvrir jusqu&apos;à 70% de vos besoins énergétiques annuels. Notre processus inclut également les démarches administratives, les demandes de raccordement et l&apos;obtention des aides gouvernementales.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique et un accompagnement sur-mesure. Nos installateurs sont certifiés RGE, gage de qualité et de professionnalisme. Nous proposons des équipements de marques premium avec 25 ans de garantie. Notre bureau d&apos;études local à La Garde vous assure un suivi personnalisé et une intervention rapide. De plus, nous vous aidons à optimiser votre investissement grâce aux aides financières disponibles.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la puissance. Pour une maison moyenne de 100m², comptez environ 12 500€ avant aides. Les subventions de l&apos;État peuvent couvrir jusqu&apos;à 30% de l&apos;investissement, avec un crédit d&apos;impôt de 40% et des aides locales complémentaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines. L&apos;étude technique prend 1 à 2 semaines, la pose effective 2-3 jours, puis les démarches administratives et le raccordement au réseau nécessitent 3-4 semaines supplémentaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez trois critères essentiels : son immatriculation SIRET, sa certification Qualibat ou Qualit&apos;EnR, et ses références clients locaux. Demandez systématiquement un devis détaillé, une visite technique préalable et assurez-vous que l&apos;entreprise propose un accompagnement complet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a La Garde ?
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
