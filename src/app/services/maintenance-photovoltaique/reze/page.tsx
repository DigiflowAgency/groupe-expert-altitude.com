import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance et nettoyage panneaux solaires a Rezé | Groupe Expert Altitude Com',
  description: 'Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Rezé et ses environs. Nous garantisson',
  keywords: 'nettoyage panneaux solaires rezé, maintenance photovoltaique rezé, entretien panneaux solaires rezé, nettoyage photovoltaique rezé, maintenance panneaux photovoltaiques rezé',
};

export default function MaintenancePhotovoltaiqueRezePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Maintenance et nettoyage panneaux solaires a Rezé</h1>

      <section className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700 mb-6">Groupe Expert Altitude Com, votre partenaire de référence pour la maintenance et le nettoyage de panneaux solaires à Rezé et ses environs. Nous garantissons des installations photovoltaïques performantes et durables grâce à notre expertise technique pointue.</p>

        <h2>Nos services de maintenance et nettoyage panneaux solaires a Rezé</h2>
        <div className="space-y-4">
          <p>Notre service de maintenance et nettoyage de panneaux solaires répond aux exigences techniques les plus strictes. Nos techniciens spécialisés interviennent sur l&apos;ensemble des installations photovoltaïques, en utilisant des techniques innovantes et du matériel haute précision. Chaque intervention comprend un diagnostic complet, un nettoyage professionnel et une vérification électrique détaillée. Nous utilisons des produits éco-responsables sans résidus chimiques, préservant ainsi l&apos;intégrité de vos panneaux. Notre objectif : maintenir un rendement optimal, avec une efficacité énergétique garantie pouvant atteindre 98% après nos interventions. Pour les habitants de Rezé et de la métropole nantaise, nous proposons un service sur-mesure adapté à chaque configuration d&apos;installation.</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Pourquoi nous choisir ?</h2>
        <p>1. Expertise technique certifiée avec plus de 15 ans d&apos;expérience en maintenance photovoltaïque. 2. Équipe de techniciens hautement qualifiés et formés aux dernières technologies. 3. Intervention rapide sur Rezé et toute la Loire-Atlantique, avec un délai moyen de 48h. 4. Rapport détaillé après chaque intervention, transparent et précis.</p>
      </section>

      <section itemScope itemType="https://schema.org/FAQPage" className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Questions frequentes</h2>
        <div key="0" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Combien coûte l&apos;entretien annuel de panneaux solaires ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Le coût moyen d&apos;un entretien annuel de panneaux solaires varie entre 150€ et 350€, selon la surface et la complexité de l&apos;installation. Chez Groupe Expert Altitude Com, nous proposons des forfaits adaptés à chaque configuration, avec un diagnostic préalable gratuit.
            </p>
          </div>
        </div>
        <div key="1" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">À quelle fréquence nettoyer ses panneaux photovoltaïques ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Nous recommandons un nettoyage professionnel tous les 12 à 18 mois, ou plus fréquemment en zone à forte pollution ou environnement poussiéreux. Un nettoyage régulier permet de maintenir une performance énergétique optimale et de prolonger la durée de vie de vos panneaux.
            </p>
          </div>
        </div>
        <div key="2" itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className="mb-4">
          <h3 itemProp="name" className="font-semibold text-lg">Comment savoir si mes panneaux solaires fonctionnent bien ?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="text-gray-600 mt-2">
              Pour vérifier le bon fonctionnement de vos panneaux solaires, surveillez votre production électrique via un monitoring, vérifiez l&apos;absence de traces, salissures ou micro-fissures, et faites réaliser un diagnostic technique annuel par des professionnels comme notre équipe à Rezé.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="mb-4">
          Vous avez un projet de maintenance et nettoyage panneaux solaires a Rezé ?
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
