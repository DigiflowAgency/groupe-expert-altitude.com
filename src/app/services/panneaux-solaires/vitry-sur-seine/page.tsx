import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation panneaux solaires photovoltaïques a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre habitat à Vitry-sur-Seine en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation',
  keywords: 'panneaux solaires vitry-sur-seine, installation photovoltaique vitry-sur-seine, panneaux photovoltaiques vitry-sur-seine, installateur panneaux solaires vitry-sur-seine, pose panneaux solaires vitry-sur-seine, photovoltaique maison vitry-sur-seine',
};

export default function PanneauxSolairesVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Installation panneaux solaires photovoltaïques a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre habitat à Vitry-sur-Seine en centrale électrique verte avec Groupe Expert Altitude Com, votre partenaire local spécialisé en installation de panneaux solaires photovoltaïques. Nous vous accompagnons vers une énergie propre et économique, adaptée aux spécificités de votre région.</p>

        <h2>Nos services de installation panneaux solaires photovoltaïques a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos solutions photovoltaïques sur mesure permettent aux habitants de Vitry-sur-Seine de produire leur propre électricité et de réduire significativement leur empreinte carbone. Notre équipe d&apos;experts réalise un diagnostic précis de votre toiture, évalue son potentiel solaire et conçoit un système photovoltaïque parfaitement intégré. Nous utilisons uniquement des panneaux haute performance garantissant un rendement optimal, avec des technologies certifiées atteignant jusqu&apos;à 22% d&apos;efficacité énergétique. Notre processus complet inclut l&apos;étude technique, les démarches administratives, l&apos;installation et le raccordement au réseau électrique, pour une transition énergétique clé en main.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Entreprise certifiée RGE, nous garantissons une installation professionnelle et éligible aux aides gouvernementales. Notre expertise locale nous permet de comprendre précisément les contraintes techniques de Vitry-sur-Seine. Nous proposons des financements sur mesure, un accompagnement personnalisé et une maintenance après-vente. Nos techniciens sont formés aux dernières normes photovoltaïques.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;installation de panneaux solaires sur une maison ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;installation varie entre 9 000€ et 18 000€ selon la surface, avec des aides pouvant couvrir jusqu&apos;à 30% de l&apos;investissement. Un système de 3kWc pour une maison moyenne revient environ à 11 500€, mais permet des économies de 200-400€ par an sur la facture énergétique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le délai d&apos;installation de panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le délai total d&apos;installation s&apos;étend généralement entre 4 et 8 semaines, incluant l&apos;étude technique, les autorisations administratives et la pose. La pose des panneaux elle-même ne durant que 1-2 jours pour une installation résidentielle standard.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un installateur de panneaux solaires certifié RGE ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un installateur RGE, vérifiez impérativement sa certification Qualibat 5911, demandez plusieurs devis détaillés, consultez les avis clients et assurez-vous que l&apos;entreprise propose une garantie décennale sur l&apos;installation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de installation panneaux solaires photovoltaïques a Vitry-sur-Seine ?
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
