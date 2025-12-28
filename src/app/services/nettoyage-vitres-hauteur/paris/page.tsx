import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Paris, offrant une expertise technique pour les immeubles et',
  keywords: 'nettoyage vitres hauteur paris, lavage vitres immeuble paris, nettoyage facade vitree paris, cordiste vitre paris, entreprise nettoyage vitres paris, nettoyage verriere paris',
};

export default function NettoyageVitresHauteurParisPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur à Paris, offrant une expertise technique pour les immeubles et façades les plus exigeants de la capitale.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris</h2>
        <div className="space-y-4">
          <p>Nos équipes de cordistes professionnels réalisent des interventions de nettoyage de vitres complexes sur l&apos;ensemble des bâtiments parisiens, des immeubles historiques aux tours modernes. Nous utilisons des techniques de travail en hauteur conformes aux normes de sécurité les plus strictes, garantissant un résultat impeccable sans risque. Notre processus inclut un diagnostic préalable, un équipement technique de pointe et des produits écologiques respectueux de l&apos;environnement urbain. Nos techniciens sont formés aux techniques de cordage et possèdent les certifications requises pour intervenir sur des sites complexes.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour : Une expertise de plus de 15 ans dans le nettoyage de vitres à Paris, Des techniciens certifiés et assurés, Un matériel professionnel dernier cri, Une approche éco-responsable, Une intervention rapide et sur-mesure.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ au m², selon l&apos;accessibilité, la hauteur et la complexité du bâtiment. Un devis personnalisé gratuit est systématiquement proposé après un diagnostic précis.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition du bâtiment. Les immeubles en centre-ville de Paris nécessitent généralement un nettoyage trimestriel en raison de la pollution urbaine.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnelles, un harnais antichute homologué, des points d&apos;ancrage certifiés et le respect strict du protocole de sécurité OPPBTP.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris ?
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
