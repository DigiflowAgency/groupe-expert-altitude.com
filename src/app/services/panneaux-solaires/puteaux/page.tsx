import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Puteaux | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Puteaux avec des solutions photovoltaïques innovantes et durables. Nos installations de panneau',
  keywords: 'panneaux solaires puteaux, installation photovoltaique puteaux, panneaux photovoltaiques puteaux, installateur panneaux solaires puteaux, pose panneaux solaires puteaux, photovoltaique maison puteaux',
};

export default function PanneauxSolairesPuteauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Puteaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie solaire à Puteaux avec des solutions photovoltaïques innovantes et durables. Nos installations de panneaux solaires transforment votre habitat en une source d&apos;énergie propre et économique, adaptée aux besoins spécifiques des habitants des Hauts-de-Seine.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Puteaux</h2>
        <div className="space-y-4">
          <p>Nos experts en installation de panneaux photovoltaïques proposent une solution clé en main pour valoriser votre patrimoine immobilier. Nous réalisons un diagnostic précis de votre toiture, sélectionnons les panneaux les plus performants et garantissons une intégration esthétique et technique optimale. Notre process comprend une étude personnalisée, un dimensionnement technique adapté et une installation professionnelle respectant les normes RGE. Avec un rendement moyen de 20% et des économies pouvant atteindre 60% sur votre facture énergétique, nos solutions photovoltaïques représentent un investissement intelligent pour les habitants de Puteaux et ses environs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : notre équipe certifiée RGE, une expertise de plus de 10 ans, des technologies de pointe, et un accompagnement sur-mesure. Nous proposons des financements adaptés, une garantie décennale et un suivi technique complet pour une tranquillité totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, l&apos;orientation et la puissance désirée. Nos solutions incluent des aides gouvernementales pouvant couvrir jusqu&apos;à 30% de l&apos;investissement, avec des possibilités de crédit d&apos;impôt et de subventions locales.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend de 4 à 8 semaines : 1-2 semaines pour l&apos;étude technique, 2-3 jours pour la pose des panneaux, et quelques jours supplémentaires pour le raccordement et les démarches administratives.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualit&apos;EnR, consultez ses références locales, demandez un devis détaillé et assurez-vous de la présence d&apos;une garantie décennale. Nos experts sont systématiquement certifiés et contrôlés annuellement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Puteaux ?
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
