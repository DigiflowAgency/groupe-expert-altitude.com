import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terrasse bois sur plot a Bouguenais | Groupe Expert Altitude Com',
  description: 'Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, réalisée par le Groupe Expert Altitude Com à Bouguenais. Nos solutions s',
  keywords: 'terrasse bois bouguenais, terrasse sur plot bouguenais, terrasse bois sur plot bouguenais, pose terrasse bois bouguenais, terrasse composite bouguenais, terrasse bois piscine bouguenais',
};

export default function TerrasseBoisBouguenaisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terrasse bois sur plot a Bouguenais</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Transformez votre extérieur avec une terrasse bois sur plot parfaitement intégrée, réalisée par le Groupe Expert Altitude Com à Bouguenais. Nos solutions sur-mesure s&apos;adaptent à tous les espaces et valorisent immédiatement votre propriété.</p>

        <h2>Nos services de terrasse bois sur plot a Bouguenais</h2>
        <div className="space-y-4">
          <p>Notre expertise en terrasse bois sur plot répond aux exigences techniques les plus pointues. Nous proposons des solutions durables utilisant des matériaux haut de gamme comme les bois composites et le bois exotique, garantissant une résistance optimale aux intempéries. Notre processus débute par un diagnostic précis de votre terrain à Bouguenais, permettant une conception sur-mesure. Chaque projet fait l&apos;objet d&apos;un relevé topographique et d&apos;un calcul d&apos;implantation pour assurer un nivellement parfait et une stabilité maximale des plots.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Groupe Expert Altitude Com se distingue par son savoir-faire local. 15 ans d&apos;expérience, une équipe de 8 professionnels certifiés, et une moyenne de 95% de clients satisfaits. Nous garantissons des délais courts, un devis transparent et une finition impeccable. Notre engagement qualité se traduit par une garantie décennale sur tous nos travaux de terrasse bois.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;une terrasse bois sur plot au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix d&apos;une terrasse bois sur plot varie entre 80€ et 250€ au m², selon les matériaux choisis. Pour un projet moyen de 30m² à Bouguenais, comptez un budget entre 2 400€ et 7 500€. Les bois composites restent la solution la plus économique à long terme.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien de temps pour poser une terrasse bois sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La pose d&apos;une terrasse bois sur plot prend généralement entre 2 et 5 jours, en fonction de la surface et de la complexité du terrain. Notre équipe optimise chaque intervention pour minimiser les délais tout en garantissant une qualité irréprochable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel type de bois choisir pour une terrasse sur plot ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons le bois composite pour sa durabilité, ou l&apos;ipé pour son esthétique naturelle. Le châtaignier et le red cedar sont également d&apos;excellents choix, offrant une résistance aux agressions climatiques et une belle patine naturelle.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de terrasse bois sur plot a Bouguenais ?
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
