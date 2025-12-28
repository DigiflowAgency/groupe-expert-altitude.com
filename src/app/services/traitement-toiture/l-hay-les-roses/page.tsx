import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traitement et démoussage toiture a L\'Haÿ-les-Roses | Groupe Expert Altitude Com',
  description: 'Votre toiture mérite une attention professionnelle, et à L&apos;Haÿ-les-Roses, le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitemen',
  keywords: 'demoussage toiture l'haÿ-les-roses, traitement toiture l'haÿ-les-roses, nettoyage toiture l'haÿ-les-roses, antimousse toiture l'haÿ-les-roses, hydrofuge toiture l'haÿ-les-roses, entretien toiture l'haÿ-les-roses',
};

export default function TraitementToitureLHayLesRosesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Traitement et démoussage toiture a L'Haÿ-les-Roses</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Votre toiture mérite une attention professionnelle, et à L&apos;Haÿ-les-Roses, le Groupe Expert Altitude Com est votre partenaire de confiance pour un traitement et démoussage toiture impeccable. Nous protégeons votre patrimoine immobilier contre les dégradations dues aux mousses et aux intempéries.</p>

        <h2>Nos services de traitement et démoussage toiture a L'Haÿ-les-Roses</h2>
        <div className="space-y-4">
          <p>Le démoussage de toiture est une intervention technique essentielle pour préserver la longévité et l&apos;esthétique de votre couverture. Notre méthode exclusive combine un nettoyage haute précision et un traitement antimousse performant, garantissant une protection optimale contre les infiltrations et les dégradations. Nos techniciens utilisent des produits écologiques et homologués, adaptés à chaque type de matériau (tuiles, ardoises, fibrociment). Une intervention régulière permet de prévenir les risques de détérioration et de maintenir l&apos;intégrité structurelle de votre toiture, avec un taux de protection atteignant 95% contre les mousses et lichens.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Pourquoi choisir notre expertise à L&apos;Haÿ-les-Roses ? Notre équipe certifiée intervient avec du matériel professionnel, propose des devis transparents sans engagement, et offre une garantie de 5 ans sur nos traitements. Nous intervenons rapidement, avec une moyenne de 48h entre le diagnostic et la réalisation, et notre approche respectueuse de l&apos;environnement fait notre différence.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quel est le prix d&apos;un démoussage de toiture au m² ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le prix du démoussage varie entre 15€ et 30€ par m², selon la complexité de la toiture, son accessibilité et l&apos;état initial. Pour une maison moyenne de 100m², comptez un investissement global entre 1500€ et 3000€, incluant le nettoyage, le traitement antimousse et l&apos;hydrofugation.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Quand faire un traitement antimousse sur sa toiture ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le meilleur moment pour un traitement antimousse est fin septembre ou début octobre, après la période estivale et avant les premières gelées. Cette période permet une application optimale des produits et une protection hivernale efficace contre l&apos;humidité et le développement des mousses.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment appliquer un hydrofuge sur toiture après démoussage ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Après démoussage, l&apos;application d&apos;un hydrofuge nécessite un support parfaitement sec et propre. On utilise un pulvérisateur professionnel, en appliquant uniformément le produit par couches fines, en respectant un recouvrement de 10-15% entre chaque passage pour garantir une protection totale et homogène.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de traitement et démoussage toiture a L'Haÿ-les-Roses ?
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
