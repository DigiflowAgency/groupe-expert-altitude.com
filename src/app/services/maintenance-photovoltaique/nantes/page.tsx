import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Nantes | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Nantes et dans toute la région des Pays de la Loire. Spécialiste',
  keywords: 'nettoyage panneaux solaires nantes, maintenance photovoltaique nantes, entretien panneaux solaires nantes, nettoyage photovoltaique nantes, maintenance panneaux photovoltaiques nantes',
};

export default function MaintenancePhotovoltaiqueNantesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Nantes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Nantes et dans toute la région des Pays de la Loire. Spécialistes du nettoyage et de la maintenance de panneaux solaires, nous garantissons des performances optimales pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Nantes</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations photovoltaïques, en utilisant des techniques non abrasives et des équipements haute précision. À Nantes, nous comprenons les enjeux climatiques spécifiques qui impactent vos panneaux : embruns, pollution atmosphérique et dépôts organiques peuvent réduire jusqu&apos;à 20% votre rendement énergétique. Notre processus comprend un diagnostic complet, un nettoyage écologique sans produits chimiques et un contrôle électrique approfondi. Nous intervenons avec des systèmes de purification d&apos;eau et des perches télescopiques permettant un traitement sans contact direct, préservant l&apos;intégrité de vos équipements.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Expertise technique certifiée avec plus de 15 ans d&apos;expérience
• Interventions rapides sur Nantes et son agglomération
• Techniciens formés et habilités aux normes photovoltaïques
• Diagnostic et devis gratuits sous 48h
• Technologies de nettoyage innovantes respectueuses de l&apos;environnement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de votre installation, avec un prix moyen de 250€ pour un système domestique standard. Notre tarif comprend le nettoyage complet, le contrôle électrique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou proche du littoral nantais, une intervention supplémentaire peut être conseillée pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nos techniciens réalisent un diagnostic complet vérifiant : le rendement électrique, l&apos;état des connexions, l&apos;absence de micro-fissures, et l&apos;intégrité des supports. Un test de performance permet de détecter toute baisse significative et d&apos;intervenir préventivement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Nantes ?
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
