import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Saint-Herblain | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire local de référence pour la maintenance et le nettoyage de panneaux solaires à Saint-Herblain. Nos experts i',
  keywords: 'nettoyage panneaux solaires saint-herblain, maintenance photovoltaique saint-herblain, entretien panneaux solaires saint-herblain, nettoyage photovoltaique saint-herblain, maintenance panneaux photovoltaiques saint-herblain',
};

export default function MaintenancePhotovoltaiqueSaintHerblainPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Saint-Herblain</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire local de référence pour la maintenance et le nettoyage de panneaux solaires à Saint-Herblain. Nos experts interviennent sur toute la région nantaise pour garantir des installations photovoltaïques performantes et durables.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Saint-Herblain</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous réalisons un diagnostic complet de votre installation, comprenant un nettoyage professionnel qui élimine poussières, mousses et résidus qui réduisent jusqu&apos;à 20% l&apos;efficacité énergétique. Notre équipe utilise du matériel spécialisé et des techniques écologiques, sans produits chimiques agressifs, pour préserver l&apos;intégrité de vos panneaux. À Saint-Herblain, nous intervenons rapidement et efficacement, avec un engagement de résultat qui fait notre réputation. Chaque intervention comprend un contrôle électrique complet et un rapport détaillé de l&apos;état de votre installation photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés et formés aux dernières technologies photovoltaïques
- Intervention rapide sur Saint-Herblain et communes environnantes
- Diagnostic technique précis et transparent
- Devis gratuit sous 48h
- Satisfaction client garantie</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 350€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour une installation domestique standard. Notre tarif inclut le nettoyage complet, le contrôle électrique et un rapport technique détaillé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup de végétation, une intervention supplémentaire peut être nécessaire pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous vérifions la performance via un contrôle multimétrique qui analyse la production électrique, l&apos;état des connexions et l&apos;intégrité des panneaux. Des signes comme une baisse de production supérieure à 10% nécessitent un diagnostic approfondi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Saint-Herblain ?
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
