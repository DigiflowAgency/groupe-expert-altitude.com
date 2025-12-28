import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Aubervilliers | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire référence en travaux sur corde à Aubervilliers et en région parisienne. Nos cordistes hautement qualifié',
  keywords: 'cordiste aubervilliers, travaux sur corde aubervilliers, travaux acrobatiques aubervilliers, cordiste batiment aubervilliers, intervention cordiste aubervilliers, entreprise cordiste aubervilliers',
};

export default function CordisteAubervilliersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Aubervilliers</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire référence en travaux sur corde à Aubervilliers et en région parisienne. Nos cordistes hautement qualifiés interviennent sur tous types de chantiers complexes, garantissant sécurité et efficacité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a Aubervilliers</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution technique ultime pour les interventions en hauteur nécessitant une expertise pointue. Nos cordistes professionnels sont spécialisés dans des missions variées : rénovation de façades, nettoyage de vitrages, interventions industrielles et maintenance de structures complexes. À Aubervilliers, nous maîtrisons parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où les méthodes traditionnelles échouent. Notre approche combine des équipements de pointe, une formation continue rigoureuse et un respect total des normes de sécurité, assurant des prestations de qualité supérieure.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en travaux acrobatiques
✓ Équipe certifiée IRATA/SPRAT avec habilitations spécifiques
✓ Interventions rapides sur Aubervilliers et toute la région parisienne
✓ Devis personnalisé et transparent sous 24h
✓ Matériel de dernière génération aux normes de sécurité les plus strictes</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité de l&apos;intervention, la hauteur, et l&apos;équipement spécifique requis. Un diagnostic préalable gratuit nous permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Devenir cordiste nécessite une formation professionnelle intensive comprenant : un diplôme de niveau CAP/BEP, une certification IRATA/SPRAT, des formations continues en sécurité, des tests physiques annuels et une expérience minimale de 3 ans en travaux en hauteur.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez systématiquement : les certifications IRATA/SPRAT, l&apos;assurance responsabilité civile professionnelle, les références clients, les attestations de formations sécurité, et les avis professionnels sur les plateformes spécialisées.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Aubervilliers ?
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
