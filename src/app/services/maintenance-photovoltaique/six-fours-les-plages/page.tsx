import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Six-Fours-les-Plages. Spécialistes de la maintenance et du nettoyage de',
  keywords: 'nettoyage panneaux solaires six-fours-les-plages, maintenance photovoltaique six-fours-les-plages, entretien panneaux solaires six-fours-les-plages, nettoyage photovoltaique six-fours-les-plages, maintenance panneaux photovoltaiques six-fours-les-plages',
};

export default function MaintenancePhotovoltaiqueSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations solaires à Six-Fours-les-Plages. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales et une durabilité maximale de vos équipements photovoltaïques.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Sur Six-Fours-les-Plages et ses environs, nous intervenons avec des techniciens hautement qualifiés, équipés de matériel professionnel spécifique. Notre processus comprend un diagnostic précis, un nettoyage écologique sans produits chimiques agressifs, et un contrôle complet des performances. Nos interventions permettent de maintenir un rendement énergétique optimal, avec en moyenne 15% d&apos;efficacité supplémentaire après notre nettoyage. Nous utilisons des techniques non-abrasives qui préservent l&apos;intégrité de vos panneaux photovoltaïques tout en éliminant poussières, mousses et résidus.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience
- Interventions rapides sur tout le département du Var
- Matériel de nettoyage haute technologie
- Devis gratuit et personnalisé
- Garantie satisfaction totale</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 450€ selon la surface et la configuration de votre installation. Notre expertise permet de réduire vos coûts énergétiques à long terme en maintenant une performance optimale.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans la région de Six-Fours-les-Plages, l&apos;ensoleillement et les conditions climatiques peuvent nécessiter un entretien plus fréquent.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet incluant un test de performance, une analyse thermographique et un contrôle électrique. Les signes de bon fonctionnement sont une production constante, l&apos;absence de micro-fissures et un rendement énergétique stable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Six-Fours-les-Plages ?
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
