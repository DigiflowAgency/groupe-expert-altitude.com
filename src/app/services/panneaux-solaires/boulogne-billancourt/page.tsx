import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Boulogne-Billancourt | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Boulogne-Billancourt en une source d&apos;énergie propre et économique avec Groupe Expert Altitude Com, votre spécialiste en install',
  keywords: 'panneaux solaires boulogne-billancourt, installation photovoltaique boulogne-billancourt, panneaux photovoltaiques boulogne-billancourt, installateur panneaux solaires boulogne-billancourt, pose panneaux solaires boulogne-billancourt, photovoltaique maison boulogne-billancourt',
};

export default function PanneauxSolairesBoulogneBillancourtPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Boulogne-Billancourt</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Boulogne-Billancourt en une source d&apos;énergie propre et économique avec Groupe Expert Altitude Com, votre spécialiste en installation de panneaux solaires photovoltaïques. Nos solutions innovantes vous permettent de réduire votre empreinte carbone tout en générant des économies significatives sur vos factures énergétiques.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Boulogne-Billancourt</h2>
        <div className="space-y-4">
          <p>Nos experts en photovoltaïque proposent une solution clé en main pour équiper votre propriété à Boulogne-Billancourt. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les panneaux solaires les plus performants et adaptons l&apos;installation à vos besoins énergétiques spécifiques. Notre processus comprend une étude technique détaillée, un dimensionnement optimal de l&apos;installation et un raccordement au réseau électrique en toute conformité. Avec un rendement moyen de 20% et une durée de vie de 25-30 ans, nos systèmes photovoltaïques représentent un investissement intelligent pour votre patrimoine immobilier.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une expertise technique irréprochable. Nos techniciens hautement qualifiés maîtrisent les dernières technologies photovoltaïques. Nous proposons un accompagnement personnalisé, des financements adaptés et une installation sans stress. Notre engagement : qualité, performance et satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3 kWc pour une maison moyenne coûte environ 12 500€, avec un retour sur investissement estimé à 8-10 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, l&apos;obtention des autorisations, la pose des panneaux (généralement 2-3 jours) et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour une mise en service rapide.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat 5454, demandez ses références locales, étudiez ses avis clients et assurez-vous qu&apos;il propose un accompagnement complet incluant étude, installation, raccordement et suivi de performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Boulogne-Billancourt ?
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
