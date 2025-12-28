import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Paris | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Paris, offrant des solutions acrobatiques innovantes et sécuri',
  keywords: 'cordiste paris, travaux sur corde paris, travaux acrobatiques paris, cordiste batiment paris, intervention cordiste paris, entreprise cordiste paris',
};

export default function CordisteParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de référence pour des travaux sur corde à Paris, offrant des solutions acrobatiques innovantes et sécurisées pour tous vos défis en hauteur. Nos cordistes professionnels interviennent sur l&apos;ensemble de la région parisienne avec une expertise technique inégalée.</p>

        <h2>Nos services de travaux sur corde - cordistes a Paris</h2>
        <div className="space-y-4">
          <p>Nos services de cordistes représentent la solution ultime pour les interventions complexes en milieu vertical. Spécialisés dans les travaux acrobatiques, nous intervenons sur des chantiers variés : rénovation de façades, nettoyage de vitres, maintenance industrielle et travaux de restauration. Notre équipe dispose d&apos;équipements homologués et d&apos;une formation continue garantissant une précision et une sécurité maximales. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé, permettant une approche sur-mesure adaptée aux spécificités de votre projet parisien.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• 15 ans d&apos;expérience en travaux acrobatiques
• Certifications IRATA internationales
• Équipe de 25 cordistes hautement qualifiés
• Assurance responsabilité professionnelle complète
• Technologies et matériels de dernière génération
• Interventions rapides sur Paris et sa région</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 250€ de l&apos;heure selon la complexité du chantier, l&apos;équipement nécessaire et la durée d&apos;intervention. Un diagnostic préalable gratuit permet de définir un devis précis adapté à vos besoins spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation professionnelle qualifiante, obtenir les certifications IRATA (niveau 1, 2 ou 3), posséder un excellent niveau sportif, maîtriser les techniques de sécurité et réussir des examens théoriques et pratiques rigoureux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Vérifiez toujours les certifications IRATA, l&apos;existence d&apos;une assurance responsabilité professionnelle, les références clients, les avis en ligne et demandez un portfolio des réalisations précédentes. Un cordiste professionnel doit pouvoir justifier de ses compétences et de son expérience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Paris ?
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
