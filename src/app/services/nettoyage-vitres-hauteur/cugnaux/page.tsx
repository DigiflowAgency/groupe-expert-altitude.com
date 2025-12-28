import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Cugnaux | Groupe Expert Altitude Com',
  description: 'Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur, apporte une propreté impeccable aux bâtiments de Cugnaux et ses environs. Nos tec',
  keywords: 'nettoyage vitres hauteur cugnaux, lavage vitres immeuble cugnaux, nettoyage facade vitree cugnaux, cordiste vitre cugnaux, entreprise nettoyage vitres cugnaux, nettoyage verriere cugnaux',
};

export default function NettoyageVitresHauteurCugnauxPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Cugnaux</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Expert Altitude Com, votre spécialiste du nettoyage de vitres en hauteur, apporte une propreté impeccable aux bâtiments de Cugnaux et ses environs. Nos techniciens cordistes transforment vos façades vitrées en surfaces cristallines, garantissant une brillance et une transparence remarquables.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Cugnaux</h2>
        <div className="space-y-4">
          <p>Notre service de nettoyage de vitres en hauteur répond aux exigences les plus strictes des professionnels et particuliers de Cugnaux. Équipés de techniques avancées et de matériel de pointe, nos cordistes interviennent sur tous types de surfaces vitrées, des immeubles aux vérandas. Nous utilisons des méthodes éco-responsables qui préservent l&apos;intégrité des surfaces tout en assurant un résultat impeccable. Notre process comprend une évaluation préalable du site, un nettoyage minutieux avec des produits adaptés et un contrôle qualité systématique. Chaque intervention est personnalisée, avec une attention particulière à la sécurité et à l&apos;efficacité.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Expert Altitude Com, c&apos;est opter pour l&apos;excellence : techniciens certifiés, matériel homologué, interventions 100% sécurisées. Nous garantissons un travail impeccable avec un devis transparent. Notre connaissance fine du territoire de Cugnaux nous permet d&apos;intervenir rapidement et efficacement. Plus de 95% de nos clients nous recommandent.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 50€ par vitre selon la hauteur, l&apos;accessibilité et la surface. Un immeuble de 5 étages représente environ 800€ à 1500€ pour un nettoyage complet. Nous proposons des devis gratuits et personnalisés.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition et l&apos;environnement. Les immeubles en centre-ville de Cugnaux nécessitent généralement 3 nettoyages annuels pour maintenir une apparence impeccable.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur sécurisé implique l&apos;utilisation de techniques de cordage professionnel, un équipement de protection individuelle complet, et le respect strict des normes de sécurité INRS. Nos techniciens sont formés et certifiés pour intervenir sans risque.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Cugnaux ?
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
