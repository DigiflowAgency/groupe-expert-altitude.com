import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Plaisance-du-Touch | Groupe Expert Altitude Com',
  description: 'Optimisez la performance de vos installations photovoltaïques avec Groupe Expert Altitude Com, le spécialiste du nettoyage et de la maintenance de panneaux',
  keywords: 'nettoyage panneaux solaires plaisance-du-touch, maintenance photovoltaique plaisance-du-touch, entretien panneaux solaires plaisance-du-touch, nettoyage photovoltaique plaisance-du-touch, maintenance panneaux photovoltaiques plaisance-du-touch',
};

export default function MaintenancePhotovoltaiquePlaisanceDuTouchPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Plaisance-du-Touch</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Optimisez la performance de vos installations photovoltaïques avec Groupe Expert Altitude Com, le spécialiste du nettoyage et de la maintenance de panneaux solaires à Plaisance-du-Touch. Nos experts garantissent une efficacité énergétique maximale pour protéger votre investissement écologique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Plaisance-du-Touch</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Plaisance-du-Touch et ses environs, nous intervenons avec un équipement professionnel haute précision permettant d&apos;éliminer poussières, mousses et résidus qui réduisent jusqu&apos;à 30% les performances photovoltaïques. Notre protocole comprend un diagnostic complet, un nettoyage écologique sans produits chimiques agressifs et un contrôle électrique approfondi. Nos techniciens certifiés utilisent des techniques non-abrasives respectant l&apos;intégrité de vos panneaux, avec un traitement anti-salissure qui prolonge leur durée de vie.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est garantir : 1) Une expertise technique de plus de 15 ans, 2) Un service 100% personnalisé, 3) Des interventions rapides et précises, 4) Une approche éco-responsable avec un engagement qualité total. Nous sommes votre partenaire de confiance pour maintenir des performances photovoltaïques optimales.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la surface, la configuration et l&apos;accessibilité de votre installation. Notre diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis et transparent.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zones à forte pollution ou environnement poussiéreux. Un entretien régulier peut augmenter votre rendement énergétique de 10 à 25%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un contrôle complet via des tests thermographiques et électriques. Les signes d&apos;un bon fonctionnement incluent une production constante, l&apos;absence de points chauds et un rendement proche des spécifications d&apos;origine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Plaisance-du-Touch ?
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
