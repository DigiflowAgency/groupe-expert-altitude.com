import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Paris et en Île-de-France. Nos expe',
  keywords: 'nettoyage panneaux solaires paris, maintenance photovoltaique paris, entretien panneaux solaires paris, nettoyage photovoltaique paris, maintenance panneaux photovoltaiques paris',
};

export default function MaintenancePhotovoltaiqueParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Paris et en Île-de-France. Nos experts interviennent sur tous types d&apos;installations photovoltaïques, garantissant des performances optimales et une durabilité maximale de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Paris</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic complet de votre installation, vérifiant chaque composant électrique et mécanique. Notre équipe utilise des techniques professionnelles et du matériel spécialisé pour éliminer poussières, mousses et résidus qui réduisent l&apos;efficacité énergétique. Un nettoyage régulier permet d&apos;augmenter jusqu&apos;à 15% la production électrique de vos panneaux. Nos techniciens certifiés interviennent rapidement sur Paris, avec une approche personnalisée adaptée à chaque configuration d&apos;installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique de plus de 10 ans dans le photovoltaïque
• Équipe de techniciens certifiés et formés en continu
• Interventions rapides sur Paris et sa région
• Matériel de nettoyage écologique et haute précision
• Rapport détaillé après chaque intervention</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour une installation résidentielle standard. Ce tarif comprend le nettoyage complet, la vérification électrique et un diagnostic technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les panneaux solaires doivent être nettoyés idéalement 1 à 2 fois par an, généralement au printemps et à l&apos;automne. Dans des zones particulièrement poussiéreuses ou à proximité d&apos;axes routiers à Paris, nous recommandons jusqu&apos;à 3 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via l&apos;onduleur, comparez les rendements mensuels, et faites réaliser un diagnostic technique annuel par des professionnels qui vérifieront l&apos;intégrité des connexions et des cellules photovoltaïques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Paris ?
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
