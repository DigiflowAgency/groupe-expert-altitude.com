import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Mandelieu-la-Napoule | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur sur Mandelieu-la-Napoule, en proposant des solutions professionnelles adaptées au',
  keywords: 'nettoyage vitres hauteur mandelieu-la-napoule, lavage vitres immeuble mandelieu-la-napoule, nettoyage facade vitree mandelieu-la-napoule, cordiste vitre mandelieu-la-napoule, entreprise nettoyage vitres mandelieu-la-napoule, nettoyage verriere mandelieu-la-napoule',
};

export default function NettoyageVitresHauteurMandelieuLaNapoulePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Mandelieu-la-Napoule</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur sur Mandelieu-la-Napoule, en proposant des solutions professionnelles adaptées aux immeubles et bâtiments complexes. Nos experts cordistes transforment chaque intervention en performance de propreté et de sécurité.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Mandelieu-la-Napoule</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de surfaces vitrées, des facades commerciales aux vérandas résidentielles de Mandelieu-la-Napoule. Notre technique unique combine technicité et respect des normes de sécurité, garantissant un résultat impeccable sans risque. Nos cordistes hautement qualifiés utilisent un équipement technique dernier cri permettant d&apos;atteindre les zones les plus difficiles d&apos;accès, avec une précision chirurgicale. Chaque intervention est personnalisée, évaluée techniquement pour optimiser l&apos;efficacité et minimiser les perturbations.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une expertise technique de pointe, des certifications professionnelles, une équipe 100% formée aux techniques de cordage, un engagement sécurité total et une expérience de plus de 15 ans dans le nettoyage de surfaces complexes. Nous proposons des devis gratuits et un service après-intervention garantissant une satisfaction totale.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ le m², selon la complexité d&apos;accès, la hauteur et la surface totale. Un immeuble moyen de 300m² représente un investissement entre 4 500€ et 15 000€, incluant le matériel spécialisé et la main-d&apos;œuvre qualifiée.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition aux intempéries, la pollution locale et le type de bâtiment. Les immeubles en centre-ville ou proche mer nécessitent généralement un nettoyage plus fréquent du fait de l&apos;accumulation de sel et de particules.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique une formation IRATA, un équipement aux normes CE, des points d&apos;ancrage vérifiés, un harnais anti-chute homologué et un protocole strict de vérification quotidienne du matériel. Nos techniciens suivent des formations annuelles de mise à jour des techniques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Mandelieu-la-Napoule ?
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
