import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Paris 2e | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur, offrant des services professionnels sur Paris et sa région. B',
  keywords: 'nettoyage vitres hauteur paris 2e, lavage vitres immeuble paris 2e, nettoyage facade vitree paris 2e, cordiste vitre paris 2e, entreprise nettoyage vitres paris 2e, nettoyage verriere paris 2e',
};

export default function NettoyageVitresHauteurParis2ePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Paris 2e</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire spécialisé en nettoyage de vitres en hauteur, offrant des services professionnels sur Paris et sa région. Basés dans le 2e arrondissement, nos experts cordistes transforment vos facades vitrées en véritables surfaces cristallines.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Paris 2e</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur représente la solution ultime pour les immeubles, bureaux et bâtiments commerciaux parisiens. Nos techniciens hautement qualifiés utilisent des techniques de cordage professionnel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès. Équipés de matériel high-tech et de certifications de sécurité, nous garantissons un nettoyage impeccable sans compromettre l&apos;intégrité structurelle de vos façades. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé, assurant une prestation adaptée à vos besoins spécifiques dans le 2e arrondissement de Paris.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>- Experts certifiés en travaux en hauteur avec plus de 15 ans d&apos;expérience
- Techniques de nettoyage respectueuses de l&apos;environnement
- Interventions rapides et sur-mesure dans Paris
- Devis gratuit et transparent sans engagement</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard à Paris, comptez environ 750€ à 1500€ pour un nettoyage complet.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour un immeuble à Paris, nous recommandons un nettoyage professionnel deux fois par an : au printemps et à l&apos;automne. Les immeubles en zone très urbaine ou exposés à la pollution peuvent nécessiter jusqu&apos;à 3-4 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, des harnais homologués, des points d&apos;ancrage certifiés et le respect strict des normes INRS. Nos techniciens suivent une formation annuelle aux techniques de sécurité en hauteur.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Paris 2e ?
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
