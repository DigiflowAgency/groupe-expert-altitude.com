import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 5e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Paris 5e et ses environs. Nous intervenons avec des techni',
  keywords: 'nettoyage vitres hauteur paris 5e, lavage vitres immeuble paris 5e, nettoyage facade vitree paris 5e, cordiste vitre paris 5e, entreprise nettoyage vitres paris 5e, nettoyage verriere paris 5e',
};

export default function NettoyageVitresHauteurParis5ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 5e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur sur Paris 5e et ses environs. Nous intervenons avec des techniques professionnelles pour garantir des surfaces vitrées impeccables, quelque soit la configuration architecturale de vos bâtiments.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 5e</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences techniques les plus pointues des immeubles parisiens. Nos équipes de cordistes professionnels utilisent des techniques d&apos;alpinisme industriel permettant d&apos;atteindre les surfaces vitrées les plus complexes. Nous intervenons sur tous types de bâtiments : immeubles résidentiels, bureaux, vérandas et façades vitrées. Notre processus comprend une évaluation préalable des risques, un équipement de sécurité high-tech et des produits de nettoyage écologiques garantissant un résultat optimal sans traces ni rayures.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés en nettoyage de vitres en hauteur sur Paris 5e
- Techniques d&apos;alpinisme industriel brevetées
- 98% de satisfaction client
- Devis gratuit sous 24h
- Respect strict des normes de sécurité
- Intervention rapide et professionnelle</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par fenêtre selon la hauteur, l&apos;accessibilité et la surface totale. Pour un immeuble de 5 étages à Paris 5e, comptez un forfait entre 500€ et 1200€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel des vitres 2 à 3 fois par an. Pour les immeubles exposés à la pollution parisienne, une fréquence trimestrielle est idéale pour maintenir une transparence optimale et préserver l&apos;état du vitrage.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur nécessite des équipements spécifiques : harnais de sécurité, cordes homologuées, plateformes élévatrices et formation CACES. Nos techniciens sont équipés et certifiés pour intervenir en toute sécurité, avec un protocole strict de prévention des risques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 5e ?
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
