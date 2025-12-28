import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Orvault | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Orvault et ses environs. Nos expert',
  keywords: 'nettoyage panneaux solaires orvault, maintenance photovoltaique orvault, entretien panneaux solaires orvault, nettoyage photovoltaique orvault, maintenance panneaux photovoltaiques orvault',
};

export default function MaintenancePhotovoltaiqueOrvaultPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Orvault</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Orvault et ses environs. Nos experts garantissent des installations photovoltaïques performantes et durables, en préservant leur efficacité énergétique maximale.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Orvault</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires représente une solution complète et professionnelle pour les propriétaires d&apos;installations photovoltaïques sur Orvault. Nous intervenons avec du matériel hautement spécialisé et respectueux des surfaces, éliminant poussières, mousses et résidus qui peuvent réduire jusqu&apos;à 20% la performance de vos panneaux. Notre processus inclut un diagnostic technique précis, un nettoyage écologique sans produits chimiques agressifs, et un contrôle électrique complet des connexions et de l&apos;intégrité du système.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : 1) Une expertise technique de plus de 10 ans dans le photovoltaïque, 2) Un personnel certifié et formé aux dernières technologies, 3) Un service garanti avec un diagnostic technique détaillé, 4) Des interventions rapides et adaptées à chaque type d&apos;installation, avec un engagement de résultat et de performance énergétique.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€, selon la surface, l&apos;accessibilité et la complexité de l&apos;installation. Notre tarif comprend un nettoyage complet, un diagnostic technique et un rapport détaillé de performance.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les panneaux solaires doivent être nettoyés idéalement 1 à 2 fois par an, généralement au printemps et à l&apos;automne. Dans des zones avec beaucoup de pollution ou de végétation, nous recommandons jusqu&apos;à 3 interventions annuelles pour maintenir une efficacité optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux solaires, surveillez votre production énergétique via un monitoring, vérifiez l&apos;absence de traces, microfissures ou décolorations, et faites réaliser un diagnostic technique annuel par des professionnels comme notre équipe.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Orvault ?
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
