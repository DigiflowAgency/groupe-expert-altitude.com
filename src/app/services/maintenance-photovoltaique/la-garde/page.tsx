import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a La Garde | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à La Garde et ses environs. Nous garanti',
  keywords: 'nettoyage panneaux solaires la garde, maintenance photovoltaique la garde, entretien panneaux solaires la garde, nettoyage photovoltaique la garde, maintenance panneaux photovoltaiques la garde',
};

export default function MaintenancePhotovoltaiqueLaGardePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a La Garde</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à La Garde et ses environs. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique pointue.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a La Garde</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur La Garde et dans tout le Var, nous intervenons avec des équipes certifiées et du matériel high-tech. Nos techniciens réalisent un diagnostic complet, vérifiant chaque composant électrique, nettoyant méticuleusement les surfaces et détectant les moindres anomalies. Notre process unique permet d&apos;optimiser jusqu&apos;à 15% le rendement énergétique de vos installations, en utilisant des techniques écologiques sans produits chimiques agressifs.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Techniciens certifiés et formés en continu
• Intervention sur tout type d&apos;installation photovoltaïque
• Diagnostic précis incluant analyse thermographique
• Devis gratuit sous 48h
• Conformité totale aux normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système résidentiel standard. Notre tarification transparente inclut le nettoyage, le contrôle électrique et le rapport détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses comme La Garde, nous conseillons un nettoyage tous les 6 mois pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous réalisons un diagnostic complet via des tests de performance, une inspection visuelle et une analyse thermographique. Les signes de dysfonctionnement incluent une baisse de production électrique supérieure à 10%, des micro-fissures ou des traces d&apos;oxydation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a La Garde ?
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
