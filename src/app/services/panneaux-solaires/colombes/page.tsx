import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Colombes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;énergie verte à Colombes avec des solutions photovoltaïques innovantes. Nous transformons votre habitat en centra',
  keywords: 'panneaux solaires colombes, installation photovoltaique colombes, panneaux photovoltaiques colombes, installateur panneaux solaires colombes, pose panneaux solaires colombes, photovoltaique maison colombes',
};

export default function PanneauxSolairesColombesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Colombes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;énergie verte à Colombes avec des solutions photovoltaïques innovantes. Nous transformons votre habitat en centrale électrique écologique, permettant aux habitants de Colombes de réduire leur empreinte carbone et leurs factures énergétiques.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Colombes</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation de panneaux solaires photovoltaïques couvre tous les aspects techniques et réglementaires. Nous proposons des solutions sur-mesure adaptées à chaque configuration de toiture, en utilisant des technologies de pointe garantissant jusqu&apos;à 30% d&apos;économies d&apos;énergie. Notre processus démarre par un diagnostic précis de votre propriété, incluant une étude d&apos;ensoleillement personnalisée. Nos techniciens certifiés réalisent une installation propre et rapide, avec des panneaux haute performance offrant un rendement optimal et une durée de vie de plus de 25 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Installateurs certifiés RGE avec plus de 10 ans d&apos;expérience
• Solutions 100% personnalisées pour Colombes et ses environs
• Accompagnement complet : études, financement, démarches administratives
• Garantie de performance et SAV premium</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3kWc pour une maison moyenne coûte environ 12 500€, amortissable en 8-10 ans.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend de 4 à 8 semaines : 1-2 semaines pour l&apos;étude technique, 1-2 jours pour la pose des panneaux, et quelques semaines pour les raccordements administratifs et électriques.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification Qualibat, demandez des références locales, consultez les avis clients, et assurez-vous qu&apos;il propose une étude technique détaillée et un accompagnement complet dans vos démarches administratives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Colombes ?
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
