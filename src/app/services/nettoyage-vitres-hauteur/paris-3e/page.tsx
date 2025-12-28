import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 3e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire spécialiste du nettoyage de vitres en hauteur à Paris 3e, transforme l&apos;entretien de vos surfaces vitrées en un',
  keywords: 'nettoyage vitres hauteur paris 3e, lavage vitres immeuble paris 3e, nettoyage facade vitree paris 3e, cordiste vitre paris 3e, entreprise nettoyage vitres paris 3e, nettoyage verriere paris 3e',
};

export default function NettoyageVitresHauteurParis3ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 3e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire spécialiste du nettoyage de vitres en hauteur à Paris 3e, transforme l&apos;entretien de vos surfaces vitrées en une expérience professionnelle et sans risque. Nos experts cordistes interviennent avec précision dans tout l&apos;arrondissement, garantissant des façades impeccables et lumineuses.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 3e</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles parisiens. Équipés de techniques de cordage professionnel, nos techniciens nettoient méticuleusement chaque surface vitrée, des véritables façades aux vérandas complexes. Notre process unique combine sécurité maximale et résultats éclatants, en utilisant des produits éco-responsables qui préservent l&apos;éclat du verre sans impact environnemental. Chaque intervention fait l&apos;objet d&apos;un diagnostic précis, permettant un nettoyage adapté à la configuration spécifique de votre bâtiment dans le 3e arrondissement.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel de pointe, assurance responsabilité professionnelle complète. Nous intervenons rapidement, avec un taux de satisfaction de 98% et des tarifs transparents. Notre engagement qualité fait de nous le leader du nettoyage de vitres en hauteur à Paris.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par fenêtre, selon l&apos;accessibilité et la hauteur. Pour un immeuble standard à Paris 3e, comptez un budget global entre 500€ et 1500€ pour un nettoyage complet, avec un devis personnalisé gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville comme dans le 3e arrondissement nécessitent généralement un nettoyage trimestriel pour maintenir une apparence impeccable et préserver la qualité des vitrages.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, un équipement homologué (harnais, points d&apos;ancrage), et une formation spécifique. Nos cordistes sont certifiés IRATA, garantissant une intervention sans risque pour les bâtiments parisiens.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 3e ?
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
