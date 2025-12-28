import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne la transition énergétique à Créteil avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesu',
  keywords: 'panneaux solaires créteil, installation photovoltaique créteil, panneaux photovoltaiques créteil, installateur panneaux solaires créteil, pose panneaux solaires créteil, photovoltaique maison créteil',
};

export default function PanneauxSolairesCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne la transition énergétique à Créteil avec des solutions d&apos;installation de panneaux solaires photovoltaïques sur mesure. Nos experts transforment votre habitat en centrale électrique écologique et économique, en plein cœur du Val-de-Marne.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Créteil</h2>
        <div className="space-y-4">
          <p>Nos installations photovoltaïques représentent la solution moderne et durable pour produire votre propre électricité verte. À Créteil, nous proposons des systèmes clés en main adaptés à chaque configuration de toiture, garantissant une performance énergétique optimale. Notre démarche intègre une étude technique précise, le choix de panneaux haute efficacité (rendement jusqu&apos;à 22%), et une installation réalisée par des techniciens certifiés. Nos solutions permettent en moyenne de couvrir 60-70% des besoins électriques d&apos;un foyer, avec un retour sur investissement entre 7 et 10 ans.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous maîtrisons chaque étape de votre projet photovoltaïque. Notre bureau d&apos;études local à Créteil assure un accompagnement personnalisé. Nous proposons des financements adaptés, une garantie décennale, et un suivi technique complet. Notre engagement : transparence, expertise technique et satisfaction client.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 8 000€ et 15 000€ selon la puissance (3 à 9 kWc), avec des aides de l&apos;État pouvant atteindre 30% du montant total. Un investissement rentabilisé en moins de 10 ans grâce aux économies d&apos;électricité et au rachat du surplus par EDF.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai global d&apos;installation s&apos;étend de 4 à 8 semaines, incluant l&apos;étude technique, les démarches administratives, la pose des panneaux (1-2 jours) et le raccordement au réseau électrique. Notre équipe optimise chaque étape pour une mise en service rapide.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez sa certification QUALIPV, consultez ses références locales, demandez un devis détaillé et une étude technique personnalisée. Assurez-vous de la présence d&apos;une garantie décennale et d&apos;un accompagnement dans les démarches administratives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Créteil ?
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
