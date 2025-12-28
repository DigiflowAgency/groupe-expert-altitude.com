import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à La Seyne-sur-Mer et ses environs. Nous',
  keywords: 'nettoyage panneaux solaires la seyne-sur-mer, maintenance photovoltaique la seyne-sur-mer, entretien panneaux solaires la seyne-sur-mer, nettoyage photovoltaique la seyne-sur-mer, maintenance panneaux photovoltaiques la seyne-sur-mer',
};

export default function MaintenancePhotovoltaiqueLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à La Seyne-sur-Mer et ses environs. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique pointue.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur La Seyne-sur-Mer, nous intervenons avec des équipements professionnels permettant d&apos;optimiser jusqu&apos;à 15% la production énergétique de vos installations. Notre processus complet comprend un diagnostic précis, un nettoyage écologique utilisant des techniques sans produits chimiques, et un contrôle électrique et mécanique approfondi. Nos techniciens certifiés vérifient chaque composant, détectent les moindres anomalies et assurent la longévité de votre système photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Experts locaux avec 12 ans d&apos;expérience en maintenance photovoltaïque
• Interventions rapides sur La Seyne-sur-Mer et le département
• Techniciens hautement qualifiés et certifiés
• Technologies de nettoyage innovantes et respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel varie entre 150€ et 350€ selon la taille de votre installation, avec un retour sur investissement garanti par l&apos;optimisation de la production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne, pour éliminer poussières, pollens et résidus qui réduisent l&apos;efficacité des panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet vérifiant le rendement, l&apos;absence de microfissures, la connexion des câbles et l&apos;état général des composants. Un test électroluminescent permet de détecter les moindres dysfonctionnements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a La Seyne-sur-Mer ?
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
