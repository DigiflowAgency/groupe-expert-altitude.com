import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Écully | Groupe Expert Altitude Com',
  description: 'Dans la région lyonnaise, le Groupe Expert Altitude Com révolutionne l&apos;entretien des installations solaires à Écully et ses environs. Spécialistes de la ma',
  keywords: 'nettoyage panneaux solaires écully, maintenance photovoltaique écully, entretien panneaux solaires écully, nettoyage photovoltaique écully, maintenance panneaux photovoltaiques écully',
};

export default function MaintenancePhotovoltaiqueEcullyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Écully</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Dans la région lyonnaise, le Groupe Expert Altitude Com révolutionne l&apos;entretien des installations solaires à Écully et ses environs. Spécialistes de la maintenance et du nettoyage panneaux solaires, nous garantissons des performances optimales pour votre système photovoltaïque.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Écully</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance photovoltaïque offre une solution complète et professionnelle pour préserver l&apos;efficacité énergétique de vos installations. Nos techniciens hautement qualifiés interviennent sur site à Écully et dans toute la métropole lyonnaise, en réalisant un diagnostic précis et un nettoyage technique de vos panneaux. Chaque intervention comprend un contrôle approfondi des connexions électriques, un dépoussiérage spécialisé et une vérification des performances. Notre approche permet de maintenir un rendement optimal, avec une moyenne d&apos;amélioration de 12% après notre intervention. Nous utilisons des équipements écologiques et des techniques non-abrasives qui préservent l&apos;intégrité de vos panneaux solaires.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 15 ans d&apos;expérience
- Interventions rapides et sur-mesure à Écully
- Techniciens formés et habilités
- Devis gratuit et transparent
- Respect des normes environnementales et de sécurité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de votre installation, avec un rapport qualité-prix imbattable. Notre diagnostic précis vous permet d&apos;optimiser votre investissement à long terme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment dans les zones à forte pollution ou environnement poussiéreux. Un entretien régulier permet de maintenir une production énergétique maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet avec analyse thermographique et mesure du rendement. Les signes de dysfonctionnement incluent une baisse de production, des micro-fissures ou des traces d&apos;oxydation. Un contrôle annuel permet de prévenir ces problèmes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Écully ?
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
