import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Martigues | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien des installations photovoltaïques à Martigues et ses environs. Spécialistes de la maintenance et du ',
  keywords: 'nettoyage panneaux solaires martigues, maintenance photovoltaique martigues, entretien panneaux solaires martigues, nettoyage photovoltaique martigues, maintenance panneaux photovoltaiques martigues',
};

export default function MaintenancePhotovoltaiqueMartiguesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Martigues</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien des installations photovoltaïques à Martigues et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre production d&apos;énergie verte.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Martigues</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance photovoltaïque répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations, qu&apos;il s&apos;agisse de toits résidentiels ou de grandes surfaces industrielles à Martigues. Notre équipe technique procède à un diagnostic complet : vérification des connexions électriques, contrôle de l&apos;intégrité des modules, nettoyage professionnel contre l&apos;accumulation de poussières et de résidus qui peuvent réduire jusqu&apos;à 15% de votre rendement énergétique. Chaque intervention est personnalisée, avec un protocole précis utilisant des équipements spécifiques et des produits écologiques garantissant la préservation de vos panneaux solaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens certifiés avec plus de 10 ans d&apos;expérience
✓ Intervention rapide sur tout le secteur de Martigues
✓ Diagnostic technique gratuit
✓ Matériel de nettoyage haute technologie respectant l&apos;intégrité des panneaux
✓ Devis transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel varie entre 150€ et 500€, selon la taille et la configuration de votre installation. Notre tarif inclut un diagnostic complet, un nettoyage professionnel et un rapport détaillé de l&apos;état de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment dans les zones à forte exposition aux poussières ou aux embruns marins comme Martigues. Un nettoyage régulier permet de maintenir une efficacité énergétique optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un contrôle complet via des tests électriques et thermographiques. Les signes d&apos;un bon fonctionnement incluent une production constante, l&apos;absence de microfissures, des connexions électriques intactes et un rendement énergétique conforme aux spécifications d&apos;origine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Martigues ?
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
