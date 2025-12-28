import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Lyon | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Lyon et dans toute la région Auverg',
  keywords: 'nettoyage panneaux solaires lyon, maintenance photovoltaique lyon, entretien panneaux solaires lyon, nettoyage photovoltaique lyon, maintenance panneaux photovoltaiques lyon',
};

export default function MaintenancePhotovoltaiqueLyonPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Lyon</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire de confiance pour la maintenance et le nettoyage de panneaux solaires à Lyon et dans toute la région Auvergne-Rhône-Alpes. Nos experts certifiés garantissent des installations photovoltaïques performantes et durables, en préservant leur efficacité énergétique maximale.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Lyon</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur tous types d&apos;installations, résidentielles comme industrielles, en utilisant des techniques de nettoyage écologiques et des équipements haute précision. Nos techniciens réalisent un diagnostic complet comprenant un nettoyage minutieux, une vérification électrique et une analyse thermographique. Cette approche permet de maintenir un rendement optimal, avec une augmentation moyenne de 15% de la production énergétique après notre intervention. Nous travaillons notamment sur Lyon et ses environs, en proposant un service sur-mesure adapté à chaque configuration d&apos;installation photovoltaïque.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos avantages clés : des techniciens certifiés et formés en continu, un matériel de nettoyage dernière génération, une intervention rapide sous 48h, un diagnostic précis inclus dans chaque prestation, et une garantie de performance énergétique. Nous sommes votre partenaire de confiance pour une maintenance photovoltaïque professionnelle.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille et la complexité de votre installation. Pour une surface moyenne de 20m², comptez environ 250€ pour un nettoyage et une maintenance complète, incluant le diagnostic technique et le contrôle électrique.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup d&apos;arbres, nous conseillons un nettoyage tous les 6 mois pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production mensuelle via un monitoring, examinez l&apos;absence de traces d&apos;usure sur les panneaux, et faites réaliser un diagnostic thermographique annuel par nos experts. Un écart de performance supérieur à 10% nécessite une intervention technique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Lyon ?
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
