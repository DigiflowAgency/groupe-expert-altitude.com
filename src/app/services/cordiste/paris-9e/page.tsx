import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris 9e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Paris 9e, offrant des solutions acrobatiques professionnelles pour tous v',
  keywords: 'cordiste paris 9e, travaux sur corde paris 9e, travaux acrobatiques paris 9e, cordiste batiment paris 9e, intervention cordiste paris 9e, entreprise cordiste paris 9e',
};

export default function CordisteParis9ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris 9e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en travaux sur corde à Paris 9e, offrant des solutions acrobatiques professionnelles pour tous vos défis en hauteur. Nos cordistes hautement qualifiés interviennent avec précision et sécurité sur les projets les plus complexes de la région parisienne.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris 9e</h2>
        <div className="space-y-4">
          <p>Nos services de travaux sur corde représentent la solution ultime pour les interventions techniques en hauteur nécessitant une expertise pointue. Nos cordistes professionnels maîtrisent parfaitement les techniques d&apos;accès difficile, permettant des réalisations là où les méthodes traditionnelles échouent. Que ce soit pour la rénovation de façades, l&apos;entretien de monuments historiques ou des travaux industriels dans Paris 9e, notre équipe dispose d&apos;un équipement de pointe et d&apos;une certification IRATA garantissant une intervention sécurisée à 100%. Nos techniciens combinent agilité, précision technique et respect strict des normes de sécurité, offrant une prestation complète et professionnelle.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Plus de 15 ans d&apos;expérience en travaux acrobatiques
✓ Certifications IRATA internationales
✓ Interventions rapides sur Paris et région parisienne
✓ Équipe de 12 cordistes experts
✓ Devis personnalisé et gratuit sous 24h
✓ Matériel dernière génération aux normes CE</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de définir précisément le coût de votre intervention avec transparence et sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle spécialisée, obtenir les certifications IRATA (niveau 1, 2 ou 3), posséder une condition physique excellente et réussir des examens théoriques et pratiques de sécurité et de techniques d&apos;accès.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir une entreprise de cordistes certifiée, vérifiez impérativement leurs certifications IRATA, leur assurance responsabilité civile professionnelle, leurs références clients, et demandez systématiquement les attestations de qualification de leurs techniciens.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris 9e ?
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
