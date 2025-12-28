import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Décines-Charpieu | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Décines-Charpieu en une source d&apos;énergie propre et économique grâce au Groupe Expert Altitude Com, votre partenaire spécialiste',
  keywords: 'panneaux solaires décines-charpieu, installation photovoltaique décines-charpieu, panneaux photovoltaiques décines-charpieu, installateur panneaux solaires décines-charpieu, pose panneaux solaires décines-charpieu, photovoltaique maison décines-charpieu',
};

export default function PanneauxSolairesDecinesCharpieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Décines-Charpieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Décines-Charpieu en une source d&apos;énergie propre et économique grâce au Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nos solutions innovantes vous permettent de réduire votre empreinte carbone tout en générant des économies significatives sur vos factures énergétiques.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Décines-Charpieu</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux besoins spécifiques des propriétaires de Décines-Charpieu et ses environs. Nous proposons une approche sur-mesure, en analysant précisément l&apos;orientation de votre toiture, sa surface et votre consommation énergétique pour maximiser la performance. Notre équipe technique certifiée réalise un diagnostic complet, dimensionne le système photovoltaïque optimal et garantit une installation professionnelle aux normes en vigueur. Chaque projet est étudié pour permettre un retour sur investissement rapide, avec des panneaux haute efficacité atteignant jusqu&apos;à 22% de rendement énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Installateurs certifiés RGE avec plus de 10 ans d&apos;expérience
- Solutions personnalisées adaptées à chaque configuration
- Accompagnement administratif complet pour vos demandes de subventions
- Matériel de haute qualité avec garanties constructeurs étendues</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Des aides gouvernementales comme MaPrimeRénov&apos; et le crédit d&apos;impôt peuvent réduire jusqu&apos;à 60% de votre investissement initial.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 6 semaines, incluant le diagnostic technique, les démarches administratives et la pose effective qui ne nécessite que 1 à 2 jours sur site.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références clients locales, demandez plusieurs devis détaillés et assurez-vous de la présence de garanties écrites couvrant matériel et main-d&apos;œuvre.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Décines-Charpieu ?
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
