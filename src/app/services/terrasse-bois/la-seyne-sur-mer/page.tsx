import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a La Seyne-sur-Mer | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les environnements méditerranéens de La Seyne',
  keywords: 'terrasse bois la seyne-sur-mer, terrasse sur plot la seyne-sur-mer, terrasse bois sur plot la seyne-sur-mer, pose terrasse bois la seyne-sur-mer, terrasse composite la seyne-sur-mer, terrasse bois piscine la seyne-sur-mer',
};

export default function TerrasseBoisLaSeyneSurMerPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a La Seyne-sur-Mer</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue spécifiquement pour les environnements méditerranéens de La Seyne-sur-Mer. Groupe Expert Altitude Com vous propose des solutions durables et esthétiques qui valoriseront instantanément votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a La Seyne-sur-Mer</h2>
        <div className="space-y-4">
          <p>Nos terrasses bois sur plot représentent la solution ultime pour les propriétaires exigeants de La Seyne-sur-Mer recherchant un aménagement extérieur élégant et fonctionnel. Nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour résister aux conditions climatiques locales, garantissant une durabilité exceptionnelle. Notre processus d&apos;installation sur plots permet une parfaite adaptation aux surfaces inégales, offrant une stabilité optimale et une isolation thermique supérieure. Chaque projet est personnalisé, avec une attention méticuleuse portée aux détails techniques et esthétiques, assurant une intégration harmonieuse dans votre environnement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Experts locaux depuis plus de 15 ans, nous maîtrisons parfaitement les spécificités techniques des terrasses bois sur La Seyne-sur-Mer. Notre équipe certifiée réalise 98% de poses conformes aux normes. Nous proposons un devis gratuit sous 48h, des matériaux garantis 10 ans et une intervention rapide. Notre engagement qualité fait notre réputation.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 120€ et 250€ par m², selon les matériaux choisis (bois exotique, composite) et la complexité de l&apos;installation. Pour un projet standard de 20m² à La Seyne-sur-Mer, comptez environ 2500€ à 4000€ installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot par nos professionnels prend généralement entre 2 et 5 jours, en fonction de la surface et des préparatifs nécessaires. Un chantier de 20m² sera typiquement réalisé en 3 jours ouvrables.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite ou l&apos;ipé pour La Seyne-sur-Mer : résistants aux UV, imputrescibles et nécessitant peu d&apos;entretien. Le châtaignier et le robinier sont aussi d&apos;excellents choix, offrant durabilité et aspect naturel.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a La Seyne-sur-Mer ?
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
