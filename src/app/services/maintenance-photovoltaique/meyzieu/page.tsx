import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Meyzieu | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire spécialisé en maintenance et nettoyage de panneaux solaires à Meyzieu et ses environs. Nous garantissons',
  keywords: 'nettoyage panneaux solaires meyzieu, maintenance photovoltaique meyzieu, entretien panneaux solaires meyzieu, nettoyage photovoltaique meyzieu, maintenance panneaux photovoltaiques meyzieu',
};

export default function MaintenancePhotovoltaiqueMeyzieuPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Meyzieu</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire spécialisé en maintenance et nettoyage de panneaux solaires à Meyzieu et ses environs. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique précise.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Meyzieu</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires représente bien plus qu&apos;un simple entretien. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations photovoltaïques, en réalisant un diagnostic complet et un nettoyage professionnel. Nous utilisons des techniques innovantes qui préservent l&apos;intégrité de vos panneaux tout en optimisant leur rendement énergétique. Nos interventions permettent de maintenir un rendement optimal, avec des performances pouvant augmenter jusqu&apos;à 15% après un nettoyage professionnel. Sur Meyzieu et la métropole lyonnaise, nous intervenons sur tous types d&apos;installations, résidentielles comme industrielles.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 10 ans dans le photovoltaïque, 2) Un personnel certifié et formé aux dernières technologies, 3) Un diagnostic précis et personnalisé de vos installations, 4) Une intervention rapide et un suivi technique complet garantissant la pérennité de votre investissement.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien de panneaux solaires varie entre 150€ et 500€ selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, incluant diagnostic, nettoyage et vérification technique complète.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zones à forte exposition aux poussières ou pollution. À Meyzieu, un nettoyage annuel est généralement suffisant pour maintenir des performances optimales.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux, surveillez votre production énergétique via un monitoring, observez l&apos;absence de traces, microfissures ou décolorations, et faites réaliser un diagnostic technique annuel par nos experts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Meyzieu ?
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
