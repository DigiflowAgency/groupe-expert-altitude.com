import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Vincennes | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Vincennes et ses environs. Spéci',
  keywords: 'nettoyage panneaux solaires vincennes, maintenance photovoltaique vincennes, entretien panneaux solaires vincennes, nettoyage photovoltaique vincennes, maintenance panneaux photovoltaiques vincennes',
};

export default function MaintenancePhotovoltaiqueVincennesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Vincennes</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Vincennes et ses environs. Spécialistes de l&apos;entretien photovoltaïque, nous garantissons des installations performantes et durables pour tous vos projets énergétiques.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Vincennes</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur tous types d&apos;installations photovoltaïques, en respectant les normes de sécurité et de performance. À Vincennes, nous proposons un diagnostic précis comprenant un nettoyage professionnel qui élimine poussières, mousses et résidus qui réduisent l&apos;efficacité énergétique. Notre processus inclut un contrôle électrique complet, le test des connexions et l&apos;analyse des performances, permettant d&apos;optimiser jusqu&apos;à 15% le rendement de vos installations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise technique certifiée avec plus de 10 ans d&apos;expérience
- Techniciens formés et habilités aux interventions photovoltaïques
- Matériel spécialisé garantissant un nettoyage sans rayure
- Interventions rapides et sur-mesure à Vincennes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, avec un prix moyen de 250€ pour un système résidentiel standard. Notre devis personnalisé inclut le nettoyage, le contrôle électrique et le diagnostic complet des performances.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup de végétation, nous conseillons un nettoyage trimestriel pour maintenir un rendement optimal.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous réalisons un diagnostic complet vérifiant le rendement, l&apos;intégrité des connexions et l&apos;état des cellules photovoltaïques. Des signes comme une baisse de production, des micro-fissures ou des zones sombres sur les panneaux indiquent la nécessité d&apos;une intervention technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Vincennes ?
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
