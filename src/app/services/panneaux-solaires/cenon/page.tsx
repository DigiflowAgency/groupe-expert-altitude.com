import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Cenon | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Cenon en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de pa',
  keywords: 'panneaux solaires cenon, installation photovoltaique cenon, panneaux photovoltaiques cenon, installateur panneaux solaires cenon, pose panneaux solaires cenon, photovoltaique maison cenon',
};

export default function PanneauxSolairesCenonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Cenon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Cenon en une centrale électrique écologique avec Groupe Expert Altitude Com, votre partenaire spécialiste en installation de panneaux solaires photovoltaïques. Nous vous accompagnons pour produire une énergie propre et réduire significativement vos factures énergétiques.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Cenon</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux besoins spécifiques des habitants de Cenon et ses environs. Nous proposons des solutions clés en main, depuis l&apos;étude personnalisée jusqu&apos;à la mise en service complète de votre système solaire. Notre approche technique garantit une production électrique optimale, avec des rendements pouvant atteindre 85% sur 25 ans. Chaque projet est précédé d&apos;un diagnostic précis de votre toiture, de votre consommation énergétique et des potentiels d&apos;ensoleillement, pour un résultat parfaitement adapté à votre habitation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son engagement total : installateurs certifiés RGE, devis gratuit sous 48h, accompagnement administratif complet pour vos demandes de subventions. Nous maîtrisons les dernières technologies photovoltaïques et proposons uniquement des matériels garantis 25 ans, avec un taux de performance garanti. Notre équipe locale intervient rapidement sur Cenon et la Gironde.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface et la puissance, avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3kWc pour une maison moyenne représente environ 11 500€, mais permet des économies de 200-400€ par an sur votre facture électrique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai d&apos;installation complet s&apos;étend généralement entre 4 et 8 semaines : 1-2 semaines pour l&apos;étude technique, 2-3 jours pour la pose des panneaux, et quelques jours pour le raccordement et les démarches administratives. Notre équipe à Cenon optimise chaque étape pour une intervention rapide et professionnelle.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez trois critères essentiels : l&apos;inscription officielle sur le site FAIRE.gouv.fr, les références clients locales, et les certifications qualibat ou qualipv. Chez Groupe Expert Altitude Com, nous réunissons tous ces critères et proposons une transparence totale sur nos qualifications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Cenon ?
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
