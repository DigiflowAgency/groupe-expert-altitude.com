import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Ivry-sur-Seine | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Ivry-sur-Seine, offrant une expertise technique et une sécurité maximale pour t',
  keywords: 'nettoyage vitres hauteur ivry-sur-seine, lavage vitres immeuble ivry-sur-seine, nettoyage facade vitree ivry-sur-seine, cordiste vitre ivry-sur-seine, entreprise nettoyage vitres ivry-sur-seine, nettoyage verriere ivry-sur-seine',
};

export default function NettoyageVitresHauteurIvrySurSeinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Ivry-sur-Seine</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com révolutionne le nettoyage de vitres en hauteur à Ivry-sur-Seine, offrant une expertise technique et une sécurité maximale pour tous vos bâtiments. Nos cordistes professionnels transforment l&apos;entretien de vos surfaces vitrées en une prestation de haute précision.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Ivry-sur-Seine</h2>
        <div className="space-y-4">
          <p>Spécialistes du nettoyage de vitres en hauteur, nous intervenons sur tous types de structures à Ivry-sur-Seine : immeubles, bureaux, vérandas et façades vitrées complexes. Notre méthode unique combine techniques de cordage professionnel et équipements haute performance, garantissant un résultat impeccable sans risque. Nos techniciens certifiés utilisent des techniques d&apos;alpinisme industriel permettant d&apos;atteindre les surfaces les plus difficiles d&apos;accès, avec une efficacité et une propreté remarquables. Chaque intervention est précédée d&apos;un diagnostic technique personnalisé pour s&apos;adapter parfaitement à la configuration de votre bâtiment.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Nos points forts : une équipe de 12 cordistes experts, certification INRS, matériel dernière génération, intervention rapide sur Ivry-sur-Seine et ses environs. Nous proposons des devis gratuits sous 24h, une traçabilité complète de nos interventions et une satisfaction client garantie à 100%. Notre engagement : transparence, sécurité et qualité irréprochable.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par m², selon la difficulté d&apos;accès, la hauteur et la surface totale. Un immeuble de 300m² nécessitera environ 750€ à 1500€ pour un nettoyage complet. Nous établissons systématiquement un devis détaillé et sans engagement.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;environnement. Les immeubles en zone urbaine ou industrielle nécessitent un nettoyage plus fréquent en raison de la pollution. Nous conseillons un lavage au printemps et à l&apos;automne pour maintenir une transparence optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La sécurité est notre priorité absolue. Nos cordistes utilisent un équipement de protection individuelle complet : harnais antichute, casque, gants spéciaux, et suivent des protocoles stricts de prévention des risques. Chaque intervention est précédée d&apos;une analyse de risques et respecte les normes de sécurité les plus strictes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Ivry-sur-Seine ?
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
