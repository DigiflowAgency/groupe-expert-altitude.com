import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a L\'Union | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage imp',
  keywords: 'demoussage toiture l'union, traitement toiture l'union, nettoyage toiture l'union, antimousse toiture l'union, hydrofuge toiture l'union, entretien toiture l'union',
};

export default function TraitementToitureLUnionPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a L'Union</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage impeccable à L&apos;Union et ses environs. Nous protégeons et valorisons votre patrimoine immobilier grâce à des solutions techniques innovantes et durables.</p>

        <h2>Nos services de traitement et démoussage toiture a L'Union</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une intervention essentielle pour préserver l&apos;intégrité et l&apos;esthétique de votre habitat. À L&apos;Union, notre équipe hautement qualifiée utilise des techniques précises et des produits écologiques pour éliminer efficacement la mousse et les lichens qui fragilisent vos tuiles. Notre processus complet comprend un diagnostic initial, un nettoyage haute précision sans détérioration des matériaux, puis un traitement antimousse et hydrofuge qui protège durablement votre toiture contre les agressions climatiques. En moyenne, notre intervention permet de prolonger la durée de vie de votre toiture de 10 à 15 ans, tout en améliorant son aspect visuel et ses performances techniques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre différence réside dans notre expertise technique, notre approche personnalisée et notre engagement local. Nous sommes certifiés RGE, utilisons du matériel professionnel de dernière génération, et proposons des garanties écrites. Nos techniciens sont formés annuellement aux dernières normes de traitement, et nous intervenons rapidement sur tout le secteur de L&apos;Union avec un devis gratuit et détaillé.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 25€ par m², selon la complexité de la toiture, son accessibilité et son état. Pour une maison moyenne de 100m², comptez un budget global entre 1500€ et 2500€. Nous proposons systématiquement un diagnostic précis et un devis détaillé sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour réaliser un traitement antimousse est fin printemps ou début automne, périodes où l&apos;humidité et la température sont idéales pour une application optimale. Il est recommandé d&apos;intervenir tous les 5 à 7 ans, ou dès que vous observez les premiers signes de développement de mousse.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. Nous utilisons des produits respirants à base de siloxane qui créent un bouclier invisible contre l&apos;humidité tout en laissant la toiture « transpirer », avec une efficacité garantie pendant 8 à 10 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a L'Union ?
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
