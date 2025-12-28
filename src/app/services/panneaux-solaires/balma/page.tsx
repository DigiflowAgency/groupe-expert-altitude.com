import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Balma | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Balma en source d&apos;énergie verte avec Groupe Expert Altitude Com, votre partenaire référent en installation de panneaux solaires',
  keywords: 'panneaux solaires balma, installation photovoltaique balma, panneaux photovoltaiques balma, installateur panneaux solaires balma, pose panneaux solaires balma, photovoltaique maison balma',
};

export default function PanneauxSolairesBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Balma en source d&apos;énergie verte avec Groupe Expert Altitude Com, votre partenaire référent en installation de panneaux solaires photovoltaïques. Nous concevons des solutions sur-mesure qui valorisent votre patrimoine tout en réduisant votre empreinte carbone.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Balma</h2>
        <div className="space-y-4">
          <p>Notre expertise en installation photovoltaïque répond aux enjeux énergétiques actuels. Nous proposons des systèmes clés en main, adaptés à chaque configuration de toiture sur Balma et ses environs. Notre processus débute par un diagnostic précis de votre propriété, évaluant l&apos;orientation, l&apos;inclinaison et la surface disponible pour optimiser la production électrique. Nos techniciens certifiés utilisent des panneaux haute performance atteignant jusqu&apos;à 22% de rendement, garantissant une production électrique maximale. Chaque installation est personnalisée, avec des solutions techniques qui s&apos;intègrent harmonieusement à votre habitat, tout en vous permettant de réduire jusqu&apos;à 70% de votre facture énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son engagement total : certification RGE, devis gratuit sous 48h, équipe de techniciens hautement qualifiés, garantie de performance de 25 ans, accompagnement dans les démarches administratives et financières. Nous maîtrisons tous les aspects techniques pour une transition énergétique réussie à Balma.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la puissance (3 à 9 kWc), avec des aides de l&apos;État pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un foyer moyen à Balma peut amortir son installation en 8 à 12 ans grâce aux économies et au rachat de l&apos;électricité produite.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai complet d&apos;installation de panneaux photovoltaïques s&apos;étend généralement entre 4 et 8 semaines. La pose effective des panneaux ne prend que 2 à 3 jours, le reste du temps étant consacré aux études préalables, obtention des autorisations et raccordement au réseau électrique.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE certifié, vérifiez trois critères essentiels : qualification officielle Qualibat/Qualisol, références clients vérifiables, et proposition détaillée incluant études techniques, matériels utilisés, garanties et accompagnement administratif. Un professionnel RGE vous garantit une installation aux normes et l&apos;éligibilité aux aides gouvernementales.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Balma ?
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
