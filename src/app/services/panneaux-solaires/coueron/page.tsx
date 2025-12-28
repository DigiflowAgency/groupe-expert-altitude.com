import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Couëron | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Couëron en une centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local spécialisé dans l&apos;installation',
  keywords: 'panneaux solaires couëron, installation photovoltaique couëron, panneaux photovoltaiques couëron, installateur panneaux solaires couëron, pose panneaux solaires couëron, photovoltaique maison couëron',
};

export default function PanneauxSolairesCoueronPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Couëron</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Couëron en une centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local spécialisé dans l&apos;installation de panneaux solaires photovoltaïques. Nous concevons des solutions énergétiques durables qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Couëron</h2>
        <div className="space-y-4">
          <p>Nos experts en installation photovoltaïque accompagnent chaque projet sur mesure à Couëron et ses environs. Nous réalisons un diagnostic précis de votre toiture, calculons l&apos;ensoleillement optimal et dimensionnons un système adapté à vos besoins énergétiques. Notre approche technique garantit un rendement maximal : nos panneaux atteignent jusqu&apos;à 22% d&apos;efficacité énergétique, contre 15-18% pour les systèmes standards. Nous maîtrisons tous les aspects techniques, du raccordement électrique aux démarches administratives, pour une transition écologique clé en main.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Certifications RGE et qualifications professionnelles officielles
- Étude personnalisée et gratuite avant installation
- Matériel de haute performance avec garanties constructeurs
- Équipe locale de techniciens expérimentés basée en Loire-Atlantique</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance, avec un retour sur investissement estimé entre 8 et 12 ans. Les aides de l&apos;État peuvent couvrir jusqu&apos;à 30% des investissements, via MaPrimeRénov&apos; et le crédit d&apos;impôt transition énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 8 semaines : 1-2 semaines pour l&apos;étude technique, 2-3 jours pour la pose effective des panneaux, et quelques jours pour les raccordements et autorisations administratives.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez systématiquement : son numéro de qualification, ses certifications officielles, les avis clients, son ancienneté sur le marché local, et demandez plusieurs devis comparatifs détaillés.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Couëron ?
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
