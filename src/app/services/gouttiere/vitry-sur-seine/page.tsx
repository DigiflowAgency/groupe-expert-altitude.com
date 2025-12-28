import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gouttières et descentes pluviales a Vitry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Vitry-sur-Seine et ses environs. ',
  keywords: 'gouttiere vitry-sur-seine, pose gouttiere vitry-sur-seine, reparation gouttiere vitry-sur-seine, nettoyage gouttiere vitry-sur-seine, descente pluviale vitry-sur-seine, gouttiere bouchee vitry-sur-seine',
};

export default function GouttiereVitrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gouttières et descentes pluviales a Vitry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour tous vos besoins en gouttières et descentes pluviales à Vitry-sur-Seine et ses environs. Spécialistes de la protection de votre habitat, nous intervenons rapidement pour garantir l&apos;étanchéité et la longévité de vos systèmes d&apos;évacuation des eaux.</p>

        <h2>Nos services de gouttières et descentes pluviales a Vitry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Nos solutions complètes de gouttières couvrent l&apos;installation, la réparation et l&apos;entretien pour protéger efficacement votre propriété contre les risques d&apos;infiltration. Notre équipe technique hautement qualifiée réalise un diagnostic précis avant toute intervention, en utilisant des matériaux de haute qualité comme l&apos;aluminium, le zinc ou le PVC. À Vitry-sur-Seine, nous adaptons chaque solution aux spécificités architecturales de votre bâtiment, avec une moyenne de 95% de satisfaction client. Nos interventions comprennent le relevé technique, la pose sur-mesure, le scellement et le test d&apos;étanchéité, garantissant une protection optimale contre les intempéries.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Expertise locale de plus de 15 ans à Vitry-sur-Seine
- Techniciens certifiés et formés en continu
- Devis gratuit et transparent sous 48h
- Matériels et techniques dernier cri
- Interventions rapides et sans dépassement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix de pose d&apos;une gouttière au mètre linéaire ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix moyen de pose d&apos;une gouttière varie entre 30€ et 80€ le mètre linéaire, selon le matériau choisi et la complexité de l&apos;installation. Un diagnostic précis vous permettra d&apos;obtenir un devis personnalisé sans surprise.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment déboucher une gouttière soi-même ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour déboucher une gouttière, utilisez un furet de plomberie, un jet d&apos;eau haute pression ou un aspirateur spécial. En cas de difficulté, contactez un professionnel pour éviter d&apos;endommager le système.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses gouttières ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos gouttières au minimum deux fois par an, idéalement au printemps et à l&apos;automne. Dans les zones avec beaucoup de végétation, une intervention trimestrielle peut être nécessaire pour prévenir les obstructions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de gouttières et descentes pluviales a Vitry-sur-Seine ?
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
