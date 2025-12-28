import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Aix-en-Provence | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Aix-en-Provence. Spécialistes de la maintenance et du nettoyage ',
  keywords: 'nettoyage panneaux solaires aix-en-provence, maintenance photovoltaique aix-en-provence, entretien panneaux solaires aix-en-provence, nettoyage photovoltaique aix-en-provence, maintenance panneaux photovoltaiques aix-en-provence',
};

export default function MaintenancePhotovoltaiqueAixEnProvencePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Aix-en-Provence</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Aix-en-Provence. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Aix-en-Provence</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires représente bien plus qu&apos;un simple entretien. Nous intervenons méticuleusement sur tous types d&apos;installations photovoltaïques, en utilisant des techniques de nettoyage écologiques et des équipements haute précision. Nos techniciens certifiés réalisent un diagnostic complet avant chaque intervention, vérifiant l&apos;intégrité des modules, les connexions électriques et l&apos;efficacité globale. Dans la région d&apos;Aix-en-Provence, où l&apos;ensoleillement est exceptionnel, un entretien régulier permet de maintenir un rendement énergétique optimal, pouvant améliorer la production jusqu&apos;à 15%. Notre approche préventive vous garantit une durabilité maximale de votre installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Expertise technique pointue, intervention rapide sur Aix-en-Provence, techniciens certifiés, matériel de dernière génération, respect des normes environnementales. Nous proposons des solutions personnalisées qui s&apos;adaptent parfaitement à votre configuration spécifique, avec un engagement qualité total.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille et la complexité de votre installation. Notre diagnostic préalable gratuit vous permettra d&apos;obtenir un devis précis, sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou avec beaucoup de végétation près d&apos;Aix-en-Provence, une intervention supplémentaire peut être conseillée.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un contrôle complet vérifiant le rendement, l&apos;absence de micro-fissures, la propreté des panneaux et l&apos;intégrité des connexions. Un test électrique précis permet de détecter la moindre baisse de performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Aix-en-Provence ?
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
