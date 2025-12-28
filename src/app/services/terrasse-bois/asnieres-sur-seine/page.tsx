import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Asnières-sur-Seine | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure pour les espaces résidentiels et professionnels d&apos;Asni',
  keywords: 'terrasse bois asnières-sur-seine, terrasse sur plot asnières-sur-seine, terrasse bois sur plot asnières-sur-seine, pose terrasse bois asnières-sur-seine, terrasse composite asnières-sur-seine, terrasse bois piscine asnières-sur-seine',
};

export default function TerrasseBoisAsnieresSurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Asnières-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, conçue sur-mesure pour les espaces résidentiels et professionnels d&apos;Asnières-sur-Seine. Groupe Expert Altitude Com vous propose des solutions durables et esthétiques qui valorisent immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Asnières-sur-Seine</h2>
        <div className="space-y-4">
          <p>La pose de terrasse bois sur plot représente une solution technique et élégante pour aménager vos espaces extérieurs avec professionnalisme. Notre méthode exclusive permet une installation précise qui s&apos;adapte parfaitement aux reliefs et contraintes de votre terrain à Asnières-sur-Seine. Nos terrasses en bois composite ou bois naturel offrent une résistance exceptionnelle aux intempéries, avec une durabilité garantie jusqu&apos;à 25 ans. Chaque réalisation fait l&apos;objet d&apos;un diagnostic préalable précis, avec nivellement et préparation du sol pour assurer une stabilité optimale. Nos équipes maîtrisent les techniques de pose sur plots qui permettent une ventilation et une isolation parfaites, tout en facilitant l&apos;entretien et le remplacement éventuel de certaines lames.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi nous choisir ? Notre différence réside dans notre expertise technique pointue, notre approche personnalisée et notre engagement qualité. Nous proposons des matériaux haut de gamme, sélectionnés pour leur durabilité et leur esthétique. Notre équipe certifiée intervient avec un outillage professionnel et des techniques d&apos;installation garantissant une finition impeccable. Nous maîtrisons parfaitement les normes techniques et esthétiques des terrasses bois sur plot.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis (bois exotique, composite, pin traité). Pour un projet moyen de 20m² à Asnières-sur-Seine, comptez un budget global entre 1 600€ et 5 000€, installation comprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La durée de pose d&apos;une terrasse bois sur plot dépend de la surface et de la complexité. Pour un projet standard de 20-30m², notre équipe réalise l&apos;installation en 2 à 4 jours ouvrés, incluant la préparation du terrain et la pose définitive.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Les meilleurs bois pour terrasse sont le pin traité classe 4, le bois exotique (ipé, teck) ou le composite. Nous recommandons le bois composite pour sa durabilité (25-30 ans) et son entretien minimal, parfait pour le climat d&apos;Asnières-sur-Seine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Asnières-sur-Seine ?
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
