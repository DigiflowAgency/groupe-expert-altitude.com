import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Le Cannet | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques au Cannet et dans toute la région. Spécialistes du nettoyage et de',
  keywords: 'nettoyage panneaux solaires le cannet, maintenance photovoltaique le cannet, entretien panneaux solaires le cannet, nettoyage photovoltaique le cannet, maintenance panneaux photovoltaiques le cannet',
};

export default function MaintenancePhotovoltaiqueLeCannetPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Le Cannet</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques au Cannet et dans toute la région. Spécialistes du nettoyage et de la maintenance de panneaux solaires, nous garantissons des performances optimales et une durabilité maximale de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Le Cannet</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Le Cannet, nous intervenons avec un équipement professionnel ultra-précis qui permet un nettoyage sans rayure et sans détérioration des cellules photovoltaïques. Notre processus comprend un diagnostic complet, un nettoyage haute précision utilisant des techniques écologiques et un contrôle technique approfondi. Nos techniciens certifiés détectent immédiatement les moindres anomalies, assurant une productivité énergétique optimale. Une installation bien entretenue peut augmenter ses performances de 15 à 25% selon les études récentes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Techniciens hautement qualifiés et certifiés
✓ Intervention rapide sur Le Cannet et alentours
✓ Matériel de nettoyage dernière génération
✓ Diagnostic technique offert
✓ Garantie de performance énergétique
✓ Respect total des normes environnementales</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou à proximité de zones agricoles, nous conseillons jusqu&apos;à 3 interventions annuelles pour maintenir une efficacité maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet incluant : mesure du rendement électrique, vérification des connexions, analyse thermique des panneaux et contrôle visuel. Un écart de performance supérieur à 10% par rapport aux données constructeur nécessite une intervention technique approfondie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Le Cannet ?
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
