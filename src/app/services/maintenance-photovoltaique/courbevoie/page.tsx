import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Courbevoie | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Courbevoie et ses environs. Nous garan',
  keywords: 'nettoyage panneaux solaires courbevoie, maintenance photovoltaique courbevoie, entretien panneaux solaires courbevoie, nettoyage photovoltaique courbevoie, maintenance panneaux photovoltaiques courbevoie',
};

export default function MaintenancePhotovoltaiqueCourbevoiePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Courbevoie</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Courbevoie et ses environs. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique de pointe.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Courbevoie</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences les plus strictes du marché photovoltaïque. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble des installations, qu&apos;elles soient résidentielles ou professionnelles dans la région de Courbevoie. Nous utilisons des techniques de nettoyage innovantes qui préservent l&apos;intégrité de vos panneaux tout en optimisant leur rendement énergétique. Notre processus complet comprend un diagnostic technique précis, un nettoyage écologique sans produits chimiques agressifs et un contrôle approfondi de tous les composants électriques. Nos interventions permettent de maintenir un rendement optimal, avec des performances énergétiques augmentées pouvant atteindre 15% après un nettoyage professionnel.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 10 ans d&apos;expérience en maintenance photovoltaïque
- Intervention rapide et sur-mesure à Courbevoie et dans les Hauts-de-Seine
- Technologies de nettoyage écologiques et respectueuses de l&apos;environnement
- Devis gratuit et transparent, sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel des panneaux solaires varie entre 150€ et 350€ selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou proche de zones industrielles, nous conseillons jusqu&apos;à 3 interventions annuelles pour maintenir une performance maximale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via un monitoring, inspectez visuellement l&apos;absence de traces, salissures ou dommages, et faites réaliser un diagnostic technique annuel par des professionnels comme notre équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Courbevoie ?
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
