import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Balma | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com est votre partenaire local à Balma pour une maintenance professionnelle de vos installations photovoltaïques. Spécialisés dans l',
  keywords: 'nettoyage panneaux solaires balma, maintenance photovoltaique balma, entretien panneaux solaires balma, nettoyage photovoltaique balma, maintenance panneaux photovoltaiques balma',
};

export default function MaintenancePhotovoltaiqueBalmaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Balma</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com est votre partenaire local à Balma pour une maintenance professionnelle de vos installations photovoltaïques. Spécialisés dans le nettoyage et l&apos;entretien de panneaux solaires, nous garantissons des performances optimales et une durabilité maximale de vos équipements.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Balma</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens hautement qualifiés interviennent sur l&apos;ensemble du territoire de Balma et ses environs, en proposant un diagnostic précis et un entretien complet. Nous utilisons des techniques de nettoyage écologiques et non abrasives qui préservent l&apos;intégrité de vos panneaux. Notre processus inclut un contrôle électrique, un nettoyage minutieux des surfaces et une vérification des connexions, permettant de maintenir un rendement photovoltaïque optimal. Nos interventions permettent en moyenne d&apos;augmenter la production énergétique de 10 à 15%.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>Notre expertise se distingue par : une intervention rapide et sur-mesure, un personnel certifié avec plus de 10 ans d&apos;expérience, un matériel professionnel dernier cri, des tarifs transparents sans surprises, et un engagement qualité garanti. Nous sommes le partenaire de confiance des particuliers et professionnels à Balma pour l&apos;entretien de leurs installations solaires.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût annuel d&apos;entretien varie entre 150€ et 350€ selon la taille et la complexité de votre installation. Nous proposons des forfaits adaptés qui incluent le nettoyage, le diagnostic technique et le contrôle complet de vos panneaux solaires.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Il est recommandé de nettoyer vos panneaux solaires 1 à 2 fois par an, idéalement au printemps et à l&apos;automne. Dans des zones à forte exposition aux poussières ou près de zones agricoles, nous conseillons jusqu&apos;à 3 interventions annuelles.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement, surveillez votre production énergétique via votre onduleur. Une baisse de rendement supérieure à 10% nécessite un diagnostic. Nous proposons un contrôle complet avec analyse thermographique et mesure précise de la performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Balma ?
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
