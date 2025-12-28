import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Cannes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Cannes et dans toute la région. Spécialistes de la maintenanc',
  keywords: 'nettoyage panneaux solaires cannes, maintenance photovoltaique cannes, entretien panneaux solaires cannes, nettoyage photovoltaique cannes, maintenance panneaux photovoltaiques cannes',
};

export default function MaintenancePhotovoltaiqueCannesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Cannes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Cannes et dans toute la région. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Cannes</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Cannes et ses environs, nous intervenons avec un équipement high-tech permettant un nettoyage précis sans endommager les cellules photovoltaïques. Notre processus comprend un diagnostic complet, un nettoyage écologique utilisant uniquement de l&apos;eau déminéralisée et un contrôle électrique approfondi. Nos techniciens certifiés détectent la moindre anomalie, assurant une production énergétique maximale. En moyenne, un entretien régulier permet d&apos;augmenter l&apos;efficacité de vos panneaux de 10 à 15%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nous nous distinguons par notre expertise technique, notre approche éco-responsable et notre service sur-mesure. Notre équipe dispose de certifications professionnelles, utilise du matériel de dernière génération et propose des interventions rapides et sans dérangement. Nous sommes le partenaire de confiance des particuliers et professionnels à Cannes pour la maintenance photovoltaïque.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;un entretien annuel varie entre 150€ et 350€ selon la taille et la configuration de votre installation. Ce tarif inclut un nettoyage complet, un diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, avec un contrôle visuel tous les 6 mois. Dans des zones poussiéreuses ou à proximité de zones industrielles, la fréquence peut être augmentée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet via des tests électriques, thermographiques et visuels. Les signes d&apos;un bon fonctionnement sont une production constante, l&apos;absence de points chauds et une courbe de rendement stable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Cannes ?
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
