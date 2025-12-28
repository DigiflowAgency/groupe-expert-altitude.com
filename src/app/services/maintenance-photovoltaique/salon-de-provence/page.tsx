import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Salon-de-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Salon-de-Provence, garantit des installations ',
  keywords: 'nettoyage panneaux solaires salon-de-provence, maintenance photovoltaique salon-de-provence, entretien panneaux solaires salon-de-provence, nettoyage photovoltaique salon-de-provence, maintenance panneaux photovoltaiques salon-de-provence',
};

export default function MaintenancePhotovoltaiqueSalonDeProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Salon-de-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Salon-de-Provence, garantit des installations photovoltaïques performantes et durables. Nous intervenons sur tout le département des Bouches-du-Rhône pour optimiser la production énergétique de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Salon-de-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés utilisent des techniques innovantes pour éliminer poussières, salissures et résidus qui diminuent jusqu&apos;à 25% l&apos;efficacité de vos installations. Un nettoyage professionnel permet de préserver l&apos;intégrité de vos panneaux et maintenir une production électrique optimale. Notre processus comprend un diagnostic complet, un nettoyage écologique sans produits chimiques agressifs et un contrôle technique détaillé des connexions et composants. À Salon-de-Provence, nous intervenons rapidement et avec un équipement spécialisé garantissant une intervention sans risque pour vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise locale avec 12 ans d&apos;expérience en photovoltaïque
• Techniciens certifiés et formés aux dernières technologies
• Interventions rapides sur Salon-de-Provence et ses environs
• Devis gratuit et transparent
• Matériel de nettoyage haute technicité respectant les normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de votre installation. Notre tarification transparente inclut le diagnostic, le nettoyage et le contrôle technique complet de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte exposition aux poussières ou pollution. Un entretien régulier permet de maintenir une efficacité énergétique supérieure à 95%.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous réalisons un diagnostic complet vérifiant la production électrique, l&apos;intégrité des connexions et l&apos;absence de microfissures. Des variations significatives de rendement ou des signes visuels d&apos;usure nécessitent une intervention immédiate de nos experts.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Salon-de-Provence ?
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
