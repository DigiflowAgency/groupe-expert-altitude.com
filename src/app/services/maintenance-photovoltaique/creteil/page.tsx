import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Créteil | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Créteil et dans toute l&apos;Île-de-France.',
  keywords: 'nettoyage panneaux solaires créteil, maintenance photovoltaique créteil, entretien panneaux solaires créteil, nettoyage photovoltaique créteil, maintenance panneaux photovoltaiques créteil',
};

export default function MaintenancePhotovoltaiqueCreteilPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Créteil</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Créteil et dans toute l&apos;Île-de-France. Nous garantissons des installations photovoltaïques performantes grâce à un service technique de haute précision.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Créteil</h2>
        <div className="space-y-4">
          <p>Notre expertise en maintenance photovoltaïque couvre l&apos;intégralité des besoins techniques pour les particuliers et professionnels de Créteil. Nous réalisons un diagnostic complet de vos installations, incluant un nettoyage professionnel qui optimise jusqu&apos;à 15% votre rendement énergétique. Notre processus débute par un audit technique précis, suivi d&apos;un nettoyage écologique utilisant des techniques sans produits chimiques agressifs. Nos techniciens certifiés interviennent avec du matériel spécialisé, garantissant un entretien sans risque pour vos équipements photovoltaïques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe de techniciens hautement qualifiés et certifiés
- Intervention rapide sur Créteil et communes limitrophes
- Matériel technique dernier cri
- Diagnostic et devis gratuits
- Plus de 95% de satisfaction client</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de votre installation, avec un tarif moyen de 250€ pour un système domestique standard. Ce prix inclut le nettoyage complet, la vérification électrique et le diagnostic technique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones poussiéreuses ou avec beaucoup de végétation, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant le rendement, l&apos;intégrité des connexions et l&apos;absence de microfissures. Des signes comme une baisse de production, des traces d&apos;oxydation ou des bruits anormaux nécessitent une vérification immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Créteil ?
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
