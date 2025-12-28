import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Pantin | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Pantin, offrant des solutions acrobatiques professionnelles pour tous vos',
  keywords: 'cordiste pantin, travaux sur corde pantin, travaux acrobatiques pantin, cordiste batiment pantin, intervention cordiste pantin, entreprise cordiste pantin',
};

export default function CordistePantinPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Pantin</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Pantin, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes de la région parisienne avec précision et sécurité.</p>

        <h2>Nos services de travaux sur corde - cordistes a Pantin</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques en hauteur, que ce soit pour la rénovation de bâtiments, l&apos;entretien industriel ou les travaux urbains. Notre équipe de cordistes à Pantin dispose d&apos;une expertise technique permettant d&apos;intervenir sur des surfaces verticales inaccessibles aux méthodes traditionnelles. Chaque intervention est précédée d&apos;une analyse rigoureuse des risques, garantissant une exécution parfaite à 100% des missions. Nos techniciens sont équipés des derniers équipements de sécurité et possèdent les certifications IRATA et SFETH, attestant de leur professionnalisme.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Équipe certifiée avec plus de 15 ans d&apos;expérience
- Interventions 100% sécurisées et conformes aux normes
- Techniciens spécialisés disponibles rapidement sur Pantin et sa région
- Devis gratuit et transparent sous 24h
- Matériel professionnel dernière génération</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ par heure selon la complexité du chantier, l&apos;expertise requise et la durée d&apos;intervention. Un diagnostic précis sur site permet d&apos;établir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut obtenir des certifications spécifiques comme le niveau IRATA, suivre des formations intensives en techniques de travail en hauteur, posséder une condition physique excellente et réussir des examens théoriques et pratiques de sécurité.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez leurs certifications IRATA/SFETH, consultez leurs références clients, demandez des preuves d&apos;assurance professionnelle et assurez-vous qu&apos;ils respectent strictement les normes de sécurité en vigueur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Pantin ?
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
