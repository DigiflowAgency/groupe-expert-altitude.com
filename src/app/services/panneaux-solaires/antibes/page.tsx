import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Antibes | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Antibes en une centrale électrique écologique grâce à Groupe Expert Altitude Com, votre partenaire de référence en installation',
  keywords: 'panneaux solaires antibes, installation photovoltaique antibes, panneaux photovoltaiques antibes, installateur panneaux solaires antibes, pose panneaux solaires antibes, photovoltaique maison antibes',
};

export default function PanneauxSolairesAntibesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Antibes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Antibes en une centrale électrique écologique grâce à Groupe Expert Altitude Com, votre partenaire de référence en installation de panneaux solaires photovoltaïques. Nous concevons des solutions énergétiques sur-mesure pour valoriser votre patrimoine et réduire votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Antibes</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque proposent une approche complète et personnalisée pour l&apos;installation de panneaux solaires sur l&apos;ensemble de la région antiboise. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les technologies les plus performantes et garantissons une intégration esthétique et technique optimale. Notre processus inclut une étude gratuite, un dimensionnement technique adapté à vos consommations et un accompagnement dans les démarches administratives et financières. Avec un rendement moyen de 85% sur 25 ans, nos installations permettent de produire jusqu&apos;à 70% de votre consommation électrique en autoconsommation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Certification RGE et plus de 10 ans d&apos;expertise locale à Antibes
• Techniciens hautement qualifiés et formés aux dernières technologies
• Matériels de marques premium avec garanties constructeurs étendues
• Accompagnement personnalisé de A à Z, de l&apos;étude jusqu&apos;à la mise en service</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation de panneaux solaires varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un retour sur investissement est généralement constaté entre 8 et 12 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La phase concrète de pose des panneaux dure généralement 2 à 3 jours pour une installation résidentielle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez impérativement : son inscription à l&apos;ADEME, ses certifications officielles (Qualibat, Qualit&apos;EnR), ses références locales, les avis clients, et sa capacité à proposer un dossier complet de demandes de subventions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Antibes ?
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
