import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Gradignan | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Gradignan et dans toute la région bordelaise. ',
  keywords: 'nettoyage panneaux solaires gradignan, maintenance photovoltaique gradignan, entretien panneaux solaires gradignan, nettoyage photovoltaique gradignan, maintenance panneaux photovoltaiques gradignan',
};

export default function MaintenancePhotovoltaiqueGradignanPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Gradignan</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence en maintenance et nettoyage de panneaux solaires à Gradignan et dans toute la région bordelaise. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique pointue.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Gradignan</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires est conçu pour maximiser la performance et la longévité de vos installations photovoltaïques. Sur Gradignan et ses environs, nos techniciens hautement qualifiés interviennent avec un équipement professionnel spécialisé pour éliminer poussières, pollens et résidus qui réduisent l&apos;efficacité énergétique. Un nettoyage régulier permet d&apos;augmenter le rendement de 5 à 15% et de préserver l&apos;intégrité de vos panneaux. Notre processus comprend un diagnostic complet, un nettoyage écologique sans produits chimiques agressifs et un contrôle technique approfondi de l&apos;installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : des techniciens certifiés, un matériel de nettoyage haute technologie, un diagnostic personnalisé, une intervention rapide sur Gradignan, et des tarifs transparents. Nous sommes engagés dans une démarche éco-responsable et proposons des solutions sur-mesure adaptées à chaque installation photovoltaïque.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, la complexité d&apos;accès et le niveau de salissure. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un diagnostic préalable gratuit pour un devis précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup d&apos;arbres, nous conseillons jusqu&apos;à 3 interventions annuelles pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production d&apos;électricité via l&apos;onduleur. Une baisse significative de rendement (plus de 10%) nécessite un diagnostic. Nos techniciens réalisent également des contrôles thermographiques et électriques complets pour détecter tout dysfonctionnement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Gradignan ?
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
