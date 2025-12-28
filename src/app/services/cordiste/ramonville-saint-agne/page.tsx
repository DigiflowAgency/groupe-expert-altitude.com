import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travaux sur corde - Cordistes a Ramonville-Saint-Agne | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Ramonville-Saint-Agne et dans toute la région toulousaine. Nos cordiste',
  keywords: 'cordiste ramonville-saint-agne, travaux sur corde ramonville-saint-agne, travaux acrobatiques ramonville-saint-agne, cordiste batiment ramonville-saint-agne, intervention cordiste ramonville-saint-agne, entreprise cordiste ramonville-saint-agne',
};

export default function CordisteRamonvilleSaintAgnePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Travaux sur corde - Cordistes a Ramonville-Saint-Agne</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence en travaux sur corde à Ramonville-Saint-Agne et dans toute la région toulousaine. Nos cordistes hautement qualifiés interviennent sur les chantiers les plus complexes, garantissant sécurité et efficacité maximales.</p>

        <h2>Nos services de travaux sur corde - cordistes a Ramonville-Saint-Agne</h2>
        <div className="space-y-4">
          <p>Nos services de travaux acrobatiques représentent la solution technique ultime pour toute intervention en hauteur. Nos cordistes professionnels sont spécialisés dans des missions variées : rénovation de façades, nettoyage industriel, maintenance de structures complexes et travaux de bâtiment. Chaque intervention est précédée d&apos;un diagnostic technique précis, permettant d&apos;optimiser l&apos;approche et de minimiser les risques. Notre équipe dispose d&apos;équipements homologués aux dernières normes de sécurité, assurant une prestation de haute qualité. Basés à Ramonville-Saint-Agne, nous intervenons dans un rayon de 100 km, avec une réactivité et une expertise reconnues dans le secteur.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Certifications professionnelles IRATA et SPEL
✓ Plus de 15 ans d&apos;expérience en travaux acrobatiques
✓ Équipe de 12 cordistes hautement qualifiés
✓ Matériel de pointe et contrôlé annuellement
✓ Intervention rapide sur Ramonville-Saint-Agne et alentours
✓ Devis gratuit et personnalisé sous 24h</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le tarif d&apos;un cordiste pour des travaux en hauteur ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le tarif d&apos;un cordiste varie entre 80€ et 180€ de l&apos;heure selon la complexité du chantier. Un diagnostic préalable gratuit nous permet de proposer un devis précis, incluant la main-d&apos;œuvre, le matériel et les contraintes techniques spécifiques.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quelles sont les qualifications requises pour devenir cordiste ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour devenir cordiste, il faut suivre une formation qualifiante de niveau III, obtenir des certifications IRATA (International Rope Access Trade Association), réussir des examens médicaux stricts et justifier d&apos;une condition physique irréprochable. Une formation continue est également obligatoire.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir une entreprise de cordistes certifiée ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une entreprise de cordistes certifiée doit présenter des diplômes IRATA, des attestations de formations récentes, une assurance responsabilité civile professionnelle, et des références vérifiables. Vérifiez toujours leurs certifications et leur expérience avant toute intervention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de travaux sur corde - cordistes a Ramonville-Saint-Agne ?
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
