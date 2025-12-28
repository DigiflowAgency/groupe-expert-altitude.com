import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Lormont | Groupe Expert Altitude Com',
  description: 'Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Lormont et ses environs. Spécialistes de la maintenance et du',
  keywords: 'nettoyage panneaux solaires lormont, maintenance photovoltaique lormont, entretien panneaux solaires lormont, nettoyage photovoltaique lormont, maintenance panneaux photovoltaiques lormont',
};

export default function MaintenancePhotovoltaiqueLormontPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Lormont</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Le Groupe Expert Altitude Com révolutionne l&apos;entretien de vos installations photovoltaïques à Lormont et ses environs. Spécialistes de la maintenance et du nettoyage de panneaux solaires, nous garantissons des performances optimales et durables pour votre système énergétique.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Lormont</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nous intervenons sur l&apos;ensemble des installations photovoltaïques, qu&apos;elles soient résidentielles ou professionnelles. Notre équipe de techniciens hautement qualifiés réalise un diagnostic précis avant chaque intervention, en utilisant du matériel spécialisé adapté aux différents types de panneaux. Nous nettoyons méticuleusement chaque panneau, éliminant poussières, mousses et résidus qui peuvent réduire jusqu&apos;à 30% l&apos;efficacité énergétique. À Lormont, nous proposons un service personnalisé qui préserve l&apos;intégrité de vos équipements et maximise leur rendement énergétique.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Choisir le Groupe Expert Altitude Com, c&apos;est opter pour l&apos;excellence technique. Nos techniciens sont certifiés et disposent de plus de 10 ans d&apos;expérience. Nous utilisons des techniques de nettoyage écologiques, sans produits chimiques agressifs. Notre intervention garantit une augmentation moyenne de 15% de la production électrique. Nous proposons également un suivi personnalisé et des rapports détaillés après chaque maintenance.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût d&apos;entretien annuel varie entre 150€ et 500€ selon la taille de l&apos;installation, la complexité d&apos;accès et le type de panneaux. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un devis personnalisé gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              La fréquence recommandée est 1 à 2 nettoyages par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte pollution ou avec beaucoup de végétation comme Lormont, nous conseillons deux interventions annuelles pour maintenir une performance optimale.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production électrique via votre onduleur. Une baisse de plus de 10% peut indiquer un besoin de maintenance. Nous proposons également un diagnostic complet avec analyse thermographique et mesure précise du rendement énergétique.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Lormont ?
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
