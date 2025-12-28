import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettoyage vitres en hauteur a Pessac | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur à Pessac, transforme l&apos;entretien de vos surfaces vitrées en une expérience ',
  keywords: 'nettoyage vitres hauteur pessac, lavage vitres immeuble pessac, nettoyage facade vitree pessac, cordiste vitre pessac, entreprise nettoyage vitres pessac, nettoyage verriere pessac',
};

export default function NettoyageVitresHauteurPessacPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nettoyage vitres en hauteur a Pessac</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre spécialiste en nettoyage de vitres en hauteur à Pessac, transforme l&apos;entretien de vos surfaces vitrées en une expérience de propreté et de sécurité sans précédent. Nous intervenons sur tous types de bâtiments, des immeubles résidentiels aux sites industriels complexes.</p>

        <h2>Nos services de nettoyage vitres en hauteur a Pessac</h2>
        <div className="space-y-4">
          <p>Notre expertise en nettoyage de vitres à haute altitude représente bien plus qu&apos;un simple service : c&apos;est un engagement total envers la qualité et la sécurité. Nos techniciens cordistes, formés aux techniques les plus avancées, utilisent un équipement de pointe pour traiter chaque surface vitrée avec une précision chirurgicale. À Pessac et ses environs, nous maîtrisons parfaitement les techniques de nettoyage en rappel, garantissant un résultat impeccable sans risque pour nos équipes ni pour votre bâtiment. Que ce soit pour une verrière industrielle, une façade de bureau ou un immeuble résidentiel, nous adaptons notre intervention avec une méthodologie rigoureuse et des produits écologiques.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence : des techniciens certifiés, un matériel de dernière génération, une assurance responsabilité professionnelle complète, et une approche environnementale responsable. Nos interventions sont rapides, précises et totalement sécurisées, avec un taux de satisfaction client de plus de 95%.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte le nettoyage de vitres d&apos;immeuble ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût du nettoyage de vitres d&apos;immeuble varie entre 15€ et 45€ par mètre carré, selon la complexité d&apos;accès, la hauteur et l&apos;état des surfaces. Pour un devis précis à Pessac, nous recommandons un diagnostic sur site gratuit qui permettra une estimation personnalisée.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer les vitres d&apos;un bâtiment ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est de 2 à 4 fois par an, selon l&apos;exposition environnementale. Les zones urbaines ou industrielles nécessitent généralement un nettoyage plus fréquent que les zones résidentielles calmes. Un entretien régulier préserve la qualité du vitrage et évite les dégradations.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment nettoyer des vitres en hauteur en sécurité ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le nettoyage en hauteur requiert une formation spécifique et un équipement professionnel. Nos cordistes utilisent des systèmes de sécurité conformes aux normes AFNOR, incluant harnais anti-chute, points d&apos;ancrage certifiés et protocoles stricts de prévention des risques. La sécurité est notre priorité absolue.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de nettoyage vitres en hauteur a Pessac ?
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
