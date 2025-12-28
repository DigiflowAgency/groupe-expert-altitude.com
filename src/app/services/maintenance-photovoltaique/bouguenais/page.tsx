import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Bouguenais | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de confiance en maintenance et nettoyage de panneaux solaires à Bouguenais et dans toute la région nantaise. N',
  keywords: 'nettoyage panneaux solaires bouguenais, maintenance photovoltaique bouguenais, entretien panneaux solaires bouguenais, nettoyage photovoltaique bouguenais, maintenance panneaux photovoltaiques bouguenais',
};

export default function MaintenancePhotovoltaiqueBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de confiance en maintenance et nettoyage de panneaux solaires à Bouguenais et dans toute la région nantaise. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique pointue.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires est conçu pour maximiser la performance et la longévité de vos installations photovoltaïques. Sur Bouguenais et ses environs, nos techniciens hautement qualifiés utilisent des techniques et du matériel spécialisés pour éliminer poussières, mousses et résidus qui peuvent réduire jusqu&apos;à 20% l&apos;efficacité de vos panneaux. Nous réalisons un diagnostic complet, nettoyage précis et vérification électrique, en respectant les normes de sécurité les plus strictes. Notre intervention régulière permet de préserver votre investissement et d&apos;optimiser votre production d&apos;énergie solaire.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience
- Intervention rapide sur Bouguenais et Loire-Atlantique
- Matériel de nettoyage écologique et haute précision
- Diagnostic technique inclus dans chaque intervention
- Devis gratuit et transparent</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de votre installation, avec un retour sur investissement rapide grâce à l&apos;optimisation de la production énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne, pour garantir une performance maximale de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet comprenant un test de rendement, une analyse visuelle et électrique, permettant de détecter tout dysfonctionnement ou baisse de performance de vos panneaux solaires.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Bouguenais ?
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
