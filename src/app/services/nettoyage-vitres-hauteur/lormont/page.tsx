import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Lormont | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Lormont et ses environs. Nos techniciens cordistes ha',
  keywords: 'nettoyage vitres hauteur lormont, lavage vitres immeuble lormont, nettoyage facade vitree lormont, cordiste vitre lormont, entreprise nettoyage vitres lormont, nettoyage verriere lormont',
};

export default function NettoyageVitresHauteurLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de référence pour le nettoyage de vitres en hauteur à Lormont et ses environs. Nos techniciens cordistes hautement qualifiés transforment vos façades vitrées en véritables surfaces cristallines, garantissant une propreté impeccable et une image professionnelle.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des immeubles, entreprises et bâtiments commerciaux de Lormont. Nos experts utilisent des techniques de cordage professionnel permettant d&apos;intervenir sur des surfaces jusqu&apos;à 100 mètres de hauteur, avec une précision chirurgicale. Chaque intervention commence par un diagnostic technique précis pour évaluer la configuration du bâtiment, les zones à traiter et les contraintes spécifiques. Nous utilisons uniquement du matériel homologué et des produits écologiques qui respectent l&apos;environnement tout en assurant un résultat impeccable.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>✓ Équipe certifiée avec plus de 15 ans d&apos;expérience
✓ Techniques de cordage conformes aux normes de sécurité les plus récentes
✓ Intervention rapide sur Lormont et la métropole bordelaise
✓ Devis gratuit et personnalisé sous 24h
✓ Matériel professionnel de dernière génération</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ au m², selon la hauteur, l&apos;accessibilité et la complexité de la surface. Pour un immeuble standard de 500m², comptez un budget entre 2 500€ et 5 000€ avec un nettoyage complet et sécurisé.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les zones urbaines ou industrielles nécessitent un nettoyage plus fréquent à cause de la pollution, tandis que les zones résidentielles peuvent se contenter de 2 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos techniciens utilisent un équipement de protection individuelle complet, des systèmes de câbles et d&apos;ancrage certifiés, et suivent des formations continues en techniques de travail en hauteur et en prévention des risques.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Lormont ?
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
