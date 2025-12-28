import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Couverture et rénovation toiture a Mérignac | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Mérignac, offrant des solutions professionnelles q',
  keywords: 'couverture toiture mérignac, renovation toiture mérignac, reparation toiture mérignac, couvreur mérignac, refection toiture mérignac, entreprise couverture mérignac',
};

export default function CouvertureToitureMerignacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couverture et rénovation toiture a Mérignac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com est votre partenaire de confiance en rénovation et couverture de toiture à Mérignac, offrant des solutions professionnelles qui protègent et valorisent votre patrimoine immobilier. Notre expertise technique garantit des interventions de qualité pour tous vos projets de toiture dans la métropole bordelaise.</p>

        <h2>Nos services de couverture et rénovation toiture a Mérignac</h2>
        <div className="space-y-4">
          <p>Spécialistes de la couverture et rénovation sur Mérignac, nous intervenons sur tous types de toitures, des pavillons traditionnels aux bâtiments commerciaux. Notre approche combine technicité et diagnostic précis, en utilisant des matériaux haute performance et des techniques d&apos;isolation innovantes. Chaque chantier fait l&apos;objet d&apos;un audit complet permettant d&apos;identifier les désordres structurels et de proposer des solutions durables. Nos équipes maîtrisent parfaitement la réfection de toiture, qu&apos;il s&apos;agisse de tuiles, ardoises, zinc ou bacs acier, avec une moyenne de 95% de satisfaction client.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>• Artisans certifiés avec plus de 15 ans d&apos;expérience 
• Devis gratuit et détaillé sous 48h 
• Interventions rapides et adaptées à chaque budget 
• Garantie décennale sur tous nos travaux 
• Solutions techniques personnalisées 
• Stock permanent de matériaux de qualité</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte une rénovation complète de toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Une rénovation complète de toiture coûte entre 80€ et 250€ au m², selon les matériaux et la complexité. Pour un pavillon standard de 100m², comptez entre 8 000€ et 25 000€. Notre équipe propose systématiquement plusieurs options tarifaires adaptées à vos besoins et contraintes budgétaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faut-il refaire sa toiture entièrement ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de refaire sa toiture tous les 25-30 ans, ou en cas de signes précurseurs comme infiltrations, tuiles cassées, mousses importantes, déformations structurelles. Un diagnostic annuel permet de prévenir les désordres et prolonger significativement la durée de vie de votre couverture.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment choisir un couvreur qualifié pour sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour choisir un couvreur qualifié, vérifiez toujours : la certification RGE, l&apos;existence d&apos;une assurance décennale, les avis clients, l&apos;ancienneté de l&apos;entreprise. Demandez systématiquement un devis détaillé, rencontrez le professionnel et n&apos;hésitez pas à demander des références de chantiers récents.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de couverture et rénovation toiture a Mérignac ?
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
