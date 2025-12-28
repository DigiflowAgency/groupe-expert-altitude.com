import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Six-Fours-les-Plages | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Six-Fours-les-Plages, transforme l&apos;entretien de vos surfaces vi',
  keywords: 'nettoyage vitres hauteur six-fours-les-plages, lavage vitres immeuble six-fours-les-plages, nettoyage facade vitree six-fours-les-plages, cordiste vitre six-fours-les-plages, entreprise nettoyage vitres six-fours-les-plages, nettoyage verriere six-fours-les-plages',
};

export default function NettoyageVitresHauteurSixFoursLesPlagesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Six-Fours-les-Plages</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialisé en nettoyage de vitres en hauteur à Six-Fours-les-Plages, transforme l&apos;entretien de vos surfaces vitrées en une expérience sans précédent. Nos experts cordistes interviennent sur tous types de bâtiments, garantissant une propreté impeccable et une sécurité maximale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Six-Fours-les-Plages</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution professionnelle et technique pour les immeubles, bureaux et facades commerciales de Six-Fours-les-Plages. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus complexes, avec un équipement aux normes de sécurité les plus strictes. Chaque intervention commence par un diagnostic précis des surfaces, suivi d&apos;un nettoyage manuel utilisant des produits écologiques et des techniques adaptées à chaque type de vitrage. Nous garantissons une transparence cristalline et une finition sans trace, améliorant ainsi l&apos;image et la luminosité de vos bâtiments.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Techniciens certifiés avec plus de 15 ans d&apos;expérience
- Matériel high-tech et techniques de cordage innovantes
- 100% de conformité aux normes de sécurité
- Devis gratuit et personnalisé sous 48h
- Intervention rapide sur tout le territoire de Six-Fours-les-Plages et alentours</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par m², selon la hauteur, l&apos;accessibilité et la complexité des surfaces. Un immeuble moyen de 300m² représente un budget entre 4 500€ et 15 000€, incluant la main-d&apos;œuvre, le matériel et la sécurisation complète de l&apos;intervention.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent, tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles. Un calendrier personnalisé permet d&apos;optimiser l&apos;entretien.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de systèmes antichute, de harnais homologués, de points d&apos;ancrage certifiés et le respect strict du protocole PPSPS (Plan Particulier de Sécurité et de Protection de la Santé). Nos équipes suivent annuellement des formations de sécurité et possèdent les certifications requises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Six-Fours-les-Plages ?
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
