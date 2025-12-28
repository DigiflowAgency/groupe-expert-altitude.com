import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Carquefou | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Carquefou et ses environs. Nos expe',
  keywords: 'nettoyage panneaux solaires carquefou, maintenance photovoltaique carquefou, entretien panneaux solaires carquefou, nettoyage photovoltaique carquefou, maintenance panneaux photovoltaiques carquefou',
};

export default function MaintenancePhotovoltaiqueCarquefouPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Carquefou</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Carquefou et ses environs. Nos experts interviennent sur toute la région des Pays de la Loire pour garantir des installations photovoltaïques performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Carquefou</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires est conçu pour optimiser la production énergétique de votre installation. Nos techniciens hautement qualifiés utilisent des techniques et du matériel spécialisés pour éliminer les salissures, poussières et résidus qui peuvent réduire jusqu&apos;à 20% l&apos;efficacité de vos panneaux. À Carquefou, nous comprenons les enjeux climatiques locaux et adaptons nos interventions en conséquence. Notre processus comprend un diagnostic précis, un nettoyage écologique sans produits chimiques agressifs et un contrôle technique complet des connexions et composants.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Expertise locale avec plus de 10 ans d&apos;expérience 
✓ Techniciens certifiés et équipements de haute technologie 
✓ Intervention rapide sur Carquefou et toute la Loire-Atlantique 
✓ Devis gratuit et transparent 
✓ Contrats de maintenance personnalisés</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 350€ selon la taille de votre installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un rapport qualité-prix optimal.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou proche de zones agricoles à Carquefou, une intervention supplémentaire peut être nécessaire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous effectuons un diagnostic complet incluant le rendement électrique, l&apos;état des connexions et des cellules. Des signes comme une baisse de production, des micro-fissures ou des branchements oxydés nécessitent une vérification immédiate.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Carquefou ?
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
